import {
  ArrowRight,
  Camera,
  Check,
  Heart,
  MapPin,
  Package,
  PackageCheck,
  Pencil,
  Plus,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Star,
  User,
  Wallet,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import botanicalBranch from '../../assets/decorations/botanical-branch.png'
import leafPair from '../../assets/decorations/leaf-pair.png'
import oliveBranch from '../../assets/decorations/olive-branch.png'

export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile')
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false)

  // Static sample user details (resets on refresh)
  const [userData, setUserData] = useState({
    name: 'Safiq',
    email: 'safiqatwork@gmail.com',
    phone: '8750404131',
    referralCode: 'AVAL2026',
    memberSince: 'September 30, 2026',
  })

  // Edit form state
  const [editForm, setEditForm] = useState({
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
  })

  // Static sample saved address (resets on refresh)
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      fullName: 'Safiq',
      street: '12, Anna Nagar',
      city: 'Tirunelveli',
      state: 'Tamil Nadu',
      pincode: '627001',
      phone: '8750404131',
      isDefault: true,
    },
  ])

  // Static sample orders
  const [orders] = useState([
    {
      id: 'ord-1',
      orderNumber: '#ORD-84920',
      date: 'October 18, 2026',
      items: 'Organic Cold-Pressed Coconut Oil (1L) • Handmade Neem Soap',
      total: '₹680',
      status: 'Delivered',
    },
    {
      id: 'ord-2',
      orderNumber: '#ORD-83715',
      date: 'October 05, 2026',
      items: 'Traditional Handwoven Banana Fiber Basket (Set of 2)',
      total: '₹1,250',
      status: 'Delivered',
    },
    {
      id: 'ord-3',
      orderNumber: '#ORD-82404',
      date: 'September 28, 2026',
      items: 'Pure Forest Wild Honey (500g) • Clay Cookware Pot',
      total: '₹1,420',
      status: 'Delivered',
    },
  ])

  // New address form state
  const [addressForm, setAddressForm] = useState({
    fullName: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
    isDefault: false,
  })

  const handleSaveProfile = (e) => {
    e.preventDefault()
    const updated = {
      ...userData,
      name: editForm.name.trim() || userData.name,
      email: editForm.email.trim() || userData.email,
      phone: editForm.phone.trim() || userData.phone,
    }
    setUserData(updated)
    setIsEditModalOpen(false)
  }

  const handleAddAddress = (e) => {
    e.preventDefault()
    if (!addressForm.street.trim() || !addressForm.city.trim()) return
    const newAddresses = [...addresses, { ...addressForm, id: Date.now() }]
    setAddresses(newAddresses)
    setAddressForm({
      fullName: '',
      street: '',
      city: '',
      state: '',
      pincode: '',
      phone: '',
      isDefault: false,
    })
    setIsAddressModalOpen(false)
  }

  const accountStats = [
    { label: 'Total orders', value: '5', Icon: PackageCheck, link: '/order-tracking' },
    { label: 'Wallet balance', value: '₹250', Icon: Wallet, link: null },
    { label: 'Loyalty points', value: '120', Icon: Star, link: null },
    { label: 'Account status', value: 'Active', Icon: ShieldCheck, link: null },
  ]

  const navItems = [
    { id: 'profile', label: 'My Profile', icon: User, to: null },
    { id: 'orders', label: 'My Orders', icon: Package, to: '/order-tracking' },
    { id: 'wishlist', label: 'My Wishlist', icon: Heart, to: '/wishlist' },
    { id: 'addresses', label: 'My Addresses', icon: MapPin, to: null },
    { id: 'wallet', label: 'Wallet & Rewards', icon: Wallet, to: null },
    { id: 'settings', label: 'Account Settings', icon: Settings, to: null },
  ]

  const userInitial = userData.name ? userData.name.trim().charAt(0).toUpperCase() : 'S'

  return (
    <main className="min-h-screen bg-[#FAF8F2] px-4 py-6 text-[#203F1D] sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-7">
          
          {/* =========================================================
              LEFT SIDEBAR
          ========================================================== */}
          <aside className="w-full lg:w-72 xl:w-80 shrink-0">
            {/* User Profile Card */}
            <div className="relative overflow-hidden rounded-2xl border border-[#EBE7DF] bg-[#FCFBF7] p-6 shadow-xs">
              {/* Botanical Accent Top-Left */}
              <img
                src={botanicalBranch}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -top-4 -left-4 w-24 h-24 object-contain opacity-25 -rotate-45 select-none"
              />

              {/* Avatar */}
              <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#203F1D] text-3xl font-bold font-serif text-white shadow-sm ring-4 ring-[#FAF8F2]">
                {userInitial}
              </div>

              {/* Name & Membership */}
              <div className="mt-3.5 text-center">
                <h2 className="font-serif text-xl font-bold text-[#1F291E]">
                  {userData.name}
                </h2>
                <p className="mt-1 text-xs text-neutral-500">
                  Member since {userData.memberSince}
                </p>
              </div>

              {/* Sidebar Navigation */}
              <nav className="mt-6 flex flex-col gap-1.5" aria-label="Account navigation">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = activeTab === item.id

                  if (item.to) {
                    return (
                      <Link
                        key={item.id}
                        to={item.to}
                        className="flex items-center gap-3.5 rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-700 transition-all hover:bg-[#F3F1E8] hover:text-[#203F1D]"
                      >
                        <Icon size={18} strokeWidth={1.8} className="text-[#203F1D]/80" />
                        <span>{item.label}</span>
                      </Link>
                    )
                  }

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveTab(item.id)}
                      className={`flex w-full items-center gap-3.5 rounded-xl px-4 py-2.5 text-left text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-[#E5EAD9] font-bold text-[#203F1D] shadow-2xs'
                          : 'text-neutral-700 hover:bg-[#F3F1E8] hover:text-[#203F1D]'
                      }`}
                    >
                      <Icon
                        size={18}
                        strokeWidth={isActive ? 2.2 : 1.8}
                        className={isActive ? 'text-[#203F1D]' : 'text-[#203F1D]/80'}
                      />
                      <span>{item.label}</span>
                    </button>
                  )
                })}
              </nav>
            </div>

            {/* Premium "Shop More" Promotional Card */}
            <div className="relative mt-5 overflow-hidden rounded-2xl border border-[#E8E2D5] bg-[#F4EFE6] p-5 shadow-xs">
              {/* Botanical Accent Top-Right */}
              <img
                src={leafPair}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -top-1 -right-1 w-16 h-16 object-contain opacity-35 select-none"
              />

              <div className="flex items-center justify-between gap-3">
                <div className="max-w-[155px]">
                  <h3 className="font-serif text-lg font-bold text-[#203F1D] leading-tight">
                    Shop More
                  </h3>
                  <p className="mt-1 text-xs text-neutral-600 leading-snug">
                    Discover new collections just for you!
                  </p>
                  <Link
                    to="/shop"
                    className="mt-3.5 inline-flex items-center gap-1.5 rounded-full bg-[#203F1D] px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs transition hover:bg-[#183112]"
                  >
                    Continue Shopping <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                </div>

                {/* Elegant Shopping Bag Graphic */}
                <div className="relative shrink-0 pr-1">
                  <svg
                    width="78"
                    height="88"
                    viewBox="0 0 78 88"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-md select-none"
                    aria-hidden="true"
                  >
                    {/* Bag Body */}
                    <path
                      d="M14 26L18 84H60L64 26H14Z"
                      fill="#D8B589"
                      stroke="#C19B6C"
                      strokeWidth="1.5"
                    />
                    {/* Front Flap / Fold Shadow */}
                    <path
                      d="M18 26L22 84H56L60 26H18Z"
                      fill="#E2C59D"
                    />
                    {/* Top Fold Crease */}
                    <path
                      d="M14 26L18 32H60L64 26H14Z"
                      fill="#C8A577"
                    />
                    {/* Center Crease */}
                    <path
                      d="M39 32V84"
                      stroke="#C8A577"
                      strokeWidth="1.2"
                      strokeDasharray="2 2"
                    />
                    {/* Twisted Rope Handles */}
                    <path
                      d="M28 26C28 12 50 12 50 26"
                      stroke="#9E7348"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M32 26C32 16 46 16 46 26"
                      stroke="#855D37"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </aside>

          {/* =========================================================
              RIGHT MAIN CONTENT
          ========================================================== */}
          <section className="flex-1 min-w-0 flex flex-col gap-5 lg:gap-6">
            
            {/* 1. Welcome Banner Card */}
            <div className="relative overflow-hidden rounded-2xl border border-[#EBE7DF] bg-[#FCFBF7] p-6 sm:p-7 shadow-xs">
              {/* Botanical Accent Top-Right */}
              <img
                src={botanicalBranch}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -top-8 -right-8 w-44 h-44 object-contain opacity-35 select-none"
              />

              <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                {/* User Info with Avatar & Camera Icon */}
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="relative shrink-0">
                    <div className="flex h-18 w-18 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#203F1D] text-3xl font-bold font-serif text-white shadow-sm ring-4 ring-[#F3F1E8]">
                      {userInitial}
                    </div>
                    {/* Camera Badge */}
                    <button
                      type="button"
                      onClick={() => setIsEditModalOpen(true)}
                      title="Update avatar"
                      className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border border-[#E2DDD0] bg-white text-[#203F1D] shadow-xs transition hover:bg-[#F3F1E8]"
                    >
                      <Camera size={14} strokeWidth={2} aria-hidden="true" />
                    </button>
                  </div>

                  <div>
                    <p className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.18em] text-[#7D8E56] uppercase sm:text-xs">
                      • WELCOME BACK •
                    </p>
                    <h1 className="mt-0.5 font-serif text-2xl font-bold text-[#203F1D] sm:text-3xl lg:text-[32px] leading-tight">
                      Hello, {userData.name}
                    </h1>
                    <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
                      Member since {userData.memberSince}
                    </p>
                  </div>
                </div>

                {/* Right Side: Edit Profile Button & Script Note */}
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center md:flex-col md:items-end">
                  <button
                    type="button"
                    onClick={() => {
                      setEditForm({
                        name: userData.name,
                        email: userData.email,
                        phone: userData.phone,
                      })
                      setIsEditModalOpen(true)
                    }}
                    className="inline-flex items-center gap-2 rounded-xl border border-[#7D8E56]/70 bg-white/80 px-4 py-2 text-sm font-semibold text-[#203F1D] shadow-2xs transition hover:bg-[#F3F1E8] hover:border-[#203F1D]"
                  >
                    <Pencil size={15} strokeWidth={2} aria-hidden="true" />
                    <span>Edit Profile</span>
                  </button>

                  <p className="font-serif italic text-sm text-[#203F1D]/80 select-none text-left md:text-right">
                    Thank you for being part of Aval Angadi ♡
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Four Compact Statistic Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4" aria-label="Account Statistics">
              {accountStats.map(({ label, value, Icon, link }) => {
                const CardWrapper = link ? Link : 'div'
                return (
                  <CardWrapper
                    key={label}
                    {...(link ? { to: link } : {})}
                    className="group flex items-center justify-between rounded-2xl border border-[#EBE7DF] bg-[#FCFBF7] p-3.5 sm:p-4 shadow-xs transition hover:border-[#7D8E56]/50 hover:bg-[#FAF8F1]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EBF1E5] text-[#203F1D] transition group-hover:bg-[#E2EBD7]">
                        <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-lg font-bold text-[#203F1D] sm:text-xl leading-none">
                          {value}
                        </p>
                        <p className="mt-1 text-xs font-medium text-neutral-500">
                          {label}
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      size={15}
                      className="shrink-0 text-neutral-400 transition group-hover:translate-x-0.5 group-hover:text-[#203F1D]"
                      aria-hidden="true"
                    />
                  </CardWrapper>
                )
              })}
            </div>

            {/* 3. Two-Column Section: Personal Details & My Addresses */}
            <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
              
              {/* Personal Details Card */}
              <div className="flex flex-col justify-between rounded-2xl border border-[#EBE7DF] bg-[#FCFBF7] p-6 shadow-xs">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#F0ECE3]">
                    <div className="flex items-center gap-2.5">
                      <User size={20} className="text-[#203F1D]" strokeWidth={2} />
                      <h2 className="font-serif text-xl font-bold text-[#203F1D]">
                        Personal details
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setEditForm({
                          name: userData.name,
                          email: userData.email,
                          phone: userData.phone,
                        })
                        setIsEditModalOpen(true)
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#203F1D] transition hover:text-[#7D8E56]"
                    >
                      <Pencil size={13} strokeWidth={2} />
                      <span>Edit</span>
                    </button>
                  </div>

                  <dl className="mt-4 divide-y divide-[#F0ECE3]">
                    <div className="flex items-center justify-between py-3 text-sm">
                      <dt className="font-medium text-neutral-500">Name</dt>
                      <dd className="font-medium text-neutral-800">{userData.name}</dd>
                    </div>
                    <div className="flex items-center justify-between py-3 text-sm">
                      <dt className="font-medium text-neutral-500">Email</dt>
                      <dd className="break-all font-medium text-neutral-800">{userData.email}</dd>
                    </div>
                    <div className="flex items-center justify-between py-3 text-sm">
                      <dt className="font-medium text-neutral-500">Phone</dt>
                      <dd className="font-medium text-neutral-800">{userData.phone}</dd>
                    </div>
                    <div className="flex items-center justify-between py-3 text-sm">
                      <dt className="font-medium text-neutral-500">Referral code</dt>
                      <dd className="font-medium text-neutral-800">{userData.referralCode}</dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* My Addresses Card */}
              <div className="flex flex-col justify-between rounded-2xl border border-[#EBE7DF] bg-[#FCFBF7] p-6 shadow-xs">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#F0ECE3]">
                    <div className="flex items-center gap-2.5">
                      <MapPin size={20} className="text-[#203F1D]" strokeWidth={2} />
                      <h2 className="font-serif text-xl font-bold text-[#203F1D]">
                        My addresses
                      </h2>
                    </div>
                    <Link
                      to="/checkout"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#203F1D] transition hover:text-[#7D8E56]"
                    >
                      <span>Manage at checkout</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>

                  {addresses.length === 0 ? (
                    /* Beautiful Empty State with Map & Leaves */
                    <div className="mt-4 flex flex-col items-center justify-center rounded-xl bg-[#F7F5EE] p-6 text-center border border-[#ECE7DC]">
                      <div className="relative flex h-16 w-16 items-center justify-center">
                        {/* Map & Botanical illustration */}
                        <svg
                          width="58"
                          height="46"
                          viewBox="0 0 58 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="opacity-75"
                          aria-hidden="true"
                        >
                          <path
                            d="M2 10L19 4L37 10L56 4V36L37 42L19 36L2 42V10Z"
                            fill="#E3DEC8"
                            stroke="#C8C0A5"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19 4V36"
                            stroke="#C8C0A5"
                            strokeWidth="1.5"
                            strokeDasharray="2 2"
                          />
                          <path
                            d="M37 10V42"
                            stroke="#C8C0A5"
                            strokeWidth="1.5"
                            strokeDasharray="2 2"
                          />
                        </svg>

                        {/* Location Pin Centered */}
                        <div className="absolute -top-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#203F1D] text-white shadow-md ring-2 ring-white">
                          <MapPin size={17} strokeWidth={2.2} />
                        </div>
                      </div>

                      <p className="mt-3 text-sm font-semibold text-neutral-800">
                        No saved addresses yet.
                      </p>
                      <p className="mt-0.5 text-xs text-neutral-500">
                        Add one during checkout.
                      </p>

                      <button
                        type="button"
                        onClick={() => setIsAddressModalOpen(true)}
                        className="mt-4 inline-flex items-center gap-1.5 rounded-xl border border-[#203F1D] px-5 py-2 text-xs font-semibold text-[#203F1D] transition hover:bg-[#203F1D] hover:text-white"
                      >
                        <Plus size={14} />
                        <span>Add Address</span>
                      </button>
                    </div>
                  ) : (
                    /* Display Saved Addresses List */
                    <div className="mt-4 flex flex-col gap-3">
                      {addresses.map((addr) => (
                        <div
                          key={addr.id}
                          className="rounded-xl border border-[#ECE7DC] bg-[#F7F5EE] p-4 text-xs text-neutral-700"
                        >
                          <div className="flex items-center justify-between font-semibold text-[#203F1D]">
                            <span className="text-sm font-bold text-[#203F1D]">{addr.fullName || userData.name}</span>
                            {addr.isDefault && (
                              <span className="rounded-full bg-[#E5EAD9] px-2.5 py-0.5 text-[10px] font-bold text-[#203F1D]">
                                DEFAULT
                              </span>
                            )}
                          </div>
                          <p className="mt-1.5 leading-relaxed text-neutral-700 text-xs sm:text-sm">
                            {addr.street}, {addr.city}, {addr.state} - {addr.pincode}
                          </p>
                          <p className="mt-1 text-neutral-500 text-xs">Phone: {addr.phone || userData.phone}</p>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => setIsAddressModalOpen(true)}
                        className="inline-flex w-fit items-center gap-1.5 rounded-xl border border-[#203F1D] px-4 py-1.5 text-xs font-semibold text-[#203F1D] transition hover:bg-[#203F1D] hover:text-white"
                      >
                        <Plus size={14} />
                        <span>Add Another Address</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 4. Recent Orders Section */}
            <div className="relative overflow-hidden rounded-2xl border border-[#EBE7DF] bg-[#FCFBF7] p-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-[#F0ECE3]">
                <div className="flex items-center gap-2.5">
                  <Package size={20} className="text-[#203F1D]" strokeWidth={2} />
                  <h2 className="font-serif text-xl font-bold text-[#203F1D]">
                    Recent orders
                  </h2>
                </div>
                <Link
                  to="/order-tracking"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#203F1D] transition hover:text-[#7D8E56]"
                >
                  <span>View all orders</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

              {orders.length === 0 ? (
                /* Polished Empty State for Orders */
                <div className="relative mt-4 flex flex-col items-center justify-center gap-4 py-8 px-4 text-center sm:flex-row sm:justify-start sm:gap-6 sm:text-left">
                  {/* Circular Bag Icon */}
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EBF1E5] text-[#203F1D] shadow-2xs">
                    <ShoppingBag size={24} strokeWidth={1.8} aria-hidden="true" />
                  </span>

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-neutral-800">
                      You haven't placed any orders yet.
                    </p>
                    <p className="mt-0.5 text-xs text-neutral-500">
                      Explore our latest collections and find something you'll love!
                    </p>
                  </div>

                  <Link
                    to="/shop"
                    className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#203F1D] px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition hover:bg-[#183112]"
                  >
                    Start Shopping
                  </Link>

                  {/* Subtle Botanical Decoration Bottom-Right */}
                  <img
                    src={oliveBranch}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-6 -right-6 w-32 h-32 object-contain opacity-25 select-none"
                  />
                </div>
              ) : (
                /* Realistic Sample Orders List */
                <div className="relative mt-4 flex flex-col gap-3">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="group flex flex-col justify-between gap-3 rounded-xl border border-[#ECE7DC] bg-[#F7F5EE] p-4 text-xs transition hover:border-[#7D8E56]/40 hover:bg-[#FAF8F1] sm:flex-row sm:items-center"
                    >
                      <div className="flex items-start gap-3.5">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EBF1E5] text-[#203F1D]">
                          <PackageCheck size={18} strokeWidth={1.8} aria-hidden="true" />
                        </span>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-bold text-sm text-[#203F1D]">{order.orderNumber}</span>
                            <span className="rounded-full bg-[#E5EAD9] px-2.5 py-0.5 text-[10px] font-bold text-[#203F1D]">
                              {order.status}
                            </span>
                          </div>
                          <p className="mt-1 font-medium text-neutral-800 text-xs sm:text-sm">
                            {order.items}
                          </p>
                          <p className="mt-0.5 text-neutral-500 text-[11px]">
                            Placed on {order.date}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-[#EAE5D8] pt-2 sm:border-t-0 sm:pt-0 sm:flex-col sm:items-end sm:gap-1.5">
                        <span className="text-sm font-bold text-[#203F1D]">{order.total}</span>
                        <Link
                          to="/order-tracking"
                          className="inline-flex items-center gap-1 font-semibold text-xs text-[#203F1D] hover:text-[#7D8E56]"
                        >
                          <span>Track Order</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  ))}

                  {/* Subtle Botanical Decoration Bottom-Right */}
                  <img
                    src={oliveBranch}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-6 -right-6 w-32 h-32 object-contain opacity-25 select-none"
                  />
                </div>
              )}
            </div>

          </section>
        </div>
      </div>

      {/* =========================================================
          EDIT PROFILE MODAL
      ========================================================== */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl border border-[#EBE7DF] bg-[#FCFBF7] p-6 shadow-xl animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-[#F0ECE3]">
              <h3 className="font-serif text-lg font-bold text-[#203F1D]">
                Edit Profile
              </h3>
              <button
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="rounded-lg p-1 text-neutral-500 hover:bg-[#F3F1E8] hover:text-[#203F1D]"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="mt-4 flex flex-col gap-3.5 text-sm">
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className="w-full rounded-xl border border-[#DCD5C5] bg-white px-3 py-2 text-neutral-800 focus:border-[#203F1D] focus:outline-none focus:ring-1 focus:ring-[#203F1D]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={editForm.email}
                  onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                  className="w-full rounded-xl border border-[#DCD5C5] bg-white px-3 py-2 text-neutral-800 focus:border-[#203F1D] focus:outline-none focus:ring-1 focus:ring-[#203F1D]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={editForm.phone}
                  onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                  className="w-full rounded-xl border border-[#DCD5C5] bg-white px-3 py-2 text-neutral-800 focus:border-[#203F1D] focus:outline-none focus:ring-1 focus:ring-[#203F1D]"
                />
              </div>

              <div className="mt-3 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="rounded-xl border border-[#DCD5C5] px-4 py-2 text-xs font-semibold text-neutral-600 hover:bg-[#F3F1E8]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#203F1D] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#183112]"
                >
                  <Check size={14} />
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================
          ADD ADDRESS MODAL
      ========================================================== */}
      {isAddressModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-2xl border border-[#EBE7DF] bg-[#FCFBF7] p-6 shadow-xl animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-[#F0ECE3]">
              <h3 className="font-serif text-lg font-bold text-[#203F1D]">
                Add New Address
              </h3>
              <button
                type="button"
                onClick={() => setIsAddressModalOpen(false)}
                className="rounded-lg p-1 text-neutral-500 hover:bg-[#F3F1E8] hover:text-[#203F1D]"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleAddAddress} className="mt-4 flex flex-col gap-3 text-sm">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    placeholder="Recipient's Name"
                    value={addressForm.fullName}
                    onChange={(e) => setAddressForm({ ...addressForm, fullName: e.target.value })}
                    className="w-full rounded-xl border border-[#DCD5C5] bg-white px-3 py-2 text-neutral-800 focus:border-[#203F1D] focus:outline-none focus:ring-1 focus:ring-[#203F1D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={addressForm.phone}
                    onChange={(e) => setAddressForm({ ...addressForm, phone: e.target.value })}
                    className="w-full rounded-xl border border-[#DCD5C5] bg-white px-3 py-2 text-neutral-800 focus:border-[#203F1D] focus:outline-none focus:ring-1 focus:ring-[#203F1D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  required
                  placeholder="House/Flat No., Building, Street Area"
                  value={addressForm.street}
                  onChange={(e) => setAddressForm({ ...addressForm, street: e.target.value })}
                  className="w-full rounded-xl border border-[#DCD5C5] bg-white px-3 py-2 text-neutral-800 focus:border-[#203F1D] focus:outline-none focus:ring-1 focus:ring-[#203F1D]"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="City"
                    value={addressForm.city}
                    onChange={(e) => setAddressForm({ ...addressForm, city: e.target.value })}
                    className="w-full rounded-xl border border-[#DCD5C5] bg-white px-3 py-2 text-neutral-800 focus:border-[#203F1D] focus:outline-none focus:ring-1 focus:ring-[#203F1D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="State"
                    value={addressForm.state}
                    onChange={(e) => setAddressForm({ ...addressForm, state: e.target.value })}
                    className="w-full rounded-xl border border-[#DCD5C5] bg-white px-3 py-2 text-neutral-800 focus:border-[#203F1D] focus:outline-none focus:ring-1 focus:ring-[#203F1D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">
                    Pincode
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Pincode"
                    value={addressForm.pincode}
                    onChange={(e) => setAddressForm({ ...addressForm, pincode: e.target.value })}
                    className="w-full rounded-xl border border-[#DCD5C5] bg-white px-3 py-2 text-neutral-800 focus:border-[#203F1D] focus:outline-none focus:ring-1 focus:ring-[#203F1D]"
                  />
                </div>
              </div>

              <div className="mt-3 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsAddressModalOpen(false)}
                  className="rounded-xl border border-[#DCD5C5] px-4 py-2 text-xs font-semibold text-neutral-600 hover:bg-[#F3F1E8]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#203F1D] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#183112]"
                >
                  <Check size={14} />
                  <span>Save Address</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}
