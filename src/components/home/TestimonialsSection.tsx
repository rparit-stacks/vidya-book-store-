import { useState } from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Parent, CBSE Student",
    content: "We've been getting our children's books from Vidyarthi Book Depot for 8 years now. Their complete set-making service saves us so much time and hassle at the start of every academic year.",
    rating: 5,
  },
  {
    id: 2,
    name: "St. Mary's High School",
    role: "Partner School, Mumbai",
    content: "As a school, we trust Vidyarthi Book Depot for our annual book requirements. Their stall setup during admissions is professional and their pricing is always fair.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rahul Deshmukh",
    role: "CA Student",
    content: "Found all my CA foundation and intermediate books here. The staff is knowledgeable about course requirements and helped me find the right study materials.",
    rating: 5,
  },
  {
    id: 4,
    name: "Anjali Patil",
    role: "Parent, State Board Student",
    content: "The buyback offer for 11th-12th books is excellent! We got 50% back on last year's textbooks. It really helps with the education expenses.",
    rating: 5,
  },
  {
    id: 5,
    name: "Modern English School",
    role: "Partner School, Ratnagiri",
    content: "Even though we're outside Mumbai, Vidyarthi Book Depot delivers our complete school requirements on time every year. Truly reliable partners.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-cream">
      <div className="container-custom">
        <SectionHeader
          label="Testimonials"
          title="Trusted by Thousands"
          description="Hear from the students, parents, and schools who have made us their preferred educational partner."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Quote decoration */}
            <Quote className="absolute top-6 left-6 h-16 w-16 text-primary/10" />
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-serif text-xl font-bold text-primary">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
