import { socials, team } from '../data/siteData.js';
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection.jsx';
import PageHeader from '../components/PageHeader.jsx';

export default function Team() {
  return (
    <>
      <PageHeader title="Our Team" />
      <AnimatedSection className="section-pad bg-surface">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map(([name, role, bio]) => (
            <AnimatedItem key={name} className="group relative overflow-hidden rounded-xl bg-white shadow-soft">
              <div className="grid h-80 place-items-center bg-primary text-white">
                <div className="text-center">
                  <span className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-accent font-heading text-4xl font-extrabold text-primary">
                    {name.split(' ').map((part) => part[0]).join('').slice(0, 2)}
                  </span>
                  <p className="mt-5 font-heading text-sm font-bold uppercase tracking-[0.25em] text-white/60">AES Team</p>
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-heading text-xl font-bold text-primary">{name}</h2>
                <p className="text-secondary">{role}</p>
              </div>
              <div className="absolute inset-0 flex translate-y-full flex-col justify-end bg-primary/92 p-6 text-white transition group-hover:translate-y-0">
                <p>{bio}</p>
                <div className="mt-5 flex gap-3">
                  {socials.slice(0, 3).map(({ label, icon: Icon, href }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-primary">
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
