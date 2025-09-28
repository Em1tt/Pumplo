# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Database Setup

This project uses Prisma with PostgreSQL on Vercel Storage.

### Setting up Vercel Postgres

1. Go to your Vercel dashboard
2. Navigate to Storage → Browse → Create Database
3. Select PostgreSQL and create your database
4. Copy the connection strings from the Settings tab

### Environment Variables

Create a `.env` file (copy from `.env.example`) and add your database URLs:

```env
DATABASE_URL="your-vercel-postgres-connection-string"
DIRECT_URL="your-vercel-postgres-direct-connection-string"
```

### Database Migration

Run the following commands to set up your database:

```sh
# Generate Prisma client
bunx prisma generate

# Push the schema to your database (for development)
bunx prisma db push

# Or create and run a migration (for production)
bunx prisma migrate deploy
```

### Form Action

The app includes a form that saves user data (name and email) to the database using SvelteKit form actions. The form includes:

- Client-side and server-side validation
- Duplicate email checking
- Error handling and user feedback
- Proper form enhancement with progressive enhancement
