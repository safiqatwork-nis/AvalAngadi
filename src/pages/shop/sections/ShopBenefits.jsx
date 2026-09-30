import { PackageCheck, ShieldCheck, Truck, Users } from 'lucide-react'

const benefits = [
  [Truck, 'Free Shipping', 'on orders above ₹499'],
  [ShieldCheck, 'Secure Payments', '100% safe & secure'],
  [PackageCheck, 'Easy Returns', 'Hassle-free returns'],
  [Users, 'Support Local', 'Women Entrepreneurs'],
]

export default function ShopBenefits() {
  return (
    <section className="shop-services" aria-label="Shopping benefits">
      {benefits.map(([Icon, title, description]) => <div className="shop-service" key={title}><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{description}</p></div></div>)}
    </section>
  )
}
