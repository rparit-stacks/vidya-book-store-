import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <h2 className="heading-section text-background mb-4">
          Ready to Get Your Books?
        </h2>
        <p className="text-background/80 text-lg max-w-2xl mx-auto mb-8">
          Whether you're a student, parent, or school administrator, we're here to help 
          you with all your academic book requirements. Get in touch today!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/catalogue">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 w-full sm:w-auto">
              Browse Catalogue
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <a href="tel:8097732003">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-background text-background hover:bg-background hover:text-foreground text-lg px-8 py-6 w-full sm:w-auto"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
