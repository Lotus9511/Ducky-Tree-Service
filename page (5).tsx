import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { CtaBand } from "@/components/home/cta-band"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TreeDeciduous, Scissors, CircleDot, Zap, CloudRain, Trees } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const services = [
  {
    id: "tree-removal",
    icon: TreeDeciduous,
    title: "Tree Removal",
    description: "Safe, efficient removal of trees of any size from any location.",
    includes: [
      "Complete tree removal from base to stump",
      "Controlled felling for tight spaces",
      "Bucket truck access for tall trees",
      "All debris hauled away",
      "Yard cleanup included",
    ],
    whenNeeded: [
      "Dead or dying trees threatening structures",
      "Storm-damaged trees",
      "Trees too close to power lines or buildings",
      "Clearing space for construction or landscaping",
      "Root systems damaging foundations or pipes",
    ],
  },
  {
    id: "tree-trimming",
    icon: Scissors,
    title: "Tree Trimming & Pruning",
    description: "Professional trimming to keep your trees healthy, safe, and beautiful.",
    includes: [
      "Crown thinning and shaping",
      "Deadwood and hazard removal",
      "Clearance trimming from structures",
      "Vista pruning for views",
      "Young tree training",
    ],
    whenNeeded: [
      "Overgrown branches blocking light or views",
      "Dead branches posing safety risks",
      "Trees touching roof, siding, or power lines",
      "Improving tree health and appearance",
      "Reducing wind resistance before storms",
    ],
  },
  {
    id: "stump-grinding",
    icon: CircleDot,
    title: "Stump Grinding",
    description: "Complete stump removal with a clean, level finish you can use immediately.",
    includes: [
      "Full stump grinding below ground level",
      "Root flare grinding included",
      "Wood chip cleanup or spreading",
      "Area ready for grass, landscaping, or construction",
      "Optional filling and seeding",
    ],
    whenNeeded: [
      "Unsightly stumps ruining your lawn",
      "Stumps attracting pests or fungus",
      "Tripping hazards in high-traffic areas",
      "Preparing area for new planting or construction",
      "Preventing regrowth and root suckers",
    ],
  },
  {
    id: "emergency",
    icon: Zap,
    title: "Emergency Tree Service",
    description: "24/7 rapid response for urgent tree hazards and immediate threats.",
    includes: [
      "Same-day emergency response",
      "Hazard assessment and stabilization",
      "Immediate threat removal",
      "Temporary protection measures",
      "Insurance documentation assistance",
    ],
    whenNeeded: [
      "Trees fallen on structures, vehicles, or roads",
      "Hanging limbs threatening immediate harm",
      "Storm damage requiring immediate attention",
      "Trees blocking access or utilities",
      "Any urgent safety concern",
    ],
  },
  {
    id: "storm-damage",
    icon: CloudRain,
    title: "Storm Damage Cleanup",
    description: "Fast, thorough cleanup and restoration after severe weather events.",
    includes: [
      "Fallen tree and limb removal",
      "Hazard assessment of remaining trees",
      "Complete debris cleanup",
      "Damaged tree pruning or removal",
      "Insurance claim documentation",
    ],
    whenNeeded: [
      "After severe thunderstorms or tornadoes",
      "Ice storm damage",
      "High wind events",
      "Heavy snow or ice accumulation",
      "Any weather-related tree damage",
    ],
  },
  {
    id: "lot-clearing",
    icon: Trees,
    title: "Lot Clearing & Brush Removal",
    description: "Complete clearing for construction, landscaping, or property maintenance.",
    includes: [
      "Full lot or selective clearing",
      "Brush and undergrowth removal",
      "Small tree and sapling removal",
      "Debris chipping and removal",
      "Site prep for next steps",
    ],
    whenNeeded: [
      "New construction or home sites",
      "Garden or landscape bed preparation",
      "Fire prevention clearing",
      "Overgrown property restoration",
      "Trail or path creation",
    ],
  },
]

const faqs = [
  {
    question: "Do you haul away all debris?",
    answer:
      "Yes! Every job includes complete cleanup. We haul away all wood, branches, and debris, leaving your property spotless. We can also leave wood chips for mulch if you'd like them.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. Ducky's Tree Service is fully licensed and carries comprehensive liability insurance and workers' compensation. We're happy to provide proof of insurance upon request.",
  },
  {
    question: "How do your quotes work?",
    answer:
      "We offer free, no-obligation estimates. For most jobs, we can provide an accurate quote from photos. For complex situations, we'll schedule a quick on-site visit at no charge.",
  },
  {
    question: "Do I need permits for tree removal?",
    answer:
      "It depends on your location and the tree. We're familiar with local regulations and can help you determine if permits are needed. In most cases, we can assist with the permit process.",
  },
  {
    question: "How fast can you come out?",
    answer:
      "For emergencies, we offer same-day response. For routine work, we typically schedule within 1-2 weeks, often sooner. We always work around your schedule.",
  },
  {
    question: "Can you work near power lines?",
    answer:
      "Safety is our top priority. We follow strict protocols for work near utilities. In some cases, we coordinate with the power company to ensure safe disconnection before work begins.",
  },
  {
    question: "What happens if the weather delays my job?",
    answer:
      "Safety comes first. If weather conditions are unsafe, we'll reschedule for the next available day at no additional charge. We'll keep you informed throughout the process.",
  },
  {
    question: "Do you offer stump grinding with tree removal?",
    answer:
      "Yes! We offer discounted stump grinding when combined with tree removal. Just let us know when you request your quote, and we'll include it in the estimate.",
  },
]

export default function ServicesPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Fixed forest background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/sunlight-streaming-through-tall-forest-trees-natur.jpg')" }}
      />
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 -z-10 bg-black/50" />

      <SiteHeader />
      <main className="flex-1 pb-16 lg:pb-0">
        {/* Hero */}
        <section className="bg-black/40 backdrop-blur-sm py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Services</h1>
            <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
              From routine trimming to emergency response, we provide comprehensive tree care services with safety-first
              practices and complete cleanup on every job.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 lg:py-24 bg-black/60 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="space-y-16 lg:space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid gap-8 lg:grid-cols-2 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">{service.title}</h2>
                    </div>
                    <p className="text-lg text-white/80 mb-6">{service.description}</p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-white mb-3">What&apos;s included:</h3>
                        <ul className="space-y-2">
                          {service.includes.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-white/80">
                              <span className="text-primary mt-1.5">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-white mb-3">When you need it:</h3>
                        <ul className="space-y-2">
                          {service.whenNeeded.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-white/80">
                              <span className="text-white/50 mt-1.5">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button asChild>
                        <Link href="/contact">Request Quote</Link>
                      </Button>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="aspect-[4/3] overflow-hidden rounded-lg ring-2 ring-white/20">
                      <img
                        src={`/.jpg?key=d4yay&height=450&width=600&query=${service.title.toLowerCase().replace(/ /g, "+")}+professional+arborist+service`}
                        alt={service.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-black/50 backdrop-blur-sm">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/20">
                  <AccordionTrigger className="text-left font-semibold text-white hover:text-white/80">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </div>
  )
}
