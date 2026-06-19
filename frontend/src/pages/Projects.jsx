import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiCheckCircle, FiMapPin, FiZap } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection.jsx';
import LocalImage from '../components/LocalImage.jsx';
import PageHeader from '../components/PageHeader.jsx';
import { projects } from '../data/siteData.js';

const filters = ['All', ...Array.from(new Set(projects.map((project) => project.type)))];

const cardReveal = {
  hidden: { opacity: 0, y: 28 },
  show: (order) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: order * 0.055,
      ease: [0.22, 1, 0.36, 1],
      when: 'beforeChildren',
      staggerChildren: 0.08,
    },
  }),
  exit: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.14, ease: 'easeOut' },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.975 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const contentReveal = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.36, ease: [0.22, 1, 0.36, 1] },
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
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.34em] text-accent">Tamil Nadu Solar Work</p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-primary md:text-5xl">
              28 documented AES solar project sites.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-textDark/70">
              Each image card now matches the company profile record with the documented scope, client, location, and completion year.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
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
          </div>

          <div className="mt-12 grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence initial={false} mode="sync">
              {visible.map((project, index) => (
                <ProjectCard key={project.title} project={project} priority={index < 3} order={index % 3} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </AnimatedSection>

    </>
  );
}

function ProjectCard({ project, priority = false, order = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={reduceMotion ? undefined : cardReveal}
      custom={order}
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'show'}
      exit={reduceMotion ? undefined : 'exit'}
      viewport={{ once: true, amount: 0.16, margin: '0px 0px -8% 0px' }}
      className="project-card-optimized group flex h-full flex-col overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-soft transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl"
    >
      <motion.div
        variants={reduceMotion ? undefined : imageReveal}
        className="project-image-frame relative aspect-[4/3] overflow-hidden bg-primary/10"
      >
        <LocalImage
          src={project.image}
          alt={project.title}
          priority={priority}
          className="premium-image"
        />
        <div className="premium-image-overlay absolute inset-0 z-10" />
        <span className="absolute left-5 top-5 z-20 rounded-full bg-accent px-4 py-2 font-heading text-xs font-bold uppercase tracking-wide text-primary shadow-md">
          {project.type}
        </span>
        <div className="absolute bottom-5 left-5 right-5 z-20">
          <p className="flex items-center gap-2 font-body text-sm font-medium text-white/90">
            <FiMapPin className="text-accent" />
            {project.location}
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold leading-8 text-white">
            {project.title}
          </h2>
        </div>
      </motion.div>

      <motion.div variants={reduceMotion ? undefined : contentReveal} className="flex flex-1 flex-col p-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-primary/[0.04] bg-surface p-4">
            <p className="flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-wide text-textDark/50">
              <FiZap className="text-accent" />
              Capacity
            </p>
            <p className="mt-2 font-heading text-xl font-extrabold text-primary">{project.capacity}</p>
          </div>
          <div className="rounded-xl bg-primary p-4 text-white">
            <p className="flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-wide text-white/60">
              <FiCheckCircle className="text-accent" />
              Year
            </p>
            <p className="mt-2 font-heading text-base font-extrabold text-accent">{project.status}</p>
          </div>
        </div>

        <p className="mt-5 flex-1 font-body text-[15px] font-medium leading-7 text-textDark/75">{project.scope}</p>

        <div className="mt-6 flex items-center justify-between border-t border-primary/10 pt-5">
          <span className="max-w-[82%] truncate font-heading text-xs font-extrabold uppercase tracking-[0.14em] text-[#D99500]">{project.client}</span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-accent transition group-hover:bg-accent group-hover:text-primary">
            →
          </span>
        </div>
      </motion.div>
    </motion.article>
  );
}
