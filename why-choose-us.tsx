import { Shield, DollarSign, Wrench, Heart, Sparkles, Clock } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Safety-First Approach",
    description: "Every job follows strict safety protocols to protect your property and our crew.",
  },
  {
    icon: DollarSign,
    title: "Honest Pricing",
    description: "Transparent quotes with no hidden fees. You know exactly what you're paying for.",
  },
  {
    icon: Wrench,
    title: "Professional Equipment",
    description: "Modern bucket trucks, chippers, and stump grinders for efficient, quality work.",
  },
  {
    icon: Heart,
    title: "Respect for Property",
    description: "We treat your yard like our own, protecting lawns, gardens, and structures.",
  },
  {
    icon: Sparkles,
    title: "Full Cleanup Guaranteed",
    description: "Every job includes complete debris removal. We leave your property spotless.",
  },
  {
    icon: Clock,
    title: "Reliable Scheduling",
    description: "We show up on time, every time. Local crew means flexible availability.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative py-16 lg:py-24 bg-black/40 backdrop-blur-sm">
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why Choose Ducky&apos;s Tree Service?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              We&apos;re not just another tree company. We&apos;re your neighbors, committed to keeping your property
              safe and beautiful.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{feature.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-lg shadow-2xl ring-1 ring-white/10">
              <img
                src="/arborist-climbing-tree-with-safety-gear-profession.jpg"
                alt="Professional arborist safely working on a tree"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
