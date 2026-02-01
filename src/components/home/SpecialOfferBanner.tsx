import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Calendar } from "lucide-react";

export function SpecialOfferBanner() {
  return (
    <section className="py-8">
      <div className="container-custom">
        <div className="relative bg-gradient-to-r from-primary to-burgundy rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-6 text-primary-foreground">
              <div className="hidden sm:flex w-16 h-16 bg-white/20 rounded-2xl items-center justify-center shrink-0">
                <Gift className="h-8 w-8" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>Limited Time Offer</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                  50% Buyback on 11th-12th Books!
                </h3>
                <p className="text-white/80 max-w-xl">
                  Maharashtra State Board students can get 50% back on their textbooks, 
                  reference books, and guides. Valid from 20 June to 30 June 2027.
                </p>
              </div>
            </div>

            <Link to="/special-offer">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shrink-0">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
