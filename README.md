# Kalakutsky Service Repair Desk

Веб-приложение для сервисного центра: заявки, клиенты, сотрудники, финансы, отчеты и внутренние операционные экраны.

## Стек

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS

### Backend
- Node.js
- Express
- TypeScript
- PostgreSQL
- SQLite fallback для локального режима без Postgres

## Что уже есть

- прием и редактирование заявок
- клиентская база и команда
- финансовая сводка и отчеты из одного источника данных
- адаптивная админка для desktop, tablet и mobile
- fallback-слои для пустой базы, чтобы интерфейс не разваливался на чистом стенде

## Установка

### Frontend
```bash
npm install
```

### Backend
```bash
cd server
npm install
```

## Запуск

### 1. Настроить backend env

Скопируй `server/.env.example` в `server/.env` и выбери режим:

```env
PORT=3001
NODE_ENV=development
JWT_SECRET=kalakutsky-secret-key-2026-change-in-production
DB_CLIENT=postgres
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/kalakutsky_repair
PG_SSL=false
```

Если PostgreSQL пока не поднят, можно временно оставить:

```env
DB_CLIENT=sqlite
DB_PATH=./database/kalakutsky.db
```

### 2. Запустить backend
```bash
cd server
npm run dev
```

Backend поднимется на `http://localhost:3001`.

### 3. Запустить frontend
```bash
npm run dev
```

Frontend поднимется на `http://localhost:3000`.

## DBeaver и PostgreSQL

DBeaver не является базой данных. Это клиент для подключения к PostgreSQL.

Если используешь локальный Postgres из примера выше, в DBeaver укажи:

- Host: `localhost`
- Port: `5432`
- Database: `kalakutsky_repair`
- Username: `postgres`
- Password: `postgres`

## Тестовый вход

- логин: `admin`
- пароль: `admin123`

## Корневые скрипты

```bash
npm run dev           # frontend dev server
npm run dev:server    # backend dev server
npm run build         # production build frontend
npm run build:server  # сборка backend
npm run build:all     # обе сборки подряд
npm run typecheck     # проверка типов frontend
```

## Backend API

### Auth
- `POST /api/auth/login`
- `POST /api/auth/register`

### Requests
- `GET /api/requests`
- `GET /api/requests/:id`
- `POST /api/requests`
- `PUT /api/requests/:id`
- `DELETE /api/requests/:id`

### Clients
- `GET /api/clients`
- `GET /api/clients/:id`
- `POST /api/clients`
- `PUT /api/clients/:id`
- `DELETE /api/clients/:id`

### Employees
- `GET /api/employees`
- `GET /api/employees/:id`
- `POST /api/employees`
- `PUT /api/employees/:id`
- `DELETE /api/employees/:id`

### Finance
- `GET /api/finance/transactions`
- `GET /api/finance/stats`
- `POST /api/finance/transactions`
- `DELETE /api/finance/transactions/:id`

### Inventory
- `GET /api/inventory`
- `GET /api/inventory/:id`
- `POST /api/inventory`
- `PUT /api/inventory/:id`
- `DELETE /api/inventory/:id`

### Stats
- `GET /api/stats/dashboard`
- `GET /api/stats/requests`

## Структура

```text
kalakutsky/
├── src/
│   ├── components/     # экраны, layout и общие UI-блоки
│   ├── config/         # registry и навигация
│   ├── data/           # fallback-данные
│   ├── hooks/          # data hooks и session hooks
│   ├── lib/            # утилиты домена и storage
│   ├── services/api/   # клиентские API-модули
│   └── types/          # frontend типы
├── server/
│   ├── src/
│   │   ├── bootstrap/
│   │   ├── controllers/
│   │   ├── database/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   └── database/       # SQLite fallback база, если выбран DB_CLIENT=sqlite
└── README.md
```
