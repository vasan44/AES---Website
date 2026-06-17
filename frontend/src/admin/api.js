const BASE = 'http://localhost:5000/api';

const headers = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('aes_token')}`,
});

export const adminApi = {
  login: (email, password) =>
    fetch(`${BASE}/admin/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) }).then(r => r.json()),

  stats: () =>
    fetch(`${BASE}/admin/stats`, { headers: headers() }).then(r => r.json()),

  getContacts: () =>
    fetch(`${BASE}/contact`, { headers: headers() }).then(r => r.json()),

  updateContactStatus: (id, status) =>
    fetch(`${BASE}/contact/${id}/status`, { method: 'PATCH', headers: headers(), body: JSON.stringify({ status }) }).then(r => r.json()),

  deleteContact: (id) =>
    fetch(`${BASE}/contact/${id}`, { method: 'DELETE', headers: headers() }).then(r => r.json()),

  getApplications: () =>
    fetch(`${BASE}/applications`, { headers: headers() }).then(r => r.json()),

  updateAppStatus: (id, status) =>
    fetch(`${BASE}/applications/${id}/status`, { method: 'PATCH', headers: headers(), body: JSON.stringify({ status }) }).then(r => r.json()),

  deleteApplication: (id) =>
    fetch(`${BASE}/applications/${id}`, { method: 'DELETE', headers: headers() }).then(r => r.json()),

  getNewsletter: () =>
    fetch(`${BASE}/newsletter`, { headers: headers() }).then(r => r.json()),

  deleteNewsletter: (id) =>
    fetch(`${BASE}/newsletter/${id}`, { method: 'DELETE', headers: headers() }).then(r => r.json()),
};

export const publicApi = {
  submitContact: (data) =>
    fetch(`${BASE}/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(r => r.json()),

  submitApplication: (data) =>
    fetch(`${BASE}/applications`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).then(r => r.json()),

  subscribeNewsletter: (email) =>
    fetch(`${BASE}/newsletter`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) }).then(r => r.json()),
};
