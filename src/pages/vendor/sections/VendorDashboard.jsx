import { ArrowRight, BadgeIndianRupee, Box, CircleAlert, ClipboardList, Heart, Image, PackagePlus, Search, ShoppingBag, Store, WalletCards } from 'lucide-react'

const statCards = [
  [Box, 'My Products', 'products', 'active', 'mint'],
  [ShoppingBag, 'My Orders', '0', '0 pending', 'blue'],
  [BadgeIndianRupee, 'Paid Revenue', '₹0', '₹0 this month', 'gold'],
  [CircleAlert, 'Stock Alerts', '0', '0 out of stock', 'rose'],
]

const workspaceContent = {
  Products: ['Product catalog', 'Create and manage your store listings.', PackagePlus, 'Add product'],
  'Image Gallery': ['Product image gallery', 'Upload and organise the images used in your listings.', Image, 'Add images'],
  Specifications: ['Product specifications', 'Add product details that help customers buy with confidence.', ClipboardList, 'Add specifications'],
  'My Orders': ['My orders', 'New orders from your customers will appear here.', ShoppingBag, 'View orders'],
  'My Wishlist': ['Wishlist items', 'Products saved by customers will appear here.', Heart, 'View wishlist'],
}

function Panel({ title, action, children, className = '' }) {
  return <section className={`vendor-panel ${className}`}><header><div><h2>{title}</h2>{action && <small>{action}</small>}</div></header>{children}</section>
}

function EmptyState({ icon: Icon, title, copy, action, onAction }) {
  return <div className="vendor-empty-state"><span><Icon size={25} strokeWidth={1.7} /></span><h3>{title}</h3><p>{copy}</p>{action && <button type="button" onClick={onAction}><PackagePlus size={17} />{action}</button>}</div>
}

function ProductCatalog({ products }) {
  return <div className="vendor-product-list">{products.map((product) => <article key={product.id}><span><Box size={20} /></span><div><strong>{product.name}</strong><small>{product.category} · {product.stock} in stock</small></div><b>₹{product.price.toLocaleString('en-IN')}</b><em>Active</em></article>)}</div>
}

function Workspace({ activePage, query, onNavigate, products, onAddProduct }) {
  const [title, copy, Icon, action] = workspaceContent[activePage]
  const matchingProducts = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
  return <main className="vendor-content"><div className="vendor-workspace-heading"><div><p>Seller workspace</p><h1>{title}</h1><span>TestStore · Test</span></div><button type="button" onClick={() => onNavigate('Dashboard')}>Back to dashboard</button></div><Panel title={title} action="TestStore"><div className="vendor-workspace-search"><Search size={18} /><input value={query} readOnly placeholder={`Search ${title.toLowerCase()}...`} /></div>{activePage === 'Products' && products.length ? <ProductCatalog products={matchingProducts} /> : <EmptyState icon={Icon} title={`No ${title.toLowerCase()} yet`} copy={copy} action={activePage === 'Products' ? action : undefined} onAction={onAddProduct} />}</Panel></main>
}

const quickActions = [
  { page: 'Products', icon: PackagePlus, label: 'Add a product', meta: 'Create your first listing', tone: 'mint' },
  { page: 'Image Gallery', icon: Image, label: 'Upload images', meta: 'Prepare product photos', tone: 'blue' },
  { page: 'Specifications', icon: ClipboardList, label: 'Add details', meta: 'Complete specifications', tone: 'gold' },
]

export default function VendorDashboard({ activePage, query, onNavigate, products, onAddProduct }) {
  if (activePage !== 'Dashboard') return <Workspace activePage={activePage} query={query} onNavigate={onNavigate} products={products} onAddProduct={onAddProduct} />

  return <main className="vendor-content">
    <section className="vendor-welcome"><div><p>SELLER DASHBOARD</p><h1>Good morning, Test</h1><span>Here is a clear view of your TestStore today.</span></div><div className="vendor-store-chip"><i><Store size={19} /></i><span><strong>TestStore</strong><small>Seller account</small></span></div></section>
    <section className="vendor-stats vendor-seller-stats">{statCards.map(([Icon, label, value, detail, tone]) => { const amount = value === 'products' ? products.length : value; const caption = detail === 'active' ? `${products.length} active` : detail; return <article key={label}><i className={tone}><Icon size={21} /></i><div><p>{label}</p><strong>{amount}</strong><small className={tone === 'rose' ? 'negative' : ''}>{caption}</small></div></article> })}</section>
    <section className="vendor-dashboard-grid">
      <Panel title="Store performance" action="This month" className="vendor-performance-summary"><div className="vendor-revenue-card"><span>PAID REVENUE</span><strong>₹0</strong><p>Sales will appear here as soon as orders are paid.</p><div><b>0</b><small>orders received</small><b>{products.length}</b><small>products active</small></div></div><div className="vendor-performance-list"><p><span><i className="mint" />Product readiness</span><b>{products.length} of {products.length} listed</b></p><p><span><i className="blue" />Orders to fulfil</span><b>0 orders</b></p><p><span><i className="gold" />Payout status</span><b>Nothing pending</b></p></div></Panel>
      <Panel title="Quick actions" action="Get started" className="vendor-quick-actions">
        {quickActions.map(({ page, icon: Icon, label, meta, tone }) => (
          <button key={label} type="button" onClick={() => page === 'Products' ? onAddProduct() : onNavigate(page)}>
            <span className={tone}><Icon size={20} /></span>
            <strong>{label}</strong>
            <small>{meta}</small>
            <ArrowRight size={16} />
          </button>
        ))}
      </Panel>
    </section>
    <section className="vendor-dashboard-grid vendor-lower-grid"><Panel title="Order summary" action="Live status" className="vendor-order-summary">{[['Delivered', '0', 'mint'], ['Pending / Processing', '0', 'gold'], ['Cancelled / Failed', '0', 'rose'], ['Customer wishlists', '0', 'blue']].map(([label, value, tone]) => <p key={label}><span>{label}</span><b className={tone}>{value}</b></p>)}</Panel><Panel title="Recent orders" action="View all" className="vendor-recent-orders"><EmptyState icon={ShoppingBag} title="No orders for your store yet" copy="When customers place orders, you can manage them from here." /></Panel><Panel title="Your next step" action="Store setup" className="vendor-next-step"><div><span><WalletCards size={20} /></span><h3>Start selling on Aval Angadi</h3><p>Add your first product with images and clear specifications to make your store ready for customers.</p><button type="button" onClick={onAddProduct}>Set up product <ArrowRight size={15} /></button></div></Panel></section>
  </main>
}
