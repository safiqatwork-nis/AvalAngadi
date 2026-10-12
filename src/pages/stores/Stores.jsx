import { ArrowRight, Leaf, MapPin, Search, Store as StoreIcon } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import botanicalBranch from '../../assets/decorations/botanical-branch.png'
import leafPair from '../../assets/decorations/leaf-pair.png'
import oliveBranch from '../../assets/decorations/olive-branch.png'

const partnerStores = [
  {
    name: 'AAPT Herbs Homemade Products',
    city: 'Salem',
    initials: 'AAPT',
    theme: { panel: '#edf6e6', surface: '#fcfff9', border: '#d2e3c2', accent: '#3f6f2c' },
  },
  {
    name: 'Amris Spices and Trading',
    city: 'Trichy',
    initials: 'AMRIS',
    theme: { panel: '#fff1df', surface: '#fffdfa', border: '#f0d2a9', accent: '#9a581d' },
  },
  {
    name: 'Aruvi Eco Ventures',
    city: 'Tirunelveli',
    initials: 'ARUVI',
    theme: { panel: '#e4f4f1', surface: '#fafffe', border: '#bfe2dc', accent: '#187568' },
  },
  {
    name: 'BetelO',
    city: 'Mysuru',
    initials: 'BO',
    theme: { panel: '#f8eaf0', surface: '#fffafd', border: '#eac7d5', accent: '#9a3d61' },
  },
]

export default function Stores() {
  const [query, setQuery] = useState('')
  const filteredStores = partnerStores.filter((partner) =>
    `${partner.name} ${partner.city}`.toLowerCase().includes(query.trim().toLowerCase()),
  )

  return (
    <main className="relative isolate overflow-hidden bg-[#fffefb] px-4 py-8 text-[#263326] sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden lg:block">
        <img
          src={botanicalBranch}
          alt=""
          className="absolute -left-20 top-20 h-80 w-80 -rotate-20 object-contain opacity-[0.22]"
        />
        <img
          src={oliveBranch}
          alt=""
          className="absolute -left-16 top-[30rem] h-72 w-72 -rotate-40 object-contain opacity-[0.18]"
        />
        <img
          src={leafPair}
          alt=""
          className="absolute -right-20 top-40 h-64 w-64 rotate-120 object-contain opacity-[0.18]"
        />
        <img
          src={oliveBranch}
          alt=""
          className="absolute -right-20 bottom-2 h-80 w-80 rotate-155 object-contain opacity-[0.22]"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-360">
        <section className="flex flex-col gap-6 border-b border-[#ebe8de] pb-7 sm:flex-row sm:items-end sm:justify-between sm:pb-8">
          <div>
            <p className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#315922] sm:text-xs">
              <Leaf size={14} aria-hidden="true" /> Women-led marketplace
            </p>
            <h1 className="font-['Georgia'] text-3xl font-bold text-[#183112] sm:text-4xl">Our partner stores</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">
              Discover quality products from trusted stores and women entrepreneurs across India.
            </p>
          </div>
          <div className="flex w-fit items-center gap-3 rounded-lg border border-[#ebe8de] bg-[#f8f7f1] px-4 py-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#efeee4] text-[#788754]">
              <StoreIcon size={20} strokeWidth={1.7} aria-hidden="true" />
            </span>
            <span>
              <strong className="block font-['Georgia'] text-xl leading-6 text-[#183112]">16</strong>
              <span className="text-xs font-semibold text-neutral-600">partner stores</span>
            </span>
          </div>
        </section>

        <section className="mt-7" aria-labelledby="featured-stores-heading">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#788754]">Meet the makers</p>
              <h2 id="featured-stores-heading" className="font-['Georgia'] text-xl font-bold text-[#183112] sm:text-2xl">Featured stores</h2>
            </div>
            <p className="text-xs font-medium text-neutral-500">Showing {filteredStores.length} of 4 featured partners</p>
          </div>

          <label className="flex h-12 items-center gap-3 rounded-lg border border-[#e5e1d7] bg-white px-4 shadow-sm focus-within:border-[#788754]">
            <Search size={19} className="shrink-0 text-[#788754]" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by store or city"
              aria-label="Search partner stores by name or city"
              className="h-full min-w-0 flex-1 bg-transparent text-sm text-[#263326] outline-none placeholder:text-neutral-400"
            />
          </label>

          {filteredStores.length ? (
            <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {filteredStores.map(({ name, city, initials, theme }) => (
                <article key={name} className="overflow-hidden rounded-xl border bg-white shadow-sm" style={{ borderColor: theme.border }}>
                  <div className="flex h-40 items-center justify-center border-b" style={{ backgroundColor: theme.panel, borderColor: theme.border }}>
                    <div className="flex h-28 w-36 flex-col items-center justify-center border px-3 text-center shadow-sm" style={{ backgroundColor: theme.surface, borderColor: theme.border }}>
                      <Leaf size={19} strokeWidth={1.6} className="mb-2" style={{ color: theme.accent }} aria-hidden="true" />
                      <span className="font-['Georgia'] text-lg font-bold leading-tight" style={{ color: theme.accent }}>{initials}</span>
                      <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-500">Aval Angadi partner</span>
                    </div>
                  </div>
                  <div className="flex min-h-32 flex-col px-5 py-4" style={{ backgroundColor: theme.surface }}>
                    <h3 className="text-[15px] font-bold leading-5 text-[#263326]">{name}</h3>
                    <p className="mt-3 flex items-center gap-2 text-xs font-medium text-neutral-600">
                      <MapPin size={15} className="shrink-0" style={{ color: theme.accent }} aria-hidden="true" /> {city}
                    </p>
                  </div>
                  <div className="border-t px-5 py-3" style={{ backgroundColor: theme.panel, borderColor: theme.border }}>
                    <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-bold transition-opacity hover:opacity-75" style={{ color: theme.accent }}>
                      Browse products <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-5 rounded-xl border border-dashed border-[#d9ddcf] bg-[#f8f7f1] px-5 py-10 text-center">
              <StoreIcon size={24} className="mx-auto text-[#788754]" aria-hidden="true" />
              <p className="mt-3 font-semibold text-[#315922]">No featured stores found</p>
              <p className="mt-1 text-sm text-neutral-600">Try another store name or location.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
