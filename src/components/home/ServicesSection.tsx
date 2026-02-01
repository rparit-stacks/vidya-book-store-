import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/common/SectionHeader";
import { 
  GraduationCap, 
  BookOpen, 
  Trophy, 
  Briefcase, 
  Scale, 
  Pencil,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "School Books",
    description: "Complete textbooks for all boards - State Board, ICSE, CBSE, IGCSE, IB from Nursery to 12th standard.",
    href: "/school-books",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: BookOpen,
    title: "College Textbooks",
    description: "University course materials with our exclusive buyback program for cost savings.",
    href: "/college-textbooks",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Trophy,
    title: "Competitive Exams",
    description: "Comprehensive study materials for MBA, CAT, GATE, IELTS, NEET, and more entrance exams.",
    href: "/competitive-exams",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Briefcase,
    title: "Professional Courses",
    description: "Specialized books for CA, CS, CFA, and other professional certifications.",
    href: "/professional-courses",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Scale,
    title: "Law & General Books",
    description: "Legal textbooks, reference materials, and general reading collection.",
    href: "/law-books",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Pencil,
    title: "Stationery",
    description: "Quality school and office stationery supplies for all your needs.",
    href: "/stationery",
    color: "bg-pink-500/10 text-pink-600",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <SectionHeader
          label="What We Offer"
          title="Complete Educational Solutions"
          description="From first-day school supplies to competitive exam preparation, we're your one-stop destination for all academic needs."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group bg-background rounded-2xl p-6 lg:p-8 shadow-sm card-hover animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-5`}>
                <service.icon className="h-7 w-7" />
              </div>
              
              <h3 className="heading-card text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              
              <div className="flex items-center text-primary font-medium text-sm">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
