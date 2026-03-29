# Local Setup (Windows / PowerShell)

## 1) Install dependencies

```powershell
npm install
Set-Location api; npm install; Set-Location ..
Set-Location client; npm install; Set-Location ..
```

## 2) Create environment files

Backend:

```powershell
Copy-Item .env.example .env
```

Frontend:

```powershell
Copy-Item client/.env.example client/.env
```

Then update:
- `MONGO` in `.env`
- `JWT_SECRET` in `.env`

## 3) Run backend

```powershell
npm run dev
```

Or run backend + frontend together from root:

```powershell
npm run dev:all
```

Notes:
- Backend now auto-falls back to the next port if a port is busy.
- Example: if 3000 is in use, it will try 3001, then 3002, etc.

## 4) Run frontend (new terminal)

```powershell
Set-Location client
npm run dev
```

If backend is not on port 3000, update `client/.env`:

```env
VITE_BACKEND_URL=http://localhost:<backend-port>
```

## 5) Quick API check

Open:
- `http://localhost:<backend-port>/api/test`
- `http://localhost:5173`
