import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/common/SectionHeader";
import { EnquiryDialog } from "@/components/common/EnquiryDialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faGraduationCap, faBook, faGlobe, faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

const boards = [
  {
    id: "state-board",
    name: "Maharashtra State Board",
    description: "SSC/HSC curriculum for Maharashtra students",
    icon: faSchool,
  },
  {
    id: "icse",
    name: "ICSE / ISC",
    description: "Indian Certificate of Secondary Education",
    icon: faBook,
  },
  {
    id: "cbse",
    name: "CBSE",
    description: "Central Board of Secondary Education",
    icon: faGraduationCap,
  },
  {
    id: "igcse",
    name: "IGCSE",
    description: "International General Certificate of Secondary Education",
    icon: faGlobe,
  },
  {
    id: "ib",
    name: "IB",
    description: "International Baccalaureate Programme",
    icon: faEarthAmericas,
  },
];

const classLevels = [
  { id: "nursery", name: "Nursery" },
  { id: "lkg", name: "LKG" },
  { id: "ukg", name: "UKG" },
  { id: "1", name: "Class 1" },
  { id: "2", name: "Class 2" },
  { id: "3", name: "Class 3" },
  { id: "4", name: "Class 4" },
  { id: "5", name: "Class 5" },
  { id: "6", name: "Class 6" },
  { id: "7", name: "Class 7" },
  { id: "8", name: "Class 8" },
  { id: "9", name: "Class 9" },
  { id: "10", name: "Class 10" },
  { id: "11", name: "Class 11" },
  { id: "12", name: "Class 12" },
];

const Catalogue = () => {
  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBoardSelect = (boardId: string) => {
    setSelectedBoard(boardId);
    setSelectedClass(null);
  };

  const handleClassSelect = (classId: string) => {
    setSelectedClass(classId);
    setIsDialogOpen(true);
  };

  const selectedBoardData = boards.find((b) => b.id === selectedBoard);
  const selectedClassData = classLevels.find((c) => c.id === selectedClass);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream via-background to-cream-dark py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container-custom">
          <SectionHeader
            label="Book Catalogue"
            title="Find Your Books"
            description="Select your educational board and class to enquire about complete book sets, individual textbooks, and study materials."
          />

          {/* Progress indicator */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
            <div className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base ${!selectedBoard ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary"}`}>
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-current/20 flex items-center justify-center text-xs sm:text-sm font-medium">1</span>
              <span className="font-medium">Select Board</span>
            </div>
            <div className="w-0.5 h-4 sm:w-8 sm:h-0.5 bg-border rotate-90 sm:rotate-0" />
            <div className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base ${selectedBoard && !selectedClass ? "bg-primary text-primary-foreground" : selectedBoard ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-current/20 flex items-center justify-center text-xs sm:text-sm font-medium">2</span>
              <span className="font-medium">Select Class</span>
            </div>
            <div className="w-0.5 h-4 sm:w-8 sm:h-0.5 bg-border rotate-90 sm:rotate-0" />
            <div className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base ${selectedClass ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-current/20 flex items-center justify-center text-xs sm:text-sm font-medium">3</span>
              <span className="font-medium">Enquire</span>
            </div>
          </div>
        </div>
      </section>

      {/* Board Selection */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h3 className="heading-card text-foreground mb-8 text-center">
            {selectedBoard ? (
              <span className="flex items-center justify-center gap-2">
                <CheckCircle className="h-6 w-6 text-primary" />
                Selected: {selectedBoardData?.name}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedBoard(null)}
                  className="text-muted-foreground ml-2"
                >
                  Change
                </Button>
              </span>
            ) : (
              "Step 1: Select Your Board"
            )}
          </h3>

          {!selectedBoard ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {boards.map((board) => (
                <button
                  key={board.id}
                  onClick={() => handleBoardSelect(board.id)}
                  className="bg-card p-8 rounded-2xl border-2 border-border hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="text-5xl mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                      <FontAwesomeIcon icon={board.icon} />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors text-lg">
                      {board.name}
                    </h4>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {board.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <>
              <h3 className="heading-card text-foreground mb-8 text-center mt-12">
                Step 2: Select Your Class
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4">
                {classLevels.map((cls) => (
                  <button
                    key={cls.id}
                    onClick={() => handleClassSelect(cls.id)}
                    className="bg-card p-5 rounded-xl border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-center group"
                  >
                    <span className="font-semibold text-lg">{cls.name}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <h4 className="font-semibold text-foreground mb-3 text-lg group-hover:text-primary transition-colors">
                Complete Book Sets
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Get all required textbooks, workbooks, and notebooks for your class in one convenient set.
              </p>
            </div>
            <div className="bg-background p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <h4 className="font-semibold text-foreground mb-3 text-lg group-hover:text-primary transition-colors">
                Individual Books
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Need specific textbooks or reference materials? We have a wide selection available.
              </p>
            </div>
            <div className="bg-background p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <h4 className="font-semibold text-foreground mb-3 text-lg group-hover:text-primary transition-colors">
                Study Guides
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Supplement your studies with guides, practice papers, and reference books.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EnquiryDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        board={selectedBoardData?.name}
        classLevel={selectedClassData?.name}
      />
    </Layout>
  );
};

export default Catalogue;
