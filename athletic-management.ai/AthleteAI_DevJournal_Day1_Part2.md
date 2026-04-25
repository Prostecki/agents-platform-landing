# Athlete AI Platform — Dev Journal

## Day 1 (continued) — Saturday, April 18, 2026

**Goal:** Set up Training agent and handle environment variables.

**Result:** ✅ Both agents are running and responding according to their system prompts.

---

## What I Built

- Training Agent using FastAPI + Google ADK + Gemini 2.5 Flash
- `/training` page with chat interface (green accent)
- API route `/api/training/chat` in Next.js
- Solved the `.env` variable loading issue once and for all

---

## Final Agent Structure

```
apps/agents/
  .venv/                  ← one shared environment for both agents
  nutrition_agent/
    agent.py
    .env
    requirements.txt
  training_agent/
    agent.py
    .env
    requirements.txt
```

**Ports:**
- Nutrition Agent → `http://localhost:8000`
- Training Agent → `http://localhost:8001`

---

## Main Battle of the Day — Environment Variables

### Problem
`ValueError: No API key was provided` — the agent couldn't see the `.env` file.

### Why This Was Happening
`load_dotenv()` without arguments looks for `.env` in the **current directory where uvicorn was started**, not in the folder where `agent.py` is located.

If you run it from `apps/agents/training_agent` — it finds it. If from anywhere else — it doesn't.

### What Didn't Work
```python
load_dotenv()  # looks in cwd, unreliable
```

```python
load_dotenv(find_dotenv())  # also unstable
```

### What Worked — The Proper Solution
Use `__file__` to always find `.env` next to `agent.py`:

```python
from dotenv import load_dotenv
import os

env_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '.env')
load_dotenv(dotenv_path=env_path)
```

`__file__` is the absolute path to the current Python file. `dirname` gets its folder. Result — `.env` is always searched next to `agent.py` regardless of where uvicorn is started from.

### Rule
> Always use `os.path.abspath(__file__)` to find files next to the current script. Never rely on `cwd`.

---

## Final agent.py Template

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

## Commands to Run Both Agents

```bash
# Terminal 1 — Nutrition Agent
cd apps/agents/nutrition_agent
source ../.venv/bin/activate
uvicorn agent:app --reload --port 8000

# Terminal 2 — Training Agent
cd apps/agents/training_agent
source ../.venv/bin/activate
uvicorn agent:app --reload --port 8001

# Terminal 3 — Next.js
pnpm dev
```

---

## Day Summary

| What was done | Status |
|---------------|--------|
| Turborepo monorepo | ✅ |
| Next.js App Router | ✅ |
| Clerk authentication | ✅ |
| Dashboard page | ✅ |
| Nutrition Agent (FastAPI + ADK) | ✅ |
| Training Agent (FastAPI + ADK) | ✅ |
| Both agents respond according to system prompts | ✅ |
| Solved .env issue | ✅ |

## What's Next (Day 2)

- [ ] Shared User Profile in Firestore
- [ ] Both agents read/write shared profile
- [ ] Training Agent knows about nutrition and vice versa
- [ ] UI refactor with shadcn/ui + dark theme

---

*Work time: ~5 hours | Most positive session — two live agents in one day.*
