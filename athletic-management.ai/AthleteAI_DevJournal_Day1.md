# Athlete AI Platform — Dev Journal

## День 1 — Суббота, 18 апреля 2026

**Цель дня:** Поднять монорепо, авторизацию и первого AI агента с нуля.

**Результат:** ✅ Все три цели выполнены за один вечер.

---

## Что построил сегодня

- Монорепо на **Turborepo** с Next.js внутри
- Авторизация через **Clerk** (Google + Email)
- Dashboard страница с приветствием пользователя
- Чат-интерфейс **Nutrition Agent**
- Python сервис на **FastAPI + Google ADK + Gemini 2.5 Flash**
- Связка Next.js → FastAPI → ADK → Gemini — всё работает

---

## Стек

| Слой | Технология |
|------|-----------|
| Монорепо | Turborepo + pnpm |
| Frontend | Next.js 16 App Router |
| Auth | Clerk |
| API (TS) | Next.js Route Handlers |
| AI сервис | FastAPI + Google ADK |
| LLM | Gemini 2.5 Flash via Vertex AI |
| Credentials | Application Default Credentials (ADC) |

---

## Ошибки которые я сделал и как их исправил

### 1. Middleware не редиректил на авторизацию
**Что случилось:** Clerk был установлен, но страница открывалась без авторизации.

**Причина:** Базовый `clerkMiddleware()` не защищает роуты автоматически — нужно явно указать какие роуты защищать.

**Решение:**
```ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})
```

**Урок:** Всегда явно определяй публичные и защищённые роуты в middleware.

---

### 2. API route возвращал 404
**Что случилось:** `POST /api/nutrition/chat` отдавал 404.

**Причина 1:** Файл назывался `route.tsx` вместо `route.ts`. Next.js не подхватывает `.tsx` для API routes.

**Причина 2:** Файл `page.tsx` для страницы `/nutrition` лежал не в папке `nutrition` а прямо в `app/`.

**Правильная структура:**
```
app/
  api/
    nutrition/
      chat/
        route.ts      ← API endpoint
  nutrition/
    page.tsx          ← страница /nutrition
  dashboard/
    page.tsx
```

**Урок:** В Next.js App Router структура папок = URL структура. Файл должен лежать в папке с именем роута.

---

### 3. Python сервис не видел зависимости
**Что случилось:** `Cannot find module google.adk.agents.llm_agent`

**Причина:** VS Code использовал системный Python вместо `.venv` — пакеты были установлены в виртуальное окружение но не в системный интерпретатор.

**Решение:**
1. `Cmd + Shift + P` → `Python: Select Interpreter`
2. Выбрать интерпретатор из `.venv` папки
3. Или указать путь вручную: `.venv/bin/python`

**Урок:** Всегда проверяй что активирован правильный интерпретатор. Признак правильного — `(.venv)` в начале строки терминала.

---

### 4. Uvicorn не мог найти `main` модуль
**Что случилось:** `Could not import module "main"`

**Причина:** Запускал `uvicorn main:app` из неправильной папки — не из той где лежит `main.py`.

**Решение:**
```bash
cd apps/agents/nutrition_agent  # сначала зайти в папку с main.py
uvicorn main:app --reload --port 8000
```

**Урок:** uvicorn ищет модуль в текущей директории. Всегда запускай из папки где лежит файл.

---

### 5. No API key — агент не мог подключиться к Vertex AI
**Что случилось:** `ValueError: No API key was provided`

**Причина:** `.env` файл не загружался, и ADK не мог найти credentials для Vertex AI.

**Решение:** Использовать Application Default Credentials вместо API ключа:
```bash
gcloud auth application-default login
gcloud config set project твой-project-id
```

ADK автоматически подхватывает ADC — не нужен никакой API ключ в коде.

**Урок:** На GCP всегда используй ADC вместо API ключей. Это безопаснее и проще — не нужно управлять ключами в коде.

---

### 6. Как читать длинный traceback
**Что узнал:** Stack trace читается **снизу вверх**.
- Внизу — настоящая причина ошибки
- Вверху — где в твоём коде она проявилась
- Середина — внутренности библиотек (обычно не важна)

**Пример:** В traceback на 80 строк настоящая ошибка была последней:
```
ValueError: No API key was provided.
```

---

## Архитектура которую реализую

```
Browser (Next.js + Clerk)
    ↓
Next.js Route Handlers (/api/nutrition/chat)
    ↓
FastAPI Python Service (port 8000)
    ↓
Google ADK Runner
    ↓
Gemini 2.5 Flash (Vertex AI)
```

---

## Что дальше (День 2)

- [ ] Создать Training Agent по той же схеме
- [ ] Реализовать Shared User Profile в Firestore
- [ ] Оба агента читают/пишут общий контекст
- [ ] Агент тренировок знает о питании и наоборот

---

## Команды которые понадобятся завтра

```bash
# Запуск всего монорепо
pnpm dev

# Запуск Python агента
cd apps/agents/nutrition_agent
source .venv/bin/activate
uvicorn main:app --reload --port 8000

# Если нужно переавторизоваться в GCP
gcloud auth application-default login
```

---

*Время работы: ~3 часа | Стек: Turborepo, Next.js, Clerk, FastAPI, Google ADK, Gemini 2.5*
