import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Users, Truck, Clock, BookOpen, School, ArrowRight, MapPin } from "lucide-react";

const milestones = [
  { year: "1961", title: "Foundation", description: "Started as a small bookshop in Girgaum, Mumbai" },
  { year: "1980s", title: "Expansion", description: "Became official distributor for major publishers" },
  { year: "2000s", title: "School Partnerships", description: "Launched school stall and set-making services" },
  { year: "Today", title: "Digital Era", description: "Serving students across Maharashtra with modern facilities" },
];

const stats = [
  { icon: Clock, value: "60+", label: "Years of Service" },
  { icon: School, value: "500+", label: "Partner Schools" },
  { icon: Users, value: "1L+", label: "Students Served" },
  { icon: BookOpen, value: "50K+", label: "Book Titles" },
];

const values = [
  {
    title: "Trust & Integrity",
    description: "We've built our reputation on honesty and fair dealing. Every book we sell is authentic and priced fairly.",
  },
  {
    title: "Customer First",
    description: "Your educational success is our priority. We go the extra mile to find books and serve your needs.",
  },
  {
    title: "Quality Assurance",
    description: "We stock only genuine publications from authorized publishers. No duplicates, no compromises on quality.",
  },
  {
    title: "Community Focus",
    description: "We're not just a business - we're a part of Mumbai's educational community, supporting learning for generations.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-cream via-background to-cream-dark py-20 md:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Our Story
              </span>
              <h1 className="heading-display text-foreground mb-6">
                60+ Years of{" "}
                <span className="text-primary">Educational Excellence</span>
              </h1>
              <p className="text-body-lg text-muted-foreground mb-8">
                Since 1961, Vidyarthi Book Depot has been Mumbai's trusted destination for 
                academic books and educational supplies. From a small shop in Girgaum to 
                serving schools across Maharashtra, our journey has been driven by one 
                mission: supporting every student's educational success.
              </p>
              <Link to="/contact">
                <Button size="lg" className="btn-primary">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop"
                  alt="Bookstore interior"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="font-serif text-4xl font-bold">1961</div>
                  <div className="text-sm opacity-90">Established</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-14 h-14 bg-background/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-7 w-7" />
                </div>
                <div className="font-serif text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            label="Our Journey"
            title="From 1961 to Today"
            description="Six decades of serving Mumbai's educational community with dedication and trust."
          />
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
              
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex gap-8 pb-12 last:pb-0">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center shrink-0 z-10 font-serif font-bold">
                    {milestone.year.slice(0, 4)}
                  </div>
                  <div className="pt-4">
                    <h3 className="font-semibold text-foreground text-lg mb-1">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <SectionHeader
            label="Our Values"
            title="What We Stand For"
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="bg-background p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-foreground text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            label="Why Trust Us"
            title="Our Credentials"
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Super Distributor</h3>
              <p className="text-sm text-muted-foreground">
                Official super distributor for major educational publishers across Maharashtra.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <School className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">School Partner</h3>
              <p className="text-sm text-muted-foreground">
                Trusted by 500+ reputed schools for complete book supply and stall services.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Wide Reach</h3>
              <p className="text-sm text-muted-foreground">
                Serving Mumbai, Raipur, Ratnagiri, Kolhapur, Khamgaon and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-section mb-6">Visit Our Store</h2>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-lg">
                    218, R. R. Roy Marg, Opp. Hira Hotel,<br />
                    Girgaum, Mumbai – 400004
                  </p>
                </div>
              </div>
              <p className="text-background/80 mb-8">
                Located in the heart of Girgaum, we're easily accessible by public transport. 
                Visit us to browse our extensive collection and get personalized recommendations.
              </p>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/90">
                  Get Directions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5439844548896!2d72.81766047489707!3d18.95453285508583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce1de1a1c8e1%3A0x89a7f7e7b5e8c6f1!2sGirgaum%2C%20Mumbai%2C%20Maharashtra%20400004!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Store Location"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
