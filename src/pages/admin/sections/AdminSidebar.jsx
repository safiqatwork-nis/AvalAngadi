import { ClipboardList, Folder, Heart, Image, LayoutDashboard, LogOut, MessageSquareMore, Settings, Truck, Users, WalletCards } from 'lucide-react'
import AvalAngadiLogo from '../../../assets/aval-angadi-logo.png'

const links = [[LayoutDashboard, 'Dashboard'], [Users, 'Users'], [Truck, 'Vendors'], [ClipboardList, 'Orders'], [WalletCards, 'Payments'], [Heart, 'All Wishlist'], [Image, 'Homepage Popup'], [Image, 'Homepage Carousel'], [Folder, 'Category'], [Settings, 'Settings'], [MessageSquareMore, 'Seller Request']]

export default function AdminSidebar({ activePage, onNavigate }) {
  return <aside className="admin-sidebar aa-sidebar"><div className="admin-brand aa-brand"><img src={AvalAngadiLogo} alt="Aval Angadi" /><span><strong>Aval Angadi</strong><small>Admin Console</small></span></div><nav aria-label="Admin navigation">{links.map(([Icon, label]) => <button type="button" key={label} className={activePage === label ? 'active' : ''} onClick={() => onNavigate(label)}><Icon size={20} />{label}</button>)}</nav><button className="aa-logout" type="button"><LogOut size={19} />Logout</button></aside>
}
