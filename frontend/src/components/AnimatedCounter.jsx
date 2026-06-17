import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AnimatedCounter({ end, prefix = '', suffix = '', decimals = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <span ref={ref} className={className}>
      {inView ? <CountUp start={0} end={end} duration={2} decimals={decimals} prefix={prefix} suffix={suffix} separator="," /> : `${prefix}0${suffix}`}
    </span>
  );
}
