import { useState } from 'react'
import { PackagePlus, X } from 'lucide-react'

export default function AddProductModal({ onClose, onSave }) {
  const [form, setForm] = useState({ name: '', category: 'Organic Foods', price: '', stock: '' })
  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  const submit = (event) => {
    event.preventDefault()
    if (!form.name.trim() || !form.price || !form.stock) return
    onSave({ id: crypto.randomUUID(), name: form.name.trim(), category: form.category, price: Number(form.price), stock: Number(form.stock), active: true })
    onClose()
  }

  return <div className="vendor-modal-backdrop" role="presentation" onMouseDown={onClose}><section className="vendor-product-modal" role="dialog" aria-modal="true" aria-labelledby="add-product-title" onMouseDown={(event) => event.stopPropagation()}><header><span><PackagePlus size={20} /></span><div><h2 id="add-product-title">Add product</h2><p>Create a product for TestStore.</p></div><button type="button" aria-label="Close add product form" onClick={onClose}><X size={20} /></button></header><form onSubmit={submit}><label>Product name<input name="name" value={form.name} onChange={update} placeholder="e.g. Moringa leaf powder" autoFocus required /></label><div className="vendor-modal-fields"><label>Category<select name="category" value={form.category} onChange={update}><option>Organic Foods</option><option>Herbal Care</option><option>Personal Care</option><option>Snacks</option></select></label><label>Price (₹)<input name="price" type="number" min="0" value={form.price} onChange={update} placeholder="249" required /></label></div><label>Available stock<input name="stock" type="number" min="0" value={form.stock} onChange={update} placeholder="20" required /></label><footer><button type="button" onClick={onClose}>Cancel</button><button type="submit"><PackagePlus size={17} />Save product</button></footer></form></section></div>
}
