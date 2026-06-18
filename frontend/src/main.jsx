import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './styles.css';
import AppLayout from './components/AppLayout.jsx';

const Home          = lazy(() => import('./pages/Home.jsx'));
const About         = lazy(() => import('./pages/About.jsx'));
const Careers       = lazy(() => import('./pages/Careers.jsx'));
const Products      = lazy(() => import('./pages/Products.jsx'));
const ProductDetail = lazy(() => import('./pages/ProductDetail.jsx'));
const Projects      = lazy(() => import('./pages/Projects.jsx'));
const Blog          = lazy(() => import('./pages/Blog.jsx'));
const BlogPost      = lazy(() => import('./pages/BlogPost.jsx'));
const Media         = lazy(() => import('./pages/Media.jsx'));
const Contact       = lazy(() => import('./pages/Contact.jsx'));

// Admin
const AdminLogin        = lazy(() => import('./admin/AdminLogin.jsx'));
const AdminLayout       = lazy(() => import('./admin/AdminLayout.jsx'));
const Dashboard         = lazy(() => import('./admin/Dashboard.jsx'));
const AdminContacts     = lazy(() => import('./admin/AdminContacts.jsx'));
const AdminApplications = lazy(() => import('./admin/AdminApplications.jsx'));
const AdminNewsletter   = lazy(() => import('./admin/AdminNewsletter.jsx'));

const Fallback = () => <div className="min-h-screen bg-surface pt-32 text-center font-heading text-primary">Loading...</div>;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Suspense fallback={<Fallback />}>
        <Routes>
          {/* Public website */}
          <Route element={<AppLayout />}>
            <Route path="/"                element={<Home />} />
            <Route path="/about"           element={<About />} />
            <Route path="/about/careers"   element={<Careers />} />
            <Route path="/products"        element={<Products />} />
            <Route path="/products/:slug"  element={<ProductDetail />} />
            <Route path="/projects"        element={<Projects />} />
            <Route path="/blog"            element={<Blog />} />
            <Route path="/blog/:slug"      element={<BlogPost />} />
            <Route path="/media"           element={<Media />} />
            <Route path="/contact"         element={<Contact />} />
          </Route>

          {/* Admin */}
          <Route path="/admin"       element={<AdminLogin />} />
          <Route path="/admin"       element={<AdminLayout />}>
            <Route path="dashboard"    element={<Dashboard />} />
            <Route path="contacts"     element={<AdminContacts />} />
            <Route path="applications" element={<AdminApplications />} />
            <Route path="newsletter"   element={<AdminNewsletter />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);
