import { motion } from 'framer-motion';

const orbClasses = [
  'left-[-8rem] top-[-4rem] h-72 w-72 bg-electric-400/20',
  'right-[-4rem] top-[8rem] h-80 w-80 bg-neon-400/18',
  'left-[35%] bottom-[-5rem] h-96 w-96 bg-amberglow-400/10',
];

export const BackgroundOrbits = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {orbClasses.map((className, index) => (
      <motion.div
        key={className}
        aria-hidden="true"
        className={`absolute rounded-full blur-3xl ${className}`}
        animate={{ y: [0, -18, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 9 + index * 1.4, repeat: Infinity, ease: 'easeInOut' }}
      />
    ))}
  </div>
);
