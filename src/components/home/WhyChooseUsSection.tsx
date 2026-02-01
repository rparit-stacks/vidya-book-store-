import { SectionHeader } from "@/components/common/SectionHeader";
import { CheckCircle, Clock, Award, Truck, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "60+ Years Legacy",
    description: "Serving Mumbai's educational community since 1961 with unwavering commitment to quality.",
  },
  {
    icon: Award,
    title: "Super Distributor",
    description: "Official super distributor status ensures you get authentic books at the best prices.",
  },
  {
    icon: Users,
    title: "500+ School Partners",
    description: "Trusted by over 500 schools for complete book supply and educational needs.",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    description: "Reliable delivery services across Mumbai, Raipur, Ratnagiri, Kolhapur & more.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Only genuine publications from reputed publishers. No duplicates, no compromises.",
  },
  {
    icon: CheckCircle,
    title: "Complete Solutions",
    description: "From set-making to stall setup, we handle all your school supply requirements.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative animate-slide-in-left order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                alt="Vidyarthi Book Depot Store"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <div className="bg-background/90 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                  <p className="font-heading text-sm sm:text-base lg:text-lg font-semibold text-foreground">
                    "Building educational partnerships since 1961"
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-primary text-primary-foreground px-4 py-2 sm:px-6 sm:py-3 rounded-xl shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold font-heading">60+</div>
              <div className="text-xs sm:text-sm">Years Strong</div>
            </div>
          </div>

          {/* Content side */}
          <div className="animate-slide-in-right order-1 lg:order-2">
            <SectionHeader
              label="Why Choose Us"
              title="Mumbai's Most Trusted Bookstore"
              description="We're not just a bookstore - we're your complete educational partner committed to academic success."
              centered={false}
            />

            <div className="grid gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-3 sm:gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1">{feature.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
