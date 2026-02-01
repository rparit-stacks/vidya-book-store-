import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Catalogue", href: "/catalogue" },
  { name: "Special Offer", href: "/special-offer" },
  { name: "School Partnership", href: "/school-partnership" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const categories = [
  { name: "School Books", href: "/school-books" },
  { name: "College Textbooks", href: "/college-textbooks" },
  { name: "Competitive Exams", href: "/competitive-exams" },
  { name: "Professional Courses", href: "/professional-courses" },
  { name: "Law & General Books", href: "/law-books" },
  { name: "Stationery", href: "/stationery" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Main footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">V</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl">Vidyarthi Book Depot</h3>
                <p className="text-sm text-background/70">Since 1961</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Your trusted partner for academic excellence. Serving students, schools, and institutions 
              across Mumbai for over 60 years with quality books and educational materials.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Book Categories</h4>
            <ul className="space-y-3">
              {categories.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/80">
                  218, R. R. Roy Marg, Opp. Hira Hotel, Girgaum, Mumbai – 400004
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <div className="text-background/80">
                  <a href="tel:02223858828" className="block hover:text-primary transition-colors">
                    022-23858828
                  </a>
                  <a href="tel:8097732003" className="block hover:text-primary transition-colors">
                    8097732003
                  </a>
                </div>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:vidyarthidepot@gmail.com"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  vidyarthidepot@gmail.com
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span className="text-background/80">
                  Mon - Sat: 10:00 AM - 8:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Areas served */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6">
          <p className="text-center text-sm text-background/60">
            <span className="text-background/80 font-medium">Areas Served: </span>
            Mumbai • Raipur • Ratnagiri • Kolhapur • Khamgaon
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10 bg-background/5">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© {currentYear} Vidyarthi Book Depot. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-background transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
