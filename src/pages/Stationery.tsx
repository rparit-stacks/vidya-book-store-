import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/common/SectionHeader";
import { EnquiryDialog } from "@/components/common/EnquiryDialog";
import { Button } from "@/components/ui/button";
import { Pencil, ArrowRight } from "lucide-react";

const stationeryCategories = [
  {
    name: "Writing Instruments",
    items: ["Pens", "Pencils", "Markers", "Highlighters", "Erasers", "Sharpeners"],
  },
  {
    name: "Notebooks & Registers",
    items: ["Ruled Notebooks", "Graph Books", "Lab Manuals", "Drawing Books", "Registers"],
  },
  {
    name: "Files & Folders",
    items: ["Ring Files", "Lever Arch Files", "Clear Folders", "Document Organizers"],
  },
  {
    name: "School Supplies",
    items: ["Geometry Boxes", "Craft Paper", "Glue Sticks", "Scissors", "Rulers", "Calculators"],
  },
  {
    name: "Art Supplies",
    items: ["Sketch Pens", "Crayons", "Poster Colors", "Oil Pastels", "Canvas Boards"],
  },
  {
    name: "Office Supplies",
    items: ["Staplers", "Paper Clips", "Sticky Notes", "Tape", "Rubber Bands"],
  },
];

const Stationery = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-pink-50 via-background to-cream py-20 md:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-pink-500/10 text-pink-600 text-sm font-medium rounded-full mb-4">
                Quality Supplies
              </span>
              <h1 className="heading-display text-foreground mb-6">
                Stationery{" "}
                <span className="text-primary">& Supplies</span>
              </h1>
              <p className="text-body-lg text-muted-foreground mb-8">
                From basic school supplies to premium office stationery, we stock 
                quality products from trusted brands to support your academic and 
                professional needs.
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
                src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=800&auto=format&fit=crop"
                alt="Stationery items"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            label="Our Range"
            title="Complete Stationery Collection"
            description="Everything you need for school, college, or office - all under one roof."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stationeryCategories.map((category) => (
              <div
                key={category.name}
                className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center">
                    <Pencil className="h-5 w-5 text-pink-600" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 bg-muted text-xs rounded text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Orders */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="bg-background rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="heading-section text-foreground mb-4">Bulk Orders Welcome</h2>
                <p className="text-muted-foreground mb-6">
                  Schools and institutions can avail special discounts on bulk stationery orders. 
                  We can customize stationery packs based on your specific requirements.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs">✓</span>
                    Special institutional pricing
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs">✓</span>
                    Custom stationery sets
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs">✓</span>
                    Delivery to your location
                  </li>
                </ul>
              </div>
              <div className="text-center md:text-right">
                <Button
                  size="lg"
                  className="btn-primary"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Get Bulk Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        board="Stationery"
      />
    </Layout>
  );
};

export default Stationery;
