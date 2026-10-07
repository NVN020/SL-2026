import type { ReactNode } from 'react'

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[#FBF6EE] px-6 text-[#2F3A45]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 size-80 rounded-full bg-[#F2A38C]/40 blur-3xl motion-safe:animate-pulse"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-20 size-96 rounded-full bg-[#A8C3B0]/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-16 size-40 rounded-full bg-[#F6D58E]/50 blur-2xl"
      />
      <div className="relative z-10 w-full max-w-2xl">{children}</div>
    </main>
  )
}
