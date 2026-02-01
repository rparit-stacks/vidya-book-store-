import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/common/SectionHeader";
import { EnquiryDialog } from "@/components/common/EnquiryDialog";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, FileText, Notebook, ArrowRight } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "All Major Boards",
    description: "Complete textbook sets for State Board, ICSE, CBSE, IGCSE, and IB curricula.",
    details: "We stock authentic books from authorized publishers for all major educational boards. Get complete sets or individual books as per your requirement.",
  },
  {
    icon: FileText,
    title: "Reference Books",
    description: "Additional study materials, guides, and practice papers from leading publishers.",
    details: "Enhance learning with reference books, workbooks, and practice papers from top publishers like Navneet, Target, Arihant, and more.",
  },
  {
    icon: Notebook,
    title: "Notebooks & Supplies",
    description: "School-specific notebooks, lab manuals, and required stationery items.",
    details: "Get school-specific notebooks with proper labeling, lab manuals, practical books, and all required stationery supplies in one place.",
  },
  {
    icon: GraduationCap,
    title: "Exam Preparation",
    description: "Board exam preparation materials and previous year question papers.",
    details: "Prepare confidently with sample papers, previous year questions, revision notes, and exam-focused study materials for all boards.",
  },
];

const SchoolBooks = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-50 via-background to-cream py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-500/10 text-blue-600 text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">
                Nursery to 12th Standard
              </span>
              <h1 className="heading-display text-foreground mb-4 sm:mb-6">
                School Books for{" "}
                <span className="text-primary">Every Student</span>
              </h1>
              <p className="text-body-lg text-muted-foreground mb-6 sm:mb-8">
                Complete textbook solutions for all educational boards. From your child's first 
                picture book to board exam preparation, we provide authentic books from 
                authorized publishers.
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
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
                alt="Students with books"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            label="What We Offer"
            title="Complete School Supply Solutions"
            description="Everything your child needs for a successful academic year, all in one place."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flip-card h-64">
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front p-6 flex flex-col">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-blue-600" />
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

      {/* Boards */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <SectionHeader
            label="All Boards"
            title="Books for Every Curriculum"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {["Maharashtra State Board", "ICSE / ISC", "CBSE", "IGCSE", "IB"].map((board) => (
              <div
                key={board}
                className="bg-background p-6 rounded-xl text-center border border-border hover:border-primary transition-colors"
              >
                <span className="font-semibold text-foreground">{board}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-section mb-4">Need School Books?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Submit your requirements and we'll get back to you with availability and pricing.
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
        board="School Books"
      />
    </Layout>
  );
};

export default SchoolBooks;
