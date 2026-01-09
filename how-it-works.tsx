import { ClipboardList, Camera, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    title: "Request a Quote",
    description: "Call us or fill out our simple form. We respond quickly.",
  },
  {
    icon: Camera,
    title: "We Assess",
    description: "Send us photos or we'll come on-site to evaluate the job.",
  },
  {
    icon: CheckCircle,
    title: "Job Complete",
    description: "We complete the work professionally with full cleanup included.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-primary py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground">
                <step.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/70 mb-1">
                  Step {index + 1}
                </div>
                <h3 className="font-semibold text-primary-foreground">{step.title}</h3>
                <p className="mt-1 text-sm text-primary-foreground/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
