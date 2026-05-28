# Auto MPG AI

Auto MPG AI is a production-oriented full-stack machine learning web application for predicting vehicle fuel efficiency from automobile specifications.

The project uses a trained scikit-learn pipeline stored as `final_pipeline.pkl`, a FastAPI backend, and a React + Vite frontend with a premium automotive dashboard aesthetic.

## Features

- FastAPI backend with validation, logging, health checks, and prediction endpoints
- React + Vite frontend with a futuristic automotive SaaS interface
- Glassmorphism, dark mode, gradients, and animated UI states
- Monorepo structure optimized for GitHub and Vercel deployment
- Centralized Axios API service with environment-based configuration
- Production-friendly folder organization for future expansion

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, Axios, Framer Motion, React Icons, React Hot Toast
- Backend: FastAPI, Pydantic, Uvicorn, Joblib, Pandas, NumPy, scikit-learn
- Deployment: Vercel, serverless Python functions, static frontend build

## Folder Structure

```text
auto-mpg-ai/
├── apps/
│   ├── frontend/
│   └── backend/
├── package.json
├── vercel.json
├── README.md
└── .gitignore
```

## Installation

### Frontend

```bash
npm install
```

### Backend

```bash
pip install -r apps/backend/requirements.txt
```

## Run Locally

### Full stack

```bash
npm run dev
```

### Frontend only

```bash
npm run frontend
```

### Backend only

```bash
npm run backend
```

## API Endpoints

### Health

`GET /api/health`

Response:

```json
{
  "status": "healthy"
}
```

### Predict

`POST /api/predict`

Request:

```json
{
  "cylinders": 4,
  "displacement": 140,
  "horsepower": 90,
  "weight": 2400,
  "acceleration": 15,
  "model_year": 82,
  "origin": 1,
  "brand": "toyota"
}
```

Response:

```json
{
  "predicted_mpg": 32.47,
  "efficiency_category": "High Efficiency"
}
```

## Environment Variables

Frontend:

```bash
VITE_API_URL=
```

Backend:

```bash
MODEL_PATH=
```

## Deployment

### Vercel

1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Use the root project with the provided `vercel.json`.
4. Set `VITE_API_URL` if your frontend needs to call a separate backend domain.
5. Confirm the `final_pipeline.pkl` artifact is available at build time.

### Notes

- `/api/*` routes are routed to the FastAPI backend.
- All other routes are served by the Vite app.
- The frontend build is optimized for static deployment.

## Screenshots

Add product screenshots here once the UI is deployed.

## Model Inputs

Numeric:

- `cylinders`
- `displacement`
- `horsepower`
- `weight`
- `acceleration`
- `model_year`

Categorical:

- `origin`
- `brand`
