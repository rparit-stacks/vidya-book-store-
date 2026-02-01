import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="animate-slide-in-left">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Get In Touch
            </span>
            <h2 className="heading-section text-foreground mb-4">
              Visit Our Store
            </h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              Located in the heart of Girgaum, Mumbai, we're easily accessible 
              and always ready to help you find the right books.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    218, R. R. Roy Marg, Opp. Hira Hotel,<br />
                    Girgaum, Mumbai – 400004
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">
                    <a href="tel:02223858828" className="hover:text-primary transition-colors">
                      022-23858828
                    </a>
                    <br />
                    <a href="tel:8097732003" className="hover:text-primary transition-colors">
                      8097732003
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a 
                    href="mailto:vidyarthidepot@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    vidyarthidepot@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 10:00 AM - 8:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <Link to="/contact" className="inline-block mt-8">
              <Button className="btn-primary">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Map */}
          <div className="animate-slide-in-right">
            <div className="bg-background rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5439844548896!2d72.81766047489707!3d18.95453285508583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce1de1a1c8e1%3A0x89a7f7e7b5e8c6f1!2sGirgaum%2C%20Mumbai%2C%20Maharashtra%20400004!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vidyarthi Book Depot Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
