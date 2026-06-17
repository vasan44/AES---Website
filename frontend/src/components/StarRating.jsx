import { FaStar } from 'react-icons/fa6';

export default function StarRating() {
  return <div className="flex text-accent">{Array.from({ length: 5 }).map((_, i) => <FaStar key={i} />)}</div>;
}
