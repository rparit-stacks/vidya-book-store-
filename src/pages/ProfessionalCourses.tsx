import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/common/SectionHeader";
import { EnquiryDialog } from "@/components/common/EnquiryDialog";
import { Button } from "@/components/ui/button";
import { Briefcase, ArrowRight, BookOpen, Award, FileText } from "lucide-react";

const courses = [
  {
    name: "CA (Chartered Accountant)",
    levels: ["CA Foundation", "CA Intermediate", "CA Final"],
    description: "Complete study materials for all CA levels from ICAI and popular authors.",
    icon: "📊",
  },
  {
    name: "CS (Company Secretary)",
    levels: ["CS Foundation", "CS Executive", "CS Professional"],
    description: "ICSI prescribed textbooks and reference materials for CS aspirants.",
    icon: "⚖️",
  },
  {
    name: "CFA (Chartered Financial Analyst)",
    levels: ["CFA Level 1", "CFA Level 2", "CFA Level 3"],
    description: "Official curriculum and prep materials for CFA examinations.",
    icon: "📈",
  },
  {
    name: "CMA (Cost Management Accountant)",
    levels: ["CMA Foundation", "CMA Intermediate", "CMA Final"],
    description: "Study materials for cost and management accountancy certification.",
    icon: "💹",
  },
];

const features = [
  {
    icon: BookOpen,
    title: "Official Publications",
    description: "Authentic textbooks from ICAI, ICSI, and authorized publishers.",
  },
  {
    icon: FileText,
    title: "Practice Manuals",
    description: "Solved papers, practice questions, and revision notes.",
  },
  {
    icon: Award,
    title: "Latest Editions",
    description: "Always updated with the latest syllabus and amendments.",
  },
];

const ProfessionalCourses = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleEnquiry = (course: string) => {
    setSelectedCourse(course);
    setIsDialogOpen(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-50 via-background to-cream py-20 md:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-green-500/10 text-green-600 text-sm font-medium rounded-full mb-4">
                CA • CS • CFA • CMA
              </span>
              <h1 className="heading-display text-foreground mb-6">
                Professional{" "}
                <span className="text-primary">Course Books</span>
              </h1>
              <p className="text-body-lg text-muted-foreground mb-8">
                Build your professional career with the right study materials. 
                We stock complete course materials for CA, CS, CFA, and other 
                professional certifications.
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
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
                alt="Professional studying"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid sm:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card p-6 rounded-xl border border-border text-center"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <SectionHeader
            label="All Courses"
            title="Books for Professional Certifications"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div
                key={course.name}
                className="bg-background p-6 rounded-xl border border-border hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{course.icon}</span>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{course.name}</h3>
                    <p className="text-sm text-muted-foreground">{course.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.levels.map((level) => (
                    <span
                      key={level}
                      className="px-3 py-1 bg-green-500/10 text-green-700 text-sm rounded-full"
                    >
                      {level}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleEnquiry(course.name)}
                >
                  Enquire for {course.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        board={selectedCourse || "Professional Courses"}
      />
    </Layout>
  );
};

export default ProfessionalCourses;
