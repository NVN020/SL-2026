import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { PageShell } from '@/components/page-shell'

export default function YouPage() {
  return (
    <PageShell>
      <div className="flex items-center gap-4 md:gap-8">
        <Link
          href="/about"
          aria-label="Previous page"
          className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#2F3A45] text-[#FBF6EE] shadow-lg transition hover:-translate-x-1 hover:bg-[#E8806A] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F2A38C]/60"
        >
          <ArrowLeft className="size-6" aria-hidden="true" />
        </Link>
        <div className="flex flex-1 flex-col items-center text-center">
          <h1 className="font-serif text-5xl font-bold italic tracking-tight text-balance md:text-7xl">
            How about you?
          </h1>
          <p className="mt-6 text-xl text-[#2F3A45]/70 md:text-2xl">
            now, tell me about yourself!
          </p>
        </div>
        <div className="size-14 shrink-0" aria-hidden="true" />
      </div>
    </PageShell>
  )
}
