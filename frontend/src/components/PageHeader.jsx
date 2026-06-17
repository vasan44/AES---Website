import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import defaultBg from '../assets/header/services.png';
import aboutBg from '../assets/header/about.png';
import projectBg from '../assets/header/project.png';
import galleryBg from '../assets/header/gallary.png';
import careerBg from '../assets/header/career.png';
import contactBg from '../assets/header/contact.png';

import mDefaultBg from '../assets/headermobile/services.png';
import mAboutBg from '../assets/headermobile/about.png';
import mProjectBg from '../assets/headermobile/project.png';
import mGalleryBg from '../assets/headermobile/gallery.png';
import mCareerBg from '../assets/headermobile/career.png';
import mContactBg from '../assets/headermobile/contect.png';

const bgMap = {
  'About Us':  { d: aboutBg,   m: mAboutBg },
  'Projects':  { d: projectBg, m: mProjectBg },
  'Gallery':   { d: galleryBg, m: mGalleryBg },
  'Career':    { d: careerBg,  m: mCareerBg },
  'Careers':   { d: careerBg,  m: mCareerBg },
  'Contact':   { d: contactBg, m: mContactBg },
};

export default function PageHeader({ title }) {
  const { d: bg, m: mobileBg } = bgMap[title] || { d: defaultBg, m: mDefaultBg };
  return (
    <header className="relative h-[400px] overflow-hidden bg-primary text-white">
      <picture>
        <source media="(max-width: 767px)" srcSet={mobileBg} />
        <img
          src={bg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture>
      <div className="absolute inset-0 bg-black/50 md:bg-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
      <motion.div
        className="container-page relative z-10 flex h-full flex-col justify-center pt-20"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/">Home</Link> &gt; {title}
        </motion.p>
        <motion.h1
          className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
      </motion.div>
    </header>
  );
}
