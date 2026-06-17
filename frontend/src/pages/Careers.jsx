import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiBriefcase, FiCheckCircle, FiChevronDown,
  FiMail, FiMapPin, FiPhone, FiSend, FiUser,
  FiZap, FiShield, FiSun, FiAward, FiTrendingUp, FiUsers,
} from 'react-icons/fi';
import { FaLeaf, FaSolarPanel } from 'react-icons/fa6';
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection.jsx';
import PageHeader from '../components/PageHeader.jsx';
import { careers } from '../data/siteData.js';
import { publicApi } from '../admin/api.js';

/* ── extra data ──────────────────────────────────────────────────────────── */
const whyJoin = [
  { icon: FiSun,      title: 'Clean Energy Mission',   desc: 'Work on projects that directly reduce carbon emissions and power real communities.' },
  { icon: FiTrendingUp, title: 'Fast-Growing Sector',  desc: 'Solar is India\'s fastest-growing energy sector — your career grows with it.' },
  { icon: FiAward,    title: 'Skill Development',       desc: 'Hands-on training in PVsyst, AutoCAD, SCADA, EL testing, and site safety.' },
  { icon: FiUsers,    title: 'Collaborative Culture',   desc: 'Small, expert teams where your work has direct visible impact every day.' },
  { icon: FiShield,   title: 'Stable & Certified Work', desc: 'MNRE-aligned projects with proper documentation, HSE norms, and traceability.' },
  { icon: FiZap,      title: 'Performance Benefits',    desc: 'Incentives tied to project delivery, quality scores, and customer satisfaction.' },
];

const benefits = [
  '🏥 Health insurance coverage',
  '📅 Flexible leave policy',
  '🎓 Training & certification support',
  '🌿 Work on green energy projects',
  '📍 Multi-location opportunities',
  '💰 Performance-linked incentives',
  '🔧 Hands-on field exposure',
  '📈 Clear growth path',
];

const initialForm = {
  name: '', phone: '', email: '',
  position: careers[0]?.[0] || '',
  experience: '', resume: '', message: '',
};

/* ══════════════════════════════════════════════════════════════════════════ */
export default function Careers() {
  const [open, setOpen]   = useState(null);
  const [form, setForm]   = useState({ ...initialForm });
  const [errors, setErrors] = useState({});
  const [sent, setSent]   = useState(false);
  const formRef           = useRef(null);

  const applyForJob = (i) => {
    setOpen(i);
    setForm((f) => ({ ...f, position: careers[i][0] }));
    setSent(false);
    setErrors({});
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
  };

  const toggleAccordion = (i) => setOpen(open === i ? null : i);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((f) => ({ ...f, [name]: '' }));
  };

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim())    errs.name     = 'Name is required';
    if (!form.phone.trim())   errs.phone    = 'Phone is required';
    if (form.phone && !/^[0-9+\-\s]{8,15}$/.test(form.phone)) errs.phone = 'Enter a valid phone';
    if (!form.email.trim())   errs.email    = 'Email is required';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.position)       errs.position = 'Select a position';
    if (!form.experience)     errs.experience = 'Select experience';
    setErrors(errs);
    if (Object.keys(errs).length) return;
    await publicApi.submitApplication(form);
    setSent(true);
    setForm({ ...initialForm });
  };

  return (
    <>
      <PageHeader title="Careers" />

      {/* ── Why Join ───────────────────────────────────────────────────────── */}
      <AnimatedSection className="section-pad bg-surface">
        <div className="container-page">
          <AnimatedItem className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.35em] text-accent">Why ANBU ENGINEERING</p>
            <h2 className="mt-3 font-heading text-4xl font-extrabold text-primary md:text-5xl">
              Power Your Career with Solar
            </h2>
            <div className="mx-auto mt-4 flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-accent" />
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="h-px w-16 bg-accent" />
            </div>
            <p className="mt-5 text-lg leading-8 text-textDark/65">
              Join a team that builds real solar projects across Tamil Nadu and beyond.
              We offer structured growth, hands-on learning, and meaningful work.
            </p>
          </AnimatedItem>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyJoin.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedItem key={title}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(14,26,61,0.12)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group h-full rounded-2xl bg-white p-7 shadow-soft"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-surface text-2xl text-primary transition group-hover:bg-accent group-hover:text-primary">
                    <Icon />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-primary">{title}</h3>
                  <p className="mt-3 leading-7 text-textDark/65">{desc}</p>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Benefits strip ─────────────────────────────────────────────────── */}
      <div className="bg-primary py-14">
        <div className="container-page">
          <AnimatedItem className="mb-10 text-center">
            <h3 className="font-heading text-3xl font-bold text-white">Employee Benefits</h3>
            <p className="mt-2 text-white/60">What you get when you join our team</p>
          </AnimatedItem>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {benefits.map((b) => (
              <motion.div
                key={b}
                whileHover={{ scale: 1.04 }}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-center text-sm font-semibold text-white/80"
              >
                {b}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Open Roles + Application Form ──────────────────────────────────── */}
      <AnimatedSection className="section-pad bg-surface">
        <div className="container-page">
          <AnimatedItem className="mb-12 text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.35em] text-accent">We're Hiring</p>
            <h2 className="mt-3 font-heading text-4xl font-extrabold text-primary md:text-5xl">Open Positions</h2>
            <div className="mx-auto mt-4 flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-accent" />
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="h-px w-16 bg-accent" />
            </div>
          </AnimatedItem>

          <div className="grid gap-8 lg:grid-cols-[1fr_480px] lg:items-start">

            {/* Accordion jobs */}
            <AnimatedItem className="space-y-4">
              {careers.map(([title, location, type, desc], i) => (
                <motion.article
                  key={title}
                  layout
                  className="overflow-hidden rounded-2xl bg-white shadow-soft"
                >
                  <button
                    onClick={() => toggleAccordion(i)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="flex items-start gap-4">
                      <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                        <FaSolarPanel />
                      </span>
                      <span>
                        <strong className="font-heading text-xl text-primary">{title}</strong>
                        <span className="mt-1 flex items-center gap-2 text-sm text-textDark/60">
                          <FiMapPin className="text-accent" /> {location}
                          <span className="ml-2 rounded-full bg-accent/15 px-3 py-0.5 font-semibold text-primary">{type}</span>
                        </span>
                      </span>
                    </span>
                    <motion.span
                      animate={{ rotate: open === i ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 text-primary/40"
                    >
                      <FiChevronDown size={22} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="border-t border-primary/10 px-6 pb-6 pt-5">
                          <p className="leading-7 text-textDark/70">{desc}</p>
                          <ul className="mt-4 space-y-2 text-sm text-textDark/65">
                            <li className="flex items-center gap-2"><FiCheckCircle className="text-accent" /> Competitive salary based on experience</li>
                            <li className="flex items-center gap-2"><FiCheckCircle className="text-accent" /> On-site and remote project exposure</li>
                            <li className="flex items-center gap-2"><FiCheckCircle className="text-accent" /> MNRE / NABCEP certification support</li>
                          </ul>
                          <button
                            onClick={() => applyForJob(i)}
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-heading font-bold text-primary shadow-md transition hover:bg-primary hover:text-white"
                          >
                            <FiSend size={15} /> Apply Now
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              ))}

              {/* Culture blurb */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl bg-primary p-7 text-white"
              >
                <FaLeaf className="text-3xl text-accent" />
                <h4 className="mt-4 font-heading text-xl font-bold">Our Culture</h4>
                <p className="mt-3 leading-7 text-white/70">
                  We believe clean energy starts with clean processes. Every team member
                  owns their work end-to-end — from site survey to handover. No red tape,
                  just results that matter for customers and the planet.
                </p>
              </motion.div>
            </AnimatedItem>

            {/* Application form */}
            <AnimatedItem>
              <motion.div
                ref={formRef}
                layout
                className="sticky top-28 rounded-2xl bg-white p-8 shadow-soft"
              >
                <div className="mb-7">
                  <p className="font-heading text-sm font-bold uppercase tracking-[0.25em] text-accent">Application Form</p>
                  <h3 className="mt-2 font-heading text-3xl font-bold text-primary">Apply for a Position</h3>
                  <p className="mt-2 text-textDark/60">Fill all required fields. We respond within 3 business days.</p>
                </div>

                {sent ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center gap-4 rounded-2xl bg-green-50 py-14 text-center"
                  >
                    <FiCheckCircle className="text-5xl text-green-500" />
                    <h4 className="font-heading text-2xl font-bold text-green-700">Application Submitted!</h4>
                    <p className="max-w-xs text-green-600">Our team will review your application and contact you within 3 business days.</p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-2 rounded-full bg-primary px-6 py-3 font-heading font-bold text-white"
                    >
                      Apply for Another Role
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={submit} className="grid gap-5">
                    <Input icon={FiUser}  label="Full Name *"      name="name"  value={form.name}  error={errors.name}  onChange={update} placeholder="Your full name" />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input icon={FiPhone} label="Phone *"        name="phone" value={form.phone} error={errors.phone} onChange={update} placeholder="+91 9876543210" />
                      <Input icon={FiMail}  label="Email *"        name="email" value={form.email} error={errors.email} onChange={update} placeholder="you@email.com" type="email" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Select label="Position *" name="position" value={form.position} error={errors.position} onChange={update}>
                        <option value="">Select position</option>
                        {careers.map(([t]) => <option key={t}>{t}</option>)}
                      </Select>
                      <Select label="Experience *" name="experience" value={form.experience} error={errors.experience} onChange={update}>
                        <option value="">Select experience</option>
                        <option>Fresher</option>
                        <option>1–2 years</option>
                        <option>3–5 years</option>
                        <option>5+ years</option>
                      </Select>
                    </div>
                    <Input icon={FiBriefcase} label="Resume / Portfolio Link" name="resume" value={form.resume} onChange={update} placeholder="Google Drive, LinkedIn, or portfolio URL" />
                    <label>
                      <span className="text-sm font-bold text-primary">Cover Message</span>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={update}
                        rows={4}
                        className="mt-2 w-full resize-none rounded-xl border border-primary/10 px-5 py-4 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                        placeholder="Tell us about your solar, electrical, or site experience."
                      />
                    </label>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 font-heading font-bold text-white transition hover:bg-accent hover:text-primary"
                    >
                      <FiSend /> Submit Application
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

/* ── Helpers ──────────────────────────────────────────────────────────────── */
function Input({ icon: Icon, label, error, ...props }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-primary">{label}</span>
      <span className={`mt-2 flex items-center gap-3 rounded-xl border bg-white px-4 transition focus-within:ring-2 focus-within:ring-accent/20 ${error ? 'border-red-400 focus-within:border-red-400' : 'border-primary/10 focus-within:border-accent'}`}>
        <Icon className="shrink-0 text-accent" />
        <input {...props} className="min-w-0 flex-1 bg-transparent py-4 outline-none" />
      </span>
      {error && <span className="mt-1 block text-xs font-semibold text-red-500">{error}</span>}
    </label>
  );
}

function Select({ label, error, children, ...props }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-primary">{label}</span>
      <select
        {...props}
        className={`mt-2 w-full rounded-xl border bg-white px-5 py-4 outline-none transition focus:ring-2 focus:ring-accent/20 ${error ? 'border-red-400' : 'border-primary/10 focus:border-accent'}`}
      >
        {children}
      </select>
      {error && <span className="mt-1 block text-xs font-semibold text-red-500">{error}</span>}
    </label>
  );
}
