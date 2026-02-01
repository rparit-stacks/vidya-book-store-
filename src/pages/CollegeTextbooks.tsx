import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/common/SectionHeader";
import { EnquiryDialog } from "@/components/common/EnquiryDialog";
import { Button } from "@/components/ui/button";
import { BookOpen, RefreshCcw, Truck, BadgePercent, ArrowRight } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "All Streams",
    description: "Engineering, Commerce, Arts, Science, Medicine, and more.",
    details: "Comprehensive collection of textbooks for all university streams including Engineering, Medical, Commerce, Arts, Science, Law, and Management courses.",
  },
  {
    icon: RefreshCcw,
    title: "Buyback Program",
    description: "Sell your used textbooks back to us at the end of the semester.",
    details: "Get fair market value for your used books. Quick evaluation, instant payment, and hassle-free process. Save money while helping other students.",
  },
  {
    icon: BadgePercent,
    title: "Competitive Prices",
    description: "Super distributor rates ensure you get the best deals.",
    details: "As authorized super distributors, we offer the most competitive prices on all textbooks. Bulk discounts available for institutions and student groups.",
  },
  {
    icon: Truck,
    title: "Delivery Available",
    description: "Get books delivered to your hostel or home address.",
    details: "Convenient delivery service to your doorstep. Free delivery on orders above ₹500 within Mumbai. Pan-India shipping available.",
  },
];

const CollegeTextbooks = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-purple-50 via-background to-cream py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-500/10 text-purple-600 text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">
                University & College
              </span>
              <h1 className="heading-display text-foreground mb-4 sm:mb-6">
                College{" "}
                <span className="text-primary">Textbooks</span>
              </h1>
              <p className="text-body-lg text-muted-foreground mb-6 sm:mb-8">
                Comprehensive collection of university textbooks for all streams. 
                Plus, take advantage of our exclusive buyback program to save on 
                your education costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="btn-primary w-full sm:w-auto"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Enquire Now
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop"
                alt="College library"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flip-card h-64">
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front p-6 flex flex-col">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                    <p className="text-xs text-primary mt-auto">Hover for details →</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back">
                    <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                    <p className="text-sm leading-relaxed opacity-90">{feature.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyback Info */}
      <section className="section-padding bg-gradient-to-r from-primary to-burgundy text-primary-foreground">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-section mb-4">Buyback Program</h2>
              <p className="text-lg opacity-90 mb-6">
                Don't let your used textbooks gather dust! Our buyback program lets you 
                sell your books back to us at fair prices. It's a win-win for your wallet 
                and the environment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-background/20 rounded-full flex items-center justify-center text-sm">✓</span>
                  Fair market value for your books
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-background/20 rounded-full flex items-center justify-center text-sm">✓</span>
                  Quick evaluation process
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-background/20 rounded-full flex items-center justify-center text-sm">✓</span>
                  Instant payment on spot
                </li>
              </ul>
            </div>
            <div className="bg-background/10 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-semibold mb-4">How It Works</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center shrink-0">1</span>
                  <p>Bring your used textbooks to our store</p>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center shrink-0">2</span>
                  <p>Our team evaluates the condition and demand</p>
                </li>
                <li className="flex gap-4">
                  <span className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center shrink-0">3</span>
                  <p>Get paid instantly in cash or store credit</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <EnquiryDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        board="College Textbooks"
      />
    </Layout>
  );
};

export default CollegeTextbooks;
