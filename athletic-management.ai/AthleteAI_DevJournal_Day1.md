# Athlete AI Platform — Dev Journal

## Day 1 — Saturday, April 18, 2026

**Goal of the day:** Set up monorepo, authentication, and the first AI agent from scratch.

**Result:** ✅ All three goals achieved in one evening.

---

## What I Built Today

- Monorepo using **Turborepo** with Next.js inside
- Authentication via **Clerk** (Google + Email)
- Dashboard page with user greeting
- **Nutrition Agent** chat interface
- Python service on **FastAPI + Google ADK + Gemini 2.5 Flash**
- Connection Next.js → FastAPI → ADK → Gemini — everything works

---

## Stack

| Layer | Technology |
|------|-----------|
| Monorepo | Turborepo + pnpm |
| Frontend | Next.js 16 App Router |
| Auth | Clerk |
| API (TS) | Next.js Route Handlers |
| AI Service | FastAPI + Google ADK |
| LLM | Gemini 2.5 Flash via Vertex AI |
| Credentials | Application Default Credentials (ADC) |

---

## Errors I Made and How I Fixed Them

### 1. Middleware did not redirect to authentication
**What happened:** Clerk was installed, but the page opened without authentication.

**Reason:** The basic `clerkMiddleware()` does not protect routes automatically — you need to explicitly specify which routes to protect.

**Solution:**
```ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})
```

**Lesson:** Always explicitly define public and protected routes in middleware.

---

### 2. API route returned 404
**What happened:** `POST /api/nutrition/chat` returned 404.

**Reason 1:** The file was named `route.tsx` instead of `route.ts`. Next.js does not pick up `.tsx` for API routes.

**Reason 2:** The `page.tsx` file for the `/nutrition` page was in the `app/` folder instead of the `nutrition` folder.

**Correct structure:**
```
app/
  api/
    nutrition/
      chat/
        route.ts      ← API endpoint
  nutrition/
    page.tsx          ← page /nutrition
  dashboard/
    page.tsx
```

**Lesson:** In Next.js App Router, the folder structure = URL structure. The file must be in the folder with the route name.

---

### 3. Python service couldn't see dependencies
**What happened:** `Cannot find module google.adk.agents.llm_agent`

**Reason:** VS Code used the system Python instead of `.venv` — packages were installed in the virtual environment but not in the system interpreter.

**Solution:**
1. `Cmd + Shift + P` → `Python: Select Interpreter`
2. Select the interpreter from the `.venv` folder
3. Or specify the path manually: `.venv/bin/python`

**Lesson:** Always check that the correct interpreter is activated. The sign of the correct one is `(.venv)` at the beginning of the terminal line.

---

### 4. Uvicorn couldn't find the `main` module
**What happened:** `Could not import module "main"`

**Reason:** Ran `uvicorn main:app` from the wrong folder — not the one where `main.py` is located.

**Solution:**
```bash
cd apps/agents/nutrition_agent  # go to the folder with main.py first
uvicorn main:app --reload --port 8000
```

**Lesson:** uvicorn searches for the module in the current directory. Always run from the folder where the file is located.

---

### 5. No API key — agent couldn't connect to Vertex AI
**What happened:** `ValueError: No API key was provided`

**Reason:** The `.env` file was not loading, and ADK couldn't find credentials for Vertex AI.

**Solution:** Use Application Default Credentials instead of an API key:
```bash
gcloud auth application-default login
gcloud config set project your-project-id
```

ADK automatically picks up ADC — no API key is needed in the code.

**Lesson:** On GCP, always use ADC instead of API keys. It's safer and easier — no need to manage keys in the code.

---

### 6. How to read a long traceback
**What I learned:** Stack trace is read **from bottom to top**.
- Bottom — the actual cause of the error
- Top — where in your code it manifested
- Middle — library internals (usually not important)

**Example:** In an 80-line traceback, the actual error was the last one:
```
ValueError: No API key was provided.
```

---

## Architecture I'm Implementing

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

## What's Next (Day 2)

- [ ] Create Training Agent using the same scheme
- [ ] Implement Shared User Profile in Firestore
- [ ] Both agents read/write shared context
- [ ] Training Agent knows about nutrition and vice versa

---

## Commands Needed Tomorrow

```bash
# Run the entire monorepo
pnpm dev

# Run the Python agent
cd apps/agents/nutrition_agent
source .venv/bin/activate
uvicorn main:app --reload --port 8000

# If you need to re-authenticate in GCP
gcloud auth application-default login
```

---

*Work time: ~3 hours | Stack: Turborepo, Next.js, Clerk, FastAPI, Google ADK, Gemini 2.5*
