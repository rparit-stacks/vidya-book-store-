import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/common/SectionHeader";
import { EnquiryDialog } from "@/components/common/EnquiryDialog";
import { Button } from "@/components/ui/button";
import { Trophy, ArrowRight } from "lucide-react";

const examCategories = [
  {
    category: "Management",
    exams: ["MBA CET", "CAT", "GMAT", "XAT", "MAT", "CMAT"],
  },
  {
    category: "Engineering & Science",
    exams: ["GATE", "JEE Main", "JEE Advanced", "NEET"],
  },
  {
    category: "Teaching",
    exams: ["CTET", "TET", "BED Entrance", "DED Entrance"],
  },
  {
    category: "Study Abroad",
    exams: ["IELTS", "TOEFL", "GRE", "SAT"],
  },
  {
    category: "Government Jobs",
    exams: ["Bank PO/Clerk", "SSC", "Railways", "NDA", "CDS"],
  },
  {
    category: "Research & Academia",
    exams: ["UGC NET", "SET", "CSIR NET"],
  },
  {
    category: "Design",
    exams: ["NIFT", "NID", "UCEED", "CEED"],
  },
];

const CompetitiveExams = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState("");

  const handleEnquiry = (exam: string) => {
    setSelectedExam(exam);
    setIsDialogOpen(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-orange-50 via-background to-cream py-20 md:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-orange-500/10 text-orange-600 text-sm font-medium rounded-full mb-4">
                Crack Your Exam
              </span>
              <h1 className="heading-display text-foreground mb-6">
                Competitive{" "}
                <span className="text-primary">Exam Books</span>
              </h1>
              <p className="text-body-lg text-muted-foreground mb-8">
                Comprehensive study materials, practice papers, and guides for 
                all major competitive exams. From MBA to Government jobs, 
                we've got you covered.
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
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
                alt="Student studying"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Exam Categories */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            label="All Exams"
            title="Books for Every Competitive Exam"
            description="Find study materials for your target exam from leading publishers like Arihant, MTG, Disha, and more."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examCategories.map((category) => (
              <div
                key={category.category}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.exams.map((exam) => (
                    <button
                      key={exam}
                      onClick={() => handleEnquiry(exam)}
                      className="px-3 py-1.5 bg-muted text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {exam}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-section mb-4">Start Your Preparation Today</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get the right books for your competitive exam. Our experts can help you 
            choose the best study materials based on your preparation level.
          </p>
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
            onClick={() => setIsDialogOpen(true)}
          >
            Get Expert Guidance
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <EnquiryDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        board={selectedExam || "Competitive Exams"}
      />
    </Layout>
  );
};

export default CompetitiveExams;
