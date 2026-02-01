import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Gift, Calendar, CheckCircle, AlertCircle, ArrowRight, BookOpen, Phone } from "lucide-react";

const SpecialOffer = () => {
  // Check if offer is currently active (20 June to 30 June 2027)
  const currentDate = new Date();
  const offerStart = new Date("2027-06-20");
  const offerEnd = new Date("2027-06-30");
  const isOfferActive = currentDate >= offerStart && currentDate <= offerEnd;

  const eligibleBooks = [
    "Textbooks (all subjects)",
    "Reference books",
    "Guides and study materials",
    "Practice question banks",
  ];

  const notEligibleBooks = [
    "Paper solutions",
    "Damaged or torn books",
    "Books with excessive markings",
    "Out of syllabus editions",
  ];

  const conditions = [
    "Books must be in good readable condition",
    "All pages must be intact",
    "No water damage or mold",
    "Minimal highlighting or notes",
    "Original cover intact",
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-gold/10 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Gift className="h-5 w-5 text-primary" />
              <span className="font-medium text-primary">Limited Time Offer</span>
            </div>
            
            <h1 className="heading-display text-foreground mb-6">
              50% Buyback on{" "}
              <span className="text-primary">11th-12th Books</span>
            </h1>
            
            <p className="text-body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Maharashtra State Board students can get 50% of their paid amount back 
              when they sell their 11th and 12th textbooks, reference books, and guides.
            </p>

            {/* Offer Status */}
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl mb-8 ${
              isOfferActive 
                ? "bg-green-100 text-green-800" 
                : "bg-amber-100 text-amber-800"
            }`}>
              {isOfferActive ? (
                <>
                  <CheckCircle className="h-6 w-6" />
                  <span className="font-semibold">Offer is ACTIVE!</span>
                </>
              ) : (
                <>
                  <Calendar className="h-6 w-6" />
                  <span className="font-semibold">Valid: 20 June - 30 June 2027</span>
                </>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8097732003">
                <Button size="lg" className="btn-primary w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call to Sell Books
                </Button>
              </a>
              <Link to="/catalogue">
                <Button size="lg" variant="outline" className="btn-outline w-full sm:w-auto">
                  Browse New Books
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Eligible Books */}
            <div className="bg-card p-8 rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="heading-card text-foreground">Eligible Books</h3>
              </div>
              <ul className="space-y-3">
                {eligibleBooks.map((book) => (
                  <li key={book} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </span>
                    <span className="text-foreground">{book}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Eligible */}
            <div className="bg-card p-8 rounded-2xl border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="heading-card text-foreground">Not Eligible</h3>
              </div>
              <ul className="space-y-3">
                {notEligibleBooks.map((book) => (
                  <li key={book} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                      <AlertCircle className="h-3 w-3 text-red-600" />
                    </span>
                    <span className="text-foreground">{book}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-section text-foreground text-center mb-8">
              Terms & Conditions
            </h2>
            <div className="bg-background p-8 rounded-2xl shadow-lg">
              <ul className="space-y-4">
                {conditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center shrink-0 text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{condition}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  * The final buyback value will be determined after physical inspection of 
                  the books. Vidyarthi Book Depot reserves the right to reject books that 
                  don't meet the condition requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <h2 className="heading-section text-center mb-12">How It Works</h2>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-background/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h4 className="font-semibold text-lg mb-2">1. Bring Your Books</h4>
              <p className="opacity-80 text-sm">
                Visit our store with your 11th-12th Maharashtra State Board books
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-background/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h4 className="font-semibold text-lg mb-2">2. Quick Evaluation</h4>
              <p className="opacity-80 text-sm">
                Our team checks the condition and calculates 50% of your paid amount
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-background/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8" />
              </div>
              <h4 className="font-semibold text-lg mb-2">3. Get Paid</h4>
              <p className="opacity-80 text-sm">
                Receive instant cash or use it as credit for new book purchases
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SpecialOffer;
