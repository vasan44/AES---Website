import { Link } from 'react-router-dom';
import { FiCheckCircle, FiEye, FiTarget } from 'react-icons/fi';
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection.jsx';
import PageHeader from '../components/PageHeader.jsx';
import { values } from '../data/siteData.js';
import aboutImg from '../assets/about/about.png';

export default function About() {
  return (
    <>
      <PageHeader title="About Us" />
      <AnimatedSection className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <AnimatedItem className="max-w-2xl">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-accent">Company Story</p>
            <h2 className="mt-3 font-heading text-4xl font-bold leading-tight text-primary md:text-5xl">
              Built for dependable solar energy solutions
            </h2>
            <p className="mt-5 text-lg leading-8 text-textDark/70">
              ANBU ENGINEERING SERVICES helps homes, businesses, institutions, and industries move to solar with practical system design, quality installation, and responsive service support.
            </p>
            <p className="mt-4 leading-8 text-textDark/70">
              Every project starts with roof condition, electricity usage, available space, safety requirements, and long-term maintenance in mind. Our work is planned to deliver reliable generation, lower electricity bills, and clear documentation from survey to commissioning.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {['Rooftop solar installation', 'Net metering assistance', 'Commercial solar systems', 'AMC and maintenance support'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3 font-semibold text-primary">
                  <FiCheckCircle className="shrink-0 text-accent" /> {item}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link className="rounded-full bg-accent px-7 py-3 font-heading font-bold text-primary" to="/about/team">Our Team</Link>
              <Link className="rounded-full bg-primary px-7 py-3 font-heading font-bold text-white" to="/about/careers">Careers</Link>
            </div>
          </AnimatedItem>
          <AnimatedItem>
            <img src={aboutImg} alt="Solar engineer inspecting rooftop solar panels" className="h-[420px] w-full rounded-xl object-cover shadow-soft md:h-[520px] brightness-75" />
          </AnimatedItem>
        </div>
      </AnimatedSection>
      <AnimatedSection className="section-pad bg-surface">
        <div className="container-page">
          <AnimatedItem className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-accent">Our Mission &amp; Vision</p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-primary md:text-5xl">Solar work with purpose and accountability</h2>
          </AnimatedItem>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <AnimatedItem className="flex h-full flex-col rounded-xl bg-white p-8 shadow-soft">
              <FiTarget className="text-5xl text-accent" />
              <h3 className="mt-6 font-heading text-3xl font-bold text-primary">Our Mission</h3>
              <p className="mt-4 leading-8 text-textDark/70">
                To make clean energy simple, affordable, and dependable for Tamil Nadu customers by delivering well-designed solar systems, safe installation practices, transparent guidance, and reliable after-sales support.
              </p>
            </AnimatedItem>
            <AnimatedItem className="flex h-full flex-col rounded-xl bg-primary p-8 text-white shadow-soft">
              <FiEye className="text-5xl text-accent" />
              <h3 className="mt-6 font-heading text-3xl font-bold">Our Vision</h3>
              <p className="mt-4 leading-8 text-white/75">
                To become a trusted regional solar partner known for quality engineering, honest consultation, timely execution, and long-term customer relationships across residential, commercial, and industrial solar projects.
              </p>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="section-pad bg-white">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <AnimatedItem key={title} className="rounded-xl bg-white p-8 shadow-soft">
              <Icon className="text-4xl text-accent" />
              <h3 className="mt-5 font-heading text-2xl font-bold text-primary">{title}</h3>
              <p className="mt-3 text-textDark/70">{text}</p>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
