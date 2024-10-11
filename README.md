# TableMate

Demo of a booking system using Next.js 14 with a Postgres database and Prisma ORM.
Developed with PNPM.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

To run Prisma studio:

```bash
npx prisma studio
```

Other Prisma commands:

- `npx prisma migrate dev --name [add_migration_name]` -> command to run after updating
- `npx prisma db seed` -> run seed for the project
- `npx prisma db push` -> run to update schema
