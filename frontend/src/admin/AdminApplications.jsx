import { useEffect, useState } from 'react';
import { FiTrash2, FiRefreshCw } from 'react-icons/fi';
import { adminApi } from './api.js';

const STATUS_COLORS = {
  new:         'bg-orange-100 text-orange-700',
  reviewed:    'bg-blue-100 text-blue-700',
  shortlisted: 'bg-green-100 text-green-700',
  rejected:    'bg-red-100 text-red-700',
};

export default function AdminApplications() {
  const [apps, setApps]       = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    adminApi.getApplications().then(data => { setApps(Array.isArray(data) ? data : []); setLoading(false); });
  };

  useEffect(load, []);

  const updateStatus = async (id, status) => {
    await adminApi.updateAppStatus(id, status);
    load();
  };

  const remove = async (id) => {
    if (!confirm('Delete this application?')) return;
    await adminApi.deleteApplication(id);
    load();
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-heading text-2xl font-bold text-primary">Job Applications</h2>
        <button onClick={load} className="flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-semibold text-primary transition hover:bg-accent">
          <FiRefreshCw size={14} /> Refresh
        </button>
      </div>

      {loading ? (
        <p className="text-textDark/50">Loading…</p>
      ) : apps.length === 0 ? (
        <p className="rounded-2xl bg-white p-8 text-center text-textDark/40 shadow-soft">No applications yet.</p>
      ) : (
        <div className="grid gap-4">
          {apps.map(a => (
            <div key={a._id} className="rounded-2xl bg-white p-5 shadow-soft">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-heading text-lg font-bold text-primary">{a.name}</p>
                  <p className="text-sm text-textDark/60">{a.email} · {a.phone}</p>
                  <p className="mt-1 text-sm font-semibold text-accent">{a.position}</p>
                  <p className="text-xs text-textDark/50">Experience: {a.experience}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${STATUS_COLORS[a.status]}`}>{a.status}</span>
                  <select value={a.status} onChange={e => updateStatus(a._id, e.target.value)}
                    className="rounded-xl border border-primary/10 bg-surface px-3 py-1.5 text-xs font-semibold outline-none">
                    <option value="new">New</option>
                    <option value="reviewed">Reviewed</option>
                    <option value="shortlisted">Shortlisted</option>
                    <option value="rejected">Rejected</option>
                  </select>
                  <button onClick={() => remove(a._id)}
                    className="grid h-8 w-8 place-items-center rounded-xl bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white">
                    <FiTrash2 size={14} />
                  </button>
                </div>
              </div>
              {a.resume && (
                <a href={a.resume} target="_blank" rel="noreferrer"
                  className="mt-3 inline-flex rounded-full bg-surface px-4 py-1.5 text-xs font-semibold text-primary transition hover:bg-accent">
                  View Resume / Portfolio →
                </a>
              )}
              {a.message && (
                <p className="mt-3 rounded-xl bg-surface p-3 text-sm leading-7 text-textDark/70">{a.message}</p>
              )}
              <p className="mt-2 text-xs text-textDark/40">{new Date(a.createdAt).toLocaleString('en-IN')}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
