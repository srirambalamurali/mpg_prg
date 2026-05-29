import { motion } from 'framer-motion';
import { FiActivity, FiBarChart2, FiLayers, FiServer, FiSliders, FiSmartphone } from 'react-icons/fi';

import { featureCards } from '@/assets/constants';

const featureIcons = [FiBarChart2, FiSliders, FiLayers, FiActivity, FiServer, FiSmartphone];

export const FeatureGrid = () => (
  <section className="mt-16 md:mt-20">
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        <span className="label-chip">Model Features</span>
        <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">Built like a real product</h2>
      </div>
    </div>

    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {featureCards.map((feature, index) => {
        const Icon = featureIcons[index % featureIcons.length];

        return (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="group glass-panel rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-electric-400/25 hover:bg-white/[0.07]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-electric-400/15 bg-electric-400/10 text-electric-200 transition duration-300 group-hover:scale-105 group-hover:text-white">
              <Icon />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{feature.description}</p>
          </motion.article>
        );
      })}
    </div>
  </section>
);
