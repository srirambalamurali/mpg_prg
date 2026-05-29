import { motion } from 'framer-motion';
import { FiTrendingUp } from 'react-icons/fi';

const categoryStyles = {
  'Low Efficiency': 'from-red-500/20 to-amber-500/10 text-red-100 border-red-500/20',
  'Moderate Efficiency': 'from-amber-500/20 to-electric-400/10 text-amber-100 border-amber-500/20',
  'High Efficiency': 'from-neon-400/20 to-electric-400/10 text-neon-100 border-neon-400/20',
};

const getGaugeValue = (prediction) => Math.max(0, Math.min(100, (Number(prediction) / 50) * 100));

export const PredictionResult = ({ prediction }) => {
  if (!prediction) return null;

  const gaugeValue = getGaugeValue(prediction.predicted_mpg);
  const categoryClass = categoryStyles[prediction.efficiency_category] || categoryStyles['Moderate Efficiency'];

  return (
    <section className="mt-12">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className={`glass-panel-strong overflow-hidden rounded-[2rem] border bg-gradient-to-br p-6 md:p-8 ${categoryClass}`}
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <span className="label-chip">Prediction Result</span>
            <h3 className="font-display text-3xl font-bold text-white md:text-4xl">Vehicle Efficiency Report</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-950/45 p-5">
                <p className="text-sm text-slate-400">Predicted MPG</p>
                <p className="mt-2 text-5xl font-bold tracking-tight text-white md:text-6xl">{prediction.predicted_mpg}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/45 p-5">
                <p className="text-sm text-slate-400">Efficiency Category</p>
                <p className="mt-2 text-2xl font-semibold text-white md:text-3xl">{prediction.efficiency_category}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative h-56 w-56 rounded-full border border-white/10 bg-slate-950/45 p-4 shadow-glass">
              <div
                className="absolute inset-4 rounded-full"
                style={{
                  background: `conic-gradient(#7cf4ff ${gaugeValue}%, rgba(255,255,255,0.08) ${gaugeValue}% 100%)`,
                }}
              />
              <div className="absolute inset-8 rounded-full border border-white/10 bg-slate-950/90 backdrop-blur-xl" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <FiTrendingUp className="text-3xl text-electric-300" />
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">Fuel Efficiency</p>
                <p className="mt-2 text-4xl font-bold text-white">{prediction.predicted_mpg}</p>
                <p className="mt-1 text-xs text-slate-400">MPG score</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
