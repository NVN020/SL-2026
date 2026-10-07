import Link from 'next/link'
import { PageShell } from '@/components/page-shell'

export default function HomePage() {
  return (
    <PageShell>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold tracking-tight text-balance md:text-7xl">
          안녕하세요
        </h1>
        <p className="mt-4 font-serif text-2xl italic text-[#2F3A45]/70 md:text-3xl">
          nice to meet you
        </p>
        <Link
          href="/about"
          className="mt-12 rounded-full bg-[#2F3A45] px-8 py-3 text-base font-medium text-[#FBF6EE] shadow-lg shadow-[#2F3A45]/20 transition hover:-translate-y-0.5 hover:bg-[#E8806A] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F2A38C]/60"
        >
          about me
        </Link>
      </div>
    </PageShell>
  )
}
