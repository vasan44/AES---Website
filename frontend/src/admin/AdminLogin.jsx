import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLock, FiMail, FiLoader } from 'react-icons/fi';
import { adminApi } from './api.js';

export default function AdminLogin() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await adminApi.login(email, password);
    setLoading(false);
    if (res.token) {
      localStorage.setItem('aes_token', res.token);
      localStorage.setItem('aes_admin', res.email);
      navigate('/admin/dashboard');
    } else {
      setError(res.message || 'Login failed');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-primary px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-soft">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-accent text-2xl text-primary">
            <FiLock />
          </div>
          <h1 className="font-heading text-2xl font-bold text-primary">Admin Login</h1>
          <p className="mt-1 text-sm text-textDark/50">ANBU ENGINEERING SERVICES</p>
        </div>

        {error && (
          <p className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="grid gap-4">
          <label className="block">
            <span className="text-sm font-bold text-primary">Email</span>
            <div className="mt-2 flex items-center gap-3 rounded-xl border border-primary/10 px-4 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20">
              <FiMail className="shrink-0 text-accent" />
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                className="flex-1 bg-transparent py-4 outline-none text-sm" placeholder="admin@aes.com" />
            </div>
          </label>
          <label className="block">
            <span className="text-sm font-bold text-primary">Password</span>
            <div className="mt-2 flex items-center gap-3 rounded-xl border border-primary/10 px-4 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20">
              <FiLock className="shrink-0 text-accent" />
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
                className="flex-1 bg-transparent py-4 outline-none text-sm" placeholder="••••••••" />
            </div>
          </label>
          <button type="submit" disabled={loading}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary py-4 font-heading font-bold text-white transition hover:bg-accent hover:text-primary disabled:opacity-60">
            {loading ? <><FiLoader className="animate-spin" /> Logging in…</> : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
