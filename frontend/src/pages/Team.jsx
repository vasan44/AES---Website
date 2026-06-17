import { socials, team } from '../data/siteData.js';
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection.jsx';
import PageHeader from '../components/PageHeader.jsx';

export default function Team() {
  return (
    <>
      <PageHeader title="Our Team" />
      <AnimatedSection className="section-pad bg-surface">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map(([name, role, bio, image]) => (
            <AnimatedItem key={name} className="group relative overflow-hidden rounded-xl bg-white shadow-soft">
              <img src={image} alt={name} className="h-80 w-full object-cover" />
              <div className="p-6">
                <h2 className="font-heading text-xl font-bold text-primary">{name}</h2>
                <p className="text-secondary">{role}</p>
              </div>
              <div className="absolute inset-0 flex translate-y-full flex-col justify-end bg-primary/92 p-6 text-white transition group-hover:translate-y-0">
                <p>{bio}</p>
                <div className="mt-5 flex gap-3">
                  {socials.slice(0, 3).map(({ label, icon: Icon }) => (
                    <a key={label} href="#" aria-label={label} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-primary">
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
