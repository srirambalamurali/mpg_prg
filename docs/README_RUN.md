Run & Debug — Auto MPG Monorepo

Quick local setup on Windows:

1) Install backend Python deps and start the backend

```powershell
python -m pip install -r apps/backend/requirements.txt
python -m uvicorn apps.backend.app.main:app --app-dir "c:/Users/LENOVO/Desktop/mpg_prg" --host 127.0.0.1 --port 8000 --reload
```

- Health: `http://127.0.0.1:8000/api/health`
- Docs: `http://127.0.0.1:8000/docs`

2) Install frontend deps and start Vite

```powershell
npm install
npm run dev --prefix apps/frontend
```

- Frontend: `http://localhost:5173`

Common fixes:

- If backend model loading fails, confirm the file exists at `apps/backend/models/final_pipeline.pkl`.
- If frontend API calls fail locally, confirm Vite is proxying `/api` to port `8000`.

Stopping servers:

- Kill by PID in PowerShell with `Stop-Process -Id <PID> -Force`
