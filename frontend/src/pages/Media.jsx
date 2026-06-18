import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FiX, FiZoomIn, FiChevronLeft, FiChevronRight, FiImage, FiShield, FiTool, FiZap, FiHome, FiGrid } from 'react-icons/fi';
import PageHeader from '../components/PageHeader.jsx';
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection.jsx';
import ws01 from '../assets/Worksite Gallery/solar-site-01.webp';
import ws02 from '../assets/Worksite Gallery/solar-site-02.webp';
import ws03 from '../assets/Worksite Gallery/solar-site-03.webp';
import ws04 from '../assets/Worksite Gallery/solar-site-04.webp';
import ws05 from '../assets/Worksite Gallery/solar-site-05.webp';
import ws06 from '../assets/Worksite Gallery/solar-site-06.webp';
import ws07 from '../assets/Worksite Gallery/solar-site-07.webp';
import ws08 from '../assets/Worksite Gallery/solar-site-08.webp';
import ws09 from '../assets/Worksite Gallery/solar-site-09.webp';
import ws10 from '../assets/Worksite Gallery/solar-site-10.webp';
import ws11 from '../assets/Worksite Gallery/solar-site-11.webp';
import ws12 from '../assets/Worksite Gallery/solar-site-12.webp';
import ws13 from '../assets/Worksite Gallery/solar-site-13.webp';
import ws14 from '../assets/Worksite Gallery/solar-site-14.webp';
import ws15 from '../assets/Worksite Gallery/solar-site-15.webp';
import ws16 from '../assets/Worksite Gallery/solar-site-16.webp';

const siteModels = [
  { icon: FiHome, title: 'Home Rooftop Solar', text: 'Terrace and house rooftop systems for daily home load and electricity bill reduction.' },
  { icon: FiZap, title: 'Commercial Roof Solar', text: 'Shop, office, showroom, school, and hospital rooftops planned around daytime usage.' },
  { icon: FiShield, title: 'Industrial Shed Solar', text: 'Factory and warehouse shed installations with load study, cable trays, and protection panels.' },
  { icon: FiImage, title: 'Farm & Acre Land Solar', text: 'Ground-mounted solar for farms, borewell pumps, irrigation loads, and open land projects.' },
  { icon: FiTool, title: 'Service & Maintenance', text: 'Panel cleaning, inverter checks, earthing inspection, and generation performance review.' },
];

const worksiteGallery = [
  { title: 'Site Team Briefing', category: 'Workers', image: ws01, text: 'Crew alignment before solar mounting work.' },
  { title: 'Panel Room Check', category: 'Labour Team', image: ws02, text: 'Electrical room inspection and access planning.' },
  { title: 'Ground Solar Layout', category: 'Site Work', image: ws03, text: 'Open-site panel rows planned for clear generation.' },
  { title: 'Meter Panel Setup', category: 'Electrical Work', image: ws04, text: 'Protection panel wiring and meter support.' },
  { title: 'Solar Field Cleaning', category: 'Maintenance', image: ws05, text: 'Panel cleaning for steady daily output.' },
  { title: 'Structure Fabrication', category: 'Acre Land', image: ws06, text: 'Ground structure fixing for acre-land solar.' },
  { title: 'Transformer Yard Work', category: 'Electrical Work', image: ws07, text: 'Cable routing near transformer and control area.' },
  { title: 'Rooftop Structure Work', category: 'Site Work', image: ws08, text: 'Mounting frame alignment before panel fixing.' },
  { title: 'Inverter Wiring', category: 'Electrical Work', image: ws09, text: 'Inverter and DB wiring with safety checks.' },
  { title: 'Land Mounting Work', category: 'Acre Land', image: ws10, text: 'Steel frame setup for ground-mounted panels.' },
  { title: 'Worker Safety Check', category: 'Workers', image: ws11, text: 'Safety coordination before site execution.' },
  { title: 'Cable Tray Setup', category: 'Labour Team', image: ws12, text: 'Cable tray fixing for neat DC routing.' },
  { title: 'Panel Row Alignment', category: 'Site Work', image: ws13, text: 'Final tilt and row alignment inspection.' },
  { title: 'Generation Inspection', category: 'Maintenance', image: ws14, text: 'System health check after installation.' },
  { title: 'Farm Solar Support', category: 'Acre Land', image: ws15, text: 'Farm-side structure work for daytime loads.' },
  { title: 'Final Commissioning', category: 'Site Work', image: ws16, text: 'Testing, handover, and system startup.' },
];

const galleryCategories = ['All', ...Array.from(new Set(worksiteGallery.map((item) => item.category)))];

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.055,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 24 },
  },
};

const imageReveal = {
  hidden: ({ direction, reduceMotion }) => reduceMotion
    ? {}
    : {
        x: direction * 28,
      },
  show: ({ reduceMotion }) => ({
    x: 0,
    transition: reduceMotion
      ? { duration: 0.01 }
      : {
          duration: 0.32,
          ease: [0.22, 1, 0.36, 1],
        },
  }),
};

export default function Media() {
  const reduceMotion = useReducedMotion();
  const [lightbox, setLightbox] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');
  const visibleGallery = activeCategory === 'All'
    ? worksiteGallery
    : worksiteGallery.filter((item) => item.category === activeCategory);
  const allImages = visibleGallery.map((item) => item.image);
  const activeItem = visibleGallery[lightboxIndex];
  const categoryCount = (category) => (
    category === 'All'
      ? worksiteGallery.length
      : worksiteGallery.filter((item) => item.category === category).length
  );

  const openLightbox = (img, images = allImages) => {
    const idx = images.indexOf(img);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setLightbox(img);
  };

  const prev = () => {
    const i = (lightboxIndex - 1 + allImages.length) % allImages.length;
    setLightboxIndex(i);
    setLightbox(allImages[i]);
  };

  const next = () => {
    const i = (lightboxIndex + 1) % allImages.length;
    setLightboxIndex(i);
    setLightbox(allImages[i]);
  };

  return (
    <>
      <PageHeader title="Gallery" />

      {/* ── Worksite gallery ──────────────────────────────────────────── */}
      <motion.section
        className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eef3f8_52%,#ffffff_100%)] py-16 md:py-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.02 }}
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-accent" />
        <div className="container-page">
          <motion.div
            variants={cardVariants}
            className="relative mb-9 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
          >
            <div>
              <p className="font-heading text-sm font-bold uppercase tracking-[0.35em] text-accent">Worksite Gallery</p>
              <h2 className="mt-3 max-w-2xl font-heading text-4xl font-extrabold leading-tight text-primary md:text-5xl">
                Real Site Moments, Cleanly Framed
              </h2>
            </div>
            <div className="lg:max-w-xl">
              <p className="text-lg leading-8 text-textDark/65">
                Installation, wiring, maintenance, and acre-land solar work models shown with practical site visuals.
              </p>
              <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-xl border border-primary/10 bg-white shadow-soft">
                {[
                  ['Photos', worksiteGallery.length],
                  ['Categories', galleryCategories.length - 1],
                  ['Focus', 'Solar'],
                ].map(([label, value]) => (
                  <div key={label} className="border-r border-primary/10 px-4 py-4 last:border-r-0">
                    <p className="font-heading text-2xl font-extrabold text-primary">{value}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wide text-textDark/45">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="mb-10 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-primary/10 bg-white p-3 shadow-soft"
          >
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative inline-flex h-12 items-center gap-2 rounded-full px-5 font-heading text-sm font-bold transition ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-[0_14px_34px_rgba(14,26,61,0.18)]'
                    : 'text-primary hover:bg-accent/15'
                }`}
              >
                <FiGrid className={activeCategory === category ? 'text-accent' : 'text-primary/45'} />
                {category}
                <span className={`rounded-full px-2 py-0.5 text-[11px] ${activeCategory === category ? 'bg-white/10 text-white/80' : 'bg-primary/5 text-textDark/50'}`}>
                  {categoryCount(category)}
                </span>
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.22 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {visibleGallery.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={imageReveal}
                  custom={{
                    direction: index % 2 === 0 ? -1 : 1,
                    reduceMotion,
                  }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.05 }}
                  className={`flex transform-gpu ${
                    (activeCategory === 'All' && [0, 6, 11].includes(index)) || (activeCategory !== 'All' && index === 0)
                      ? 'min-h-[430px] lg:col-span-2 lg:min-h-[520px]'
                      : 'min-h-[360px]'
                  }`}
                >
                  <WorksiteCard
                    item={item}
                    featured={(activeCategory === 'All' && [0, 6, 11].includes(index)) || (activeCategory !== 'All' && index === 0)}
                    onClick={() => openLightbox(item.image)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* ── Solar site models ─────────────────────────────────────────── */}
      <AnimatedSection className="section-pad bg-white">
        <div className="container-page">
          <AnimatedItem className="mb-12 text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.35em] text-accent">Solar Site Models</p>
            <h2 className="mt-3 font-heading text-4xl font-extrabold text-primary">Where Solar Can Be Installed</h2>
            <div className="mx-auto mt-4 flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-accent" />
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="h-px w-16 bg-accent" />
            </div>
          </AnimatedItem>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {siteModels.map(({ icon: Icon, title, text }) => (
              <AnimatedItem key={title} className="flex">
                <SiteModelCard Icon={Icon} title={title} text={text} />
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Lightbox ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-primary/95 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            {/* close */}
            <button
              aria-label="Close"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-accent hover:text-primary"
              onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            >
              <FiX />
            </button>

            {/* prev */}
            <button
              aria-label="Previous"
              className="absolute left-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-accent hover:text-primary"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <FiChevronLeft />
            </button>

            {/* image */}
            <motion.figure
              key={lightbox}
              initial={{ scale: 0.92, opacity: 0, y: 18 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 18 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              className="max-w-[88vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox}
                alt={activeItem?.title || ''}
                className="max-h-[78vh] w-full rounded-xl object-contain shadow-2xl ring-1 ring-white/10"
              />
              {activeItem && (
                <figcaption className="mt-4 rounded-xl bg-white/10 p-4 text-white backdrop-blur">
                  <p className="font-heading text-lg font-bold">{activeItem.title}</p>
                  <p className="mt-1 text-sm text-white/70">{activeItem.text}</p>
                </figcaption>
              )}
            </motion.figure>

            {/* next */}
            <button
              aria-label="Next"
              className="absolute right-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-accent hover:text-primary"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <FiChevronRight />
            </button>

            {/* counter */}
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-5 py-2 text-sm font-bold text-white">
              {lightboxIndex + 1} / {allImages.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function WorksiteCard({ item, onClick, featured = false }) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.12 }}
      onClick={onClick}
      className="group relative flex h-full w-full overflow-hidden rounded-xl border border-white/80 bg-slate-200 text-left shadow-[0_12px_28px_rgba(14,26,61,0.10)] transition-colors duration-200 hover:border-accent"
    >
      <img
        src={item.image}
        alt={item.title}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent" />

      <span className="absolute left-4 top-4 rounded-full bg-accent px-4 py-1.5 font-heading text-xs font-bold text-primary shadow-md sm:left-5 sm:top-5">
        {item.category}
      </span>
      <span className="absolute right-4 top-4 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-white/15 text-xl text-white opacity-0 backdrop-blur transition group-hover:translate-y-0 group-hover:opacity-100">
        <FiZoomIn />
      </span>

      <div className="relative mt-auto w-full p-5 sm:p-6">
        <div className="max-w-2xl">
          <div className="mb-3 h-0.5 w-14 bg-accent transition-all duration-300 group-hover:w-20" />
          <h3 className={`font-heading font-bold leading-tight text-accent ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
            {item.title}
          </h3>
          <p className="mt-2 max-w-xl text-sm font-medium leading-5 text-white/90 sm:leading-6">
            {item.text}
          </p>
        </div>
        <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/85 transition-colors group-hover:text-accent">
          <FiZoomIn />
          View photo
        </span>
      </div>
    </motion.button>
  );
}

function SiteModelCard({ Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -7 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="group flex w-full flex-col rounded-xl border border-primary/10 bg-surface p-6 shadow-soft transition-colors hover:border-accent hover:bg-white"
    >
      <span className="inline-grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-primary text-2xl text-accent transition group-hover:bg-accent group-hover:text-primary">
        <Icon />
      </span>
      <h3 className="mt-4 font-heading text-base font-bold text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-textDark/65">{text}</p>
    </motion.div>
  );
}
