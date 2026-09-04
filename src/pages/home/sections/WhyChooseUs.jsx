import { Flower2, HandHeart, PackageCheck, Sprout, Wheat } from 'lucide-react'

const benefits = [
  {
    icon: Sprout,
    title: 'No Artificial Preservatives',
    description: 'Only natural ingredients',
  },
  {
    icon: Wheat,
    title: 'Sustainably Sourced',
    description: 'Ethically and responsibly',
  },
  {
    icon: PackageCheck,
    title: 'Small Batch Production',
    description: 'Made in limited quantities',
  },
  {
    icon: HandHeart,
    title: 'Direct from Farmers',
    description: 'Supporting local farmers',
  },
  {
    icon: Flower2,
    title: 'Handmade with Care',
    description: 'Crafted with love',
  },
]

function WhyChooseUs() {
  return (
    <section className="bg-white pb-12 sm:pb-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <h2 className="mb-7 text-lg font-bold text-neutral-950 sm:text-xl">Why Choose Us</h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {benefits.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className={`flex items-center gap-3 ${index === benefits.length - 1 ? 'col-span-2 mx-auto sm:col-span-1 sm:mx-0' : ''}`}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center text-[#788754] sm:h-14 sm:w-14">
                <Icon size={39} strokeWidth={1.35} />
              </span>
              <div className="min-w-0">
                <h3 className="text-[11px] font-bold leading-4 text-neutral-900 sm:text-[12px]">
                  {title}
                </h3>
                <p className="mt-1 text-[10px] font-medium leading-4 text-neutral-500 sm:text-[11px]">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
