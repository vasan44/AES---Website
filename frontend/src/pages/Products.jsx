import {
  FiBatteryCharging,
  FiCheckCircle,
  FiClipboard,
  FiHome,
  FiSettings,
  FiShield,
  FiSun,
  FiTool,
  FiZap,
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection.jsx';
import PageHeader from '../components/PageHeader.jsx';
import svc1 from '../assets/services/services1.png';
import svc2 from '../assets/services/services2.png';
import svc3 from '../assets/services/services3.png';
import svc4 from '../assets/services/inter.png';
import svc5 from '../assets/services/services5.png';
import svc6 from '../assets/services/services6.png';

const solarServices = [
  {
    icon: FiHome,
    image: svc1,
    title: 'Residential Rooftop Solar',
    text: 'Complete home solar installation with site survey, system sizing, panel mounting, inverter installation, safety protection, and commissioning support.',
  },
  {
    icon: FiZap,
    image: svc2,
    title: 'Commercial Solar Systems',
    text: 'Solar solutions for shops, schools, offices, hospitals, warehouses, and commercial buildings designed to reduce monthly electricity expenses.',
  },
  {
    icon: FiSun,
    image: svc3,
    title: 'Solar Plant Installation',
    text: 'PV module installation, MMS structure work, DC cabling, inverter setup, earthing, lightning protection, and full plant commissioning.',
  },
  {
    icon: FiSettings,
    image: svc4,
    title: 'Industrial Solar Installation',
    text: 'Solar installation for factories, warehouses, rice mills, workshops, and industrial buildings with load study, structure work, protection, and commissioning.',
  },
  {
    icon: FiClipboard,
    image: svc5,
    title: 'Net Metering & Subsidy Support',
    text: 'Guidance for documentation, application process, utility coordination, inspection support, and applicable government subsidy verification.',
  },
  {
    icon: FiTool,
    image: svc6,
    title: 'AMC & Solar Maintenance',
    text: 'Panel cleaning, inverter health check, cable inspection, generation monitoring, troubleshooting, and annual maintenance for better long-term performance.',
  },
];

const processSteps = [
  'Free site visit and electricity bill review',
  'Solar capacity calculation and roof shadow study',
  'Detailed quotation with panels, inverter, structure, and protection items',
  'Professional installation with safety checks',
  'Commissioning, documentation, and service support',
];

export default function Products() {
  return (
    <>
      <PageHeader title="Our Services" />
      <AnimatedSection className="section-pad bg-white">
        <div className="container-page">
          <AnimatedItem className="mx-auto max-w-4xl text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.34em] text-accent">What We Deliver</p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-primary md:text-5xl">
              Solar installation services built around your site.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-textDark/70">
              From roof survey to commissioning and AMC, every service is planned with safety, clean wiring, clear documentation, and long-term performance in mind.
            </p>
            <div className="mx-auto mt-7 grid max-w-3xl gap-3 sm:grid-cols-3">
              {['Site Survey', 'Safe Installation', 'Service Support'].map((item) => (
                <span key={item} className="rounded-full border border-primary/10 bg-surface px-4 py-3 font-heading text-sm font-bold text-primary">
                  {item}
                </span>
              ))}
            </div>
          </AnimatedItem>

          <div className="mt-14 grid items-stretch gap-7 md:grid-cols-2 xl:grid-cols-3">
            {solarServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} number={index + 1} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad bg-surface">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <AnimatedItem>
            <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-accent">Our Work Process</p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-primary md:text-5xl">
              From survey to commissioning, every step is structured.
            </h2>
            <p className="mt-5 leading-8 text-textDark/70">
              Solar performance depends on good planning. We check your roof condition, sanctioned load, monthly consumption, shade, cable route, and future expansion needs before suggesting a system.
            </p>
          </AnimatedItem>
          <AnimatedItem className="rounded-xl bg-white p-7 shadow-soft">
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-xl bg-surface p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary font-heading font-bold text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="self-center font-semibold leading-7 text-primary">{step}</p>
                </div>
              ))}
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad bg-white">
        <div className="container-page grid gap-6 md:grid-cols-3">
          <AnimatedItem className="rounded-xl bg-primary p-8 text-white shadow-soft">
            <FiShield className="text-5xl text-accent" />
            <h3 className="mt-5 font-heading text-2xl font-bold">Safe Installation</h3>
            <p className="mt-3 leading-7 text-white/75">Earthing, DC/AC protection, cable routing, mounting strength, and inverter placement are handled with practical safety checks.</p>
          </AnimatedItem>
          <AnimatedItem className="rounded-xl bg-surface p-8 shadow-soft">
            <FiSettings className="text-5xl text-accent" />
            <h3 className="mt-5 font-heading text-2xl font-bold text-primary">Right System Design</h3>
            <p className="mt-3 leading-7 text-textDark/70">System size is selected based on bill amount, available roof area, phase/load, consumption pattern, and budget.</p>
          </AnimatedItem>
          <AnimatedItem className="rounded-xl bg-surface p-8 shadow-soft">
            <FiCheckCircle className="text-5xl text-accent" />
            <h3 className="mt-5 font-heading text-2xl font-bold text-primary">After-Sales Support</h3>
            <p className="mt-3 leading-7 text-textDark/70">We support generation checks, maintenance visits, warranty guidance, and service calls after commissioning.</p>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </>
  );
}

function ServiceCard({ service, number }) {
  const Icon = service.icon;
  return (
    <AnimatedItem className="h-full">
      <motion.article
        className="group relative flex h-full min-h-[470px] flex-col overflow-hidden rounded-xl border border-primary/10 bg-white shadow-soft"
        whileHover={{ y: -10 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      >
        <div className="absolute inset-x-0 top-0 z-20 h-1 origin-left scale-x-0 bg-accent transition duration-500 group-hover:scale-x-100" />
        <span className="absolute right-5 top-5 z-20 rounded-full bg-white/90 px-3 py-1 font-heading text-sm font-extrabold text-primary shadow-lg">
          {String(number).padStart(2, '0')}
        </span>
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/75 via-primary/15 to-transparent" />
          <motion.div
            className="absolute bottom-5 left-5 z-20 grid h-14 w-14 place-items-center rounded-xl bg-accent text-2xl text-primary shadow-xl shadow-primary/25"
            whileHover={{ rotate: -6, scale: 1.08 }}
          >
            <Icon />
          </motion.div>
          <motion.img
            src={service.image}
            alt={`${service.title} service`}
            initial={{ scale: 1.12 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full object-cover group-hover:scale-110 transition duration-700"
          />
        </div>
        <div className="flex flex-1 flex-col p-7">
          <h3 className="min-h-[60px] font-heading text-xl font-extrabold uppercase leading-7 tracking-wide text-primary">
            {service.title}
          </h3>
          <p className="mt-4 flex-1 leading-7 text-textDark/70">{service.text}</p>
          <div className="mt-6 flex items-center justify-between border-t border-primary/10 pt-5">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-accent">Installation</span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-accent transition group-hover:bg-accent group-hover:text-primary">
              →
            </span>
          </div>
        </div>
      </motion.article>
    </AnimatedItem>
  );
}
