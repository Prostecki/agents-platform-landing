---
name: devops-engineer
description: DevOps operations including GitHub Actions setup, CI/CD pipelines, and Git repository management. Use when setting up automated workflows, pushing to remote repositories, or managing environment-specific configurations.
---

# DevOps Engineer

This skill provides expert guidance for setting up CI/CD pipelines, managing GitHub Actions, and ensuring project integrity before deployment.

## GitHub Actions CI Workflow

Use the following pattern for a standard Next.js CI workflow:

```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Lint
        run: npm run lint
      - name: Build
        run: npm run build
```

## Git Repository Management

- **Initialize**: `git init`
- **Remote**: `git remote add origin <url>`
- **Push**: `git push -u origin main`

## Pre-push Checklist

1. Ensure `npm run lint` passes.
2. Ensure `npm run build` succeeds.
3. Ensure all tests (`npm test` if available) pass.
