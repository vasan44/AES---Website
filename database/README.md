# AES Database

This project uses MongoDB only.

Use MongoDB Atlas or a MongoDB server that supports a standard connection URI.
The backend reads database settings from `backend/.env`.

Required values:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-host>/aes?retryWrites=true&w=majority&appName=<app-name>
MONGODB_DB=aes
```

Use a MongoDB Atlas Database Access user, not your Atlas login account. If the
password includes special characters such as `@`, `/`, `:`, `?`, `#`, `[`, or
`]`, URL-encode the password in `MONGODB_URI`.
