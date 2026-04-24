# Athlete AI Platform — Dev Journal

## День 1 (продолжение) — Суббота, 18 апреля 2026

**Цель:** Поднять Training агента и разобраться с env переменными.

**Результат:** ✅ Оба агента работают и отвечают по своим системным промптам.

---

## Что построил

- Training Agent на FastAPI + Google ADK + Gemini 2.5 Flash
- Страница `/training` с чат-интерфейсом (зелёный акцент)
- API route `/api/training/chat` в Next.js
- Решил проблему с загрузкой `.env` переменных раз и навсегда

---

## Итоговая структура агентов

```
apps/agents/
  .venv/                  ← одно общее окружение для обоих агентов
  nutrition_agent/
    agent.py
    .env
    requirements.txt
  training_agent/
    agent.py
    .env
    requirements.txt
```

**Порты:**
- Nutrition Agent → `http://localhost:8000`
- Training Agent → `http://localhost:8001`

---

## Главная битва дня — переменные окружения

### Проблема
`ValueError: No API key was provided` — агент не видел `.env` файл.

### Почему это происходило
`load_dotenv()` без аргументов ищет `.env` в **текущей директории откуда запущен uvicorn**, а не в папке где лежит `agent.py`.

Если запускаешь из `apps/agents/training_agent` — находит. Если из другого места — нет.

### Что не сработало
```python
load_dotenv()  # ищет в cwd, не надёжно
```

```python
load_dotenv(find_dotenv())  # тоже не стабильно
```

### Что сработало — правильное решение
Использовать `__file__` чтобы всегда находить `.env` рядом с `agent.py`:

```python
from dotenv import load_dotenv
import os

env_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '.env')
load_dotenv(dotenv_path=env_path)
```

`__file__` — это абсолютный путь к текущему Python файлу. `dirname` берёт его папку. Результат — `.env` всегда ищется рядом с `agent.py` независимо от того откуда запускается uvicorn.

### Правило
> Всегда используй `os.path.abspath(__file__)` для поиска файлов рядом с текущим скриптом. Никогда не полагайся на `cwd`.

---

## Финальный шаблон agent.py

```python
from dotenv import load_dotenv
import os

env_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '.env')
load_dotenv(dotenv_path=env_path)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from google.adk.agents.llm_agent import Agent
from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService
from google.genai import types

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

root_agent = Agent(
    model="gemini-2.5-flash",
    name="agent_name",
    description="Agent description",
    instruction="""Your system prompt here.""",
)

session_service = InMemorySessionService()
runner = Runner(
    agent=root_agent,
    app_name="agent_name",
    session_service=session_service,
)

class ChatRequest(BaseModel):
    message: str
    user_id: str = "default_user"

@app.post("/chat")
async def chat(req: ChatRequest):
    session = await session_service.get_session(
        app_name=root_agent.name,
        user_id=req.user_id,
        session_id=req.user_id,
    )
    if not session:
        await session_service.create_session(
            app_name=root_agent.name,
            user_id=req.user_id,
            session_id=req.user_id,
        )

    response_text = ""
    async for event in runner.run_async(
        user_id=req.user_id,
        session_id=req.user_id,
        new_message=types.Content(
            role="user",
            parts=[types.Part(text=req.message)]
        ),
    ):
        if event.is_final_response():
            response_text = event.content.parts[0].text

    return {"reply": response_text}

@app.get("/health")
def health():
    return {"status": "ok"}
```

---

## Команды для запуска обоих агентов

```bash
# Терминал 1 — Nutrition Agent
cd apps/agents/nutrition_agent
source ../.venv/bin/activate
uvicorn agent:app --reload --port 8000

# Терминал 2 — Training Agent
cd apps/agents/training_agent
source ../.venv/bin/activate
uvicorn agent:app --reload --port 8001

# Терминал 3 — Next.js
pnpm dev
```

---

## Итог дня

| Что сделано | Статус |
|-------------|--------|
| Turborepo монорепо | ✅ |
| Next.js App Router | ✅ |
| Clerk авторизация | ✅ |
| Dashboard страница | ✅ |
| Nutrition Agent (FastAPI + ADK) | ✅ |
| Training Agent (FastAPI + ADK) | ✅ |
| Оба агента отвечают по системным промптам | ✅ |
| Решена проблема с .env | ✅ |

## Что дальше (День 2)

- [ ] Shared User Profile в Firestore
- [ ] Оба агента читают/пишут общий профиль
- [ ] Агент тренировок знает о питании и наоборот
- [ ] UI рефактор с shadcn/ui + тёмная тема

---

*Время работы: ~5 часов | Самая позитивная сессия — два живых агента за один день.*
