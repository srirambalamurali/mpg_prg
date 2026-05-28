import { motion } from 'framer-motion';

import { Footer } from '@/components/Footer';
import { FeatureGrid } from '@/components/FeatureGrid';
import { HeroSection } from '@/components/HeroSection';
import { PredictionForm } from '@/components/PredictionForm';
import { PredictionResult } from '@/components/PredictionResult';
import { useMpgPrediction } from '@/hooks/useMpgPrediction';

export const HomePage = () => {
  const { formValues, prediction, isSubmitting, errorMessage, isReady, updateField, submitPrediction, resetForm } = useMpgPrediction();

  const scrollToForm = () => {
    document.getElementById('prediction-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="space-y-10 md:space-y-14">
      <HeroSection onScrollToForm={scrollToForm} />

      <PredictionForm
        formValues={formValues}
        onChange={updateField}
        onSubmit={submitPrediction}
        onReset={resetForm}
        isSubmitting={isSubmitting}
        isReady={isReady}
        errorMessage={errorMessage}
      />

      <PredictionResult prediction={prediction} />

      <FeatureGrid />

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.5 }}
        className="glass-panel rounded-[2rem] p-6 md:p-8"
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="label-chip">Workflow</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white">End-to-end MPG prediction stack</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
              The pipeline already contains preprocessing, one-hot encoding, and the trained Random Forest regressor, so the backend only needs the raw feature payload.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Data cleaning and missing value handling',
              'Feature engineering and categorical encoding',
              'Random Forest regression and tuning',
              'Vercel-ready frontend and FastAPI backend',
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-slate-950/45 p-5 text-sm leading-7 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};
