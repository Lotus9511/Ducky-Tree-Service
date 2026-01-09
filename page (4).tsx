import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { CtaBand } from "@/components/home/cta-band"
import { MapPin, Phone } from "lucide-react"

const serviceAreas = {
  "Primary Service Areas": [
    "Springfield",
    "Oakville",
    "Maplewood",
    "Cedar Grove",
    "Pine Valley",
    "Willow Creek",
    "Riverside",
    "Greenfield",
  ],
  "Extended Coverage": [
    "Forestdale",
    "Lakewood",
    "Hillcrest",
    "Elmwood",
    "Birchwood",
    "Ashton",
    "Meadowbrook",
    "Summit Heights",
  ],
  "Also Serving": [
    "Westbrook",
    "Eastview",
    "Northgate",
    "Southfield",
    "Clearwater",
    "Fairview",
    "Highland Park",
    "Valley View",
  ],
}

export default function ServiceAreasPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Fixed forest background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/lush-green-forest-canopy-aerial-view-sunlight-thro.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <SiteHeader />
      <main className="flex-1 pb-16 lg:pb-0">
        {/* Hero */}
        <section className="bg-black/40 backdrop-blur-sm py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 text-primary mb-6">
              <MapPin className="h-8 w-8" />
            </div>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">Service Areas</h1>
            <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
              Ducky&apos;s Tree Service proudly serves the greater metro area and surrounding communities. Local service
              means faster response times and reliable scheduling you can count on.
            </p>
          </div>
        </section>

        {/* Areas Grid */}
        <section className="py-16 lg:py-24 bg-black/40 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              {Object.entries(serviceAreas).map(([region, areas]) => (
                <div key={region}>
                  <h2 className="font-serif text-xl font-bold text-white mb-6 pb-3 border-b border-white/20">
                    {region}
                  </h2>
                  <ul className="space-y-3">
                    {areas.map((area) => (
                      <li key={area} className="flex items-center gap-2 text-white/80">
                        <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Not listed? */}
            <div className="mt-16 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 p-8 text-center">
              <h3 className="font-serif text-xl font-bold text-white mb-3">Don&apos;t see your area listed?</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                We regularly travel outside our primary service areas for larger jobs. Give us a call to discuss your
                project—we may be able to help!
              </p>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline"
              >
                <Phone className="h-5 w-5" />
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </div>
  )
}
