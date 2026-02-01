import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Catalogue from "./pages/Catalogue";
import SchoolBooks from "./pages/SchoolBooks";
import CollegeTextbooks from "./pages/CollegeTextbooks";
import CompetitiveExams from "./pages/CompetitiveExams";
import ProfessionalCourses from "./pages/ProfessionalCourses";
import LawBooks from "./pages/LawBooks";
import Stationery from "./pages/Stationery";
import SpecialOffer from "./pages/SpecialOffer";
import SchoolPartnership from "./pages/SchoolPartnership";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/school-books" element={<SchoolBooks />} />
          <Route path="/college-textbooks" element={<CollegeTextbooks />} />
          <Route path="/competitive-exams" element={<CompetitiveExams />} />
          <Route path="/professional-courses" element={<ProfessionalCourses />} />
          <Route path="/law-books" element={<LawBooks />} />
          <Route path="/stationery" element={<Stationery />} />
          <Route path="/special-offer" element={<SpecialOffer />} />
          <Route path="/school-partnership" element={<SchoolPartnership />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
