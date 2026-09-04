import { Grid2X2, Heart, Home, ShoppingCart, UserRound } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const items = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'Categories', to: '/shop', icon: Grid2X2 },
  { label: 'Wishlist', to: '/wishlist', icon: Heart },
  { label: 'Cart', to: '/cart', icon: ShoppingCart, badge: 0 },
  { label: 'Account', to: '/profile', icon: UserRound },
]

function MobileBottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-[80] grid h-[66px] grid-cols-5 border-t border-neutral-200 bg-white/95 px-2 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_18px_rgba(0,0,0,0.08)] backdrop-blur lg:hidden" aria-label="Mobile navigation">
      {items.map(({ label, to, icon: Icon, badge }) => (
        <NavLink
          key={label}
          to={to}
          className={({ isActive }) => `relative flex flex-col items-center justify-center gap-1 text-[9px] font-semibold ${isActive ? 'text-[#c71320]' : 'text-[#24452e]'}`}
        >
          <span className="relative">
            <Icon size={21} strokeWidth={1.8} />
            {badge !== undefined && <span className="absolute -right-2.5 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#c71320] px-1 text-[8px] text-white">{badge}</span>}
          </span>
          {label}
        </NavLink>
      ))}
    </nav>
  )
}

export default MobileBottomNav
