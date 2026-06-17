import { useEffect, useState } from 'react';
import { FiTrash2, FiRefreshCw } from 'react-icons/fi';
import { adminApi } from './api.js';

const STATUS_COLORS = {
  new:     'bg-orange-100 text-orange-700',
  read:    'bg-blue-100 text-blue-700',
  replied: 'bg-green-100 text-green-700',
};

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading]   = useState(true);

  const load = () => {
    setLoading(true);
    adminApi.getContacts().then(data => { setContacts(Array.isArray(data) ? data : []); setLoading(false); });
  };

  useEffect(load, []);

  const updateStatus = async (id, status) => {
    await adminApi.updateContactStatus(id, status);
    load();
  };

  const remove = async (id) => {
    if (!confirm('Delete this enquiry?')) return;
    await adminApi.deleteContact(id);
    load();
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-heading text-2xl font-bold text-primary">Contact Enquiries</h2>
        <button onClick={load} className="flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-semibold text-primary transition hover:bg-accent">
          <FiRefreshCw size={14} /> Refresh
        </button>
      </div>

      {loading ? (
        <p className="text-textDark/50">Loading…</p>
      ) : contacts.length === 0 ? (
        <p className="rounded-2xl bg-white p-8 text-center text-textDark/40 shadow-soft">No enquiries yet.</p>
      ) : (
        <div className="grid gap-4">
          {contacts.map(c => (
            <div key={c._id} className="rounded-2xl bg-white p-5 shadow-soft">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-heading text-lg font-bold text-primary">{c.name}</p>
                  <p className="text-sm text-textDark/60">{c.email} {c.phone && `· ${c.phone}`}</p>
                  <p className="mt-1 text-sm font-semibold text-primary">{c.subject}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${STATUS_COLORS[c.status]}`}>{c.status}</span>
                  <select value={c.status} onChange={e => updateStatus(c._id, e.target.value)}
                    className="rounded-xl border border-primary/10 bg-surface px-3 py-1.5 text-xs font-semibold outline-none">
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="replied">Replied</option>
                  </select>
                  <button onClick={() => remove(c._id)}
                    className="grid h-8 w-8 place-items-center rounded-xl bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white">
                    <FiTrash2 size={14} />
                  </button>
                </div>
              </div>
              <p className="mt-3 rounded-xl bg-surface p-3 text-sm leading-7 text-textDark/70">{c.message}</p>
              <p className="mt-2 text-xs text-textDark/40">{new Date(c.createdAt).toLocaleString('en-IN')}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
