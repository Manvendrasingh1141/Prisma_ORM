# Prisma ORM API

A small REST API built with Node.js, Express, Prisma ORM, and PostgreSQL. The project is a learning-stage backend for users and posts, with a relational schema for comments.

## What this project includes

- An Express server with JSON request parsing.
- Prisma Client configured with Prisma's PostgreSQL driver adapter.
- A PostgreSQL schema and migrations for users, posts, and comments.
- User create and read controller logic.
- Post controller and route files that are still under development.

## Core models

- **User**: optional name and password, unique email, and creation timestamp.
- **Post**: belongs to a user and has a title, description, comment count, and creation timestamp.
- **Comment**: belongs to a post and a user and has comment text and a creation timestamp.

Deleting a user or post in the database cascades to its related records, as defined in the Prisma schema.

## Requirements

- Node.js and npm
- A PostgreSQL database

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create your local environment file from the example:

   ```bash
   cp .env.example .env
   ```

3. Set `DIRECT_URL` in `.env` to your PostgreSQL connection string. Keep this value private and do not commit `.env`.

4. Apply the checked-in migrations and generate Prisma Client:

   ```bash
   npx prisma migrate deploy
   npx prisma generate
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

The server currently listens on port `3001`.

## Current API surface

The app mounts the user router at `/user`.

| Method | Path | Purpose |
| --- | --- | --- |
| `POST` | `/user/create` | Creates a user from `name`, `email`, and `password` in the JSON body. |
| `GET` | `/user/get` | Looks up users using `email` in the request body. |
| `PUT` | `/user/update:id` | Update route is declared, but its parameter handling is unfinished. |
| `DELETE` | `/user/delete:id` | Delete route is declared, but its controller is unfinished. |

Example user-create request:

```bash
curl -X POST http://localhost:3001/user/create \
  -H "Content-Type: application/json" \
  -d '{"name":"Example User","email":"user@example.com","password":"replace-me"}'
```

The posts router is present in the source but is not mounted by the app. Comment routes are not implemented.

## Project layout

```text
.
├── prisma/
│   ├── migrations/       # Database migration history
│   └── schema.prisma     # User, post, and comment models
├── src/
│   ├── config/           # Environment and Prisma Client setup
│   ├── controllers/      # User and post request handlers
│   ├── routes/           # Express route definitions
│   └── app.js            # Express app and mounted routes
├── prisma.config.js      # Prisma CLI configuration
└── server.js             # HTTP server entry point
```

## Before deploying

This repository is an early development project, not a production-ready service. In particular:

- User update/delete handlers and post handlers need to be completed and tested.
- Passwords are currently stored directly; add secure password hashing before using real accounts.
- The server uses a fixed port (`3001`), and the configured `PORT` value is not currently used.
- The `npm test` script is a placeholder; no automated tests are configured yet.

Do not use real credentials or expose this API publicly until these items have been addressed.

## Publish on GitHub

This directory is not currently initialized as a Git repository. After reviewing the files and confirming that `.env` contains no tracked secrets, you can create a GitHub repository and push the project:

```bash
git init
git add .
git commit -m "Initial project setup"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPOSITORY>.git
git push -u origin main
```

Replace the remote URL with the repository URL from GitHub. The `.gitignore` excludes `node_modules`, generated Prisma files, and `.env`; `.env.example` is safe to commit because it contains only a placeholder.
