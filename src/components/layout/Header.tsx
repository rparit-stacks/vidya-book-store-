import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const catalogueItems = [
  { name: "School Books", href: "/school-books", description: "Textbooks for all boards and classes" },
  { name: "College Textbooks", href: "/college-textbooks", description: "University books with buyback" },
  { name: "Competitive Exams", href: "/competitive-exams", description: "MBA, CAT, GATE & more" },
  { name: "Professional Courses", href: "/professional-courses", description: "CA, CS, CFA materials" },
  { name: "Law & General Books", href: "/law-books", description: "Legal texts and general reading" },
  { name: "Stationery", href: "/stationery", description: "Quality stationery supplies" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Catalogue", href: "/catalogue" },
  { name: "Special Offer", href: "/special-offer" },
  { name: "School Partnership", href: "/school-partnership" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:02223858828" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span>022-23858828</span>
            </a>
            <a href="tel:8097732003" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span>8097732003</span>
            </a>
            <a href="mailto:vidyarthidepot@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span>vidyarthidepot@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Girgaum, Mumbai</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Vidyarthi Book Depot" 
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg md:text-xl text-foreground leading-tight">
                  Vidyarthi Book Depot
                </span>
                <span className="text-xs text-muted-foreground hidden sm:block">Since 1961</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="/">
                      <NavigationMenuLink
                        className={cn(
                          "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                          isActive("/")
                            ? "text-primary bg-primary/10"
                            : "text-foreground hover:text-primary hover:bg-primary/5"
                        )}
                      >
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        "text-sm font-medium bg-transparent",
                        location.pathname.includes("book") || location.pathname === "/catalogue"
                          ? "text-primary"
                          : "text-foreground"
                      )}
                    >
                      Catalogue
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                        {catalogueItems.map((item) => (
                          <li key={item.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{item.name}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                        <li className="col-span-2">
                          <NavigationMenuLink asChild>
                            <Link
                              to="/catalogue"
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors bg-primary/10 hover:bg-primary/20 text-primary font-medium text-center"
                            >
                              Browse Full Catalogue →
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="/special-offer">
                      <NavigationMenuLink
                        className={cn(
                          "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                          isActive("/special-offer")
                            ? "text-primary bg-primary/10"
                            : "text-foreground hover:text-primary hover:bg-primary/5"
                        )}
                      >
                        Special Offer
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="/school-partnership">
                      <NavigationMenuLink
                        className={cn(
                          "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                          isActive("/school-partnership")
                            ? "text-primary bg-primary/10"
                            : "text-foreground hover:text-primary hover:bg-primary/5"
                        )}
                      >
                        School Partnership
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="/about">
                      <NavigationMenuLink
                        className={cn(
                          "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                          isActive("/about")
                            ? "text-primary bg-primary/10"
                            : "text-foreground hover:text-primary hover:bg-primary/5"
                        )}
                      >
                        About Us
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="/contact">
                      <NavigationMenuLink
                        className={cn(
                          "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                          isActive("/contact")
                            ? "text-primary bg-primary/10"
                            : "text-foreground hover:text-primary hover:bg-primary/5"
                        )}
                      >
                        Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link to="/catalogue">
                <Button className="ml-4 btn-primary">
                  Enquire Now
                </Button>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="container-custom py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-md transition-colors",
                    isActive(link.href)
                      ? "text-primary bg-primary/10 font-medium"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <p className="px-4 py-2 text-sm font-medium text-muted-foreground">Book Categories</p>
                {catalogueItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="pt-4">
                <Link to="/catalogue" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full btn-primary">
                    Enquire Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
