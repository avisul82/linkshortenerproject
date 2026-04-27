# Auth — Clerk

## Provider
All authentication is handled exclusively by **Clerk** (`@clerk/nextjs` v7). No other auth methods, libraries, or custom implementations are permitted.

## Route Protection

- `/dashboard` is a **protected route** — users must be signed in to access it.
- Enforce this via `clerkMiddleware` in `middleware.ts` using `auth.protect()` on the `/dashboard` path.
- If an unauthenticated user attempts to access `/dashboard`, Clerk will redirect them to the sign-in modal.

## Redirect Rules

- If a **signed-in** user visits the homepage (`/`), they must be **redirected to `/dashboard`**.
- Implement this check in the homepage route using `auth()` from `@clerk/nextjs/server` and a `redirect('/dashboard')` call.

## Sign In / Sign Up UI

- Sign-in and sign-up must **always open as a modal**, never as a full-page route.
- Use Clerk's `<SignInButton mode="modal">` and `<SignUpButton mode="modal">` components.
- Do **not** create dedicated `/sign-in` or `/sign-up` pages.

## Key APIs

| Use case | API |
|---|---|
| Server-side auth check | `auth()` from `@clerk/nextjs/server` |
| Route protection | `clerkMiddleware` + `auth.protect()` in `middleware.ts` |
| Current user (server) | `currentUser()` from `@clerk/nextjs/server` |
| Current user (client) | `useUser()` from `@clerk/nextjs` |
| Sign in button | `<SignInButton mode="modal">` |
| Sign up button | `<SignUpButton mode="modal">` |

## Example: Middleware

```ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
```

## Example: Homepage redirect

```ts
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const { userId } = await auth();
  if (userId) redirect('/dashboard');
  // render landing page...
}
```
