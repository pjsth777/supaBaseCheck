
A high-performance, containerized full-stack application featuring a .NET 9 API backend, a React frontend, and a Supabase powered PostgreSQL database.

---

# Architecture

The project follows a decoupled, cloud native architecture:

- Frontend: React (Vite) deployed on Vercel.
- Backend: NET 9 Web API deployed on Render (via Docker).
- Database: Supabase (PostgreSQL) as the persistent data layer.

---

# Getting Started

Prerequisites
- .NET 9 SDK
- Node.js 20+
- Docker Desktop

---

# Local Development

1) Clone the repository

```
git clone https://github.com/pjsth777/supaBaseCheck.git
cd my-app
```

2) Configure Environment: Create a .env file in /client with the API URL, and ensure the appsettings.json in /server contains the Supabase connection string.

3) Run with Docker Compose:

```
docker-compose up --build
```

---

# Tech Stack & Services

______________________________________________________
|  Compoenent  |     Technology    |  Hosting         |
|_____________________________________________________|
|  Frontend    |  React, Vite      |  Vercel          |  
|  Backend     |  .NET 9, EF Core  |  Render(Docker)  |
|  Database    |  PostgreSQL       |  Supabase        |
_______________________________________________________

---

# Deployment Strategy

- Backend: Render monitors the Github repository. Upon a push to master, it builds the Dockerfile and deploys the containerized API. Environment variables (DB credentials) are injected via the Render Dashboard.
- Frontend: Vercel automatically detects the React build command and serves the static assets globally, injecting the VITE_API_URL environment variable at build time.

---

# License

This project is licensed under the MIT License.

---
