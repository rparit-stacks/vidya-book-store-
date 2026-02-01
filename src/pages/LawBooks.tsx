import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/common/SectionHeader";
import { EnquiryDialog } from "@/components/common/EnquiryDialog";
import { Button } from "@/components/ui/button";
import { Scale, BookOpen, ArrowRight } from "lucide-react";

const lawCategories = [
  "Constitutional Law",
  "Criminal Law",
  "Civil Law",
  "Corporate Law",
  "Family Law",
  "Property Law",
  "Labour Law",
  "Tax Law",
  "International Law",
  "Environmental Law",
];

const generalCategories = [
  "Fiction & Literature",
  "Non-Fiction",
  "Self-Help",
  "Biography & Memoir",
  "History",
  "Science & Technology",
  "Business & Economics",
  "Children's Books",
];

const LawBooks = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-amber-50 via-background to-cream py-20 md:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-600 text-sm font-medium rounded-full mb-4">
                Legal & General Reading
              </span>
              <h1 className="heading-display text-foreground mb-6">
                Law &{" "}
                <span className="text-primary">General Books</span>
              </h1>
              <p className="text-body-lg text-muted-foreground mb-8">
                Comprehensive collection of legal textbooks, bare acts, and 
                reference materials for law students and practitioners. Plus, 
                a curated selection of general reading for book lovers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="btn-primary"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Enquire Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop"
                alt="Law books"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Law Books */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center">
                  <Scale className="h-6 w-6 text-amber-600" />
                </div>
                <h2 className="heading-card text-foreground">Law Books</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                We stock law textbooks from publishers like Lexis Nexis, Eastern Book Company, 
                Universal Law Publishing, and more.
              </p>
              <div className="flex flex-wrap gap-2">
                {lawCategories.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1.5 bg-amber-500/10 text-amber-700 text-sm rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h2 className="heading-card text-foreground">General Books</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Explore our collection of fiction, non-fiction, and general interest books 
                for readers of all ages.
              </p>
              <div className="flex flex-wrap gap-2">
                {generalCategories.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-section mb-4">Looking for a Specific Book?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Send us your requirements and 
            we'll help you source it.
          </p>
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
            onClick={() => setIsDialogOpen(true)}
          >
            Submit Enquiry
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <EnquiryDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        board="Law & General Books"
      />
    </Layout>
  );
};

export default LawBooks;
