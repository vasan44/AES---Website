import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiBriefcase, FiMail, FiUsers, FiAlertCircle } from 'react-icons/fi';
import { adminApi } from './api.js';

function StatCard({ icon: Icon, label, value, sub, to, color }) {
  return (
    <Link to={to} className="group flex items-center gap-5 rounded-2xl bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl text-2xl text-white ${color}`}>
        <Icon />
      </span>
      <div>
        <p className="text-3xl font-heading font-extrabold text-primary">{value ?? '…'}</p>
        <p className="mt-0.5 text-sm font-semibold text-textDark/60">{label}</p>
        {sub != null && (
          <p className="mt-1 flex items-center gap-1 text-xs font-bold text-orange-500">
            <FiAlertCircle size={12} /> {sub} new
          </p>
        )}
      </div>
    </Link>
  );
}

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    adminApi.stats().then(setStats);
  }, []);

  return (
    <div>
      <h2 className="mb-6 font-heading text-2xl font-bold text-primary">Dashboard</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard icon={FiMail}      label="Total Enquiries"    value={stats?.totalContacts} sub={stats?.newContacts}   to="/admin/contacts"     color="bg-blue-500" />
        <StatCard icon={FiBriefcase} label="Total Applications" value={stats?.totalApps}     sub={stats?.newApps}       to="/admin/applications" color="bg-primary" />
        <StatCard icon={FiUsers}     label="Newsletter Subs"    value={stats?.totalSubs}     to="/admin/newsletter"    color="bg-green-500" />
      </div>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-soft">
        <h3 className="font-heading text-lg font-bold text-primary">Quick Links</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link to="/admin/contacts"     className="rounded-full bg-surface px-5 py-2 text-sm font-semibold text-primary transition hover:bg-accent hover:text-primary">View Enquiries</Link>
          <Link to="/admin/applications" className="rounded-full bg-surface px-5 py-2 text-sm font-semibold text-primary transition hover:bg-accent hover:text-primary">View Applications</Link>
          <Link to="/admin/newsletter"   className="rounded-full bg-surface px-5 py-2 text-sm font-semibold text-primary transition hover:bg-accent hover:text-primary">View Subscribers</Link>
          <Link to="/"                   className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-accent hover:text-primary">View Website →</Link>
        </div>
      </div>
    </div>
  );
}
