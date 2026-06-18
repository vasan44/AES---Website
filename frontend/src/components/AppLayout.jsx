import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMail, FiMapPin, FiMenu, FiPhone, FiX } from 'react-icons/fi';
import Logo from './Logo.jsx';
import { company, socials } from '../data/siteData.js';

const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/products' },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/media' },
  { label: 'Career', href: '/about/careers' },
  { label: 'Contact', href: '/contact' },
];

const footerVariants = {
  hidden: { opacity: 0, y: 44 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
      staggerChildren: 0.12,
    },
  },
};

const footerItemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  function close() {
    setOpen(false);
    document.body.style.overflow = '';
  }

  useEffect(() => {
    close();
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    const onResize = () => { if (window.innerWidth >= 1024) close(); };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    let frameId = 0;

    const updateNavbar = () => {
      const nextScrolled = window.scrollY > 24;
      setScrolled((current) => current === nextScrolled ? current : nextScrolled);
      frameId = 0;
    };

    const onScroll = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateNavbar);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const navBg = scrolled
    ? 'bg-primary shadow-xl'
    : 'bg-transparent';

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-300 ${navBg}`}>
        <div className={`container-page flex items-center justify-between transition-all duration-300 ${scrolled || !isHome ? 'h-20' : 'h-24'}`}>
          <Logo light />
          <div className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  `text-base py-2 px-4 font-semibold transition hover:bg-white/10 ${isActive ? 'text-accent' : 'text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <Link to="/contact" className="hidden rounded-full bg-accent px-6 py-3 font-heading text-sm font-bold text-primary transition hover:bg-secondary hover:text-white lg:inline-flex">Get a Quote</Link>
          <button
            aria-label="Open menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/30 lg:hidden"
            onClick={() => setOpen(true)}
          >
            <FiMenu size={24} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[998] bg-black/50 lg:hidden" onClick={close} />
      )}
      <div
        className={`fixed right-0 top-0 z-[999] flex h-screen w-[min(75vw,300px)] flex-col bg-primary text-white shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <Logo light />
          <button aria-label="Close menu" className="grid h-9 w-9 place-items-center rounded-full border border-white/20" onClick={close}>
            <FiX size={18} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {nav.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              onClick={close}
              className={({ isActive }) =>
                `block text-sm py-3.5 px-5 border-b border-white/10 font-semibold transition hover:bg-white/10 ${isActive ? 'text-accent' : 'text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="border-t border-white/10 p-4">
          <Link
            to="/contact"
            onClick={close}
            className="flex w-full items-center justify-center rounded-full bg-accent py-2.5 font-heading text-sm font-bold text-primary"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Footer() {
  return (
    <motion.footer
      className="relative overflow-hidden bg-primary pt-16 text-white"
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
    >
      <motion.div
        className="absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-accent via-secondary to-accent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
      <div className="container-page grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <motion.div variants={footerItemVariants}>
          <Logo light />
          <p className="mt-5 max-w-xs text-white/70">Engineering services with dependable project support, documentation, and customer response.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {socials.map(({ label, icon: Icon, href, color }) => (
              <motion.a
                aria-label={label}
                key={label}
                href={href}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition-colors"
                whileHover={{ y: -4, scale: 1.08, backgroundColor: color, borderColor: color }}
                whileTap={{ scale: 0.94 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
        <FooterList title="Quick Links" links={[['Home', '/'], ['About', '/about'], ['Projects', '/projects'], ['Gallery', '/media'], ['Career', '/about/careers'], ['Contact', '/contact']]} />
        <FooterList title="Solar Services" links={[['Residential Solar', '/products'], ['Commercial Solar', '/products'], ['On-Grid Systems', '/products'], ['Maintenance', '/contact']]} />
        <motion.div variants={footerItemVariants}>
          <h3 className="font-heading text-xl font-bold">Contact</h3>
          <div className="mt-5 space-y-4 text-white/75">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`}
              target="_blank" rel="noreferrer"
              className="group flex gap-3 transition hover:text-accent"
            >
              <FiMapPin className="mt-1 shrink-0 text-accent transition group-hover:-translate-y-0.5" />
              <span>{company.address}</span>
            </a>
            <a href={`tel:+91${company.phone}`} className="group flex gap-3 transition hover:text-accent">
              <FiPhone className="mt-1 shrink-0 text-accent transition group-hover:-translate-y-0.5" />
              <span>+91 {company.phone}</span>
            </a>
            <a href={`mailto:${company.email}`} className="group flex gap-3 transition hover:text-accent">
              <FiMail className="mt-1 shrink-0 text-accent transition group-hover:-translate-y-0.5" />
              <span>{company.email}</span>
            </a>
            <p className="flex gap-3">
              <FiBriefcase className="mt-1 shrink-0 text-accent" />
              <span>GSTIN: {company.gstin}</span>
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div variants={footerItemVariants} className="container-page mt-12 flex flex-col gap-4 border-t border-white/15 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <p>© 2026 {company.name}. All Rights Reserved.</p>
        <div className="flex gap-6"><a href="#">Privacy Policy</a><a href="#">Terms of Use</a></div>
      </motion.div>
    </motion.footer>
  );
}

function FooterList({ title, links }) {
  return (
    <motion.div variants={footerItemVariants}>
      <h3 className="font-heading text-xl font-bold">{title}</h3>
      <div className="mt-5 flex flex-col gap-3 text-white/75">
        {links.map(([label, href]) => (
          <motion.div key={label} whileHover={{ x: 6 }}>
            <Link to={href} className="inline-flex transition hover:text-accent">{label}</Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main><Outlet /></main>
      <Footer />
      {isHome && (
        <div className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-3 xl:flex">
          <span className="h-16 w-px bg-primary/30" />
          {socials.map(({ label, icon: Icon, href, color }) => (
            <a key={label} aria-label={label} href={href} target="_blank" rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary/30 bg-white text-primary shadow-soft transition hover:scale-110"
              onMouseEnter={e => { e.currentTarget.style.background = color; e.currentTarget.style.borderColor = color; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = ''; e.currentTarget.style.color = ''; }}
            >
              <Icon />
            </a>
          ))}
          <span className="h-16 w-px bg-primary/30" />
        </div>
      )}
    </>
  );
}
