import { Link } from 'react-router-dom';

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`flex items-center gap-3 font-heading text-base font-extrabold tracking-wide sm:text-lg ${light ? 'text-white' : 'text-primary'}`}>
      <img
        src="/images/aes-logo.jpeg"
        alt="ANBU ENGINEERING SERVICES logo"
        className="h-14 w-14 rounded-xl object-cover shadow-md"
      />
      <span>ANBU ENGINEERING<br /><span className="text-xs font-semibold tracking-[0.24em]">SERVICES</span></span>
    </Link>
  );
}
