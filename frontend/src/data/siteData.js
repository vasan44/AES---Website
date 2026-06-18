import { FaCloud, FaDroplet, FaFacebookF, FaInstagram, FaLeaf, FaLinkedinIn, FaTree, FaWhatsapp } from 'react-icons/fa6';
import { FiBriefcase, FiMail, FiMapPin, FiPhone, FiShield, FiSun, FiZap } from 'react-icons/fi';

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
import imgCom1  from '../assets/Worksite Gallery/solar-site-01.webp';
import imgCom2  from '../assets/Worksite Gallery/solar-site-02.webp';
import imgCom4  from '../assets/Worksite Gallery/solar-site-03.webp';
import imgCom5  from '../assets/Worksite Gallery/solar-site-04.webp';
import imgInd1  from '../assets/Worksite Gallery/solar-site-05.webp';
import imgInd2  from '../assets/Worksite Gallery/solar-site-06.webp';
import imgInd3  from '../assets/Worksite Gallery/solar-site-07.webp';
import imgInd4  from '../assets/Worksite Gallery/solar-site-08.webp';
import imgInst1 from '../assets/Worksite Gallery/solar-site-09.webp';
import imgInst2 from '../assets/Worksite Gallery/solar-site-10.webp';
import imgInst3 from '../assets/Worksite Gallery/solar-site-11.webp';
import imgInst4 from '../assets/Worksite Gallery/solar-site-12.webp';
import imgEpc   from '../assets/EPC.png';

// ── blog ─────────────────────────────────────────────────────────────────────
import imgBlogRooftop  from '../assets/blog/solar-rooftop-basics.svg';
import imgBlogEfficiency from '../assets/blog/module-efficiency.svg';
import imgBlogFinance  from '../assets/blog/commercial-finance.svg';

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
import logoProzeal   from '../assets/clint logos/1.png';
import logoRenfra    from '../assets/clint logos/2.png';
import logoTataSolar from '../assets/clint logos/3.png';
import logoLtRenew   from '../assets/clint logos/4.png';
import logoEverrenew from '../assets/clint logos/5.png';
import logoAmaraRaja from '../assets/clint logos/6.png';
import logoSolarcare from '../assets/clint logos/7.png';
import logoCleanMax  from '../assets/clint logos/8.png';

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
  address: '691, Mariyamman Kovil Street, Thoppukollai, Marunkur (P.O), Panruti (T.K), Cuddalore (D.T), Tamil Nadu - 607103',
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
  { label: 'Instagram', icon: FaInstagram,  href: 'https://www.instagram.com/anbu_engineering_services?utm_source=qr&igsh=MTlsdGhucnJtMnA4bQ%3D%3D', color: '#E1306C' },
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
  { value: 250,  suffix: '+ MWp', label: 'INSTALLED CAPACITY' },
  { value: 4,    suffix: '',      label: 'STATES COVERED' },
  { value: 28,   suffix: '',      label: 'RECORDED PROJECTS' },
  { value: 2019, suffix: '',      label: 'YEAR ESTABLISHED' },
];

export const companyCapabilities = [
  {
    icon: 'facility',
    title: 'Fabrication Shop & Yard',
    quantity: '40,000 sq. ft.',
    detail: 'Dedicated space for structural fabrication, material storage, and project preparation.',
  },
  {
    icon: 'loader',
    title: 'Ajax Fiori Self-Loader',
    quantity: '4.3 m³ capacity · 1 unit',
    detail: 'Mobile concrete production support for foundations and civil works at project sites.',
  },
  {
    icon: 'drilling',
    title: 'Lorry-Mounted DTH Auger',
    quantity: 'With compressor · 1 unit',
    detail: 'Deep-hole drilling equipment for piling and foundation work in demanding ground conditions.',
  },
  {
    icon: 'tractor',
    title: 'Auger-Mounted Tractor',
    quantity: '1 unit',
    detail: 'Mobile auger support for repetitive bore and piling activities across the site.',
  },
  {
    icon: 'survey',
    title: 'Leica Total Station',
    quantity: 'Theodolite · 1 unit',
    detail: 'Precision surveying, setting-out, alignment, level, and position verification.',
  },
  {
    icon: 'template',
    title: 'Piling Templates',
    quantity: '350 units',
    detail: 'Reusable templates for consistent pile positioning, spacing, and installation alignment.',
  },
  {
    icon: 'electrical',
    title: 'Electrical Tools & Test Kits',
    quantity: 'Project-ready sets',
    detail: 'Tools and instruments for installation checks, testing, troubleshooting, and commissioning.',
  },
  {
    icon: 'earthwork',
    title: 'Earthmoving & Shifting Fleet',
    quantity: '1 JCB · 2 tractors',
    detail: 'Equipment support for excavation, backfilling, grading, and material movement.',
  },
];

export const manpower = [
  ['Civil Engineers', 3],
  ['Electrical Engineers', 3],
  ['Mechanical Engineer', 1],
  ['Accountant', 1],
  ['Bar Benders', 10],
  ['Carpenters', 6],
  ['Electricians', 10],
  ['Technicians & Fitters', 20],
  ['Masons', 10],
  ['Helpers', 50],
];

export const keyPersonnel = [
  {
    role: 'Managing Director',
    name: 'A. Arivazhgan',
    qualification: 'B.E. Civil Engineering',
    experience: '6 years',
    scope: 'Solar and construction projects across India',
  },
  {
    role: 'Project Coordinator',
    name: 'S. Balasubramanian',
    qualification: 'B.E. Electrical Engineering',
    experience: '10 years',
    scope: 'Construction project coordination across India',
  },
  {
    role: 'Execution Engineer',
    name: 'Prakash',
    qualification: 'B.E. Mechanical Engineering',
    experience: '6 years',
    scope: 'Construction project execution',
  },
  {
    role: 'Electrical Engineer',
    name: 'Parthipan',
    qualification: 'B.E. Electrical Engineering',
    experience: '4 years',
    scope: 'Construction projects in India and abroad',
  },
  {
    role: 'Civil Engineer',
    name: 'Dinesh',
    qualification: 'B.E. Civil Engineering',
    experience: '3 years',
    scope: 'Civil engineering and site execution',
  },
  {
    role: 'Planning Engineer',
    name: 'Ranjith Babu M.',
    qualification: 'Civil Engineering',
    experience: '4 years',
    scope: 'Construction planning and project support',
  },
  {
    role: 'Store In-Charge',
    name: 'Kaviyarasan',
    qualification: 'B.E. Instrumentation Engineering',
    experience: '4 years',
    scope: 'Construction stores and project material coordination',
  },
];

export const hsePolicy = [
  'Comply with applicable legal and statutory HSE requirements.',
  'Provide a safe and healthy environment for employees, subcontractors, channel partners, and visitors.',
  'Establish procedures to recognize, implement, evaluate, and monitor HSE performance.',
  'Improve HSE performance through objectives, targets, training, audits, rewards, and recognition.',
  'Maintain tools, equipment, and machinery safely and conserve natural resources.',
  'Use safe working procedures and provide HSE training to employees and contractor personnel.',
  'Review incidents and industry experience to prevent recurrence and improve work practices.',
  'Conduct pre-employment and periodic medical checks for occupational health protection.',
];

export const environmentalPolicy = [
  'Comply with environmental laws, regulations, and additional necessary controls.',
  'Follow a systematic environmental management plan for continual improvement.',
  'Prevent pollution, maximize recycling, and reduce waste, discharge, and emissions.',
  'Conserve natural resources through responsible and efficient use.',
  'Plant trees, develop green belts, and promote surroundings that work in harmony with nature.',
];

export const engineeringExecutionServices = [
  'Complete solar power project execution',
  'Piling, MMS and module mounting',
  'AC and DC electrical works for solar projects',
  'Cabling, routing and termination of electrical and instrumentation systems',
  'Building services and civil foundation works',
  'Fabrication of steel structures and piping',
  'Erection of steel structures and equipment',
  'Grit blasting and painting',
  'Earthing, fencing, drainage and street-light works',
  'Operation and maintenance of solar power plants',
];

export const pilingServices = [
  'Foundation piling for buildings, solar structures, and heavy equipment foundations',
  'Sheet piling for excavations and steel sheet walls',
  'Special foundation works for complex ground conditions',
  'Piling for quay structures and abutment walls',
  'Hard-rock and soft-soil auger work',
  'Pull-out and lateral load testing',
];

export const testingInspectionServices = [
  'Hydro testing witnessed by authorized inspection agencies',
  'Ultrasonic flaw detection and thickness testing',
  'Magnetic particle testing',
  'Macro examination',
  'Liquid penetrant testing using dye and fluorescent methods',
  'Bench and Poldi impact hardness testing',
  'Pressure gauge testing and comparison testing',
  'Time-temperature and pressure recording',
  'Digital thickness and paint thickness measurement',
  'Surface profile measurement',
  'Radiographic testing and post-weld heat treatment',
  'Pull-out and lateral testing',
  'Third-party inspection agency certification support',
];

export const profileWorkExperience = [
  [1, '30 MW – DC work', 'Prozeal Infra', 'Karaikudi', 2019],
  [2, 'Fencing work', 'Prozeal Infra', 'Karaikudi', 2019],
  [3, 'Street-light work', 'Prozeal Infra', 'Karaikudi', 2019],
  [4, 'Grid earthing work', 'Tata Power Solar', 'Kasaragod, Kerala', 2020],
  [5, 'Electrical DC work', 'Clean Max', 'Dindigul', 2020],
  [6, '2 MW piling work', 'Solar Care', 'Kariyapatti', 2021],
  [7, '2.5 MW piling, MMS, DC activity, inverter room and fencing', 'Prozeal Infra', 'Kovilpatti', 2021],
  [8, '12 MW piling work', 'Solar Care', 'Kariyapatti', 2021],
  [9, '25 MW DC work', 'Amara Raja Power Systems Pvt. Ltd.', 'Chittoor, Andhra Pradesh', 2022],
  [10, '2.5 MW DC and MMS work', 'Solar Care', 'Kariyapatti', 2022],
  [11, '7.5 MW DC work', 'Everrenew', 'Manaparai', 2022],
  [12, 'L&T NTPC plant: 18 MW DC & MMS work and 1.5 km drainage', 'L&T', 'Ettaiyapuram', 2022],
  [13, '1.4 MW complete solar plant construction', 'Adithya Rays Power Pvt. Ltd.', 'Kovilpatti', 2022],
  [14, '4 MW Rishi solar plant – complete construction works', 'Prozeal Infra', 'Mysore, Karnataka', 2022],
  [15, '4 MW piling, MMS, AC/DC work and street lighting', 'Everrenew', 'Rampura, Karnataka', 2022],
  [16, '3.5 km fencing work on a 25 MW solar plant', 'Prozeal Infra', 'Ottapidaram', 2023],
  [17, 'Inverter room, ICOG panel room, transformer foundation and fencing on a 5.5 MW plant', 'DK Solar', 'Pandalkudi', 2023],
  [18, '18.46 MW piling, MMS, module mounting, AC/DC, civil foundations and equipment erection', 'Everrenew', 'Ettaiyapuram', 2023],
  [19, '12 MW complete I&C works including civil rooms, MCS, fencing and street lights', 'Prozeal Infra', 'Begur, Karnataka', 2024],
  [20, '15 MW equipment foundations, guest house, UG RO tank and main gate', 'Renfra Energy India Pvt. Ltd.', 'Arani', 2024],
  [21, '25 MW guest house building and UG RO water tank', 'Renfra Energy India Pvt. Ltd.', 'Trichy', 2024],
  [22, '12 MW solar power plant operation and maintenance', 'Prozeal Infra', 'Begur, Karnataka', 2024],
  [23, '4 MW solar power plant operation and maintenance', 'Prozeal Infra', 'Mysore, Karnataka', 2024],
  [24, '10 MW equipment foundations, guest house, EBDP yard and MCR building', 'Renfra Energy India Pvt. Ltd.', 'Karaikal', 2025],
  [25, '4 MW piling work', 'Renfra Energy India Pvt. Ltd.', 'Thachur', 2025],
  [26, '6 MW equipment foundations, UG RO tank, EBDP yard and MCR building', 'Renfra Energy India Pvt. Ltd.', 'Thachur', 2025],
  [27, '3.5 km chain-link fencing work (under construction)', 'Renfra Energy India Pvt. Ltd.', 'Narimanam', 2025],
  [28, 'Complete EPC of 5 MW / 6.5 MWp solar PV plant (under development)', 'RVNS Green Energy', 'Trichy', 2025],
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
  {
    quote: 'The installation was planned with precision and our monthly bills dropped immediately. The ANBU Engineering Services team stayed responsive after commissioning.',
    name: 'Priya Menon',
    role: 'Homeowner, Kochi',
  },
  {
    quote: 'Their commercial team gave us clear generation estimates and delivered the rooftop plant without disrupting operations.',
    name: 'Arjun Shah',
    role: 'Facility Head, Pune',
  },
  {
    quote: 'ANBU handled the site work, wiring, inverter setup, and commissioning with clear coordination from start to finish.',
    name: 'Maya Kulkarni',
    role: 'Project Developer, Tamil Nadu',
  },
  {
    quote: 'The team followed site safety requirements closely and completed the electrical scope with dependable quality.',
    name: 'Karthik Raman',
    role: 'Operations Manager, Chennai',
  },
  {
    quote: 'From the initial survey to net-metering support, every stage was explained clearly and completed professionally.',
    name: 'Nandhini Kumar',
    role: 'Business Owner, Coimbatore',
  },
  {
    quote: 'Their engineers coordinated civil and solar work efficiently, helping us keep the project schedule on track.',
    name: 'Suresh Iyer',
    role: 'Site Head, Tiruchirappalli',
  },
];

export const engineeringTeam = [
  { number: '01', designation: 'MANAGING DIRECTOR', name: 'A. Arivazhagan', qualification: 'B.E. Civil Engineering', experience: '6 years experience', description: 'Solar and construction projects across India' },
  { number: '02', designation: 'PROJECT COORDINATOR', name: 'S. Balasubramanian', qualification: 'B.E. Electrical Engineering', experience: '10 years experience', description: 'Construction project coordination across India' },
  { number: '03', designation: 'EXECUTION ENGINEER', name: 'Prakash', qualification: 'B.E. Mechanical Engineering', experience: '6 years experience', description: 'Construction project execution' },
  { number: '04', designation: 'ELECTRICAL ENGINEER', name: 'Parthipan', qualification: 'B.E. Electrical Engineering', experience: '4 years experience', description: 'Construction projects in India and abroad' },
  { number: '05', designation: 'CIVIL ENGINEER', name: 'Dinesh', qualification: 'B.E. Civil Engineering', experience: '3 years experience', description: 'Civil engineering and site execution' },
  { number: '06', designation: 'PLANNING ENGINEER', name: 'Ranjith Babu M.', qualification: 'Civil Engineering', experience: '4 years experience', description: 'Construction planning and project support' },
  { number: '07', designation: 'STORE IN-CHARGE', name: 'Kaviyarasan', qualification: 'B.E. Instrumentation Engineering', experience: '4 years experience', description: 'Construction stores and project material coordination' },
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
  { name: 'Prozeal Green Energy', image: logoProzeal },
  { name: 'Renfra Energy', image: logoRenfra },
  { name: 'Tata Power Solar', image: logoTataSolar },
  { name: 'L&T Construction Renewables', image: logoLtRenew },
  { name: 'Everrenew', image: logoEverrenew },
  { name: 'Amara Raja', image: logoAmaraRaja },
  { name: 'Solarcare', image: logoSolarcare },
  { name: 'Clean Max', image: logoCleanMax },
];

export const projects = [
  {
    type: 'DC Work',
    title: '30 MW – DC work',
    location: 'Karaikudi',
    capacity: '30 MW',
    image: imgCom1,
    scope: 'Documented DC electrical scope for Prozeal Infra at the Karaikudi solar site.',
    status: '2019',
    client: 'Prozeal Infra',
  },
  {
    type: 'Civil & Site Works',
    title: 'Fencing work',
    location: 'Karaikudi',
    capacity: 'Site work',
    image: imgInd2,
    scope: 'Solar site fencing scope executed for Prozeal Infra at Karaikudi.',
    status: '2019',
    client: 'Prozeal Infra',
  },
  {
    type: 'Electrical Works',
    title: 'Street-light work',
    location: 'Karaikudi',
    capacity: 'Lighting',
    image: imgInst4,
    scope: 'Street-light installation work completed for Prozeal Infra at the Karaikudi project site.',
    status: '2019',
    client: 'Prozeal Infra',
  },
  {
    type: 'Electrical Works',
    title: 'Grid earthing work',
    location: 'Kasaragod, Kerala',
    capacity: 'Earthing',
    image: imgInd1,
    scope: 'Grid earthing work documented for Tata Power Solar at Kasaragod, Kerala.',
    status: '2020',
    client: 'Tata Power Solar',
  },
  {
    type: 'DC Work',
    title: 'Electrical DC work',
    location: 'Dindigul',
    capacity: 'DC work',
    image: imgCom2,
    scope: 'Electrical DC work completed for Clean Max at the Dindigul solar project site.',
    status: '2020',
    client: 'Clean Max',
  },
  {
    type: 'Civil & Site Works',
    title: '2 MW piling work',
    location: 'Kariyapatti',
    capacity: '2 MW',
    image: imgInd3,
    scope: 'Piling work for Solar Care at the 2 MW Kariyapatti solar site.',
    status: '2021',
    client: 'Solar Care',
  },
  {
    type: 'Complete I&C',
    title: '2.5 MW piling, MMS, DC activity, inverter room and fencing',
    location: 'Kovilpatti',
    capacity: '2.5 MW',
    image: imgCom4,
    scope: 'Combined piling, MMS, DC activity, inverter room, and fencing works for Prozeal Infra.',
    status: '2021',
    client: 'Prozeal Infra',
  },
  {
    type: 'Civil & Site Works',
    title: '12 MW piling work',
    location: 'Kariyapatti',
    capacity: '12 MW',
    image: imgInd4,
    scope: 'Piling work documented for Solar Care at the 12 MW Kariyapatti solar project.',
    status: '2021',
    client: 'Solar Care',
  },
  {
    type: 'DC Work',
    title: '25 MW DC work',
    location: 'Chittoor, Andhra Pradesh',
    capacity: '25 MW',
    image: imgCom5,
    scope: 'DC work completed for Amara Raja Power Systems Pvt. Ltd. at Chittoor, Andhra Pradesh.',
    status: '2022',
    client: 'Amara Raja Power Systems Pvt. Ltd.',
  },
  {
    type: 'Complete I&C',
    title: '2.5 MW DC and MMS work',
    location: 'Kariyapatti',
    capacity: '2.5 MW',
    image: imgInst1,
    scope: 'DC and module mounting structure work executed for Solar Care at Kariyapatti.',
    status: '2022',
    client: 'Solar Care',
  },
  {
    type: 'DC Work',
    title: '7.5 MW DC work',
    location: 'Manaparai',
    capacity: '7.5 MW',
    image: imgRes1,
    scope: 'DC electrical work completed for Everrenew at the Manaparai solar site.',
    status: '2022',
    client: 'Everrenew',
  },
  {
    type: 'Complete I&C',
    title: 'L&T NTPC plant: 18 MW DC & MMS work and 1.5 km drainage',
    location: 'Ettaiyapuram',
    capacity: '18 MW',
    image: imgInst2,
    scope: 'DC, MMS, and 1.5 km drainage scope documented for L&T at the NTPC plant.',
    status: '2022',
    client: 'L&T',
  },
  {
    type: 'Complete I&C',
    title: '1.4 MW complete solar plant construction',
    location: 'Kovilpatti',
    capacity: '1.4 MW',
    image: imgRes2,
    scope: 'Complete solar plant construction for Adithya Rays Power Pvt. Ltd. at Kovilpatti.',
    status: '2022',
    client: 'Adithya Rays Power Pvt. Ltd.',
  },
  {
    type: 'Complete I&C',
    title: '4 MW Rishi solar plant – complete construction works',
    location: 'Mysore, Karnataka',
    capacity: '4 MW',
    image: imgInst3,
    scope: 'Complete construction works for the Rishi solar plant, executed for Prozeal Infra.',
    status: '2022',
    client: 'Prozeal Infra',
  },
  {
    type: 'Complete I&C',
    title: '4 MW piling, MMS, AC/DC work and street lighting',
    location: 'Rampura, Karnataka',
    capacity: '4 MW',
    image: imgRes3,
    scope: 'Piling, MMS, AC/DC works, and street lighting completed for Everrenew at Rampura.',
    status: '2022',
    client: 'Everrenew',
  },
  {
    type: 'Civil & Site Works',
    title: '3.5 km fencing work on a 25 MW solar plant',
    location: 'Ottapidaram',
    capacity: '25 MW',
    image: imgInd2,
    scope: '3.5 km fencing scope documented on a 25 MW solar plant for Prozeal Infra.',
    status: '2023',
    client: 'Prozeal Infra',
  },
  {
    type: 'Civil & Site Works',
    title: 'Inverter room, ICOG panel room, transformer foundation and fencing',
    location: 'Pandalkudi',
    capacity: '5.5 MW',
    image: imgInd1,
    scope: 'Inverter room, ICOG panel room, transformer foundation, and fencing on a 5.5 MW plant for DK Solar.',
    status: '2023',
    client: 'DK Solar',
  },
  {
    type: 'Complete I&C',
    title: '18.46 MW piling, MMS, module mounting, AC/DC, civil foundations and equipment erection',
    location: 'Ettaiyapuram',
    capacity: '18.46 MW',
    image: imgCom1,
    scope: 'Piling, MMS, module mounting, AC/DC, civil foundations, and equipment erection for Everrenew.',
    status: '2023',
    client: 'Everrenew',
  },
  {
    type: 'Complete I&C',
    title: '12 MW complete I&C works including civil rooms, MCS, fencing and street lights',
    location: 'Begur, Karnataka',
    capacity: '12 MW',
    image: imgCom2,
    scope: 'Complete I&C scope including civil rooms, MCS, fencing, and street lights for Prozeal Infra.',
    status: '2024',
    client: 'Prozeal Infra',
  },
  {
    type: 'Civil & Site Works',
    title: '15 MW equipment foundations, guest house, UG RO tank and main gate',
    location: 'Arani',
    capacity: '15 MW',
    image: imgInd3,
    scope: 'Equipment foundations, guest house, UG RO tank, and main gate work for Renfra Energy India Pvt. Ltd.',
    status: '2024',
    client: 'Renfra Energy India Pvt. Ltd.',
  },
  {
    type: 'Civil & Site Works',
    title: '25 MW guest house building and UG RO water tank',
    location: 'Trichy',
    capacity: '25 MW',
    image: imgInst4,
    scope: 'Guest house building and UG RO water tank scope for Renfra Energy India Pvt. Ltd. at Trichy.',
    status: '2024',
    client: 'Renfra Energy India Pvt. Ltd.',
  },
  {
    type: 'O&M',
    title: '12 MW solar power plant operation and maintenance',
    location: 'Begur, Karnataka',
    capacity: '12 MW',
    image: imgRes5,
    scope: 'Operation and maintenance scope for the 12 MW Prozeal Infra solar power plant at Begur.',
    status: '2024',
    client: 'Prozeal Infra',
  },
  {
    type: 'O&M',
    title: '4 MW solar power plant operation and maintenance',
    location: 'Mysore, Karnataka',
    capacity: '4 MW',
    image: imgInst2,
    scope: 'Operation and maintenance scope for the 4 MW Prozeal Infra solar power plant at Mysore.',
    status: '2024',
    client: 'Prozeal Infra',
  },
  {
    type: 'Civil & Site Works',
    title: '10 MW equipment foundations, guest house, EBDP yard and MCR building',
    location: 'Karaikal',
    capacity: '10 MW',
    image: imgInd4,
    scope: 'Equipment foundations, guest house, EBDP yard, and MCR building work for Renfra Energy India Pvt. Ltd.',
    status: '2025',
    client: 'Renfra Energy India Pvt. Ltd.',
  },
  {
    type: 'Civil & Site Works',
    title: '4 MW piling work',
    location: 'Thachur',
    capacity: '4 MW',
    image: imgCom4,
    scope: 'Piling work documented for Renfra Energy India Pvt. Ltd. at the Thachur solar project.',
    status: '2025',
    client: 'Renfra Energy India Pvt. Ltd.',
  },
  {
    type: 'Civil & Site Works',
    title: '6 MW equipment foundations, UG RO tank, EBDP yard and MCR building',
    location: 'Thachur',
    capacity: '6 MW',
    image: imgCom5,
    scope: 'Equipment foundations, UG RO tank, EBDP yard, and MCR building scope for Renfra Energy India Pvt. Ltd.',
    status: '2025',
    client: 'Renfra Energy India Pvt. Ltd.',
  },
  {
    type: 'Civil & Site Works',
    title: '3.5 km chain-link fencing work',
    location: 'Narimanam',
    capacity: '3.5 km',
    image: imgInst1,
    scope: 'Chain-link fencing work documented as under construction for Renfra Energy India Pvt. Ltd.',
    status: '2025',
    client: 'Renfra Energy India Pvt. Ltd.',
  },
  {
    type: 'EPC',
    title: 'Complete EPC of 5 MW / 6.5 MWp solar PV plant',
    location: 'Trichy',
    capacity: '6.5 MWp',
    image: imgEpc,
    scope: 'Complete EPC scope for a 5 MW / 6.5 MWp solar PV plant, documented as under development.',
    status: '2025',
    client: 'RVNS Green Energy',
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
  ['A. Arivazhgan', 'Managing Director', 'B.E. Civil Engineering; leads AES solar and construction project execution across India.'],
  ['S. Balasubramanian', 'Project Coordinator', 'B.E. Electrical Engineering; coordinates construction and solar project delivery.'],
  ['Prakash', 'Execution Engineer', 'B.E. Mechanical Engineering; supports construction project execution and site coordination.'],
  ['Parthipan', 'Electrical Engineer', 'B.E. Electrical Engineering; supports electrical works for construction and solar projects.'],
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
