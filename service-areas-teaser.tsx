import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

const areas = ["Springfield", "Oakville", "Maplewood", "Cedar Grove", "Pine Valley", "Willow Creek"]

export function ServiceAreasTeaser() {
  return (
    <section className="py-16 lg:py-24 bg-black/40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/10 text-white mb-4">
            <MapPin className="h-6 w-6" />
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Proudly Serving Your Area
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Local service means faster response times and reliable scheduling.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-medium text-white"
            >
              {area}
            </span>
          ))}
          <span className="inline-flex items-center rounded-full bg-primary/20 border border-primary/30 px-4 py-2 text-sm font-medium text-primary">
            + More
          </span>
        </div>

        <div className="mt-10 text-center">
          <Button asChild>
            <Link href="/service-areas">See All Service Areas</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
