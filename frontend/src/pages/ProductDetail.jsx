import { Link, useParams } from 'react-router-dom';
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection.jsx';
import PageHeader from '../components/PageHeader.jsx';
import { products } from '../data/siteData.js';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug) || products[0];
  const gallery = [product.image, ...products.filter((p) => p.slug !== product.slug).map((p) => p.image)];

  return (
    <>
      <PageHeader title={product.name} />
      <AnimatedSection className="section-pad bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[180px_1fr_460px]">
          <AnimatedItem className="flex gap-4 overflow-x-auto lg:flex-col">
            {gallery.map((img, i) => (
              <img key={i} src={img} alt="" className="h-28 w-40 shrink-0 rounded-xl object-cover" />
            ))}
          </AnimatedItem>
          <AnimatedItem>
            <img src={product.image} alt={product.name} className="h-[560px] w-full rounded-xl object-cover shadow-soft" />
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="font-heading text-4xl font-bold text-primary">{product.name}</h2>
            <p className="mt-4 text-textDark/70">
              This is a panel category we can work with during solar installation planning. ANBU ENGINEERING SERVICES focuses on site survey, system design, mounting, wiring, inverter setup, commissioning, and maintenance support.
            </p>
            <div className="mt-8 overflow-hidden rounded-xl border border-primary/10">
              {[['Suitable Capacity', product.wattage], ['Panel Class', product.type], ['Installation Use', 'Rooftop / Commercial'], ['Support', 'Commissioning & AMC']].map(([k, v]) => (
                <div key={k} className="grid grid-cols-2 border-b border-primary/10 last:border-0">
                  <span className="bg-surface p-4 font-bold text-primary">{k}</span>
                  <span className="p-4">{v}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="rounded-full bg-accent px-6 py-3 font-heading font-bold text-primary">
                Request Installation Quote
              </Link>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </>
  );
}
