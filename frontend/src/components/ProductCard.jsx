import { Link } from 'react-router-dom';
import LocalImage from './LocalImage.jsx';

export default function ProductCard({ product, priority = false }) {
  return (
    <Link to={`/products/${product.slug}`} className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-primary shadow-soft">
      <LocalImage src={product.image} alt={product.name} priority={priority} className="premium-image absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8">
        <h3 className="font-heading text-3xl font-bold text-white">{product.name}</h3>
        <span className="mt-3 block h-1 w-0 bg-accent transition-all duration-300 group-hover:w-16" />
      </div>
    </Link>
  );
}
