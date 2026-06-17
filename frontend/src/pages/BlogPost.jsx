import { Link, useParams } from 'react-router-dom';
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection.jsx';
import PageHeader from '../components/PageHeader.jsx';
import { posts } from '../data/siteData.js';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug) || posts[0];
  return (
    <>
      <PageHeader title={post.title} />
      <AnimatedSection className="section-pad bg-white">
        <article className="container-page max-w-4xl">
          <AnimatedItem><img src={post.image} alt={post.title} className="h-48 w-full rounded-xl object-cover shadow-soft sm:h-[460px]" /><p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{post.category} · {post.date} · ANBU Editorial</p><h1 className="mt-4 font-heading text-3xl font-bold text-primary sm:text-4xl md:text-5xl">{post.title}</h1></AnimatedItem>
          <AnimatedItem className="prose prose-lg mt-8 max-w-none text-textDark/75"><p>Project planning works best when technical assumptions are visible from the beginning. A good proposal should explain scope, materials, timelines, documentation, maintenance access, and the business case in plain language.</p><p>For homes, the most important choices are usable area, approvals, and future load growth. For commercial customers, demand patterns, uptime expectations, and site access often matter just as much as equipment selection.</p><p>ANBU ENGINEERING SERVICES uses structured site assessment and practical project matching to help customers compare realistic options before committing capital.</p></AnimatedItem>
          <AnimatedItem className="mt-14 border-t border-primary/10 pt-8"><h2 className="font-heading text-3xl font-bold text-primary">Related Posts</h2><div className="mt-5 grid gap-4 md:grid-cols-2">{posts.filter((p) => p.slug !== post.slug).slice(0, 2).map((p) => <Link className="rounded-xl bg-surface p-5 font-heading font-bold text-primary" key={p.slug} to={`/blog/${p.slug}`}>{p.title}</Link>)}</div></AnimatedItem>
        </article>
      </AnimatedSection>
    </>
  );
}
