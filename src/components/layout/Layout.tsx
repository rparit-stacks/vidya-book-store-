import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { BookOpen, Pencil, Ruler, Scissors, Paperclip, Highlighter, Calculator, Compass } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Floating Stationery Icons Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <BookOpen className="absolute top-[10%] left-[5%] w-12 h-12 text-primary animate-float-slow" />
        <Pencil className="absolute top-[20%] right-[10%] w-10 h-10 text-gold animate-float-medium" />
        <Ruler className="absolute top-[35%] left-[15%] w-14 h-14 text-burgundy animate-float-slow" />
        <Scissors className="absolute top-[50%] right-[8%] w-11 h-11 text-primary animate-float-fast" />
        <Paperclip className="absolute top-[65%] left-[8%] w-9 h-9 text-gold animate-float-medium" />
        <Highlighter className="absolute top-[75%] right-[15%] w-13 h-13 text-burgundy animate-float-slow" />
        <Calculator className="absolute top-[85%] left-[20%] w-12 h-12 text-primary animate-float-fast" />
        <Compass className="absolute top-[40%] right-[20%] w-10 h-10 text-gold animate-float-medium" />
        
        <BookOpen className="absolute top-[15%] right-[25%] w-11 h-11 text-burgundy animate-float-medium" />
        <Pencil className="absolute top-[60%] left-[25%] w-12 h-12 text-primary animate-float-slow" />
        <Ruler className="absolute top-[30%] right-[5%] w-10 h-10 text-gold animate-float-fast" />
        <Scissors className="absolute top-[80%] right-[30%] w-13 h-13 text-burgundy animate-float-medium" />
        <Paperclip className="absolute top-[25%] left-[30%] w-11 h-11 text-primary animate-float-slow" />
        <Highlighter className="absolute top-[55%] right-[35%] w-9 h-9 text-gold animate-float-fast" />
        <Calculator className="absolute top-[70%] left-[35%] w-10 h-10 text-burgundy animate-float-medium" />
        <Compass className="absolute top-[45%] left-[10%] w-12 h-12 text-primary animate-float-slow" />
      </div>

      <Header />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
