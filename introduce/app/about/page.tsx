import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PageShell } from '@/components/page-shell'

const profile = [
  { label: 'Name', value: '김다현 (Dahyeon Kim)' },
  { label: 'Major', value: 'German Language and Literature' },
  { label: 'Year', value: 'Senior (4th year)' },
  { label: 'Hobby', value: 'Watching movies' },
  { label: 'Likes', value: 'Traveling' },
]

export default function AboutPage() {
  return (
    <PageShell>
      <div className="flex items-center gap-4 md:gap-8">
        <Link
          href="/"
          aria-label="Previous page"
          className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#2F3A45] text-[#FBF6EE] shadow-lg transition hover:-translate-x-1 hover:bg-[#E8806A] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F2A38C]/60"
        >
          <ArrowLeft className="size-6" aria-hidden="true" />
        </Link>
        <section
          aria-labelledby="about-title"
          className="flex-1 rounded-3xl border border-[#2F3A45]/10 bg-white/60 p-8 shadow-xl shadow-[#2F3A45]/5 backdrop-blur md:p-12"
        >
          <h1 id="about-title" className="font-serif text-4xl font-bold italic md:text-5xl">
            About me
          </h1>
          <dl className="mt-8 flex flex-col divide-y divide-[#2F3A45]/10">
            {profile.map((item) => (
              <div key={item.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                <dt className="w-24 shrink-0 text-sm font-semibold uppercase tracking-widest text-[#E8806A]">
                  {item.label}
                </dt>
                <dd className="text-lg md:text-xl">{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>
        <Link
          href="/you"
          aria-label="Next page"
          className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#2F3A45] text-[#FBF6EE] shadow-lg transition hover:translate-x-1 hover:bg-[#E8806A] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F2A38C]/60"
        >
          <ArrowRight className="size-6" aria-hidden="true" />
        </Link>
      </div>
    </PageShell>
  )
}
