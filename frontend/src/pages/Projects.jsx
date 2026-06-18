import { forwardRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiCheckCircle, FiMapPin, FiZap } from 'react-icons/fi';
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection.jsx';
import PageHeader from '../components/PageHeader.jsx';
import { projects } from '../data/siteData.js';

const filters = ['All', ...Array.from(new Set(projects.map((project) => project.type)))];

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 230, damping: 24 },
  },
  exit: {
    opacity: 0,
    y: 16,
    scale: 0.97,
    transition: { duration: 0.18, ease: 'easeOut' },
  },
};

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? projects : projects.filter((project) => project.type === filter);

  return (
    <>
      <PageHeader title="Projects" />
      <AnimatedSection className="section-pad bg-surface">
        <div className="container-page">
          <AnimatedItem className="mx-auto max-w-4xl text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.34em] text-accent">Tamil Nadu Solar Work</p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-primary md:text-5xl">
              28 documented AES solar project sites.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-textDark/70">
              Each image card now matches the company profile record with the documented scope, client, location, and completion year.
            </p>
          </AnimatedItem>

          <AnimatedItem className="mt-10 flex flex-wrap justify-center gap-3">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-full border px-5 py-3 font-heading text-sm font-bold transition duration-300 hover:-translate-y-1 ${
                  filter === item
                    ? 'border-accent bg-accent text-primary shadow-lg shadow-accent/20'
                    : 'border-primary/10 bg-white text-primary hover:border-accent'
                }`}
              >
                {item}
              </button>
            ))}
          </AnimatedItem>

          <motion.div layout className="mt-12 grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </AnimatedSection>

    </>
  );
}

const ProjectCard = forwardRef(function ProjectCard({ project }, ref) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      ref={ref}
      layout
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      whileHover={reduceMotion ? undefined : { y: -8 }}
      viewport={{ once: true, amount: 0.15 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-soft transition-colors duration-300 hover:border-accent/60"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-primary/10">
        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          initial={reduceMotion ? false : { scale: 1.08 }}
          whileInView={reduceMotion ? undefined : { scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/25 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full bg-accent px-4 py-2 font-heading text-xs font-extrabold uppercase tracking-wide text-primary">
          {project.type}
        </span>
        <div className="absolute bottom-5 left-5 right-5">
          <p className="flex items-center gap-2 text-sm font-semibold text-white/80">
            <FiMapPin className="text-accent" />
            {project.location}
          </p>
          <h2 className="mt-2 font-heading text-2xl font-extrabold leading-8 text-white">
            {project.title}
          </h2>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-surface p-4">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-textDark/45">
              <FiZap className="text-accent" />
              Capacity
            </p>
            <p className="mt-2 font-heading text-xl font-extrabold text-primary">{project.capacity}</p>
          </div>
          <div className="rounded-xl bg-primary p-4 text-white">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-white/50">
              <FiCheckCircle className="text-accent" />
              Year
            </p>
            <p className="mt-2 font-heading text-sm font-extrabold text-accent">{project.status}</p>
          </div>
        </div>

        <p className="mt-5 flex-1 leading-7 text-textDark/70">{project.scope}</p>

        <div className="mt-6 flex items-center justify-between border-t border-primary/10 pt-5">
          <span className="max-w-[82%] truncate font-heading text-xs font-bold uppercase tracking-[0.14em] text-accent">{project.client}</span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-accent transition group-hover:bg-accent group-hover:text-primary">
            →
          </span>
        </div>
      </div>
    </motion.article>
  );
});
