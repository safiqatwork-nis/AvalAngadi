const categories = [
  'Groceries',
  'Home & Kitchen',
  'Beauty & Personal Care',
  'Fashion',
  'Electronics',
  'Books & Stationery',
]

function AllCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
          Aval Angadi
        </p>
        <h1 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
          Shop all categories
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          Discover everyday essentials and carefully selected products in one place.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <article
            key={category}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h2 className="font-semibold text-neutral-900">{category}</h2>
            <p className="mt-2 text-sm text-neutral-500">Explore products</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AllCategories
