import { Link } from 'react-router-dom';
import {
  FiBox, FiBriefcase, FiCheckCircle, FiCrosshair, FiEye,
  FiLayers, FiTarget, FiUsers, FiZap,
} from 'react-icons/fi';
import { FaIndustry, FaTractor } from 'react-icons/fa6';
import { GiConcreteBag, GiDrill } from 'react-icons/gi';
import { TbCrane } from 'react-icons/tb';
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection.jsx';
import PageHeader from '../components/PageHeader.jsx';
import { company, companyCapabilities, keyPersonnel, manpower, values } from '../data/siteData.js';
import aboutImg from '../assets/about/about.png';

const capabilityIcons = {
  facility: FaIndustry,
  loader: GiConcreteBag,
  drilling: GiDrill,
  tractor: FaTractor,
  survey: FiCrosshair,
  template: FiLayers,
  electrical: FiZap,
  earthwork: TbCrane,
};

export default function About() {
  return (
    <>
      <PageHeader title="About Us" />
      <AnimatedSection className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <AnimatedItem className="max-w-2xl">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-accent">Company Story</p>
            <h2 className="mt-3 font-heading text-4xl font-bold leading-tight text-primary md:text-5xl">
              Engineering construction and contracting since 2019
            </h2>
            <p className="mt-5 text-lg leading-8 text-textDark/70">
              Anbu Engineering Services was established in 2019 to provide quality and timely engineering construction and contracting services that support infrastructure development.
            </p>
            <p className="mt-4 leading-8 text-textDark/70">
              AES has delivered work across PV solar, thermal solar, industrial and commercial construction, heavy foundations, roads, earthwork, buildings, structural fabrication, piping, equipment erection, electrical and instrumentation, blasting, painting, testing, and maintenance. Our qualified engineers, specialists, technicians, operators, and site workforce support complex projects in demanding locations.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {['250+ MWp installed', 'Tamil Nadu, Karnataka, Kerala & AP', '40,000 sq.ft fabrication yard', 'Permanent technical workforce'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3 font-semibold text-primary">
                  <FiCheckCircle className="shrink-0 text-accent" /> {item}
                </div>
              ))}
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
                Continue the work of nation building by executing dependable projects across solar, civil, structural, mechanical, electrical, and instrumentation sectors, supported by experienced people, equipment, and flexible project management.
              </p>
            </AnimatedItem>
            <AnimatedItem className="flex h-full flex-col rounded-xl bg-primary p-8 text-white shadow-soft">
              <FiEye className="text-5xl text-accent" />
              <h3 className="mt-6 font-heading text-3xl font-bold">Our Vision</h3>
              <p className="mt-4 leading-8 text-white/75">
                Contribute to socio-economic prosperity through available national resources and maintain the confidence of every client, employee, partner, and community associated directly or indirectly with AES.
              </p>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad bg-white">
        <div className="container-page">
          <AnimatedItem className="mx-auto max-w-4xl text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-accent">Personnel Details</p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-primary md:text-5xl">Leadership and project team</h2>
            <p className="mx-auto mt-5 max-w-3xl leading-8 text-textDark/65">
              The following key personnel are listed in the AES company profile for management, coordination, execution, planning, and material support.
            </p>
          </AnimatedItem>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {keyPersonnel.map(({ role, name, qualification, experience, scope }, index) => (
              <AnimatedItem
                key={`${role}-${name}`}
                className={`flex h-full flex-col rounded-2xl border border-primary/10 p-6 shadow-soft ${
                  index === 0 ? 'bg-primary text-white md:col-span-2 xl:col-span-1' : 'bg-white text-primary'
                }`}
              >
                <span className={`grid h-12 w-12 place-items-center rounded-xl font-heading text-lg font-extrabold ${
                  index === 0 ? 'bg-accent text-primary' : 'bg-primary text-accent'
                }`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-accent">{role}</p>
                <h3 className="mt-2 font-heading text-2xl font-bold">{name}</h3>
                <p className={`mt-2 font-semibold ${index === 0 ? 'text-white/75' : 'text-textDark/65'}`}>{qualification}</p>
                <div className={`mt-5 border-t pt-5 ${index === 0 ? 'border-white/15' : 'border-primary/10'}`}>
                  <p className="font-heading text-sm font-bold text-accent">{experience} experience</p>
                  <p className={`mt-2 text-sm leading-6 ${index === 0 ? 'text-white/65' : 'text-textDark/60'}`}>{scope}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
          <AnimatedItem className="mt-8 rounded-2xl border border-accent/30 bg-white p-6 text-center shadow-sm">
            <p className="font-semibold leading-7 text-primary">
              AES operates as an engineering and construction contractor and maintains statutory registrations required for business operations, including PAN, PF, ESI, and applicable tax registrations.
            </p>
          </AnimatedItem>
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

      <AnimatedSection className="section-pad bg-surface">
        <div className="container-page">
          <AnimatedItem className="mx-auto max-w-4xl text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-accent">Capabilities &amp; Resources</p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-primary md:text-5xl">Owned Equipment and Project-Ready Resources</h2>
            <p className="mx-auto mt-5 max-w-3xl leading-8 text-textDark/65">
              In-house facilities, survey instruments, construction machinery, and testing tools support efficient site mobilization and execution.
            </p>
          </AnimatedItem>
          <div className="mt-12 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {companyCapabilities.map(({ icon, title, quantity, detail }) => {
              const Icon = capabilityIcons[icon] || FiBox;

              return (
                <AnimatedItem key={title} className="h-full">
                  <article className="group flex h-full min-h-[250px] flex-col rounded-xl border border-primary/10 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-primary text-2xl text-accent transition group-hover:bg-accent group-hover:text-primary">
                      <Icon aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-bold leading-6 text-primary">{title}</h3>
                    <p className="mt-2 font-heading text-sm font-bold text-accent">{quantity}</p>
                    <p className="mt-4 border-t border-primary/10 pt-4 text-sm leading-6 text-textDark/65">{detail}</p>
                  </article>
                </AnimatedItem>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <AnimatedItem>
              <p className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-accent">Manpower Details</p>
              <h2 className="mt-3 font-heading text-4xl font-bold text-primary">Permanent workforce available for execution</h2>
            </AnimatedItem>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {manpower.map(([role, count]) => (
                <AnimatedItem key={role} className="flex items-center justify-between rounded-xl bg-surface px-5 py-4">
                  <span className="font-semibold text-primary">{role}</span>
                  <span className="grid h-10 min-w-10 place-items-center rounded-full bg-accent px-3 font-heading font-extrabold text-primary">{count}</span>
                </AnimatedItem>
              ))}
            </div>
            <AnimatedItem>
              <p className="mt-5 leading-7 text-textDark/65">
                Additional manpower and specialist resources can be mobilized according to project quantity, schedule, and site requirements.
              </p>
            </AnimatedItem>
          </div>

          <AnimatedItem className="rounded-2xl bg-primary p-8 text-white shadow-xl">
            <FiUsers className="text-5xl text-accent" />
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-accent">Managing Director</p>
            <h3 className="mt-3 font-heading text-3xl font-extrabold">A. Arivazhgan</h3>
            <p className="mt-2 font-semibold text-white/70">B.E. Civil Engineering</p>
            <p className="mt-5 leading-8 text-white/70">
              Six years of experience in solar construction projects across India, covering project execution, civil works, resource planning, safety coordination, and client support.
            </p>
            <div className="mt-7 space-y-4 border-t border-white/15 pt-6 text-white/80">
              <p className="flex items-center gap-3"><FiBriefcase className="text-accent" /> Established: 2019</p>
              <a href={`tel:+91${company.phone}`} className="block transition hover:text-accent">+91 {company.phone}</a>
              <a href={`mailto:${company.email}`} className="block break-all transition hover:text-accent">{company.email}</a>
              <p className="leading-7">{company.address}</p>
            </div>
            <Link to="/contact" className="mt-7 inline-flex rounded-full bg-accent px-6 py-3 font-heading font-bold text-primary">
              Contact AES
            </Link>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </>
  );
}
