import { motion } from 'framer-motion';
import { FiChevronDown, FiCpu, FiZap } from 'react-icons/fi';

export const HeroSection = ({ onScrollToForm }) => (
  <section className="relative overflow-hidden pt-8 md:pt-12">
    <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-8"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="label-chip">Auto MPG Intelligence</span>
        </div>

        <div className="space-y-5">
          <h1 className="max-w-3xl font-display text-5xl font-bold tracking-tight text-white md:text-7xl">
            <span className="text-gradient">MPG Prediction</span>
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Predict vehicle fuel efficiency using machine learning with a premium automotive interface built for modern deployment.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button type="button" onClick={onScrollToForm} className="button-primary">
            Start Prediction
            <FiChevronDown />
          </button>
          <div className="inline-flex items-center gap-3 rounded-2xl border border-electric-400/15 bg-white/5 px-5 py-3 text-sm text-slate-200">
            <FiZap className="text-neon-300" />
            Real-time inference from the trained pipeline
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="relative"
      >
        <div className="glass-panel-strong relative overflow-hidden rounded-[2rem] p-6 md:p-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-300 to-transparent" />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-400">Prediction Engine</p>
              <p className="mt-2 text-3xl font-semibold text-white">Random Forest</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">Optimized pipeline with preprocessing and feature engineering embedded in one artifact.</p>
            </div>
            
          </div>

          <div className="mt-5 rounded-3xl border border-white/10 bg-slate-950/50 p-5">
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>Model Confidence Flow</span>
              <span>Auto MPG</span>
            </div>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full neon-gradient"
                initial={{ width: '20%' }}
                animate={{ width: ['45%', '78%', '61%'] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
