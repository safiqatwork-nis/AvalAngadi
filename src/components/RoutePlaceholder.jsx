function RoutePlaceholder({ title }) {
  return (
    <main className="mx-auto flex min-h-[50vh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
          Aval Angadi
        </p>
        <h1 className="mt-2 text-3xl font-bold text-neutral-900">{title}</h1>
        <p className="mt-3 text-neutral-600">This page is ready for implementation.</p>
      </div>
    </main>
  )
}

export default RoutePlaceholder
