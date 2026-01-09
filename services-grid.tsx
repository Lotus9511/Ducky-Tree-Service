import Link from "next/link"
import Image from "next/image"

const services = [
  {
    title: "Tree Removal",
    description: "Safe removal of hazardous, dead, or unwanted trees from any location.",
    href: "/services#tree-removal",
    image: "/professional-tree-removal-service-crew-cutting-dow.jpg",
  },
  {
    title: "Tree Trimming",
    description: "Professional pruning for health, clearance, shape, and safety.",
    href: "/services#tree-trimming",
    image: "/arborist-trimming-tree-branches-with-professional-.jpg",
  },
  {
    title: "Stump Grinding",
    description: "Complete stump removal with a clean, level finish.",
    href: "/services#stump-grinding",
    image: "/stump-grinding-machine-removing-tree-stump-from-la.jpg",
  },
  {
    title: "Emergency Service",
    description: "24/7 response for urgent tree hazards and fallen limbs.",
    href: "/services#emergency",
    image: "/emergency-tree-service-removing-fallen-tree-after-.jpg",
  },
  {
    title: "Storm Damage",
    description: "Fast cleanup and restoration after severe weather events.",
    href: "/services#storm-damage",
    image: "/tree-service-crew-cleaning-up-storm-damage-fallen-.jpg",
  },
  {
    title: "Lot Clearing",
    description: "Brush removal and property preparation for any project.",
    href: "/services#lot-clearing",
    image: "/land-clearing-equipment-removing-trees-and-brush-f.jpg",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-black/40 backdrop-blur-sm">
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            From routine maintenance to emergency response, we have you covered.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative overflow-hidden rounded-xl bg-card border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="font-serif text-xl font-bold mb-1">{service.title}</h3>
                <p className="text-sm text-white/90 line-clamp-2">{service.description}</p>
                <span className="mt-2 inline-block text-sm font-semibold text-primary-foreground/90 group-hover:underline">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
