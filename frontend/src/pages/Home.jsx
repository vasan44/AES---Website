import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  FiBatteryCharging, FiCheckCircle, FiChevronDown,
  FiClipboard, FiHome, FiSend, FiSettings, FiShield,
  FiSun, FiTool, FiZap,
} from 'react-icons/fi';
import AnimatedCounter from '../components/AnimatedCounter.jsx';
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection.jsx';
import StarRating from '../components/StarRating.jsx';
import {
  certifications, counters, engineeringTeam, images, impactCards, partners, socials,
} from '../data/siteData.js';
import heroVideoSrc    from '../assets/videos/solar-hero.mp4';
import capacityVideoSrc from '../assets/videos/capacity-bg.mp4';
import svcImg1 from '../assets/services/services1.png';
import svcImg2 from '../assets/services/services2.png';
import svcImg3 from '../assets/services/services3.png';
import prodHome       from '../assets/products/home.png';
import prodCommercial from '../assets/products/comercial.jpg';
import prodIndustrial from '../assets/products/interical.png';
import svcImg4 from '../assets/services/sevices4.png';
import svcImg5 from '../assets/services/services5.png';
import svcImg6 from '../assets/services/services6.png';

const homeServices = [
  { icon: FiHome,            badge: 'Home Solar',      img: svcImg1, title: 'Residential Installation',        text: 'Rooftop solar setup for homes with site survey, structure fixing, panel mounting, inverter setup, and commissioning.',                                                              tags: ['Site Survey', 'Mounting', 'Commissioning'] },
  { icon: FiZap,             badge: 'Business Solar',  img: svcImg2, title: 'Commercial Installation',         text: 'Solar system installation for shops, schools, offices, hospitals, and small industries to reduce electricity bills.',                                                          tags: ['Load Study', 'DC/AC Wiring', 'Net Metering'] },
  { icon: FiSettings,        badge: 'Industrial Solar', img: svcImg3, title: 'Industrial Installation',         text: 'Solar installation for factories, warehouses, mills, and industrial sites with load study, structure work, wiring, and commissioning.',                                         tags: ['Load Study', 'Structure', 'Commissioning'] },
  { icon: FiBatteryCharging, badge: 'Power Systems',   img: svcImg4, title: 'On-Grid, Off-Grid & Hybrid Systems', text: 'Customized solar power systems based on customer load, backup requirement, and site condition.',                                                                           tags: ['On-Grid', 'Off-Grid', 'Hybrid'] },
  { icon: FiClipboard,       badge: 'Support Service', img: svcImg5, title: 'Net Metering & Subsidy Support',  text: 'Documentation, application assistance, utility coordination, and support for net metering and applicable subsidy processes.',                                                  tags: ['Documentation', 'Application', 'Support'] },
  { icon: FiTool,            badge: 'Maintenance',     img: svcImg6, title: 'AMC & Solar Maintenance',         text: 'Panel cleaning, inverter checks, cable inspection, troubleshooting, and annual maintenance for long-term performance.',                                                        tags: ['Cleaning', 'Inspection', 'AMC'] },
];

const whyUs = [
  { icon: FiShield,       title: 'Quality & Safety',       text: 'Documented controls, testing, inspection, safety meetings, and site compliance support dependable execution.' },
  { icon: FiSun,          title: '250+ MWp Experience',    text: 'Recorded solar work spans utility-scale DC, AC, MMS, piling, civil construction, erection, and O&M scopes.' },
  { icon: FiCheckCircle,  title: 'Complete Execution',     text: 'Capabilities cover foundations, structures, modules, cabling, rooms, equipment erection, fencing, and handover.' },
  { icon: FiZap,          title: 'Multi-State Delivery',   text: 'Project experience extends across Tamil Nadu, Karnataka, Kerala, and Andhra Pradesh.' },
];

const solarFit = [
  {
    icon: FiHome,
    img: prodHome,
    title: 'Home Rooftop Solar',
    range: '2 kW - 10 kW',
    bestFor: 'Homes with monthly bills above ₹1,500.',
    points: ['Subsidy guidance', 'Net meter support', 'Low maintenance'],
  },
  {
    icon: FiZap,
    img: prodCommercial,
    title: 'Commercial Solar',
    range: '10 kW - 100 kW',
    bestFor: 'Shops, schools, offices, and hospitals.',
    points: ['High bill reduction', 'Load-based design', 'Fast payback'],
  },
  {
    icon: FiSettings,
    img: prodIndustrial,
    title: 'Industrial Solar',
    range: '100 kW+',
    bestFor: 'Factories, warehouses, and production units.',
    points: ['Strong structures', 'Safety protection', 'Performance tracking'],
  },
];

const industrialDetails = [
  { icon: FiClipboard, title: 'Load & Bill Study', text: 'We check demand load, sanctioned load, tariff pattern, running hours, and monthly unit consumption before sizing the plant.' },
  { icon: FiSettings, title: 'Structure & Layout', text: 'Roof strength, shed angle, wind load, walkway space, and panel orientation are planned for safe long-term operation.' },
  { icon: FiShield, title: 'Protection & Safety', text: 'DCDB, ACDB, earthing, lightning arrestor, cable routing, isolators, and inverter protection are included in the design.' },
  { icon: FiZap, title: 'Generation Monitoring', text: 'Inverter monitoring and performance checks help track daily generation, alerts, and long-term plant output.' },
];

const industrialBenefits = [
  'Reduce high daytime electricity cost',
  'Use unused factory or warehouse roof space',
  'Support LT and HT service connections',
  'Improve ESG and green energy profile',
  'Optional AMC for cleaning and system health',
];

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <WhyUs />
      <ServicesSection />
      <BestSolarFit />
      <IndustrialSolar />
      <Capacity />
      <HowItWorks />
      <Awards />
      <Testimonials />
      <Savings />
      <FinalCta />
    </>
  );
}

/* ── STATS STRIP ──────────────────────────────────────────────────── */
function StatsStrip() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-gradient-to-r from-white via-[#fff7df] to-[#eef8f2] py-10 text-primary md:py-12">
      <div className="absolute inset-x-0 top-0 h-1 bg-accent" />
      <div className="container-page">
        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {counters.map(({ value, suffix, label }) => (
            <AnimatedItem key={label}>
              <p className="font-heading text-4xl font-extrabold leading-none text-primary md:text-5xl">
                <AnimatedCounter end={value} suffix={suffix} />
              </p>
              <p className="mt-3 font-heading text-xs font-extrabold uppercase tracking-wide text-textDark/75 md:text-sm">
                {label}
              </p>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ── HERO ──────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] overflow-hidden bg-primary text-white">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay muted loop playsInline
        poster={images.panels}
      >
        <source src={heroVideoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-primary/75" />

      {/* Content */}
      <div className="container-page relative z-10 flex h-full items-center py-8">
        <div className="w-full max-w-3xl">
          <motion.p
            className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.35em] text-accent sm:text-sm sm:tracking-[0.5em]"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            Powering Homes &amp; Businesses
          </motion.p>
          <h1 className="font-heading text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl">
            {['Clean,', 'Affordable', '&', 'Reliable', 'Solar'].map((word, i) => (
              <motion.span
                key={word}
                className="mr-3 inline-block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.15 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="mt-4 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-accent/90 sm:text-sm sm:tracking-[0.2em]"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
          >
            End-to-end solar solutions by ANBU Engineering Services.
          </motion.p>
          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
          >
            <Link to="/contact" className="rounded-full bg-accent px-6 py-3 font-heading text-sm font-bold text-primary transition hover:bg-white hover:text-primary sm:px-8 sm:py-4">
              Get a Quote
            </Link>
            <Link to="/products" className="rounded-full border-2 border-white/50 px-6 py-3 font-heading text-sm font-bold text-white transition hover:border-accent hover:text-accent sm:px-8 sm:py-4">
              Explore Services
            </Link>
          </motion.div>
          <motion.div
            className="mt-6 flex flex-wrap gap-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
          >
            {['250+ MWp Installed', 'Established 2019', '4 States Covered'].map((badge) => (
              <span key={badge} className="flex items-center gap-2 text-xs font-semibold text-white/70 sm:text-sm">
                <FiCheckCircle className="text-accent" /> {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>



      <FiChevronDown className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce text-4xl text-accent" />
    </section>
  );
}


/* ── WHY US ────────────────────────────────────────────────────────── */
function WhyUs() {
  return (
    <AnimatedSection className="section-pad bg-white">
      <div className="container-page">
        <AnimatedItem className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-accent">Why Choose Us</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-primary md:text-5xl">
            Proven engineering resources for demanding project sites
          </h2>
          <p className="mt-4 text-lg text-textDark/65">
            AES combines qualified manpower, owned machinery, flexible management, quality control, and experience across utility solar and allied construction works.
          </p>
        </AnimatedItem>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyUs.map(({ icon: Icon, title, text }) => (
            <AnimatedItem key={title}
              className="group rounded-xl border border-primary/10 bg-surface p-7 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl">
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-primary text-2xl text-accent transition group-hover:bg-accent group-hover:text-primary">
                <Icon />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-textDark/65">{text}</p>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ── SERVICES ──────────────────────────────────────────────────────── */
function ServicesSection() {
  return (
    <AnimatedSection className="section-pad" style={{ background: '#f5f7fa' }}>
      <div className="container-page">
        <AnimatedItem className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-accent">What We Offer</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-primary sm:text-4xl md:text-5xl">OUR SERVICES</h2>
            <p className="mt-3 max-w-2xl text-textDark/65">
              Explore our end-to-end solar solutions designed for homes, businesses, and industries. We provide reliable installation, commissioning, and support services tailored to customer needs.
            </p>
          </div>
          <Link to="/contact" className="w-fit shrink-0 rounded-full bg-accent px-7 py-3 font-heading font-bold text-primary transition hover:bg-primary hover:text-white">
            Explore Services
          </Link>
        </AnimatedItem>
        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homeServices.map(({ icon: Icon, badge, img, title, text, tags }) => (
            <AnimatedItem key={title} className="h-full">
              <div className="group flex h-full min-h-[500px] flex-col overflow-hidden rounded-xl bg-primary shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* Card image */}
                <div className="relative h-52 w-full shrink-0 overflow-hidden">
                  <img src={img} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-primary/30" />
                  {/* Badge */}
                  <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 font-heading text-xs font-bold text-primary">
                    {badge}
                  </span>
                  {/* Icon box */}
                  <span className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-xl bg-accent text-xl text-primary shadow-soft">
                    <Icon />
                  </span>
                </div>
                {/* Card body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="min-h-[3rem] font-heading text-lg font-extrabold leading-6 tracking-wide text-white">{title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-white/65">{text}</p>
                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                    {tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-accent/50 px-3 py-1 font-heading text-xs font-semibold text-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ── BEST SOLAR FIT ───────────────────────────────────────────────── */
function BestSolarFit() {
  return (
    <AnimatedSection className="section-pad bg-white">
      <div className="container-page">
        <AnimatedItem className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-accent">Best Solar Choice</p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-primary md:text-5xl">
              Pick the Right Solar System
            </h2>
          </div>
          <p className="text-lg leading-8 text-textDark/65">
            We recommend system size after checking bill amount, roof space, shade, load usage, and future expansion needs.
          </p>
        </AnimatedItem>

        <div className="mt-10 space-y-8 lg:space-y-[-78px]">
          {solarFit.map(({ icon: Icon, img, title, range, bestFor, points }, index) => (
            <AnimatedItem key={title} className="h-full lg:sticky lg:top-28" style={{ zIndex: index + 1 }}>
              <div className="group overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-soft lg:grid lg:min-h-[520px] lg:grid-cols-[0.95fr_1.05fr] lg:shadow-xl">
                <div className="flex min-h-[420px] flex-col p-6 sm:p-8 lg:p-10">
                  <span className="w-fit rounded-full bg-accent px-4 py-2 font-heading text-xs font-extrabold text-primary shadow-lg">
                    {title.replace(' Rooftop', '').replace(' Solar', ' Solar')}
                  </span>
                  <div className="flex items-start justify-between gap-4">
                    <span className="mt-7 grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-xl text-accent transition group-hover:bg-accent group-hover:text-primary">
                      <Icon />
                    </span>
                    <span className="mt-7 rounded-full bg-primary/10 px-4 py-2 font-heading text-sm font-bold text-primary">
                      {range}
                    </span>
                  </div>
                  <h3 className="mt-6 font-heading text-3xl font-extrabold leading-tight text-primary md:text-4xl">{title}</h3>
                  <p className="mt-4 text-base leading-8 text-textDark/70">{bestFor}</p>
                  <div className="mt-7 grid gap-3 border-t border-primary/10 pt-5 sm:grid-cols-3 lg:grid-cols-1">
                    {points.map((point) => (
                      <p key={point} className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3 text-sm font-bold text-textDark/70 transition group-hover:bg-primary group-hover:text-white">
                        <FiCheckCircle className="shrink-0 text-accent" /> {point}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="relative h-72 overflow-hidden sm:h-96 lg:h-auto lg:min-h-[520px] lg:p-5">
                  <div className="h-full overflow-hidden lg:rounded-xl">
                    <img src={img} alt={title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent lg:hidden" />
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ── INDUSTRIAL SOLAR ──────────────────────────────────────────────── */
function IndustrialSolar() {
  return (
    <AnimatedSection className="section-pad bg-surface">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <AnimatedItem>
            <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-accent">Industrial Solar</p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-primary md:text-5xl">
              Solar for Factories, Warehouses &amp; Mills
            </h2>
            <p className="mt-5 text-lg leading-8 text-textDark/65">
              Industrial solar needs proper load analysis, strong mounting structure, safe electrical protection, and reliable monitoring. We plan each project for high daily usage and long-term performance.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {industrialBenefits.map((benefit) => (
                <p key={benefit} className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm font-semibold text-textDark/70 shadow-soft">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-accent" /> {benefit}
                </p>
              ))}
            </div>
            <Link to="/contact" className="mt-8 inline-flex rounded-full bg-primary px-8 py-4 font-heading font-bold text-white transition hover:bg-accent hover:text-primary">
              Request Industrial Site Visit
            </Link>
          </AnimatedItem>

          <div className="grid gap-5 sm:grid-cols-2">
            {industrialDetails.map(({ icon: Icon, title, text }) => (
              <AnimatedItem key={title} className="h-full">
                <div className="h-full rounded-xl border border-primary/10 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-xl text-accent">
                    <Icon />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-primary">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-textDark/65">{text}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ── CAPACITY (VIDEO BG) ───────────────────────────────────────────── */
function Capacity() {
  return (
    <AnimatedSection className="relative overflow-hidden py-16 text-white md:py-28">
      <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline>
        <source src={capacityVideoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-primary/70" />
      <div className="container-page relative z-10 text-center">
        <AnimatedItem>
          <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-accent">Our Impact</p>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-[0.05em] sm:text-5xl sm:tracking-[0.08em]">Capacity &amp; Reach</h2>
          <p className="mt-4 font-semibold uppercase tracking-[0.1em] text-accent sm:tracking-[0.22em]">Delivering clean energy across Tamil Nadu and beyond</p>
        </AnimatedItem>
        <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {impactCards.map(({ icon: Icon, title, value, suffix, decimals }) => (
            <AnimatedItem key={title}>
              <span className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-xl bg-accent/20 text-2xl text-accent">
                <Icon />
              </span>
              <p className="font-heading text-4xl font-bold">
                <AnimatedCounter end={value} decimals={decimals || 0} suffix={suffix} />
              </p>
              <p className="mt-3 text-sm font-bold uppercase tracking-wide text-accent">{title}</p>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ── HOW IT WORKS ──────────────────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    { n: '01', title: 'Free Site Visit',        text: 'We visit your site, assess roof condition, shading, load, and electricity usage at no cost.' },
    { n: '02', title: 'System Design',           text: 'Custom solar system sized for your consumption, budget, and roof space with detailed quotation.' },
    { n: '03', title: 'Professional Install',    text: 'Certified team handles structure, panel mounting, wiring, inverter, earthing, and safety checks.' },
    { n: '04', title: 'Commissioning & Handover',text: 'Full system testing, net meter coordination, documentation, and after-sales service support.' },
  ];
  return (
    <AnimatedSection className="section-pad bg-white">
      <div className="container-page">
        <AnimatedItem className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-accent">Simple Process</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-primary md:text-5xl">How It Works</h2>
          <p className="mt-4 text-textDark/65">Going solar with us is simple — four clear steps from first visit to clean energy generation.</p>
        </AnimatedItem>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ n, title, text }) => (
            <AnimatedItem key={n}>
              <div className="group relative rounded-xl bg-surface p-7 shadow-soft transition hover:-translate-y-2 hover:shadow-xl">
                <span className="font-heading text-5xl font-extrabold text-accent/30 transition group-hover:text-accent">{n}</span>
                <h3 className="mt-3 font-heading text-lg font-bold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-textDark/65">{text}</p>
              </div>
            </AnimatedItem>
          ))}
        </div>
        <AnimatedItem className="mt-10 text-center">
          <Link to="/contact" className="inline-flex rounded-full bg-primary px-8 py-4 font-heading font-bold text-white transition hover:bg-accent hover:text-primary">
            Start with a Free Site Visit
          </Link>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}

/* ── AWARDS ────────────────────────────────────────────────────────── */
function Awards() {
  const CertBadge = ({ name, image }) => (
    <div className="mx-5 flex h-24 w-36 flex-col items-center justify-center gap-2 rounded-xl border border-primary/10 bg-white grayscale transition hover:grayscale-0">
      <img src={image} alt={name} className="h-10 w-24 object-contain" />
      <span className="font-heading text-sm font-bold text-primary">{name}</span>
    </div>
  );

  const ClientBadge = ({ name, image }) => (
    <div className="mx-5 flex h-32 w-64 items-center justify-center rounded-2xl border border-primary/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/70 hover:shadow-soft">
      <img
        src={image}
        alt={`${name} logo`}
        loading="lazy"
        decoding="async"
        className="max-h-24 w-full object-contain"
      />
    </div>
  );

  return (
    <AnimatedSection className="section-pad bg-surface">
      <div className="container-page text-center">
        <AnimatedItem>
          <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-accent">Trusted Standards</p>
          <h2 className="mt-2 font-heading text-4xl font-bold text-primary">CERTIFICATIONS &amp; PARTNERS</h2>
        </AnimatedItem>
        <div className="masked-marquee mt-10">
          <Marquee pauseOnHover speed={72}>
            {certifications.map(({ name, image }) => <CertBadge key={name} name={name} image={image} />)}
          </Marquee>
        </div>
        <AnimatedItem>
          <p className="mt-16 font-heading text-sm font-bold uppercase tracking-[0.3em] text-accent">Client Logos</p>
          <h3 className="mt-2 font-heading text-3xl font-bold text-primary">QUALITY PARTNERS</h3>
        </AnimatedItem>
        <div className="masked-marquee mt-8">
          <Marquee pauseOnHover direction="right" speed={76}>
            {partners.map(({ name, image }) => <ClientBadge key={name} name={name} image={image} />)}
          </Marquee>
        </div>
      </div>
    </AnimatedSection>
  );
}

/* ── TESTIMONIALS ──────────────────────────────────────────────────── */
function Testimonials() {
  return (
    <AnimatedSection className="section-pad bg-primary text-white">
      <div className="container-page">
        <AnimatedItem className="text-center">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-accent/90">Our Team</p>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Meet Our Engineering Experts</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-white/60">
            Experienced professionals delivering reliable solar, electrical, and construction engineering solutions.
          </p>
        </AnimatedItem>
        <AnimatedItem className="mt-12">
          <Swiper
            className="testimonial-swiper"
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            grabCursor
            autoplay={{ delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {engineeringTeam.map((member) => (
              <SwiperSlide key={member.number}>
                <article className="flex h-full min-h-[368px] w-full flex-col rounded-xl border border-accent/30 bg-white/[0.06] p-7 sm:p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-accent/20 font-heading text-sm font-bold text-accent">
                    {member.number}
                  </span>
                  <div className="mt-6 flex-1">
                    <p className="font-heading text-xs font-bold uppercase tracking-[0.12em] text-accent">
                      {member.designation}
                    </p>
                    <h3 className="mt-4 font-heading text-2xl font-bold text-white">{member.name}</h3>
                    <p className="mt-2 text-white/60">{member.qualification}</p>
                  </div>
                  <footer className="mt-6 border-t border-white/10 pt-6">
                    <p className="font-heading text-sm font-bold text-accent">{member.experience}</p>
                    <p className="mt-3 text-sm leading-7 text-white/60">{member.description}</p>
                  </footer>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}

/* ── SAVINGS CALCULATOR ────────────────────────────────────────────── */
function Savings() {
  const [bill, setBill] = useState(6000);
  const [roof, setRoof] = useState(700);
  const [type, setType] = useState('Residential');
  const system  = useMemo(() => Math.min(bill / 1000, roof / 100), [bill, roof]);
  const savings = system * 120 * 8 * 0.9;
  const co2     = system * 1500;
  return (
    <AnimatedSection className="section-pad bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
        <AnimatedItem>
          <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-accent">Savings Calculator</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-primary sm:text-4xl md:text-5xl">Calculate Your Solar Savings</h2>
          <p className="mt-5 max-w-xl text-lg text-textDark/65">
            Estimate system size, monthly savings, and yearly CO₂ offset for your property using simple planning inputs.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              'Savings start from month one of generation',
              'Average payback period: 4–6 years',
              'System lifespan: 25+ years of clean power',
            ].map((pt) => (
              <li key={pt} className="flex items-start gap-3 text-textDark/70">
                <FiCheckCircle className="mt-1 shrink-0 text-accent" /> {pt}
              </li>
            ))}
          </ul>
        </AnimatedItem>
        <AnimatedItem className="rounded-xl bg-surface p-7 shadow-soft">
          <Control label={`Monthly Electricity Bill (₹): ${bill.toLocaleString()}`}>
            <input className="slider-accent w-full" type="range" min="500" max="20000" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
          </Control>
          <Control label={`Roof Area Available (sq. ft.): ${roof.toLocaleString()}`}>
            <input className="slider-accent w-full" type="range" min="100" max="2000" value={roof} onChange={(e) => setRoof(Number(e.target.value))} />
          </Control>
          <Control label="Property Type">
            <select className="w-full rounded-xl border border-primary/15 p-3" value={type} onChange={(e) => setType(e.target.value)}>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Industrial</option>
            </select>
          </Control>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Result label="System Size"       value={system}  decimals={1} suffix=" kW" />
            <Result label="Monthly Savings"   value={savings} prefix="₹" />
            <Result label="Yearly CO₂ Offset" value={co2}    suffix=" kg" />
          </div>
          <p className="mt-4 text-xs text-textDark/50">*Estimates only. Actual yield depends on tariff, location, shading, and system design.</p>
          <Link to="/contact" className="mt-5 inline-flex rounded-full bg-accent px-7 py-3 font-heading font-bold text-primary transition hover:bg-primary hover:text-white">
            Get a Detailed Quote
          </Link>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}

function Control({ label, children }) {
  return (
    <label className="mb-5 block font-semibold text-primary">
      {label}<div className="mt-3">{children}</div>
    </label>
  );
}

function Result({ label, value, prefix = '', suffix = '', decimals = 0 }) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-soft">
      <p className="text-xs text-textDark/55">{label}</p>
      <p className="mt-2 font-heading text-2xl font-bold text-primary">
        <AnimatedCounter key={value.toFixed(2)} end={value} prefix={prefix} suffix={suffix} decimals={decimals} />
      </p>
    </div>
  );
}

/* ── FINAL CTA ─────────────────────────────────────────────────────── */
function FinalCta() {
  const [ok, setOk]       = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const { publicApi } = await import('../admin/api.js');
    await publicApi.subscribeNewsletter(email);
    setOk(true);
  };
  return (
    <AnimatedSection className="section-pad bg-surface">
      <div className="container-page">
        {/* Newsletter */}
        <div className="rounded-2xl bg-white p-8 shadow-soft">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="font-heading text-2xl font-bold text-primary">Stay Updated</h3>
              <p className="mt-1 text-textDark/60">Get solar tips, news, and subsidy updates delivered to your inbox.</p>
            </div>
            {ok ? (
              <p className="font-semibold text-primary"><FiCheckCircle className="mr-2 inline text-accent" />Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3 sm:flex-row">
                <input required type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)}
                  className="min-w-0 flex-1 rounded-full border border-primary/15 px-5 py-3 outline-none focus:border-accent" />
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-heading font-bold text-white transition hover:bg-accent hover:text-primary">
                  <FiSend /> Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Rating */}
        <div className="mt-10 text-center">
          <StarRating />
          <a href="https://www.google.com/search?q=ANBU+ENGINEERING+SERVICES+reviews"
            className="mt-3 inline-block font-semibold text-primary hover:text-accent">
            Click the stars to share your experience!
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
