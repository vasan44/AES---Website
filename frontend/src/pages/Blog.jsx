import { Link } from 'react-router-dom';
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection.jsx';
import PageHeader from '../components/PageHeader.jsx';
import { posts } from '../data/siteData.js';

export default function Blog() {
  return (
    <>
      <PageHeader title="Blog" />
      <AnimatedSection className="section-pad bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_300px]">
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((post) => <AnimatedItem key={post.slug}><Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-xl bg-surface shadow-soft"><img src={post.image} alt={post.title} className="h-60 w-full object-cover" /><div className="p-6"><span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary">{post.category}</span><h2 className="mt-4 font-heading text-2xl font-bold text-primary">{post.title}</h2><p className="mt-2 text-sm text-textDark/50">{post.date}</p><p className="mt-3 text-textDark/70">{post.excerpt}</p></div></Link></AnimatedItem>)}
          </div>
          <AnimatedItem className="h-fit rounded-xl bg-surface p-6 shadow-soft">
            <input type="search" placeholder="Search articles" className="w-full rounded-full border border-primary/10 px-5 py-3" />
            <h3 className="mt-8 font-heading text-xl font-bold text-primary">Categories</h3>
            <div className="mt-4 flex flex-wrap gap-2">{['Guides', 'Technology', 'Business', 'Projects', 'Sustainability'].map((cat) => <span key={cat} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary">{cat}</span>)}</div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </>
  );
}
