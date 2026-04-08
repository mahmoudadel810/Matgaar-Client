# API Contracts

- Backend OpenAPI source: `backend/src/docs/openapi.yaml`
- Base URL (local): `http://localhost:4000/api/v1`

## Authentication

- Bearer JWT access token in `Authorization: Bearer <token>`.

## Core Endpoints

- `POST /auth/register`
- `POST /auth/login`
- `GET /users` (admin)
- `GET /orders`
- `POST /orders`
- `PATCH /orders/:id/assign` (admin)
- `PATCH /orders/:id/status` (driver/admin)
- `POST /compliance/consents`
- `POST /compliance/national-address/validate`
