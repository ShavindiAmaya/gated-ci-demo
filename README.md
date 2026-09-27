# Gated CI Pipeline Demo

This project demonstrates a Gated CI Pipeline implementation using GitHub Actions, Express, Jest, and Supertest.

## Branch Workflow

The repository follows a structured branch flow:

`feature/*` $\rightarrow$ `dev` $\rightarrow$ `staging` $\rightarrow$ `main`

- **`feature/*`**: Short-lived feature branches used for active development of individual features or bug fixes.
- **`dev`**: Integration branch where code from feature branches is merged for initial testing and integration.
- **`staging`**: Pre-production environment for thorough verification and staging before deployment to production.
- **`main`**: Protected production branch containing stable code ready for deployment.

## Continuous Integration (CI) & Quality Gates

Automated CI runs on every push and pull request to the `dev`, `staging`, and `main` branches.

- **Automated Testing**: CI automatically triggers `npm test` using Jest and Supertest to verify API endpoints.
- **Secrets Management**: Sensitive parameters such as `API_SECRET` are securely managed via **GitHub Secrets**. Local environment settings (`.env`) are ignored via `.gitignore` to prevent accidental credential leaks.
- **Merge Protection**: If any automated test or secret check fails during the CI run, merging into protected branches like `main` is strictly blocked until all issues are fixed.

## Getting Started Locally

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run tests:
   ```bash
   npm test
   ```
Health API feature prepared for CI validation.