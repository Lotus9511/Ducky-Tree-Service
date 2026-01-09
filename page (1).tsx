import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { CtaBand } from "@/components/home/cta-band"
import { Shield, Heart, Wrench, Users } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Every job follows strict safety protocols. Our crew is trained in proper techniques and uses professional equipment to protect your property and our team.",
  },
  {
    icon: Heart,
    title: "Respect for Property",
    description:
      "We treat your yard like our own. We carefully protect lawns, gardens, and structures, and we never leave without a thorough cleanup.",
  },
  {
    icon: Wrench,
    title: "Professional Equipment",
    description:
      "We invest in modern bucket trucks, chippers, and stump grinders to handle any job efficiently and with quality results.",
  },
  {
    icon: Users,
    title: "Honest Pricing",
    description:
      "No surprises, no hidden fees. We provide detailed quotes upfront so you know exactly what you're paying for before we start.",
  },
]

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Fixed background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/forest-sunlight-through-trees-nature-background.jpg')" }}
      />
      <div className="fixed inset-0 -z-10 bg-black/50" />

      <SiteHeader />
      <main className="flex-1 pb-16 lg:pb-0">
        {/* Hero */}
        <section className="bg-black/40 backdrop-blur-sm py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  About Ducky&apos;s Tree Service
                </h1>
                <p className="mt-6 text-lg text-white/80 leading-relaxed">
                  We&apos;re a family-owned tree service company dedicated to keeping our community&apos;s properties
                  safe and beautiful. What started as a small operation has grown into a trusted name in tree care.
                </p>
                <p className="mt-4 text-lg text-white/80 leading-relaxed">
                  When you work with us, you&apos;re not just hiring a tree company—you&apos;re partnering with
                  neighbors who take pride in every job, big or small.
                </p>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-lg ring-2 ring-white/20">
                <img
                  src="/tree-service-team-group-photo-professional-crew-tr.jpg"
                  alt="Ducky's Tree Service team"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-black/40 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">What We Stand For</h2>
              <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                Our values guide every decision we make and every job we take on.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex gap-4 p-6 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">{value.title}</h3>
                    <p className="mt-2 text-white/70">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment */}
        <section className="py-16 lg:py-24 bg-black/50 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="lg:order-2">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Professional Equipment
                </h2>
                <p className="mt-6 text-lg text-white/80 leading-relaxed">
                  We invest in the best equipment to ensure every job is done safely and efficiently. Our fleet
                  includes:
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3 text-white">
                    <span className="text-primary">✓</span>
                    Bucket trucks for safe access to tall trees
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <span className="text-primary">✓</span>
                    Commercial wood chippers for fast cleanup
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <span className="text-primary">✓</span>
                    Professional stump grinders for clean removal
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <span className="text-primary">✓</span>
                    Rigging equipment for controlled removals
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <span className="text-primary">✓</span>
                    Dump trailers for complete debris hauling
                  </li>
                </ul>
              </div>
              <div className="lg:order-1 aspect-[4/3] overflow-hidden rounded-lg ring-2 ring-white/20">
                <img
                  src="/tree-service-bucket-truck-wood-chipper-professiona.jpg"
                  alt="Professional tree service equipment"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 lg:py-24 bg-black/40 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">Licensed & Insured</h2>
            <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
              Ducky&apos;s Tree Service is fully licensed and carries comprehensive liability insurance and
              workers&apos; compensation coverage. We&apos;re happy to provide proof of insurance to any customer upon
              request. Your peace of mind is our priority.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">10+</div>
                <div className="text-sm text-white/70 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">2,000+</div>
                <div className="text-sm text-white/70 mt-1">Jobs Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-white/70 mt-1">Insured</div>
              </div>
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
