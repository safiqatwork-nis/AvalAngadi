import { HandHeart, Leaf, Phone, Recycle, Store } from 'lucide-react'

const trustPoints = [
  { label: 'Women-Owned', icon: HandHeart },
  { label: 'Naturally Grown', icon: Leaf },
  { label: 'Sustainable', icon: Recycle },
  { label: 'Made in India', icon: Store },
]

function TopInfoBar() {
  return (
    <aside className="hidden border-b border-stone-200 bg-[#f7f4ed] text-[#39372f] lg:block">
      <div className="mx-auto flex min-h-8 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <ul className="flex min-w-0 items-center gap-4 overflow-x-auto py-1.5 [scrollbar-width:none] sm:gap-6 [&::-webkit-scrollbar]:hidden">
          {trustPoints.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-[10px] font-medium sm:text-[11px]"
            >
              <Icon aria-hidden="true" className="text-[#9a7540]" size={13} strokeWidth={1.8} />
              <span>{label}</span>
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 items-center gap-4 text-[10px] font-medium sm:flex sm:text-[11px]">
          <span>Customer Support</span>
          <span className="h-3 w-px bg-stone-300" aria-hidden="true" />
          <a
            href="tel:+919876543210"
            className="flex items-center gap-1.5 transition-colors hover:text-[#9a1b1f]"
          >
            <Phone aria-hidden="true" size={12} strokeWidth={1.8} />
            <span>+91 98765 43210</span>
          </a>
        </div>
      </div>
    </aside>
  )
}

export default TopInfoBar
