import {
  ArrowRight,
  Leaf,
  MapPinHouse,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
  Star,
  WalletCards,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const accountStats = [
  { label: 'Total orders', value: '0', Icon: PackageCheck },
  { label: 'Wallet balance', value: '₹0', Icon: WalletCards },
  { label: 'Loyalty points', value: '0', Icon: Star },
  { label: 'Account status', value: 'Active', Icon: ShieldCheck },
]

const personalDetails = [
  ['Name', 'safiq'],
  ['Email', 'safiqatwork@gmail.com'],
  ['Phone', '8750404131'],
  ['Referral code', '—'],
]

export default function Profile() {
  return (
    <main className="bg-[#fffefb] px-4 py-8 text-[#263326] sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-360">
        <section className="flex flex-col gap-6 border-b border-[#ebe8de] pb-7 sm:flex-row sm:items-center sm:justify-between sm:pb-8" aria-labelledby="profile-name">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#efeee4] font-['Georgia'] text-2xl font-bold text-[#315922] sm:h-18 sm:w-18" aria-hidden="true">S</div>
            <div>
              <p className="mb-1 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#315922] sm:text-xs"><Leaf size={14} aria-hidden="true" /> My account</p>
              <h1 id="profile-name" className="font-['Georgia'] text-2xl font-bold text-[#183112] sm:text-3xl">Hello, safiq</h1>
              <p className="mt-1 text-sm text-neutral-600">Member since September 30, 2026</p>
            </div>
          </div>
          <Link to="/shop" className="inline-flex w-fit items-center gap-2 rounded-md border border-[#b9c4a4] px-4 py-2.5 text-sm font-semibold text-[#315922] transition-colors hover:bg-[#f3f4ec]">
            Continue shopping <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </section>

        <section className="mt-6 grid grid-cols-2 overflow-hidden rounded-xl border border-[#ebe8de] bg-[#f8f7f1] sm:grid-cols-4" aria-label="Account summary">
          {accountStats.map(({ label, value, Icon }) => (
            <article key={label} className="flex min-w-0 items-center gap-3 border-b border-r border-[#e5e1d7] px-3 py-4 last:border-r-0 even:border-r-0 sm:border-b-0 sm:border-r sm:px-5 sm:py-5 sm:last:border-r-0 sm:even:border-r">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#efeee4] text-[#788754] sm:h-11 sm:w-11">
                <Icon size={21} strokeWidth={1.65} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-lg font-bold leading-6 text-[#183112] sm:text-xl">{value}</p>
                <p className="text-[11px] font-semibold leading-4 text-neutral-600 sm:text-xs">{label}</p>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <section aria-labelledby="personal-details-heading">
            <div className="mb-4">
              <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#788754]">Your information</p>
              <h2 id="personal-details-heading" className="font-['Georgia'] text-xl font-bold text-[#183112] sm:text-2xl">Personal details</h2>
            </div>
            <dl className="divide-y divide-[#ebe8de] border-y border-[#ebe8de]">
              {personalDetails.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[minmax(110px,0.4fr)_1fr] gap-3 py-3 text-sm sm:py-3.5">
                  <dt className="font-semibold text-[#526044]">{label}</dt>
                  <dd className="break-all text-neutral-700">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="addresses-heading">
            <div className="mb-4 flex items-end justify-between gap-3">
              <div>
                <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#788754]">Delivery information</p>
                <h2 id="addresses-heading" className="font-['Georgia'] text-xl font-bold text-[#183112] sm:text-2xl">My addresses</h2>
              </div>
              <Link to="/checkout" className="shrink-0 text-xs font-semibold text-[#315922] underline decoration-[#b9c4a4] underline-offset-4 hover:text-[#183112] sm:text-sm">Manage at checkout</Link>
            </div>
            <div className="flex min-h-36 items-center gap-4 rounded-xl border border-[#ebe8de] bg-[#f8f7f1] px-5 py-5 sm:px-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#efeee4] text-[#788754]"><MapPinHouse size={22} aria-hidden="true" /></span>
              <p className="max-w-sm text-sm leading-6 text-neutral-600">No saved addresses yet. Add one during checkout.</p>
            </div>
          </section>
        </div>

        <section className="mt-8 border-t border-[#ebe8de] pt-7 sm:mt-10 sm:pt-8" aria-labelledby="orders-heading">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#788754]">Shopping activity</p>
              <h2 id="orders-heading" className="font-['Georgia'] text-xl font-bold text-[#183112] sm:text-2xl">Recent orders</h2>
            </div>
            <Link to="/order-tracking" className="inline-flex items-center gap-2 text-sm font-semibold text-[#315922] hover:text-[#183112]">
              View all orders <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-5 flex flex-col items-start gap-4 rounded-xl border border-[#ebe8de] bg-[#f8f7f1] px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#efeee4] text-[#788754]"><ShoppingBag size={21} aria-hidden="true" /></span>
              <p className="text-sm text-neutral-600">You have not placed any orders yet.</p>
            </div>
            <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-bold text-[#315922] underline decoration-[#b9c4a4] underline-offset-4 hover:text-[#183112]">
              Explore products <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
