import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.slug}`} className="group relative min-h-[390px] overflow-hidden rounded-xl bg-primary shadow-soft">
      <img src={product.image} alt={product.name} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/45 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8">
        <h3 className="font-heading text-3xl font-bold text-white">{product.name}</h3>
        <span className="mt-3 block h-1 w-0 bg-accent transition-all duration-300 group-hover:w-16" />
      </div>
    </Link>
  );
}
