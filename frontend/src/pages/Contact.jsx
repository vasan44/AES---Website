import { useRef, useState } from 'react';
import { FiBriefcase, FiCheckCircle, FiLoader, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection.jsx';
import PageHeader from '../components/PageHeader.jsx';
import { company } from '../data/siteData.js';
import { publicApi } from '../admin/api.js';

function ContactCard({ icon: Icon, title, text, href, onClick, sub }) {
  const inner = (
    <div className="group flex cursor-pointer gap-4 rounded-2xl bg-surface p-5 transition hover:shadow-md">
      <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-xl text-accent transition group-hover:bg-accent group-hover:text-primary">
        <Icon />
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-textDark/40">{title}</p>
        <p className="mt-1 font-heading font-bold text-primary group-hover:text-secondary">{text}</p>
        {sub && <p className="mt-0.5 text-xs text-textDark/50">{sub}</p>}
      </div>
    </div>
  );
  if (onClick) return <button onClick={onClick} className="block w-full text-left">{inner}</button>;
  return <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block">{inner}</a>;
}

export default function Contact() {
  const [status, setStatus]       = useState('idle'); // idle | sending | sent | error
  const [copied, setCopied]       = useState(false);
  const [fields, setFields]       = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const update = (e) => setFields((f) => ({ ...f, [e.target.name]: e.target.value }));

  const copyGSTIN = () => {
    navigator.clipboard.writeText(company.gstin).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const buildWhatsAppText = () => {
    return encodeURIComponent(
      `*New Enquiry – ANBU ENGINEERING SERVICES*\n\n` +
      `👤 Name: ${fields.name}\n` +
      `📧 Email: ${fields.email}\n` +
      `📞 Phone: ${fields.phone || '—'}\n` +
      `📌 Subject: ${fields.subject}\n\n` +
      `💬 Message:\n${fields.message}`
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      await publicApi.submitContact(fields);
      setStatus('sent');
      setFields({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <PageHeader title="Contact" />
      <AnimatedSection className="section-pad bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-2">

          {/* ── Form ── */}
          <AnimatedItem className="rounded-2xl bg-surface p-8 shadow-soft">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-accent">Send a Message</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-primary">Get in Touch</h2>
            <p className="mt-2 text-textDark/60">
              Submit the form — we'll send your enquiry to our email <span className="font-semibold text-primary">and</span> open WhatsApp with a pre-filled message.
            </p>

            {status === 'sent' ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-green-50 py-12 text-center"
              >
                <FiCheckCircle className="text-5xl text-green-500" />
                <h3 className="font-heading text-2xl font-bold text-green-700">Message Sent!</h3>
                <p className="max-w-xs text-green-600">Your enquiry was successfully sent to {company.email}</p>
                <button onClick={() => setStatus('idle')} className="mt-2 text-sm font-semibold text-textDark/50 underline">
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field name="name"    label="Full Name *"     type="text"  value={fields.name}    onChange={update} required />
                  <Field name="email"   label="Email Address *" type="email" value={fields.email}   onChange={update} required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field name="phone"   label="Phone Number"    type="text"  value={fields.phone}   onChange={update} />
                  <Field name="subject" label="Subject *"       type="text"  value={fields.subject} onChange={update} required />
                </div>
                <label className="block">
                  <span className="text-sm font-bold text-primary">Your Message *</span>
                  <textarea
                    name="message"
                    value={fields.message}
                    onChange={update}
                    required
                    rows={5}
                    className="mt-2 w-full resize-none rounded-xl border border-primary/10 px-5 py-4 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="Tell us about your project or enquiry..."
                  />
                </label>

                {status === 'error' && (
                  <p className="rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-600">
                    Email sending failed. Please try again or use the WhatsApp button to contact us directly.
                  </p>
                )}

                <div className="grid gap-3 sm:grid-cols-2">
                  {/* Primary — Email only */}
                  <motion.button
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary py-4 font-heading font-bold text-white transition hover:bg-accent hover:text-primary disabled:opacity-60"
                  >
                    {status === 'sending'
                      ? <><FiLoader className="animate-spin" /> Sending…</>
                      : <><FiSend /> Send Message</>
                    }
                  </motion.button>

                  {/* Secondary — WhatsApp direct */}
                  <a
                    href={`https://wa.me/${company.whatsapp}?text=${buildWhatsAppText()}`}
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 py-4 font-heading font-bold text-white transition hover:bg-green-600"
                  >
                    <FaWhatsapp size={18} /> Chat on WhatsApp
                  </a>
                </div>

                <p className="text-center text-xs text-textDark/40">
                  Send Message button sends to <span className="font-semibold">{company.email}</span>. WhatsApp button opens chat directly.
                </p>
              </form>
            )}
          </AnimatedItem>

          {/* ── Contact Info + Map ── */}
          <AnimatedItem className="flex flex-col gap-5">
            <ContactCard icon={FiMapPin}    title="Address" text={company.address}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`}
              sub="Click to open in Google Maps" />
            <ContactCard icon={FiPhone}     title="Phone"   text={`+91 ${company.phone}`}
              href={`tel:+91${company.phone}`} sub="Tap to call" />
            <ContactCard icon={FiMail}      title="Email"   text={company.email}
              href={`mailto:${company.email}`} sub="Tap to send email" />
            <ContactCard icon={FaBriefcase} title="GSTIN"   text={company.gstin}
              sub={copied ? '✓ Copied!' : 'Click to copy'} onClick={copyGSTIN} />

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank" rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-green-500 p-5 text-white transition hover:bg-green-600"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/20 text-2xl">
                <FaWhatsapp />
              </span>
              <div>
                <p className="font-heading font-bold">WhatsApp Us</p>
                <p className="text-sm text-white/80">+91 {company.phone} · Available Mon–Sat</p>
              </div>
            </a>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <iframe
                title="Office Location"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`}
              />
            </div>

            {/* Hours */}
            <div className="rounded-2xl bg-primary p-6 text-white">
              <h3 className="font-heading text-xl font-bold">Business Hours</h3>
              <div className="mt-4 space-y-2 text-white/75">
                <p className="flex justify-between"><span>Monday – Friday</span><span className="font-semibold text-accent">9:30 AM – 6:30 PM</span></p>
                <p className="flex justify-between"><span>Saturday</span><span className="font-semibold text-accent">9:30 AM – 2:00 PM</span></p>
                <p className="flex justify-between"><span>Sunday</span><span className="font-semibold text-white/40">Closed</span></p>
              </div>
            </div>
          </AnimatedItem>

        </div>
      </AnimatedSection>
    </>
  );
}

function Field({ label, ...props }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-primary">{label}</span>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-primary/10 px-5 py-4 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </label>
  );
}

/* local alias so we don't need an extra import */
function FaBriefcase(props) { return <FiBriefcase {...props} />; }
