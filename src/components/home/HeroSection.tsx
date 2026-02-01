import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Award, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-background to-cream-dark" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Trusted Since 1961</span>
            </div>
            
            <h1 className="heading-display text-foreground mb-6">
              Your Complete{" "}
              <span className="text-primary">Educational</span>{" "}
              Partner
            </h1>
            
            <p className="text-body-lg text-muted-foreground mb-8 max-w-xl">
              For over 60 years, Vidyarthi Book Depot has been Mumbai's most trusted destination 
              for academic books, school supplies, and educational materials. From nursery to 
              competitive exams, we've got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/catalogue">
                <Button size="lg" className="btn-primary text-lg px-8 py-6 w-full sm:w-auto">
                  Browse Catalogue
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/school-partnership">
                <Button size="lg" variant="outline" className="btn-outline text-lg px-8 py-6 w-full sm:w-auto">
                  School Partnership
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="font-serif text-3xl md:text-4xl font-bold text-primary">60+</div>
                <div className="text-sm text-muted-foreground">Years of Trust</div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Partner Schools</div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl font-bold text-primary">1L+</div>
                <div className="text-sm text-muted-foreground">Happy Students</div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative animate-slide-in-right delay-200">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main image container */}
              <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl rotate-3" />
              <div className="absolute inset-4 bg-gradient-to-br from-cream to-background rounded-3xl -rotate-3 shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000&auto=format&fit=crop"
                  alt="Stack of books"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating cards */}
              <div className="absolute -left-4 top-1/4 bg-background p-4 rounded-xl shadow-xl animate-fade-in delay-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">All Boards</div>
                    <div className="text-xs text-muted-foreground">CBSE, ICSE, State & More</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-background p-4 rounded-xl shadow-xl animate-fade-in delay-400">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">School Partner</div>
                    <div className="text-xs text-muted-foreground">Bulk Supply & Stalls</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
