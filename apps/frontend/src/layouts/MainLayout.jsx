import { BackgroundOrbits } from '@/components/BackgroundOrbits';

export const MainLayout = ({ children }) => (
  <div className="relative min-h-screen overflow-hidden">
    <BackgroundOrbits />
    <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-2xl">
        <div>
          <p className="font-display text-lg font-semibold text-white">Auto MPG AI</p>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Vehicle Fuel Intelligence</p>
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-electric-400/15 bg-electric-400/10 px-4 py-2 text-sm text-electric-100 md:flex">
          Serverless FastAPI + Vite
        </div>
      </header>
      <main>{children}</main>
    </div>
  </div>
);
