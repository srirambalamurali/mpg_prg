Run & Debug - Auto MPG Monorepo

Quick local setup on Windows:

1. Install workspace dependencies and backend Python deps

```powershell
pnpm install
python -m pip install -r apps/backend/requirements.txt
```

2. Start both apps together from the repo root

```powershell
pnpm dev
```

- Frontend: `http://localhost:5173`
- Backend health: `http://127.0.0.1:8000/api/health`
- Backend docs: `http://127.0.0.1:8000/docs`

Standalone commands:

```powershell
pnpm dev:frontend
pnpm dev:backend
```

Common fixes:

- If backend model loading fails, confirm the file exists at `ml/models/final_pipeline.pkl`.
- If frontend API calls fail locally, confirm Vite is proxying `/api` to port `8000`.

Stopping servers:

- Kill by PID in PowerShell with `Stop-Process -Id <PID> -Force`
