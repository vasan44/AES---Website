import { useEffect } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FiBell, FiBriefcase, FiGrid, FiLogOut, FiMail, FiUsers } from 'react-icons/fi';

const navItems = [
  { to: '/admin/dashboard',    icon: FiGrid,      label: 'Dashboard' },
  { to: '/admin/contacts',     icon: FiMail,      label: 'Enquiries' },
  { to: '/admin/applications', icon: FiBriefcase, label: 'Applications' },
  { to: '/admin/newsletter',   icon: FiUsers,     label: 'Newsletter' },
];

export default function AdminLayout() {
  const navigate  = useNavigate();
  const adminEmail = localStorage.getItem('aes_admin') || 'Admin';

  useEffect(() => {
    if (!localStorage.getItem('aes_token')) navigate('/admin');
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem('aes_token');
    localStorage.removeItem('aes_admin');
    navigate('/admin');
  };

  return (
    <div className="flex min-h-screen bg-surface font-body">
      {/* Sidebar */}
      <aside className="hidden w-60 flex-col bg-primary text-white md:flex">
        <div className="px-6 py-6 border-b border-white/10">
          <p className="font-heading text-xs font-bold uppercase tracking-widest text-accent">AES Admin</p>
          <p className="mt-1 truncate text-sm text-white/60">{adminEmail}</p>
        </div>
        <nav className="flex flex-1 flex-col gap-1 p-4">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink key={to} to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition
                ${isActive ? 'bg-accent text-primary' : 'text-white/70 hover:bg-white/10 hover:text-white'}`
              }>
              <Icon size={18} /> {label}
            </NavLink>
          ))}
        </nav>
        <button onClick={logout}
          className="flex items-center gap-3 border-t border-white/10 px-6 py-5 text-sm font-semibold text-white/50 transition hover:text-white">
          <FiLogOut /> Logout
        </button>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center justify-between border-b border-primary/10 bg-white px-6 py-4">
          <h1 className="font-heading text-lg font-bold text-primary">ANBU ENGINEERING — Admin Panel</h1>
          <div className="flex items-center gap-3">
            {/* Mobile nav */}
            <div className="flex gap-1 md:hidden">
              {navItems.map(({ to, icon: Icon }) => (
                <NavLink key={to} to={to}
                  className={({ isActive }) =>
                    `grid h-9 w-9 place-items-center rounded-xl transition ${isActive ? 'bg-accent text-primary' : 'bg-surface text-primary/60'}`
                  }>
                  <Icon size={16} />
                </NavLink>
              ))}
              <button onClick={logout} className="grid h-9 w-9 place-items-center rounded-xl bg-surface text-primary/60">
                <FiLogOut size={16} />
              </button>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
