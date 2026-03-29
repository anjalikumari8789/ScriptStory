# ScriptStory

ScriptStory is a full-stack blog platform built with MongoDB, Express, React, and Node.js.

## Highlights

- Email/password authentication with secure cookie-based sessions
- Rich text post publishing and editing for admins
- Post search, filtering, sorting, and pagination
- Commenting, likes, edit/delete controls, and admin moderation
- Dashboard analytics for users, posts, and comments

## Project Structure

- `api/` - Express + MongoDB backend
- `client/` - React + Vite frontend
- `LOCAL_SETUP.md` - Local development steps
- `VERCEL_DEPLOYMENT_GUIDE.md` - Deployment guide

## Quick Start

```bash
npm install
npm run dev:all
```

Set environment variables in `.env` and `client/.env` before running.