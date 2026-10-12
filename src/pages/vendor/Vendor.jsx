import { useState } from 'react'
import VendorHeader from './sections/VendorHeader'
import VendorSidebar from './sections/VendorSidebar'
import VendorDashboard from './sections/VendorDashboard'
import AddProductModal from './sections/AddProductModal'
import '../../style/vendor.css'

export default function Vendor() {
  const [activePage, setActivePage] = useState('Dashboard')
  const [query, setQuery] = useState('')
  const [products, setProducts] = useState([])
  const [isAddingProduct, setIsAddingProduct] = useState(false)
  const openProductForm = () => { setActivePage('Products'); setIsAddingProduct(true) }
  const saveProduct = (product) => setProducts((current) => [...current, product])
  return <div className="vendor-app"><VendorSidebar activePage={activePage} onNavigate={setActivePage} onAddProduct={openProductForm} /><div className="vendor-main"><VendorHeader query={query} onQueryChange={setQuery} onAddProduct={openProductForm} /><VendorDashboard activePage={activePage} query={query} onNavigate={setActivePage} products={products} onAddProduct={openProductForm} /></div>{isAddingProduct && <AddProductModal onClose={() => setIsAddingProduct(false)} onSave={saveProduct} />}</div>
}
