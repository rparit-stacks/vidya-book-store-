import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { School, Truck, Package, Users, Loader2, Send, CheckCircle, Phone, MessageCircle } from "lucide-react";

const partnershipSchema = z.object({
  schoolName: z.string().min(3, "School name must be at least 3 characters").max(200),
  contactPerson: z.string().min(2, "Contact person name required").max(100),
  designation: z.string().max(100).optional(),
  phone: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  board: z.string().min(1, "Please select a board"),
  classes: z.array(z.string()).min(1, "Please select at least one class range"),
  requirements: z.array(z.string()).min(1, "Please select at least one requirement"),
  studentCount: z.string().optional(),
  message: z.string().max(1000).optional(),
});

type PartnershipFormData = z.infer<typeof partnershipSchema>;

const boards = ["Maharashtra State Board", "ICSE / ISC", "CBSE", "IGCSE", "IB", "Multiple Boards"];
const classRanges = ["Nursery - KG", "1st - 5th", "6th - 8th", "9th - 10th", "11th - 12th"];
const requirementOptions = [
  "Complete Book Sets",
  "Individual Textbooks",
  "Notebooks & Stationery",
  "School Stall Setup",
  "Set Making Service",
  "Lab Manuals",
  "Art & Craft Supplies",
];

const benefits = [
  {
    icon: Package,
    title: "Complete Set Making",
    description: "We prepare complete book sets class-wise, reducing parents' hassle and your administrative work.",
  },
  {
    icon: Truck,
    title: "Direct School Delivery",
    description: "Books delivered directly to your school premises before the academic session begins.",
  },
  {
    icon: School,
    title: "School Stall Setup",
    description: "We set up book stalls at your school during admission season with trained staff.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "A dedicated account manager for your school to handle all book-related requirements.",
  },
];

const SchoolPartnership = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<PartnershipFormData>({
    resolver: zodResolver(partnershipSchema),
    defaultValues: {
      schoolName: "",
      contactPerson: "",
      designation: "",
      phone: "",
      email: "",
      board: "",
      classes: [],
      requirements: [],
      studentCount: "",
      message: "",
    },
  });

  const onSubmit = async (data: PartnershipFormData) => {
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const phoneNumber = "918097732003";
    const message = `🏫 *School Partnership Enquiry*

*School:* ${data.schoolName}
*Contact:* ${data.contactPerson}${data.designation ? ` (${data.designation})` : ""}
*Phone:* ${data.phone}
*Email:* ${data.email || "Not provided"}
*Board:* ${data.board}
*Classes:* ${data.classes.join(", ")}
*Requirements:* ${data.requirements.join(", ")}
*Student Count:* ${data.studentCount || "Not specified"}
*Message:* ${data.message || "None"}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      toast({
        title: "Enquiry Submitted!",
        description: "Our team will contact you shortly to discuss the partnership.",
      });
      setIsSuccess(false);
      form.reset();
    }, 1500);
  };

  const handleWhatsAppDirect = () => {
    const phoneNumber = "918097732003";
    const message = "Hello! I'm interested in school partnership for book supply. Please share more details.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-cream py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              For Schools & Institutions
            </span>
            <h1 className="heading-display text-foreground mb-6">
              School{" "}
              <span className="text-primary">Partnership</span>
            </h1>
            <p className="text-body-lg text-muted-foreground mb-8">
              Partner with Mumbai's most trusted bookstore for your school's complete 
              book supply needs. From set-making to stall setup, we handle everything.
            </p>
            <Button size="lg" className="btn-primary" onClick={handleWhatsAppDirect}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Quick Enquiry on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            label="Why Partner With Us"
            title="Benefits for Your School"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card p-6 rounded-xl border border-border text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              label="Get Started"
              title="Submit Your Requirements"
              description="Fill in your school details and requirements. Our team will get in touch within 24 hours."
            />

            {isSuccess ? (
              <div className="bg-background rounded-2xl p-12 text-center shadow-lg">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-2">Thank You!</h3>
                <p className="text-muted-foreground">
                  Your enquiry has been submitted. Redirecting to WhatsApp...
                </p>
              </div>
            ) : (
              <div className="bg-background rounded-2xl p-8 shadow-lg">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="schoolName"
                        render={({ field }) => (
                          <FormItem className="sm:col-span-2">
                            <FormLabel>School Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter school name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="contactPerson"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Person *</FormLabel>
                            <FormControl>
                              <Input placeholder="Full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="designation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Designation</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Principal, Administrator" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="10-digit phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="school@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="board"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Education Board *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select board" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {boards.map((board) => (
                                  <SelectItem key={board} value={board}>
                                    {board}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="studentCount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Approximate Student Count</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., 500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="classes"
                      render={() => (
                        <FormItem>
                          <FormLabel>Class Range *</FormLabel>
                          <div className="flex flex-wrap gap-3 mt-2">
                            {classRanges.map((range) => (
                              <FormField
                                key={range}
                                control={form.control}
                                name="classes"
                                render={({ field }) => (
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(range)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, range])
                                            : field.onChange(field.value?.filter((value) => value !== range));
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal text-sm">{range}</FormLabel>
                                  </FormItem>
                                )}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="requirements"
                      render={() => (
                        <FormItem>
                          <FormLabel>Requirements *</FormLabel>
                          <div className="grid sm:grid-cols-2 gap-3 mt-2">
                            {requirementOptions.map((req) => (
                              <FormField
                                key={req}
                                control={form.control}
                                name="requirements"
                                render={({ field }) => (
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(req)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, req])
                                            : field.onChange(field.value?.filter((value) => value !== req));
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal text-sm">{req}</FormLabel>
                                  </FormItem>
                                )}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Information</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any specific requirements or questions..."
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full btn-primary" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Submit Partnership Enquiry
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-section mb-4">Prefer to Talk?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Call us directly or send a WhatsApp message for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8097732003">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 w-full sm:w-auto">
                <Phone className="mr-2 h-5 w-5" />
                Call: 8097732003
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-background text-background hover:bg-background hover:text-foreground w-full sm:w-auto"
              onClick={handleWhatsAppDirect}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SchoolPartnership;
