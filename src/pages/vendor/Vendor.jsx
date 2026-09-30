import { useState } from 'react'
import VendorHeader from './sections/VendorHeader'
import VendorSidebar from './sections/VendorSidebar'
import VendorDashboard from './sections/VendorDashboard'
import '../../style/vendor.css'

export default function Vendor() {
  const [activePage, setActivePage] = useState('Dashboard')
  const [query, setQuery] = useState('')
  return <div className="vendor-app"><VendorSidebar activePage={activePage} onNavigate={setActivePage} /><div className="vendor-main"><VendorHeader query={query} onQueryChange={setQuery} /><VendorDashboard activePage={activePage} query={query} /></div></div>
}
