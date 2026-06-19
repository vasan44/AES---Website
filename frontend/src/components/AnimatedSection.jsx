import { motion, useReducedMotion } from 'framer-motion';
import { useIsMobile } from '../hooks/useMediaQuery.js';

export default function AnimatedSection({ children, className = '', style }) {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const sectionVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : isMobile ? 0.035 : 0.1,
        delayChildren: reduceMotion ? 0 : isMobile ? 0.01 : 0.04,
      },
    },
  };

  return (
    <motion.section
      className={className}
      style={style}
      variants={sectionVariants}
      initial={reduceMotion || isMobile ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
    >
      {children}
    </motion.section>
  );
}

export function AnimatedItem({ children, className = '', style }) {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const itemVariants = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 12 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.01 : isMobile ? 0.28 : 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      style={style}
      variants={itemVariants}
      initial={reduceMotion || isMobile ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
    >
      {children}
    </motion.div>
  );
}
