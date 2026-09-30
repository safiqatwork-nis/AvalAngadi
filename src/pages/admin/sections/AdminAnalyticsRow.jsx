import { useState } from 'react'
import '../../../style/admin-analytics.css'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
// Reference preview data; replace with monthly reporting API data when available.
const subscription = [16, 27, 30, 26, 34, 35, 41, 45, 36, 34, 39, 45]
const transaction = [5, 10, 11, 11, 15, 14, 20, 17, 16, 13, 14, 18]
const plans = [{ name: 'Premium Plan', count: 78, color: '#7c3aed' }, { name: 'Standard Plan', count: 86, color: '#347cf4' }, { name: 'Basic Plan', count: 50, color: '#32c67a' }]

export default function AdminAnalyticsRow() {
  const [period, setPeriod] = useState(12)
  const points = (values) => values.slice(-period).map((value, i) => `${52 + i * 680 / (period - 1)},${190 - value * 3.2}`).join(' ')
  return (
    <section className="aa-analytics-row" aria-label="Revenue and subscription analytics">
      <section className="aa-analytics-card">
        <header><h2>Revenue &amp; Subscription Analytics</h2><select aria-label="Revenue period" value={period} onChange={event => setPeriod(Number(event.target.value))}><option value={12}>Last 12 Months</option><option value={6}>Last 6 Months</option></select></header>
        <div className="aa-analytics-key"><span><i style={{ background: '#7c3aed' }} />Subscription Revenue</span><span><i style={{ background: '#f49b28' }} />Transaction Revenue</span></div>
        <svg className="aa-revenue-plot" viewBox="0 0 760 228" role="img" aria-label="Illustrative subscription and transaction revenue in thousands of rupees">
          <defs><linearGradient id="aaRevenueFill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#8b5cf6" stopOpacity=".15" /><stop offset="1" stopColor="#8b5cf6" stopOpacity="0" /></linearGradient></defs>
          {[0, 10, 20, 30, 40, 50].map(value => <g key={value}><line x1="52" x2="732" y1={190-value*3.2} y2={190-value*3.2} stroke="#f0f0f5" /><text x="5" y={194-value*3.2}>{value ? `₹${value}K` : '₹0'}</text></g>)}
          <polygon points={`52,190 ${points(subscription)} 732,190`} fill="url(#aaRevenueFill)" />
          {[[subscription, '#7c3aed', 'Subscription'], [transaction, '#f49b28', 'Transaction']].map(([values, color, label]) => <g key={label}><polyline points={points(values)} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />{values.slice(-period).map((value,i) => <circle key={i} cx={52+i*680/(period-1)} cy={190-value*3.2} r="3.5" fill={color}><title>{months[12-period+i]} — {label}: ₹{value},000</title></circle>)}</g>)}
          {months.slice(-period).map((month,i) => <text key={month} x={52+i*680/(period-1)} y="218" textAnchor="middle">{month}</text>)}
        </svg>
      </section>
      <section className="aa-analytics-card">
        <header><h2>Subscription Plan Distribution</h2><span className="aa-analytics-period">This Month</span></header>
        <div className="aa-plan-content">
          <div className="aa-plan-ring" role="img" aria-label="214 active subscriptions: 78 premium, 86 standard, 50 basic"><div><strong>214</strong><span>Active<br />Subscriptions</span></div></div>
          <ul>{plans.map(plan => <li key={plan.name}><i style={{background:plan.color}} /><span>{plan.name}</span><strong>{plan.count} <span>({(plan.count/214*100).toFixed(1)}%)</span></strong></li>)}</ul>
        </div>
      </section>
    </section>
  )
}
