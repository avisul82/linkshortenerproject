import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: "⚡",
    title: "Instant Shortening",
    description:
      "Paste any long URL and get a clean, shareable short link in under a second.",
  },
  {
    icon: "📊",
    title: "Click Analytics",
    description:
      "Track how many times your links are clicked and monitor engagement over time.",
  },
  {
    icon: "🔒",
    title: "Secure & Reliable",
    description:
      "All links are stored securely. Your data never expires unless you delete it.",
  },
  {
    icon: "🗂️",
    title: "Personal Dashboard",
    description:
      "Manage all your shortened links from one organised, easy-to-use dashboard.",
  },
  {
    icon: "🌐",
    title: "Custom Slugs",
    description:
      "Choose a memorable custom alias for your links instead of a random code.",
  },
  {
    icon: "📋",
    title: "One-Click Copy",
    description:
      "Copy your short link to the clipboard instantly with a single click.",
  },
];

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  return (
    <div className="flex flex-col flex-1 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28 gap-8 bg-gradient-to-b from-indigo-50 to-white dark:from-zinc-900 dark:to-zinc-950">
        <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 dark:bg-indigo-900/40 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:text-indigo-300">
          🔗 Free to use · No credit card required
        </span>
        <h1 className="max-w-2xl text-5xl font-bold tracking-tight leading-tight">
          Short links.{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Big impact.
          </span>
        </h1>
        <p className="max-w-xl text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
          Snip turns long, ugly URLs into clean, trackable short links. Share
          them anywhere and watch your analytics grow.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <SignUpButton mode="modal">
            <Button
              size="lg"
              className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8"
            >
              Get started for free
            </Button>
          </SignUpButton>
          <SignInButton mode="modal">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full font-semibold px-8"
            >
              Sign in
            </Button>
          </SignInButton>
        </div>
      </section>

      {/* Demo URL bar */}
      <section className="flex justify-center px-6 py-10">
        <div className="flex w-full max-w-2xl items-center gap-3 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 px-5 py-4 shadow-sm">
          <span className="text-zinc-400 text-sm truncate flex-1">
            https://www.example.com/some/very/long/url/that/nobody-wants-to-share
          </span>
          <span className="text-zinc-300 dark:text-zinc-600">→</span>
          <span className="font-semibold text-indigo-600 dark:text-indigo-400 whitespace-nowrap text-sm">
            snip.link/abc123
          </span>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20 max-w-5xl mx-auto w-full">
        <h2 className="text-center text-3xl font-bold mb-12">
          Everything you need
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Card key={f.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <span className="text-3xl">{f.icon}</span>
                <CardTitle className="text-lg">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {f.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="px-6 py-20 flex flex-col items-center gap-6 text-center bg-indigo-600 dark:bg-indigo-700">
        <h2 className="text-3xl font-bold text-white">
          Ready to start shortening?
        </h2>
        <p className="text-indigo-100 max-w-md">
          Join thousands of users who share smarter links every day.
        </p>
        <SignUpButton mode="modal">
          <Button
            size="lg"
            className="rounded-full bg-white text-indigo-600 font-semibold px-8 hover:bg-indigo-50"
          >
            Create your free account
          </Button>
        </SignUpButton>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-zinc-400 py-8">
        © {new Date().getFullYear()} Snip. All rights reserved.
      </footer>
    </div>
  );
}
