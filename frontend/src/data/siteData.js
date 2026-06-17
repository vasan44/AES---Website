import { FaAward, FaCloud, FaDroplet, FaFacebookF, FaInstagram, FaLeaf, FaLinkedinIn, FaTree, FaWhatsapp } from 'react-icons/fa6';
import { FiBriefcase, FiDownload, FiMail, FiMapPin, FiPhone, FiShield, FiSun, FiZap } from 'react-icons/fi';

// ── images ────────────────────────────────────────────────────────────────────
import imgHeroSolar   from '../assets/services/services1.png';
import imgHeroStats   from '../assets/services/services2.png';
import imgHeroModules from '../assets/services/services3.png';
import imgPanels      from '../assets/services/services1.png';
import imgFactory     from '../assets/services/services3.png';
import imgAbout       from '../assets/about/about.png';

// ── products ─────────────────────────────────────────────────────────────────
import imgHomeProduct       from '../assets/products/home.png';
import imgCommercialProduct from '../assets/products/comercial.jpg';
import imgIndustrialProduct from '../assets/products/interical.png';

// ── projects ─────────────────────────────────────────────────────────────────
import imgRes1  from '../assets/Residential/1.png';
import imgRes2  from '../assets/Residential/2.png';
import imgRes3  from '../assets/Residential/3.jpg';
import imgRes5  from '../assets/Residential/4.png';
import imgCom1  from '../assets/Commercial/1.png';
import imgCom2  from '../assets/Commercial/2.png';
import imgCom4  from '../assets/Commercial/4.png';
import imgCom5  from '../assets/Commercial/5.png';
import imgInd1  from '../assets/Industrial/1.png';
import imgInd2  from '../assets/Industrial/2.png';
import imgInd3  from '../assets/Industrial/3.png';
import imgInd4  from '../assets/Industrial/4.png';
import imgInst1 from '../assets/Institution/1.png';
import imgInst2 from '../assets/Institution/2.png';
import imgInst3 from '../assets/Institution/3.png';
import imgInst4 from '../assets/Institution/4.png';

// ── blog ─────────────────────────────────────────────────────────────────────
import imgBlogRooftop  from '../assets/blog/solar-rooftop-basics.svg';
import imgBlogEfficiency from '../assets/blog/module-efficiency.svg';
import imgBlogFinance  from '../assets/blog/commercial-finance.svg';

// ── team ─────────────────────────────────────────────────────────────────────
import imgAnikaRao    from '../assets/team/anika-rao.svg';
import imgVikramSethi from '../assets/team/vikram-sethi.svg';
import imgNishaKapoor from '../assets/team/nisha-kapoor.svg';
import imgKabirMehta  from '../assets/team/kabir-mehta.svg';

// ── gallery ───────────────────────────────────────────────────────────────────
import imgGallery1 from '../assets/services/services1.png';
import imgGallery2 from '../assets/services/services2.png';
import imgGallery3 from '../assets/services/services3.png';
import imgGallery4 from '../assets/services/sevices4.png';
import imgGallery5 from '../assets/services/services5.png';
import imgGallery6 from '../assets/services/services6.png';
import imgGallery7 from '../assets/about/about.png';
import imgGallery8 from '../assets/products/home.png';

// ── certifications ────────────────────────────────────────────────────────────
import certIec   from '../assets/certifications/iec.svg';
import certBis   from '../assets/certifications/bis.svg';
import certIso   from '../assets/certifications/iso.svg';
import certMnre  from '../assets/certifications/mnre.svg';
import certUl    from '../assets/certifications/ul.svg';
import certTuv   from '../assets/certifications/tuv.svg';
import certCe    from '../assets/certifications/ce.svg';
import certAlmm  from '../assets/certifications/almm.svg';
import certRohs  from '../assets/certifications/rohs.svg';
import certReach from '../assets/certifications/reach.svg';
import certMcs   from '../assets/certifications/mcs.svg';

// ── partner logos ─────────────────────────────────────────────────────────────
import logoPowergrid from '../assets/logos/powergrid.svg';
import logoSunlab    from '../assets/logos/sunlab.svg';
import logoEcobank   from '../assets/logos/ecobank.svg';
import logoGridworks from '../assets/logos/gridworks.svg';
import logoVoltedge  from '../assets/logos/voltedge.svg';
import logoRenewHub  from '../assets/logos/renewhub.svg';
import logoBrightops from '../assets/logos/brightops.svg';
import logoHelioqa   from '../assets/logos/helioqa.svg';
import logoTerracert from '../assets/logos/terracert.svg';

// ── flags ─────────────────────────────────────────────────────────────────────
import flagIndia        from '../assets/flags/india.svg';
import flagUsa          from '../assets/flags/usa.svg';
import flagUae          from '../assets/flags/uae.svg';
import flagAustralia    from '../assets/flags/australia.svg';
import flagSaudiArabia  from '../assets/flags/saudi-arabia.svg';
import flagQatar        from '../assets/flags/qatar.svg';
import flagGermany      from '../assets/flags/germany.svg';
import flagCanada       from '../assets/flags/canada.svg';
import flagIndonesia    from '../assets/flags/indonesia.svg';
import flagOman         from '../assets/flags/oman.svg';
import flagJapan        from '../assets/flags/japan.svg';
import flagKenya        from '../assets/flags/kenya.svg';

// ── video ─────────────────────────────────────────────────────────────────────
import heroVideo    from '../assets/videos/solar-hero.mp4';
import capacityVideo from '../assets/videos/capacity-bg.mp4';

// =============================================================================

export const company = {
  name: 'ANBU ENGINEERING SERVICES',
  address: '691, Mariyamman Kovil Street, Thoppukollai, Marungur, Panruti, T.K.Cuddalore Dist, Tamil Nadu - 607103',
  phone: '9842327382',
  email: 'anbuconstruction94@gmail.com',
  whatsapp: '919842327382',   // country code + number, no +
  gstin: '33CYLPA5006R129',

  // ── EmailJS config ──────────────────────────────────────────────────────
  // 1. Sign up free at https://www.emailjs.com
  // 2. Add a Gmail service  →  copy Service ID here
  // 3. Create an email template →  copy Template ID here
  // 4. Copy your Public Key from Account → API Keys
  emailjs: {
    serviceId:  'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID',
    publicKey:  'YOUR_PUBLIC_KEY',
  },
};

export const socials = [
  { label: 'Facebook',  icon: FaFacebookF,  href: '#', color: '#1877F2' },
  { label: 'Instagram', icon: FaInstagram,  href: '#', color: '#E1306C' },
  { label: 'LinkedIn',  icon: FaLinkedinIn, href: '#', color: '#0A66C2' },
  { label: 'WhatsApp',  icon: FaWhatsapp,   href: '#', color: '#25D366' },
];

export const images = {
  hero1:        imgHeroSolar,
  hero2:        imgHeroStats,
  hero3:        imgHeroModules,
  panels:       imgPanels,
  factory:      imgFactory,
  about:        imgAbout,
  heroVideo:    heroVideo,
  capacityVideo: capacityVideo,
};

export const products = [
  { name: 'HOME SOLAR', slug: 'home-solar', image: imgHomeProduct, wattage: '3-10 kW', efficiency: 'Site based', warranty: '25 years', type: 'Residential Rooftop' },
  { name: 'COMMERCIAL SOLAR', slug: 'commercial-solar', image: imgCommercialProduct, wattage: '10-100 kW', efficiency: 'Load based', warranty: '25 years', type: 'Commercial Rooftop' },
  { name: 'INDUSTRIAL SOLAR', slug: 'industrial-solar', image: imgIndustrialProduct, wattage: '50 kW+', efficiency: 'Plant based', warranty: '25 years', type: 'Industrial Installation' },
];

export const impactCards = [
  { icon: FaLeaf,    title: 'Carbon Footprint Reduced', value: 55000, suffix: '+ Tons of CO2 Prevented' },
  { icon: FaCloud,   title: 'Daily CO2 Savings',        value: 375,   suffix: ' kg Offset Every Day' },
  { icon: FaTree,    title: 'Tree Equivalency',          value: 1.3,   decimals: 1, suffix: ' Trees Saved Daily' },
  { icon: FaDroplet, title: 'Water Conservation',        value: 526,   suffix: '+ Liters Saved Daily' },
];

export const counters = [
  { value: 100,  suffix: '+',  label: 'SOLAR INSTALLATION SERVICES' },
  { value: 120,  suffix: '+',  label: 'ROOFTOP & COMMERCIAL PROJECTS' },
  { value: 500,  suffix: '+',  label: 'SITE SURVEYS COMPLETED' },
  { value: 100,  suffix: '%',  label: 'INSTALLATION & SERVICE FOCUS' },
];

export const countries = [
  'India', 'USA', 'UAE', 'Australia', 'Saudi Arabia', 'Qatar',
  'Germany', 'Canada', 'Indonesia', 'Oman', 'Japan', 'Kenya',
];

const flagMap = {
  India: flagIndia, USA: flagUsa, UAE: flagUae, Australia: flagAustralia,
  'Saudi Arabia': flagSaudiArabia, Qatar: flagQatar, Germany: flagGermany,
  Canada: flagCanada, Indonesia: flagIndonesia, Oman: flagOman,
  Japan: flagJapan, Kenya: flagKenya,
};

export const flagFor = (country) => flagMap[country] || null;

export const testimonials = [
  ['The installation was planned with precision and our monthly bills dropped immediately. The ANBU ENGINEERING SERVICES team stayed responsive after commissioning.', 'Priya Menon', 'Homeowner, Kochi'],
  ['Their commercial team gave us clear generation estimates and delivered the rooftop plant without disrupting operations.', 'Arjun Shah', 'Facility Head, Pune'],
  ['ANBU handled the site work, wiring, inverter setup, and commissioning with clear coordination from start to finish.', 'Maya Kulkarni', 'Project Developer, Tamil Nadu'],
  ['From site survey to net-metering support, the experience felt organized and transparent.', 'Rohit Jain', 'Business Owner, Jaipur'],
];

export const certifications = [
  { name: 'IEC',  image: certIec },
  { name: 'BIS',  image: certBis },
  { name: 'ISO',  image: certIso },
  { name: 'MNRE', image: certMnre },
  { name: 'UL',   image: certUl },
  { name: 'TUV',  image: certTuv },
  { name: 'CE',   image: certCe },
  { name: 'ALMM', image: certAlmm },
  { name: 'RoHS', image: certRohs },
  { name: 'REACH',image: certReach },
  { name: 'MCS',  image: certMcs },
];

export const partners = [
  { name: 'PowerGrid', image: logoPowergrid },
  { name: 'SunLab',    image: logoSunlab },
  { name: 'EcoBank',   image: logoEcobank },
  { name: 'GridWorks', image: logoGridworks },
  { name: 'VoltEdge',  image: logoVoltedge },
  { name: 'RenewHub',  image: logoRenewHub },
  { name: 'BrightOps', image: logoBrightops },
  { name: 'HelioQA',   image: logoHelioqa },
  { name: 'TerraCert', image: logoTerracert },
];

export const projects = [
  {
    type: 'Residential',
    title: 'Panruti Home Rooftop',
    location: 'Panruti, Cuddalore',
    capacity: '5 kW',
    image: imgRes1,
    scope: 'Rooftop structure, panel mounting, inverter setup, earthing, and commissioning.',
    status: 'Completed Model',
  },
  {
    type: 'Residential',
    title: 'Cuddalore Villa Solar',
    location: 'Cuddalore, Tamil Nadu',
    capacity: '7 kW',
    image: imgRes2,
    scope: 'Home roof survey, shade check, structure fixing, inverter placement, and safety protection.',
    status: 'Residential Model',
  },
  {
    type: 'Residential',
    title: 'Neyveli House Solar',
    location: 'Neyveli, Tamil Nadu',
    capacity: '6 kW',
    image: imgRes3,
    scope: 'Single-phase rooftop installation with clean cable routing and generation monitoring setup.',
    status: 'Home Model',
  },
  {
    type: 'Residential',
    title: 'Villupuram Terrace Solar',
    location: 'Villupuram, Tamil Nadu',
    capacity: '4 kW',
    image: imgRes5,
    scope: 'Compact terrace solar system planned for daily household load and bill reduction.',
    status: 'Terrace Model',
  },
  {
    type: 'Commercial',
    title: 'Cuddalore Shop Solar',
    location: 'Cuddalore, Tamil Nadu',
    capacity: '15 kW',
    image: imgCom1,
    scope: 'Commercial roof survey, load planning, DC/AC wiring, and net-metering support.',
    status: 'Commercial Model',
  },
  {
    type: 'Commercial',
    title: 'Chennai Office Solar',
    location: 'Chennai, Tamil Nadu',
    capacity: '30 kW',
    image: imgCom2,
    scope: 'Office solar system with inverter placement, meter coordination, and AMC planning.',
    status: 'Office Model',
  },
  {
    type: 'Commercial',
    title: 'Pondicherry Road Showroom',
    location: 'Cuddalore, Tamil Nadu',
    capacity: '20 kW',
    image: imgCom4,
    scope: 'Showroom rooftop installation planned around daytime usage and visible cable management.',
    status: 'Showroom Model',
  },
  {
    type: 'Commercial',
    title: 'Panruti Marriage Hall Solar',
    location: 'Panruti, Tamil Nadu',
    capacity: '35 kW',
    image: imgCom5,
    scope: 'Commercial solar installation with load review, inverter setup, protection, and commissioning.',
    status: 'Business Model',
  },
  {
    type: 'Industrial',
    title: 'Neyveli Factory Solar',
    location: 'Neyveli, Tamil Nadu',
    capacity: '50 kW',
    image: imgInd1,
    scope: 'Industrial solar installation with cable routing, protection panels, and safety checks.',
    status: 'Industrial Model',
  },
  {
    type: 'Industrial',
    title: 'Cuddalore Workshop Solar',
    location: 'Cuddalore SIPCOT, Tamil Nadu',
    capacity: '75 kW',
    image: imgInd2,
    scope: 'Factory roof solar planning with structure alignment, DC combiner setup, and commissioning.',
    status: 'Workshop Model',
  },
  {
    type: 'Industrial',
    title: 'Virudhachalam Rice Mill Solar',
    location: 'Virudhachalam, Tamil Nadu',
    capacity: '40 kW',
    image: imgInd3,
    scope: 'Industrial load-based solar installation planned for daytime machinery usage.',
    status: 'Mill Model',
  },
  {
    type: 'Industrial',
    title: 'Kurinjipadi Warehouse Solar',
    location: 'Kurinjipadi, Tamil Nadu',
    capacity: '60 kW',
    image: imgInd4,
    scope: 'Warehouse rooftop installation with cable tray planning, earthing, and safety inspection.',
    status: 'Warehouse Model',
  },
  {
    type: 'Institution',
    title: 'School Rooftop System',
    location: 'Chidambaram, Tamil Nadu',
    capacity: '25 kW',
    image: imgInst1,
    scope: 'Institution rooftop installation planned for daytime load reduction and safety compliance.',
    status: 'Education Model',
  },
  {
    type: 'Institution',
    title: 'Panruti College Solar',
    location: 'Panruti, Tamil Nadu',
    capacity: '45 kW',
    image: imgInst2,
    scope: 'College rooftop solar planning for classrooms, admin block loads, and documentation.',
    status: 'College Model',
  },
  {
    type: 'Institution',
    title: 'Cuddalore Hospital Solar',
    location: 'Cuddalore, Tamil Nadu',
    capacity: '25 kW',
    image: imgInst3,
    scope: 'Institution solar installation with safer wiring routes, inverter placement, and AMC support.',
    status: 'Hospital Model',
  },
  {
    type: 'Institution',
    title: 'Community Hall Solar',
    location: 'Chidambaram, Tamil Nadu',
    capacity: '18 kW',
    image: imgInst4,
    scope: 'Public building solar setup planned for common lighting, fans, and event-day load support.',
    status: 'Public Building Model',
  },
];

export const posts = [
  { slug: 'solar-rooftop-basics',    category: 'Guides',     title: 'Solar Rooftop Basics for New Buyers',     date: 'May 12, 2026',    image: imgBlogRooftop,    excerpt: 'A practical look at sizing, approvals, savings, and maintenance for rooftop solar systems.' },
  { slug: 'module-efficiency',       category: 'Technology', title: 'What Module Efficiency Really Means',     date: 'April 28, 2026',  image: imgBlogEfficiency, excerpt: 'Efficiency ratings matter, but layout, heat, and shading decide real-world performance.' },
  { slug: 'commercial-solar-finance',category: 'Business',   title: 'Financing Commercial Solar Projects',     date: 'March 19, 2026',  image: imgBlogFinance,    excerpt: 'How power purchase agreements, capex, and payback periods shape commercial adoption.' },
];

export const gallery = [
  imgGallery1, imgGallery2, imgGallery3, imgGallery4,
  imgGallery5, imgGallery6, imgGallery7, imgGallery8,
];

export const team = [
  ['Anika Rao',    'Managing Director',      'Leads solar installation planning, customer coordination, and service growth.', imgAnikaRao],
  ['Vikram Sethi', 'Head of Engineering',    'Plans reliable rooftop systems, protection layouts, and commissioning checks.', imgVikramSethi],
  ['Nisha Kapoor', 'Projects Director',      'Owns execution quality across residential, C&I, and utility sites.',     imgNishaKapoor],
  ['Kabir Mehta',  'Customer Success Lead',  'Coordinates post-installation care and performance reviews.',            imgKabirMehta],
];

export const careers = [
  ['Solar Design Engineer',  'Panruti', 'Full-time',   'Prepare system layouts, yield simulations, and technical documentation for rooftop and ground-mount projects.'],
  ['Solar Site Supervisor',  'Panruti', 'Full-time',   'Coordinate rooftop installation, structure fixing, wiring work, safety checks, and commissioning activities.'],
  ['Service Technician',     'Panruti', 'Full-time',   'Support panel cleaning, inverter checks, troubleshooting, maintenance visits, and generation review.'],
];

export const contactInfo = [
  { icon: FiMapPin,    title: 'Address', text: company.address },
  { icon: FiPhone,     title: 'Phone',   text: company.phone },
  { icon: FiMail,      title: 'Email',   text: company.email },
  { icon: FiBriefcase, title: 'GSTIN',   text: company.gstin },
];

export const values = [
  { icon: FiSun,    title: 'Clean Impact',  text: 'Every project is designed to maximize useful solar generation over its lifetime.' },
  { icon: FiShield, title: 'Reliability',   text: 'Quality checks, traceability, and durable components sit at the center of our process.' },
  { icon: FiZap,    title: 'Performance',   text: 'We balance output, safety, and maintainability from module selection through commissioning.' },
];

export const resources = [
  { icon: FiDownload,  title: 'Service Profile', type: 'PDF', file: '/assets/pdfs/company-profile.pdf' },
  { icon: FiDownload,  title: 'Installation Guide', type: 'PDF', file: '/assets/pdfs/installation-guide.pdf' },
  { icon: FiBriefcase, title: 'Company Profile',    type: 'DOC', file: '/assets/pdfs/company-profile.pdf' },
  { icon: FaAward,     title: 'Certification Pack', type: 'ZIP', file: '/assets/pdfs/certification-pack.zip' },
];
