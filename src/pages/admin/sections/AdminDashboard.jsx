import {
  Ban,
  Check,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Eye,
  Package,
  Plus,
  RotateCcw,
  Store,
  Trash2,
  Truck,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const users = [
  [
    "Krishnamoorthy",
    "moorthitpgit@gmail.com",
    "8940716938",
    "Kovalam",
    "Chengalpattu",
  ],
  [
    "Ezhil",
    "ezhilarasielvan1998@gmail.com",
    "6374024055",
    "Pasupeshwaram",
    "Erode",
  ],
  ["Maria", "avalangadi@gmail.com", "6369773628", "Maduravoyal", "Chennai"],
  ["Sudar", "cse21.sudar@gmail.com", "9500920199", "Vallioor", "Tirunelveli"],
  ["Imam Raj", "imamraj72@gmail.com", "8667442529", "Panagudi", "Tirunelveli"],
];
const vendors = [
  ["Nila Naturals", "9848272122", "nila@avalangadi.in"],
  ["AAPT Herbs Homemade Products", "9965320776", "aaptherbs@gmail.com"],
  ["T2P", "8903852928", "tradisheat@gmail.com"],
  ["Home Made Chocolate", "8449222961", "bua_chakraborti@yahoo.com"],
  ["Amris Spices and Trading", "9884081805", "amrismasala@gmail.com"],
];
const orders = [
  ["#79", "Krishnamoorthy", "₹1.00", "Pending", "2026-08-24"],
  ["#78", "Ezhil", "₹4.00", "Pending", "2026-08-18"],
  ["#77", "Zozweb", "₹299.00", "Pending", "2026-08-10"],
  ["#76", "Maria", "₹1.00", "Shipping", "2026-08-05"],
  ["#75", "Raja", "₹359.00", "Shipping", "2026-07-30"],
  ["#74", "Imam", "₹738.00", "Shipping", "2026-07-17"],
  ["#71", "Imam", "₹927.00", "Delivered", "2026-07-17"],
];
const sellerRequests = [
  [
    "Kruthica S",
    "Amris Spices",
    "9884081805",
    "amrismasala@gmail.com",
    "Grocery & Gourmet",
    "Pending",
  ],
  [
    "Meenatchi Udaya",
    "FemiCura Health",
    "7339279069",
    "femicura@gmail.com",
    "Baby Care",
    "Pending",
  ],
  [
    "Rajalakshmi",
    "RAGA",
    "9789094936",
    "nitrak04@gmail.com",
    "Home & Kitchen",
    "Pending",
  ],
  [
    "Maria",
    "Brand",
    "6369773628",
    "avalangadi@gmail.com",
    "Office Products",
    "Rejected",
  ],
];
const wishlist = [
  [
    "Vasanth",
    "Amla Mouth Freshener Shreds | Sweet & Tangy | Ready to Eat",
    "Aruvi Eco Ventures",
  ],
  [
    "Vasanth",
    "Amla Moringa Clear Soup Mix | Natural Instant Wellness Soup",
    "Aruvi Eco Ventures",
  ],
  [
    "Ani",
    "Aam Spicy Dried Mango Bites | Natural Tangy Snack",
    "Aruvi Eco Ventures",
  ],
];
const payments = [
  ["#PAY-1043", "Krishnamoorthy", "₹1,299", "Razorpay", "Approved", "2026-09-30", "Completed"],
  ["#PAY-1040", "Maria", "₹899", "UPI", "Pending", "2026-09-28", "Processing"],
  ["#PAY-1038", "Imam", "₹2,450", "Credit Card", "Approved", "2026-09-27", "Completed"],
  ["#PAY-1034", "Sudar", "₹749", "Wallet", "Rejected", "2026-09-22", "Failed"],
  ["#PAY-1030", "Ezhil", "₹1,980", "Cash on Delivery", "Pending", "2026-09-21", "Awaiting"],
  ["#PAY-1028", "Nisha", "₹3,680", "Bank Transfer", "Approved", "2026-09-18", "Completed"],
];

function filterRows(rows, query) {
  return query
    ? rows.filter((row) =>
        row.join(" ").toLowerCase().includes(query.toLowerCase()),
      )
    : rows;
}
function Card({ icon, title, value, tone }) {
  return (
    <article className="aa-stat">
      <i className={tone}>{icon}</i>
      <span>
        {title}
        <strong>{value}</strong>
      </span>
    </article>
  );
}
function Status({ children }) {
  return <b className={`aa-status ${children.toLowerCase()}`}>{children}</b>;
}
function PipelineIcon({ tone }) {
  const icons = {
    blue: Clock3,
    yellow: Package,
    cyan: Truck,
    green: CheckCircle2,
    red: Ban,
    gray: RotateCcw,
  };
  const Icon = icons[tone] || CircleDollarSign;
  return <Icon size={18} strokeWidth={2} />;
}
function Table({ columns, rows, renderRow }) {
  return (
    <div className="aa-table-wrap">
      <table className="aa-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>{rows.map(renderRow)}</tbody>
      </table>
    </div>
  );
}

export default function AdminDashboard({ activePage, searchQuery }) {
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [requestRows, setRequestRows] = useState(sellerRequests);
  const [categories, setCategories] = useState([
    "Personal Care & Wellness",
    "Home Decor",
    "Beverages",
  ]);
  const [categoryName, setCategoryName] = useState("");
  const query = searchQuery.trim();
  const addCategory = (event) => {
    event.preventDefault();
    if (categoryName.trim()) {
      setCategories((items) => [...items, categoryName.trim()]);
      setCategoryName("");
    }
  };
  if (activePage === "Dashboard") return <Dashboard />;
  if (activePage === "Users")
    return (
      <Management
        title="Users Management"
        count={`${users.length} users`}
        columns={[
          "#",
          "Name",
          "Email",
          "Phone Number",
          "Area",
          "District",
          "Status",
          "Actions",
        ]}
        rows={filterRows(users, query)}
        renderRow={(row, index) => (
          <tr key={row[1]}>
            <td>{index + 1}</td>
            <td>{row[0]}</td>
            <td>{row[1]}</td>
            <td>{row[2]}</td>
            <td>{row[3]}</td>
            <td>{row[4]}</td>
            <td>
              <Status>
                {blockedUsers.includes(row[1]) ? "Blocked" : "Active"}
              </Status>
            </td>
            <td>
              <button
                className="aa-danger"
                type="button"
                onClick={() =>
                  setBlockedUsers((items) =>
                    items.includes(row[1])
                      ? items.filter((item) => item !== row[1])
                      : [...items, row[1]],
                  )
                }
              >
                {blockedUsers.includes(row[1]) ? "Unblock" : "Block"}
              </button>
            </td>
          </tr>
        )}
      />
    );
  if (activePage === "Vendors") return <Vendors query={query} />;
  if (activePage === "Orders") return <Orders query={query} />;
  if (activePage === "Payments") return <Payments query={query} />;
  if (activePage === "All Wishlist")
    return (
      <Management
        title="All Wishlist"
        count={`${wishlist.length} shown`}
        columns={[
          "#",
          "User Name",
          "Product Name",
          "Store Name",
          "Date",
          "Action",
        ]}
        rows={filterRows(wishlist, query)}
        renderRow={(row, index) => (
          <tr key={row[1]}>
            <td>{index + 1}</td>
            <td>{row[0]}</td>
            <td>{row[1]}</td>
            <td>{row[2]}</td>
            <td>2026-02-23</td>
            <td>
              <Eye size={18} />
            </td>
          </tr>
        )}
      />
    );
  if (activePage === "Seller Request")
    return (
      <SellerRequests
        rows={filterRows(requestRows, query)}
        onUpdate={(email, status) =>
          setRequestRows((items) =>
            items.map((item) =>
              item[3] === email ? [...item.slice(0, 5), status] : item,
            ),
          )
        }
      />
    );
  if (activePage === "Category")
    return (
      <Categories
        categories={categories}
        categoryName={categoryName}
        setCategoryName={setCategoryName}
        addCategory={addCategory}
        remove={(name) =>
          setCategories((items) => items.filter((item) => item !== name))
        }
      />
    );
  return <ContentList page={activePage} query={query} />;
}

function Dashboard() {
  const pipeline = [
    ["Pending / Placed", 57, "blue"],
    ["Packing", 4, "yellow"],
    ["Shipping", 9, "cyan"],
    ["Delivered", 9, "green"],
    ["Canceled", 0, "red"],
    ["Refunded", 0, "gray"],
    ["Payment Paid", 23, "green"],
    ["Payment Pending", 56, "yellow"],
  ];
  return (
    <main className="aa-content">
      <section className="aa-stats">
        <Card icon={<Package />} title="Products" value="85" tone="blue" />
        <Card icon={<Truck />} title="Orders" value="79" tone="cyan" />
        <Card icon={<Store />} title="Stores" value="16" tone="green" />
        <Card icon={<Users />} title="Vendors" value="16" tone="yellow" />
        <Card icon={<Users />} title="Customers" value="40" tone="red" />
      </section>
      <section className="aa-panel">
        <header>
          <h1>Order pipeline</h1>
          <p>Live counts from the orders table</p>
        </header>
        <div className="aa-pipeline">
          {pipeline.map(([label, value, tone]) => (
            <article key={label}>
              <i className={tone} aria-hidden="true">
                <PipelineIcon tone={tone} />
              </i>
              <span>{label}</span>
              <strong className={tone}>{value}</strong>
            </article>
          ))}
        </div>
      </section>
      <section className="aa-dashboard-grid">
        <section className="aa-panel aa-sales">
          <header className="aa-chart-header">
            <div>
              <span className="aa-eyebrow">Revenue overview</span>
              <h2>₹ 1,403,163.30</h2>
              <p>Paid sales in 2026</p>
            </div>
            <select aria-label="Sales period" defaultValue="2026">
              <option value="2026">2026</option>
              <option value="2025">2025</option>
            </select>
          </header>
          <div className="aa-chart-legend">
            <span><i className="paid" />Paid sales</span>
            <span><i className="orders" />Orders</span>
            <span><i className="pending" />Pending payments</span>
          </div>
          <div className="aa-chart">
            <svg
              viewBox="0 0 720 250"
              role="img"
              aria-label="Paid sales, pending payments and orders chart"
            >
              <path
                d="M0 240 L100 240 L200 240 L270 160 L330 240 L390 25 L445 215 L520 240 L720 240"
                fill="none"
                stroke="#4779e8"
                strokeWidth="3"
              />
              <path
                d="M0 240 L270 240 L290 175 L330 240 L390 220 L430 240 L720 240"
                fill="none"
                stroke="#20c787"
                strokeWidth="3"
              />
              <path
                d="M0 240 L270 240 L290 190 L330 240 L380 30 L415 240 L720 240"
                fill="#f8ca5277"
              />
            </svg>
            <div>
              Jan　 Feb　 Mar　 Apr　 May　 Jun　 Jul　 Aug　 Sep　 Oct　 Nov　
              Dec
            </div>
          </div>
          <div className="aa-chart-summary">
            <div><span>All order value</span><strong>₹ 6,368,649.86</strong></div>
            <div><span>Pending value</span><strong>₹ 4,965,486.56</strong></div>
            <div><span>Growth this year</span><strong className="positive">+18.6%</strong></div>
          </div>
        </section>
        <section className="aa-panel aa-platform">
          <header className="aa-platform-header">
            <div>
              <span className="aa-eyebrow">Marketplace pulse</span>
              <h2>Platform health</h2>
            </div>
            <strong>92%</strong>
          </header>
          <div className="aa-mix" />
          <div className="aa-platform-stats">
            <div><span><i className="green" />Customers</span><b>40</b><em><i style={{ width: "86%" }} /></em></div>
            <div><span><i className="cyan" />Stores online</span><b>16</b><em><i style={{ width: "72%" }} /></em></div>
            <div><span><i className="yellow" />Active vendors</span><b>16</b><em><i style={{ width: "72%" }} /></em></div>
          </div>
          <div className="aa-platform-footer"><span>Delivered orders</span><strong>9 this month</strong></div>
        </section>
      </section>
      <section className="aa-three">
        <ContentList page="Top selling stores" />
        <ContentList page="Best selling items" />
        <ContentList page="Top customers" />
      </section>
    </main>
  );
}
function Management({ title, count, columns, rows, renderRow }) {
  return (
    <main className="aa-content">
      <section className="aa-panel">
        <header className="aa-management-title">
          <h1>{title}</h1>
          <b>{count}</b>
          <button type="button">Reset</button>
        </header>
        <Table columns={columns} rows={rows} renderRow={renderRow} />
      </section>
    </main>
  );
}
function Vendors({ query }) {
  return (
    <main className="aa-content">
      <section className="aa-hero">
        <div>
          <h1>Vendors</h1>
          <p>Manage vendor accounts, stores, and seller access</p>
        </div>
        <button type="button">
          <Plus size={18} />
          Add Vendor
        </button>
      </section>
      <section className="aa-mini-cards">
        <Card icon={<Users />} title="Total Vendors" value="16" tone="blue" />
        <Card icon={<Check />} title="Active" value="16" tone="green" />
        <Card icon={<X />} title="Inactive" value="0" tone="red" />
      </section>
      <Management
        title="All Vendors"
        count={`${vendors.length} shown`}
        columns={["#", "Vendor", "Phone", "Email", "Status", "Actions"]}
        rows={filterRows(vendors, query)}
        renderRow={(row, index) => (
          <tr key={row[2]}>
            <td>{index + 1}</td>
            <td>
              <strong>{row[0]}</strong>
              <small>ID #{153 - index}</small>
            </td>
            <td>{row[1]}</td>
            <td>{row[2]}</td>
            <td>
              <Status>Active</Status>
            </td>
            <td>
              <button className="aa-view" type="button">
                <Eye size={16} />
              </button>
              <button className="aa-edit" type="button">
                Edit
              </button>
              <button className="aa-delete" type="button">
                <Trash2 size={16} />
              </button>
            </td>
          </tr>
        )}
      />
    </main>
  );
}
function Orders({ query }) {
  return (
    <Management
      title="All Orders"
      count="79 orders"
      columns={["#", "Customer", "Total", "Status", "Placed On", "Action"]}
      rows={filterRows(orders, query)}
      renderRow={(row) => (
        <tr key={row[0]}>
          <td>{row[0]}</td>
          <td>{row[1]}</td>
          <td>{row[2]}</td>
          <td>
            <Status>{row[3]}</Status>
          </td>
          <td>{row[4]}</td>
          <td>
            <button className="aa-edit" type="button">
              <Eye size={16} />
            </button>
          </td>
        </tr>
      )}
    />
  );
}
function Payments({ query }) {
  const paymentSummary = [
    [CircleDollarSign, "Gross Revenue", "₹4,83,420", "green"],
    [CheckCircle2, "Paid", "₹3,24,680", "blue"],
    [Clock3, "Pending", "₹68,540", "yellow"],
    [RotateCcw, "Refunds", "₹12,300", "red"],
  ];

  const rows = filterRows(payments, query);

  return (
    <main className="aa-content">
      <section className="aa-hero">
        <div>
          <h1>Payments</h1>
          <p>Track payment status, settlements, refund requests, and collection health.</p>
        </div>
        <button type="button">Export Report</button>
      </section>

      <section className="aa-mini-cards">
        {paymentSummary.map(([Icon, title, value, tone]) => (
          <article key={title} className="aa-stat">
            <i className={tone}><Icon size={22} /></i>
            <span>
              {title}
              <strong>{value}</strong>
            </span>
          </article>
        ))}
      </section>

      <section className="aa-panel">
        <header>
          <h2>Payment Overview</h2>
          <p>Updated 5 minutes ago</p>
        </header>
        <div className="aa-pipeline" style={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
          {[
            ["Completed", 42, "green"],
            ["Pending", 18, "yellow"],
            ["Failed", 5, "red"],
            ["Refunded", 3, "cyan"],
          ].map(([label, value, tone]) => (
            <article key={label}>
              <i className={tone} aria-hidden="true"><PipelineIcon tone={tone} /></i>
              <span>{label}</span>
              <strong className={tone}>{value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="aa-panel">
        <header>
          <h2>Recent Payment Activity</h2>
        </header>
        <Table
          columns={["Transaction ID", "Customer", "Amount", "Method", "Status", "Date", "Action"]}
          rows={rows}
          renderRow={(row, index) => (
            <tr key={`${row[0]}-${index}`}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
              <td>{row[3]}</td>
              <td>
                <Status>{row[4]}</Status>
              </td>
              <td>{row[5]}</td>
              <td>{row[6]}</td>
            </tr>
          )}
        />
      </section>
    </main>
  );
}
function SellerRequests({ rows, onUpdate }) {
  return (
    <Management
      title="Seller Requests"
      count={`${rows.length} requests`}
      columns={[
        "#",
        "Seller Name",
        "Shop/Company",
        "Mobile",
        "Email",
        "Category",
        "Status",
        "Actions",
      ]}
      rows={rows}
      renderRow={(row, index) => (
        <tr key={row[3]}>
          <td>{index + 1}</td>
          <td>{row[0]}</td>
          <td>{row[1]}</td>
          <td>{row[2]}</td>
          <td>{row[3]}</td>
          <td>{row[4]}</td>
          <td>
            <Status>{row[5]}</Status>
          </td>
          <td>
            <button className="aa-view" type="button">
              <Eye size={16} />
            </button>
            <button
              className="aa-approve"
              type="button"
              onClick={() => onUpdate(row[3], "Approved")}
            >
              <Check size={16} />
            </button>
            <button
              className="aa-delete"
              type="button"
              onClick={() => onUpdate(row[3], "Rejected")}
            >
              <X size={16} />
            </button>
          </td>
        </tr>
      )}
    />
  );
}
function Categories({
  categories,
  categoryName,
  setCategoryName,
  addCategory,
  remove,
}) {
  return (
    <main className="aa-content">
      <h1 className="aa-centered-title">Category Management</h1>
      <section className="aa-category-form">
        <h2>Add New Category</h2>
        <form onSubmit={addCategory}>
          <label>
            Category Name
            <input
              value={categoryName}
              onChange={(event) => setCategoryName(event.target.value)}
              placeholder="Enter category name"
            />
          </label>
          <button type="submit">Add Category</button>
        </form>
      </section>
      <Management
        title="Categories"
        count={`${categories.length} categories`}
        columns={["#", "Image", "Category Name", "Actions"]}
        rows={categories}
        renderRow={(name, index) => (
          <tr key={name}>
            <td>{index + 1}</td>
            <td>🛍️</td>
            <td>{name}</td>
            <td>
              <button className="aa-edit" type="button">
                Edit
              </button>
              <button
                className="aa-delete"
                type="button"
                onClick={() => remove(name)}
              >
                <Trash2 size={16} />
              </button>
            </td>
          </tr>
        )}
      />
    </main>
  );
}
function ContentList({ page, query = "" }) {
  const items =
    page === "Homepage Carousel"
      ? [
          "General — D2C women-led brands marketplace",
          "She the Sakthi — women-led brands marketplace",
          "Aval Angadi — authentic homegrown products",
          "Organic products — discover handmade brands",
        ]
      : page === "Homepage Popup"
        ? [
            "Make in India products — position 2",
            "Festive shopping offer — position 1",
          ]
        : page === "Top selling stores"
          ? ["Aruvi Eco Ventures — 10 orders"]
          : page === "Best selling items"
            ? [
                "Organic Tulsi Green Tea — Sold: 10",
                "Aruvi Eco Butterfly Pea — Sold: 10",
                "Sprouted Ragi Choco — Sold: 5",
              ]
            : page === "Top customers"
              ? ["Sudar — 35 orders", "Imam — 25 orders", "Senthil — 7 orders"]
              : ["Store identity and access settings"];
  const visible = filterRows(
    items.map((item) => [item]),
    query,
  );
  return (
    <section className="aa-panel aa-list">
      <header>
        <h2>{page}</h2>
        {page.includes("Homepage") && (
          <button type="button">
            <Plus size={16} />
            Add {page.includes("Carousel") ? "Carousel" : "Popup"}
          </button>
        )}
      </header>
      {visible.map(([item]) => (
        <p key={item}>
          <span>{item}</span>
          {page.includes("Homepage") && (
            <>
              <button className="aa-edit" type="button">
                Edit
              </button>
              <button className="aa-delete" type="button">
                <Trash2 size={15} />
              </button>
            </>
          )}
        </p>
      ))}
    </section>
  );
}
