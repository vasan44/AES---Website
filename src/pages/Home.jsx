import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Marquee from 'react-fast-marquee';
import { FiChevronDown, FiSend } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa6';
import AnimatedCounter from '../components/AnimatedCounter.jsx';
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection.jsx';
import ProductCard from '../components/ProductCard.jsx';
import StarRating from '../components/StarRating.jsx';
import {
  certifications, counters, countries, flagFor,
  images, impactCards, partners, products, socials, testimonials,
} from '../data/siteData.js';

export default function Home() {
  return (
    <>
      <Hero />
      <Climate />
      <Capacity />
      <ProductsHome />
      <Awards />
      <GlobalPresence />
      <Testimonials />
      <Savings />
      <FinalCta />
    </>
  );
}

function Hero() {
  const words = ['SOLAR', 'THROUGH', 'EXCELLENCE'];
  return (
    <section className="relative h-screen min-h-[720px] overflow-hidden bg-primary text-white">
      <Swiper modules={[Autoplay, EffectFade]} effect="fade" autoplay={{ delay: 5000 }} loop className="h-full">
        <SwiperSlide>
          {images.heroVideo ? (
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-55"
              autoPlay muted loop playsInline
              poster={images.panels}
            >
              <source src="/assets/videos/home video.mp4" type="video/mp4" />
            </video>
          ) : (
            <img src={images.panels} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/55 to-transparent" />
          <div className="container-page relative z-10 flex h-full items-center">
            <div>
              <p className="mb-4 font-semibold uppercase tracking-[0.5em] text-accent">POWERING</p>
              <h1 className="max-w-4xl font-heading text-6xl font-extrabold leading-tight md:text-8xl">
                {words.map((word, i) => (
                  <motion.span
                    key={word}
                    className="mr-5 inline-block"
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.18 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <HeroStat image={images.hero2} stat="3.10 GW"  label="ANNUAL PRODUCTION CAPACITY" />
        <HeroStat image={images.hero3} stat="8,600+"   label="MODULES DISPATCHED DAILY" />
      </Swiper>

      <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 xl:flex">
        <span className="h-16 w-px bg-white/35" />
        {socials.map(({ label, icon: Icon }) => (
          <a
            aria-label={label}
            key={label}
            href="#"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/45 text-white transition hover:border-accent hover:bg-accent hover:text-primary"
          >
            <Icon />
          </a>
        ))}
        <span className="h-16 w-px bg-white/35" />
      </div>
      <FiChevronDown className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce text-4xl text-accent" />
    </section>
  );
}

function HeroStat({ image, stat, label }) {
  return (
    <SwiperSlide>
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      <div className="container-page relative z-10 flex h-full items-center">
        <div>
          <p className="font-heading text-7xl font-extrabold text-white md:text-9xl">{stat}</p>
          <p className="mt-4 text-xl font-semibold uppercase tracking-[0.22em] text-accent">{label}</p>
        </div>
      </div>
    </SwiperSlide>
  );
}

function Climate() {
  return (
    <AnimatedSection className="section-pad bg-surface">
      <div className="container-page">
        <AnimatedItem className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-accent">CLIMATE CONTRIBUTION</p>
          <p className="mt-5 text-2xl font-medium leading-relaxed text-primary">
            ANBU ENGINEERING SERVICES builds project solutions with a focus on dependable work, clear communication, and measurable customer value across Tamil Nadu and beyond.
          </p>
        </AnimatedItem>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {impactCards.map(({ icon: Icon, title, value, suffix, decimals }) => (
            <AnimatedItem key={title} className="group rounded-xl bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-surface text-2xl text-primary transition group-hover:bg-accent">
                <Icon />
              </span>
              <h3 className="mt-6 font-heading text-xl font-bold text-primary">{title}</h3>
              <p className="mt-3 text-textDark/70">
                <AnimatedCounter end={value} decimals={decimals || 0} suffix={suffix} />
              </p>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function Capacity() {
  return (
    <AnimatedSection className="relative overflow-hidden py-28 text-white">
      <img src={images.factory} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-primary/60" />
      <div className="container-page relative z-10 text-center">
        <AnimatedItem>
          <h2 className="font-heading text-5xl font-bold uppercase tracking-[0.08em]">Capacity &amp; Reach</h2>
          <p className="mt-4 font-semibold uppercase tracking-[0.28em] text-accent">Manufacturing excellence empowering solar living</p>
        </AnimatedItem>
        <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {counters.map((item) => (
            <AnimatedItem key={item.label}>
              <p className="font-heading text-5xl font-bold">
                <AnimatedCounter end={item.value} decimals={item.decimals || 0} suffix={item.suffix} />
              </p>
              <p className="mt-3 text-sm font-bold uppercase tracking-wide text-accent">{item.label}</p>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function ProductsHome() {
  return (
    <AnimatedSection className="section-pad bg-white">
      <div className="container-page">
        <AnimatedItem className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-heading text-5xl font-bold text-primary">PRODUCTS</h2>
            <p className="mt-3 max-w-2xl text-textDark/70">Explore our solar module series below. Click on each one for an overview.</p>
          </div>
          <Link to="/products" className="w-fit rounded-full bg-accent px-7 py-3 font-heading font-bold text-primary hover:bg-secondary hover:text-white">
            Explore Products
          </Link>
        </AnimatedItem>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <AnimatedItem key={product.slug}><ProductCard product={product} /></AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function Awards() {
  const Badge = ({ name, image }) => (
    <div className="mx-5 flex h-24 w-36 flex-col items-center justify-center gap-2 rounded-xl border border-primary/10 bg-white grayscale transition hover:grayscale-0">
      <img src={image} alt={name} className="h-10 w-24 object-contain" />
      <span className="font-heading text-sm font-bold text-primary">{name}</span>
    </div>
  );
  return (
    <AnimatedSection className="section-pad bg-surface">
      <div className="container-page text-center">
        <AnimatedItem><h2 className="font-heading text-4xl font-bold text-primary">AWARDS &amp; CERTIFICATIONS</h2></AnimatedItem>
        <div className="masked-marquee mt-10">
          <Marquee pauseOnHover>
            {certifications.map(({ name, image }) => <Badge key={name} name={name} image={image} />)}
          </Marquee>
        </div>
        <AnimatedItem><h3 className="mt-16 font-heading text-3xl font-bold text-primary">EXTERNAL QUALITY PARTNERS</h3></AnimatedItem>
        <div className="masked-marquee mt-8">
          <Marquee pauseOnHover direction="right" speed={34}>
            {partners.map(({ name, image }) => <Badge key={name} name={name} image={image} />)}
          </Marquee>
        </div>
      </div>
    </AnimatedSection>
  );
}

function GlobalPresence() {
  return (
    <AnimatedSection className="section-pad bg-white">
      <div className="container-page text-center">
        <AnimatedItem>
          <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-accent">Our</p>
          <h2 className="mt-2 font-heading text-5xl font-bold text-primary">GLOBAL PRESENCE</h2>
        </AnimatedItem>
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-5"
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        >
          {countries.map((country) => (
            <motion.div
              key={country}
              variants={{ hidden: { scale: 0, rotate: -12 }, show: { scale: 1, rotate: 0 } }}
              className="group relative"
            >
              <div className="grid h-24 w-24 place-items-center rounded-full border-2 border-accent bg-surface shadow-soft transition group-hover:-translate-y-2 overflow-hidden">
                <img src={flagFor(country)} alt={country} className="h-full w-full object-cover" />
              </div>
              <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
                {country}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

function Testimonials() {
  return (
    <AnimatedSection className="section-pad bg-primary text-white">
      <div className="container-page">
        <AnimatedItem className="text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-accent">Testimonials</p>
          <h2 className="mt-3 font-heading text-5xl font-bold">What Our Customers Say</h2>
          <p className="mt-3 text-white/70">Trusted by a growing community across India and beyond.</p>
        </AnimatedItem>
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          spaceBetween={24}
          breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}
          className="mt-12 pb-12"
        >
          {testimonials.map(([text, name, title]) => (
            <SwiperSlide key={name}>
              <div className="h-full rounded-xl border border-accent/20 bg-white/5 p-7">
                <FaQuoteLeft className="text-5xl text-accent" />
                <p className="mt-5 italic text-white/80">{text}</p>
                <div className="mt-6"><StarRating /></div>
                <hr className="my-6 border-white/10" />
                <p className="font-heading font-bold">{name}</p>
                <p className="text-sm text-white/60">{title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </AnimatedSection>
  );
}

function Savings() {
  const [bill, setBill] = useState(6000);
  const [roof, setRoof] = useState(700);
  const [type, setType] = useState('Residential');
  const system = useMemo(() => Math.min(bill / 1000, roof / 100), [bill, roof]);
  const savings = system * 120 * 8 * 0.9;
  const co2 = system * 1500;
  return (
    <AnimatedSection className="section-pad bg-surface">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
        <AnimatedItem>
          <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-accent">Savings Calculator</p>
          <h2 className="mt-3 font-heading text-5xl font-bold text-primary">Calculate Your Solar Savings</h2>
          <p className="mt-5 max-w-xl text-lg text-textDark/70">
            Estimate the system size, monthly savings, and yearly carbon offset for your property using simple planning assumptions.
          </p>
        </AnimatedItem>
        <AnimatedItem className="rounded-xl bg-white p-7 shadow-soft">
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
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <Result label="System Size"      value={system}  decimals={1} suffix=" kW" />
            <Result label="Monthly Savings"  value={savings} prefix="₹" />
            <Result label="Yearly CO2 Offset" value={co2}   suffix=" kg" />
          </div>
          <p className="mt-5 text-sm text-textDark/55">*Estimates only. Detailed yield depends on tariff, location, shading, and system design.</p>
          <Link to="/contact" className="mt-6 inline-flex rounded-full bg-accent px-7 py-3 font-heading font-bold text-primary hover:bg-secondary hover:text-white">
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
    <div className="rounded-xl bg-surface p-4">
      <p className="text-sm text-textDark/60">{label}</p>
      <p className="mt-2 font-heading text-2xl font-bold text-primary">
        <AnimatedCounter key={value.toFixed(2)} end={value} prefix={prefix} suffix={suffix} decimals={decimals} />
      </p>
    </div>
  );
}

function FinalCta() {
  const [ok, setOk] = useState(false);
  return (
    <AnimatedSection className="section-pad bg-white">
      <div className="container-page">
        <div className="grid gap-8 rounded-xl bg-gradient-to-br from-secondary to-accent p-8 text-primary md:grid-cols-[1fr_auto] md:items-center lg:p-12">
          <div>
            <h2 className="font-heading text-4xl font-bold">Ready to go solar?</h2>
            <p className="mt-2 text-primary/75">Join thousands of homes and businesses already saving with clean energy.</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setOk(true); }} className="flex flex-col gap-3 sm:flex-row">
            <input required type="email" placeholder="Email address" className="min-w-0 rounded-full border-0 px-5 py-3 outline-none" />
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-heading font-bold text-white">
              <FiSend />Subscribe
            </button>
          </form>
        </div>
        {ok && <p className="mt-4 text-center font-semibold text-primary">Thanks for subscribing.</p>}
        <div className="mt-12 text-center">
          <div className="justify-center"><StarRating /></div>
          <a href="https://www.google.com/search?q=ANBU+ENGINEERING+SERVICES+reviews" className="mt-3 inline-block font-semibold text-primary hover:text-secondary">
            Click the stars to share your feedback!
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
