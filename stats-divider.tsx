import { TreeDeciduous, Users, Clock, Award } from "lucide-react"

const stats = [
  {
    icon: TreeDeciduous,
    value: "5,000+",
    label: "Trees Serviced",
  },
  {
    icon: Users,
    value: "2,500+",
    label: "Happy Customers",
  },
  {
    icon: Clock,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: Award,
    value: "100%",
    label: "Satisfaction Rate",
  },
]

export function StatsDivider() {
  return (
    <section className="relative py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-4">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
