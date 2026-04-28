import type { Metadata } from "next";
import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import "./globals.css";

export const metadata: Metadata = {
  title: "Snip – Fast Link Shortener",
  description: "Shorten, share, and track your links with Snip.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <ClerkProvider>
          <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:bg-zinc-950/80">
            <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
              <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                ✂️ Snip
              </span>
              <div className="flex items-center gap-2">
                <Show when="signed-out">
                  <SignInButton mode="modal">
                    <Button variant="ghost" size="sm">
                      Sign in
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button size="sm">Get started</Button>
                  </SignUpButton>
                </Show>
                <Show when="signed-in">
                  <UserButton />
                </Show>
              </div>
            </div>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
