import { useState } from 'react'
import AdminDashboard from './sections/AdminDashboard'
import AdminHome from './sections/AdminHome'
import AdminHeader from './sections/AdminHeader'
import AdminSidebar from './sections/AdminSidebar'
import '../../style/admin.css'
import '../../style/admin-workspace.css'
import '../../style/admin-responsive.css'
import '../../style/admin-sherah.css'
import '../../style/admin-dashboard-targeted.css'
import '../../style/admin-section-refresh.css'
import '../../style/admin-home.css'

export default function Admin() {
  const [activePage, setActivePage] = useState('Dashboard')
  const [searchQuery, setSearchQuery] = useState('')

  return <div className="admin-app"><AdminSidebar activePage={activePage} onNavigate={setActivePage} /><div className="admin-main"><AdminHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />{activePage === 'Dashboard' ? <AdminHome /> : <AdminDashboard activePage={activePage} searchQuery={searchQuery} />}</div></div>
}
