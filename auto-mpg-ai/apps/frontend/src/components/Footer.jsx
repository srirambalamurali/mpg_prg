export const Footer = () => (
  <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-slate-400 md:mt-20">
    <div className="grid gap-8 md:grid-cols-3">
      <div>
        <p className="font-display text-lg font-semibold text-white">Auto MPG AI</p>
        <p className="mt-3 max-w-md leading-7 text-slate-400">
          A deployable monorepo for machine learning inference, built with production routing, modular services, and a premium automotive dashboard.
        </p>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Tech Stack</p>
        <ul className="mt-3 space-y-2 leading-6">
          <li>React + Vite + Tailwind CSS</li>
          <li>FastAPI + Pydantic + Uvicorn</li>
          <li>Axios + Framer Motion + React Icons</li>
        </ul>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Deployment</p>
        <ul className="mt-3 space-y-2 leading-6">
          <li>Monorepo routing with root Vercel config</li>
          <li>Serverless backend at `/api/*`</li>
          <li>Static frontend optimized for Vercel</li>
        </ul>
      </div>
    </div>
  </footer>
);
