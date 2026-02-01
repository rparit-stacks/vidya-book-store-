import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle, Send } from "lucide-react";

const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  mobile: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"),
  address: z.string().max(500).optional(),
  deliveryRequired: z.boolean().default(false),
  deliveryPartner: z.string().optional(),
  notes: z.string().max(1000).optional(),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

interface EnquiryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  board?: string;
  classLevel?: string;
}

const deliveryPartners = ["DTDC", "Blue Dart", "Delhivery", "India Post", "Other"];

export function EnquiryDialog({ open, onOpenChange, board, classLevel }: EnquiryDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      mobile: "",
      address: "",
      deliveryRequired: false,
      deliveryPartner: "",
      notes: "",
    },
  });

  const watchDeliveryRequired = form.watch("deliveryRequired");

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Send WhatsApp notification
    const phoneNumber = "918097732003";
    const message = `📚 *New Book Enquiry*

*Name:* ${data.name}
*Mobile:* ${data.mobile}
*Board:* ${board || "Not specified"}
*Class:* ${classLevel || "Not specified"}
*Address:* ${data.address || "Not provided"}
*Delivery Required:* ${data.deliveryRequired ? "Yes" : "No"}
${data.deliveryRequired && data.deliveryPartner ? `*Preferred Courier:* ${data.deliveryPartner}` : ""}
*Notes:* ${data.notes || "None"}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      toast({
        title: "Enquiry Submitted!",
        description: "We'll contact you shortly. You can also reach us on WhatsApp.",
      });
      setIsSuccess(false);
      form.reset();
      onOpenChange(false);
    }, 1500);
  };

  const handleClose = () => {
    form.reset();
    setIsSuccess(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-serif text-2xl font-semibold mb-2">Thank You!</h3>
            <p className="text-muted-foreground">
              Your enquiry has been submitted. Redirecting to WhatsApp...
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl">Book Enquiry</DialogTitle>
              <DialogDescription>
                {board && classLevel
                  ? `Enquiring for ${board} - ${classLevel}`
                  : "Fill in your details and we'll contact you with availability and pricing."}
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-4">
                {/* Display selected board and class */}
                {board && classLevel && (
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm font-medium text-primary">
                      Selected: {board} - {classLevel}
                    </p>
                  </div>
                )}

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="10-digit mobile number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your full address"
                          rows={2}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="deliveryRequired"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>I need home delivery</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                {watchDeliveryRequired && (
                  <FormField
                    control={form.control}
                    name="deliveryPartner"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Delivery Partner</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a courier service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {deliveryPartners.map((partner) => (
                              <SelectItem key={partner} value={partner}>
                                {partner}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Notes</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any specific requirements or questions..."
                          rows={3}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleClose}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="flex-1 btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Submit Enquiry
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
