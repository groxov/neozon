# Production deployment

This project is prepared for a simple production deployment with:

- `web`: Nginx serving the built Vite frontend
- `api`: Node.js / Express backend
- `sqlite` volume by default, or PostgreSQL if configured in `server/.env`

## 1. Prepare env

Copy `server/.env.example` to `server/.env` and set at least:

```env
NODE_ENV=production
JWT_SECRET=your-strong-secret
DB_CLIENT=sqlite
DB_PATH=./database/kalakutsky.db
```

If you want PostgreSQL instead:

```env
NODE_ENV=production
JWT_SECRET=your-strong-secret
DB_CLIENT=postgres
DATABASE_URL=postgresql://user:password@host:5432/kalakutsky_repair
PG_SSL=true
```

## 2. Build and start

From the repo root:

```bash
docker compose -f deploy/docker-compose.prod.yml up -d --build
```

## 3. Check health

```bash
curl http://YOUR_DOMAIN/health
curl http://YOUR_DOMAIN/api/requests
```

## Notes

- Frontend talks to backend through `/api`, so the browser does not need a separate backend hostname.
- Default compose file exposes port `80`.
- For HTTPS, place this stack behind a reverse proxy or add TLS termination in front of Nginx.
- SQLite is acceptable for a small demo/low-load deployment. For real production usage, prefer PostgreSQL.
