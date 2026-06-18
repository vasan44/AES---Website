import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiPhoneCall, FiTool } from 'react-icons/fi';
import backgroundVideo from '../assets/videos/company logo.mp4';
import mobileBackgroundVideo from '../assets/videos/mobile company logo .mp4';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const cards = [
  {
    icon: FiTool,
    eyebrow: 'Solar Solutions',
    title: 'Explore Our Services',
    text: 'From home rooftops to industrial installations, choose the right solar solution for your energy needs.',
    points: ['Residential & commercial solar', 'Installation and maintenance'],
    label: 'View Services',
    href: '/products',
    accent: false,
  },
  {
    icon: FiPhoneCall,
    eyebrow: 'Start Your Project',
    title: 'Talk to Our Team',
    text: 'Share your site details and power requirements. Our engineers will help you plan the next practical step.',
    points: ['Site assessment support', 'Clear quotation and guidance'],
    label: 'Contact Us',
    href: '/contact',
    accent: true,
  },
];

export default function PreFooterCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0f1924] py-10 text-white sm:py-14 md:py-24">
      {/* Background Video - Desktop */}
      <video
        className="absolute inset-0 -z-20 hidden h-full w-full object-cover md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      {/* Background Video - Mobile */}
      <video
        className="absolute inset-0 -z-20 block h-full w-full object-cover md:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        style={{ objectPosition: 'center center' }}
      >
        <source src={mobileBackgroundVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-[#0f1924]/78 md:bg-[#0f1924]/72" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(245,166,35,0.16),transparent_38%)]" />

      <motion.div
        className="container-page"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        <motion.div variants={itemVariants} className="mx-auto max-w-3xl px-2 text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-accent sm:text-sm sm:tracking-[0.3em]">
            Power Your Next Step
          </p>
          <h2 className="mt-3 font-heading text-2xl font-extrabold leading-tight text-white drop-shadow-sm sm:mt-4 sm:text-4xl md:text-5xl">
            Solar support from first discussion to long-term performance
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:mt-5 sm:text-base">
            Explore our engineering services or connect directly with our team for a project-specific consultation.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-2">
          {cards.map(({ icon: Icon, eyebrow, title, text, points, label, href, accent }) => (
            <motion.article
              key={title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className={`group flex h-full flex-col rounded-2xl border p-5 shadow-2xl sm:p-8 ${
                accent
                  ? 'border-accent/60 bg-accent text-[#0f1924]'
                  : 'border-white/20 bg-[#0f1924]/76 text-white backdrop-blur-sm md:bg-[#0f1924]/66'
              }`}
            >
              <div className="flex items-start gap-4">
                <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl text-2xl ${
                  accent ? 'bg-[#0f1924] text-accent' : 'bg-accent text-[#0f1924]'
                }`}>
                  <Icon />
                </span>
                <div className="min-w-0">
                  <p className={`text-xs font-bold uppercase tracking-[0.2em] ${
                    accent ? 'text-[#0f1924]/60' : 'text-accent'
                  }`}>
                    {eyebrow}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-bold leading-tight sm:text-3xl">{title}</h3>
                </div>
              </div>

              <p className={`mt-5 leading-7 ${accent ? 'text-[#0f1924]/75' : 'text-white/70'}`}>
                {text}
              </p>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {points.map((point) => (
                  <span key={point} className="flex items-center gap-2 text-sm font-semibold">
                    <FiCheckCircle className={accent ? 'text-[#0f1924]' : 'text-accent'} />
                    {point}
                  </span>
                ))}
              </div>

              <Link
                to={href}
                className={`mt-7 inline-flex w-fit items-center gap-3 rounded-full px-6 py-3 font-heading text-sm font-bold transition-all group-hover:gap-4 ${
                  accent
                    ? 'bg-[#0f1924] text-white hover:bg-white hover:text-[#0f1924]'
                    : 'bg-accent text-[#0f1924] hover:bg-white'
                }`}
              >
                {label}
                <FiArrowRight />
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
