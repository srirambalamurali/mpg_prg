Run & Debug — Auto MPG AI

Quick steps to run the project locally (Windows):

1) Install backend Python deps and start backend

```powershell
C:/Users/LENOVO/AppData/Local/Programs/Python/Python311/python.exe -m pip install -r apps/backend/requirements.txt
C:/Users/LENOVO/AppData/Local/Programs/Python/Python311/python.exe -m uvicorn apps.backend.app.main:app --app-dir "c:/Users/LENOVO/Desktop/mpg_prg/auto-mpg-ai" --host 127.0.0.1 --port 8000 --reload
```

- Health: `http://127.0.0.1:8000/api/health`
- Docs: `http://127.0.0.1:8000/docs`

2) Install frontend deps and start Vite dev server

```powershell
npm install --prefix apps/frontend
npm run dev --prefix apps/frontend
```

- Frontend: `http://localhost:5173`

Common issues & fixes:
- If uvicorn fails with a pydantic/core mismatch, run:

```powershell
python -m pip install pydantic-core==2.46.4
```

- If root `npm run dev` errors about `concurrently`, install at root:

```powershell
npm install --save-dev concurrently
```

Stopping servers:
- Kill by PID (PowerShell): `Stop-Process -Id <PID> -Force`

Notes:
- Backend app entry: `apps/backend/app/main.py`
- Model artifact: `apps/backend/model/final_pipeline.pkl`
