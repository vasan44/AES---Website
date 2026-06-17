import { useEffect, useState } from 'react';
import { FiTrash2, FiRefreshCw, FiMail } from 'react-icons/fi';
import { adminApi } from './api.js';

export default function AdminNewsletter() {
  const [subs, setSubs]       = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    adminApi.getNewsletter().then(data => { setSubs(Array.isArray(data) ? data : []); setLoading(false); });
  };

  useEffect(load, []);

  const remove = async (id) => {
    if (!confirm('Remove this subscriber?')) return;
    await adminApi.deleteNewsletter(id);
    load();
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-heading text-2xl font-bold text-primary">Newsletter Subscribers <span className="ml-2 rounded-full bg-accent px-3 py-1 text-sm font-bold text-primary">{subs.length}</span></h2>
        <button onClick={load} className="flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-semibold text-primary transition hover:bg-accent">
          <FiRefreshCw size={14} /> Refresh
        </button>
      </div>

      {loading ? (
        <p className="text-textDark/50">Loading…</p>
      ) : subs.length === 0 ? (
        <p className="rounded-2xl bg-white p-8 text-center text-textDark/40 shadow-soft">No subscribers yet.</p>
      ) : (
        <div className="rounded-2xl bg-white shadow-soft overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-surface text-left">
              <tr>
                <th className="px-5 py-3 font-heading text-xs font-bold uppercase tracking-wider text-primary/60">#</th>
                <th className="px-5 py-3 font-heading text-xs font-bold uppercase tracking-wider text-primary/60">Email</th>
                <th className="px-5 py-3 font-heading text-xs font-bold uppercase tracking-wider text-primary/60">Subscribed On</th>
                <th className="px-5 py-3 font-heading text-xs font-bold uppercase tracking-wider text-primary/60">Action</th>
              </tr>
            </thead>
            <tbody>
              {subs.map((s, i) => (
                <tr key={s._id} className="border-t border-primary/5 hover:bg-surface/50">
                  <td className="px-5 py-3 text-textDark/40">{i + 1}</td>
                  <td className="px-5 py-3">
                    <span className="flex items-center gap-2 font-semibold text-primary">
                      <FiMail className="text-accent" size={14} /> {s.email}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-textDark/50">{new Date(s.createdAt).toLocaleDateString('en-IN')}</td>
                  <td className="px-5 py-3">
                    <button onClick={() => remove(s._id)}
                      className="grid h-8 w-8 place-items-center rounded-xl bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white">
                      <FiTrash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
