import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AnimatedSection({ children, className = '', style }) {
  return (
    <motion.section
      className={className}
      style={style}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
    >
      {children}
    </motion.section>
  );
}

export function AnimatedItem({ children, className = '', style }) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
    >
      {children}
    </motion.div>
  );
}
