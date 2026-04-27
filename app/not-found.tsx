import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 py-32 text-center">
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Page not found
      </h2>
      <p className="text-zinc-500 dark:text-zinc-400">
        The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="rounded-full bg-zinc-900 px-6 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200"
      >
        Go home
      </Link>
    </div>
  );
}
