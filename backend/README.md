# AES Backend

## Run

```bash
# 1. Configure backend/.env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-host>/aes?retryWrites=true&w=majority&appName=<app-name>
MONGODB_DB=aes
JWT_SECRET=<secret>
ADMIN_EMAIL=admin@aes.com
ADMIN_PASSWORD=admin123

# 2. Start backend
cd backend
npm run dev

# Server runs on http://localhost:5000
# Admin auto-created from ADMIN_EMAIL / ADMIN_PASSWORD
```

Use a MongoDB Atlas Database Access user in `MONGODB_URI`. If the password has
special characters such as `@`, `/`, `:`, `?`, `#`, `[`, or `]`, URL-encode it.

## API Endpoints

| Method | URL | Access |
|--------|-----|--------|
| POST | /api/contact | Public |
| GET  | /api/contact | Admin |
| PATCH| /api/contact/:id/status | Admin |
| DELETE| /api/contact/:id | Admin |
| POST | /api/applications | Public |
| GET  | /api/applications | Admin |
| PATCH| /api/applications/:id/status | Admin |
| DELETE| /api/applications/:id | Admin |
| POST | /api/newsletter | Public |
| GET  | /api/newsletter | Admin |
| DELETE| /api/newsletter/:id | Admin |
| POST | /api/admin/login | Public |
| GET  | /api/admin/stats | Admin |
