import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FiX, FiZoomIn, FiChevronLeft, FiChevronRight, FiImage, FiShield, FiTool, FiZap, FiHome, FiGrid } from 'react-icons/fi';
import PageHeader from '../components/PageHeader.jsx';
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection.jsx';
import LocalImage from '../components/LocalImage.jsx';
import { useCanHover, useIsMobile } from '../hooks/useMediaQuery.js';
import ws01 from '../assets/images/gallery/solar-worksite-01.webp';
import ws02 from '../assets/images/gallery/solar-worksite-02.webp';
import ws03 from '../assets/images/gallery/solar-worksite-03.webp';
import ws04 from '../assets/images/gallery/solar-worksite-04.webp';
import ws05 from '../assets/images/gallery/solar-worksite-05.webp';
import ws06 from '../assets/images/gallery/solar-worksite-06.webp';
import ws07 from '../assets/images/gallery/solar-worksite-07.webp';
import ws08 from '../assets/images/gallery/solar-worksite-08.webp';
import ws09 from '../assets/images/gallery/solar-worksite-09.webp';
import ws10 from '../assets/images/gallery/solar-worksite-10.webp';
import ws11 from '../assets/images/gallery/solar-worksite-11.webp';
import ws12 from '../assets/images/gallery/solar-worksite-12.webp';
import ws13 from '../assets/images/gallery/solar-worksite-13.webp';
import ws14 from '../assets/images/gallery/solar-worksite-14.webp';
import ws15 from '../assets/images/gallery/solar-worksite-15.webp';
import ws16 from '../assets/images/gallery/solar-worksite-16.webp';
import ws17 from '../assets/images/gallery/solar-worksite-17.webp';
import ws18 from '../assets/images/gallery/solar-worksite-18.webp';
import ws19 from '../assets/images/gallery/solar-worksite-19.webp';
import ws20 from '../assets/images/gallery/solar-worksite-20.webp';
import ws21 from '../assets/images/gallery/solar-worksite-21.webp';
import ws22 from '../assets/images/gallery/solar-worksite-22.webp';
import ws23 from '../assets/images/gallery/solar-worksite-23.webp';
import ws24 from '../assets/images/gallery/solar-worksite-24.webp';
import ws25 from '../assets/images/gallery/solar-worksite-25.webp';
import ws26 from '../assets/images/gallery/solar-worksite-26.webp';
import ws27 from '../assets/images/gallery/solar-worksite-27.webp';
import ws28 from '../assets/images/gallery/solar-worksite-28.webp';
import ws29 from '../assets/images/gallery/solar-worksite-29.webp';
import ws30 from '../assets/images/gallery/solar-worksite-30.webp';
import ws31 from '../assets/images/gallery/solar-worksite-31.webp';
import ws32 from '../assets/images/gallery/solar-worksite-32.webp';
import ws33 from '../assets/images/gallery/solar-worksite-33.webp';
import ws34 from '../assets/images/gallery/solar-worksite-34.webp';
import ws35 from '../assets/images/gallery/solar-worksite-35.webp';

const siteModels = [
  { icon: FiHome, title: 'Home Rooftop Solar', text: 'Terrace and house rooftop systems for daily home load and electricity bill reduction.' },
  { icon: FiZap, title: 'Commercial Roof Solar', text: 'Shop, office, showroom, school, and hospital rooftops planned around daytime usage.' },
  { icon: FiShield, title: 'Industrial Shed Solar', text: 'Factory and warehouse shed installations with load study, cable trays, and protection panels.' },
  { icon: FiImage, title: 'Farm & Acre Land Solar', text: 'Ground-mounted solar for farms, borewell pumps, irrigation loads, and open land projects.' },
  { icon: FiTool, title: 'Service & Maintenance', text: 'Panel cleaning, inverter checks, earthing inspection, and generation performance review.' },
];

const worksiteGallery = [
  { title: 'Worksite Photo 01', category: 'Site Work', image: ws01, text: 'Solar project site execution view.' },
  { title: 'Worksite Photo 02', category: 'Site Work', image: ws02, text: 'On-site solar installation progress.' },
  { title: 'Worksite Photo 03', category: 'Site Work', image: ws03, text: 'Field team worksite documentation.' },
  { title: 'Worksite Photo 04', category: 'Electrical Work', image: ws04, text: 'Electrical and DC worksite activity.' },
  { title: 'Worksite Photo 05', category: 'Civil & Structure', image: ws05, text: 'Civil and structure work at solar site.' },
  { title: 'Worksite Photo 06', category: 'Civil & Structure', image: ws06, text: 'Foundation and mounting support work.' },
  { title: 'Worksite Photo 07', category: 'Electrical Work', image: ws07, text: 'Electrical routing and site coordination.' },
  { title: 'Worksite Photo 08', category: 'Site Work', image: ws08, text: 'Solar field layout and execution view.' },
  { title: 'Worksite Photo 09', category: 'Electrical Work', image: ws09, text: 'Panel and cable work documentation.' },
  { title: 'Worksite Photo 10', category: 'Civil & Structure', image: ws10, text: 'Ground-mounted structure preparation.' },
  { title: 'Worksite Photo 11', category: 'Site Work', image: ws11, text: 'Worksite progress at solar project area.' },
  { title: 'Worksite Photo 12', category: 'Electrical Work', image: ws12, text: 'Electrical installation and routing work.' },
  { title: 'Worksite Photo 13', category: 'Civil & Structure', image: ws13, text: 'Solar support structure and site activity.' },
  { title: 'Worksite Photo 14', category: 'Maintenance', image: ws14, text: 'Inspection and maintenance support view.' },
  { title: 'Worksite Photo 15', category: 'Site Work', image: ws15, text: 'Solar plant worksite overview.' },
  { title: 'Worksite Photo 16', category: 'Civil & Structure', image: ws16, text: 'Civil work and mounting area progress.' },
  { title: 'Worksite Photo 17', category: 'Electrical Work', image: ws17, text: 'Solar electrical work execution.' },
  { title: 'Worksite Photo 18', category: 'Site Work', image: ws18, text: 'Project site activity and progress.' },
  { title: 'Worksite Photo 19', category: 'Maintenance', image: ws19, text: 'System inspection and worksite check.' },
  { title: 'Worksite Photo 20', category: 'Civil & Structure', image: ws20, text: 'Solar structure worksite documentation.' },
  { title: 'Worksite Photo 21', category: 'Electrical Work', image: ws21, text: 'Electrical project worksite view.' },
  { title: 'Worksite Photo 22', category: 'Site Work', image: ws22, text: 'Solar field execution and work progress.' },
  { title: 'Worksite Photo 23', category: 'Civil & Structure', image: ws23, text: 'Ground work and structure alignment.' },
  { title: 'Worksite Photo 24', category: 'Electrical Work', image: ws24, text: 'Electrical panel and site activity.' },
  { title: 'Worksite Photo 25', category: 'Maintenance', image: ws25, text: 'Site inspection and maintenance work.' },
  { title: 'Worksite Photo 26', category: 'Civil & Structure', image: ws26, text: 'Solar mounting structure progress.' },
  { title: 'Worksite Photo 27', category: 'Site Work', image: ws27, text: 'Worksite overview and installation activity.' },
  { title: 'Worksite Photo 28', category: 'Site Work', image: ws28, text: 'Solar project field documentation.' },
  { title: 'Worksite Photo 29', category: 'Electrical Work', image: ws29, text: 'Electrical work and cable routing.' },
  { title: 'Worksite Photo 30', category: 'Civil & Structure', image: ws30, text: 'Structure setup and field progress.' },
  { title: 'Worksite Photo 31', category: 'Site Work', image: ws31, text: 'Project execution at solar site.' },
  { title: 'Worksite Photo 32', category: 'Maintenance', image: ws32, text: 'Solar site inspection support.' },
  { title: 'Worksite Photo 33', category: 'Electrical Work', image: ws33, text: 'Electrical installation worksite view.' },
  { title: 'Worksite Photo 34', category: 'Civil & Structure', image: ws34, text: 'Mounting and structural worksite progress.' },
  { title: 'Worksite Photo 35', category: 'Site Work', image: ws35, text: 'Final solar project site view.' },
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
  hidden: ({ reduceMotion, isMobile }) => reduceMotion
    ? {}
    : {
        opacity: 0,
        y: isMobile ? 10 : 16,
      },
  show: ({ order, reduceMotion, isMobile }) => ({
    opacity: 1,
    y: 0,
    transition: reduceMotion
      ? { duration: 0.01 }
      : {
          duration: isMobile ? 0.22 : 0.34,
          delay: isMobile ? 0 : order * 0.045,
          ease: [0.22, 1, 0.36, 1],
        },
  }),
};

export default function Media() {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
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
        initial={reduceMotion || isMobile ? false : 'hidden'}
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
              transition={{ duration: reduceMotion ? 0.01 : isMobile ? 0.14 : 0.22 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {visibleGallery.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={imageReveal}
                  custom={{
                    order: index % 3,
                    reduceMotion,
                    isMobile,
                  }}
                  initial={reduceMotion || isMobile ? false : 'hidden'}
                  whileInView="show"
                  viewport={{ once: true, amount: 0.08, margin: '0px 0px -6% 0px' }}
                  className="gallery-card-optimized flex aspect-[4/3]"
                >
                  <WorksiteCard
                    item={item}
                    featured={(activeCategory === 'All' && [0, 6, 11].includes(index)) || (activeCategory !== 'All' && index === 0)}
                    priority={index < 2}
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
              <LocalImage
                src={lightbox}
                alt={activeItem?.title || ''}
                priority
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

function WorksiteCard({ item, onClick, featured = false, priority = false }) {
  const canHover = useCanHover();
  return (
    <button
      onClick={onClick}
      className="group relative flex h-full w-full overflow-hidden rounded-2xl border border-white/80 bg-slate-200 text-left shadow-[0_12px_28px_rgba(14,26,61,0.10)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl active:scale-[0.99]"
    >
      <LocalImage
        src={item.image}
        alt={item.title}
        priority={priority}
        className={`premium-image absolute inset-0 ${canHover ? '' : '!transform-none'}`}
      />
      <div className="premium-image-overlay absolute inset-0 z-10" />

      <span className="absolute left-4 top-4 z-20 rounded-full bg-accent px-4 py-1.5 font-heading text-xs font-bold text-primary shadow-md sm:left-5 sm:top-5">
        {item.category}
      </span>
      <span className="absolute right-4 top-4 z-20 grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-white/15 text-xl text-white opacity-0 backdrop-blur transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <FiZoomIn />
      </span>

      <div className="relative z-20 mt-auto w-full p-5 sm:p-6">
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
    </button>
  );
}

function SiteModelCard({ Icon, title, text }) {
  const canHover = useCanHover();
  return (
    <motion.div
      whileHover={canHover ? { y: -7 } : undefined}
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
