import { Leaf, ShieldCheck, Sprout, Truck, UserRoundCheck, UsersRound } from 'lucide-react'

const stats = [
  {
    icon: UserRoundCheck,
    value: '2500+',
    label: 'Happy Families',
  },
  {
    icon: Leaf,
    value: '18',
    label: 'Organic Products',
  },
  {
    icon: UsersRound,
    value: '35',
    label: 'Women Employed',
  },
  {
    icon: Sprout,
    value: '15',
    label: 'Farmer Families Supported',
  },
  {
    icon: ShieldCheck,
    value: 'Secure Payments',
    label: '100% safe and secure',
  },
  {
    icon: Truck,
    value: 'Fast Delivery',
    label: 'Pan India Shipping',
  },
]

function TrustStats() {
  return (
    <section className="bg-white pb-12 sm:pb-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-[#ebe8de] bg-[#f8f7f1] px-3 py-5 shadow-sm lg:grid-cols-6 lg:px-4 lg:py-6">
          {stats.map(({ icon: Icon, value, label }, index) => (
            <article
              key={label}
              className={`flex min-w-0 items-center gap-3 px-3 py-3 sm:px-4 lg:py-0 ${
                index % 2 === 0 ? 'border-r border-[#e5e1d7] lg:border-r-0' : ''
              } ${index < 4 ? 'border-b border-[#e5e1d7] lg:border-b-0' : ''} ${
                index > 0 ? 'lg:border-l lg:border-[#e5e1d7]' : ''
              }`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#efeee4] text-[#788754] sm:h-12 sm:w-12">
                <Icon size={27} strokeWidth={1.55} />
              </span>
              <div className="min-w-0">
                <h2 className="text-[14px] font-extrabold leading-5 text-[#183112] sm:text-[16px] lg:text-[15px]">
                  {value}
                </h2>
                <p className="mt-0.5 text-[9px] font-semibold leading-4 text-neutral-600 sm:text-[10px]">
                  {label}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustStats
