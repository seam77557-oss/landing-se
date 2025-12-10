import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface PrivateAccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PrivateAccessModal = ({ open, onOpenChange }: PrivateAccessModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    investorType: "",
    message: "",
    isQualified: false
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.isQualified) {
      toast({
        title: "Confirmation Required",
        description: "Please confirm you are a qualified investor to proceed.",
        variant: "destructive"
      });
      return;
    }

    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      country: "",
      investorType: "",
      message: "",
      isQualified: false
    });
    onOpenChange(false);
  };

  if (submitted) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-[500px] bg-alpine-charcoal border-white/10">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary text-3xl">✓</span>
            </div>
            <DialogTitle className="text-2xl font-heading text-white mb-3 tracking-wider">
              Request Received
            </DialogTitle>
            <DialogDescription className="text-white/70 text-base leading-relaxed">
              Your request has been received. We'll be in touch if a spot opens.
            </DialogDescription>
            <Button onClick={handleClose} className="mt-6 bg-primary hover:bg-primary/90" size="lg">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-alpine-charcoal border-white/10 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-white tracking-wider">
            Request Private Access
          </DialogTitle>
          <DialogDescription className="text-white/70">
            Complete the form below. Submission does not guarantee access.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-white/90">Full Name *</Label>
            <Input
              id="fullName"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white/90">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
              placeholder="your@email.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country" className="text-white/90">Country of Residence *</Label>
            <Input
              id="country"
              required
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
              placeholder="Enter your country"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="investorType" className="text-white/90">Investor Type *</Label>
            <Select required value={formData.investorType} onValueChange={(value) => setFormData({ ...formData, investorType: value })}>
              <SelectTrigger className="bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent className="bg-alpine-charcoal border-white/10">
                <SelectItem value="individual">Individual</SelectItem>
                <SelectItem value="family-office">Family Office</SelectItem>
                <SelectItem value="institution">Institution</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white/90">Message (Optional)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 min-h-[100px]"
              placeholder="Additional information..."
            />
          </div>

          <div className="flex items-start space-x-3 pt-2">
            <Checkbox
              id="qualified"
              checked={formData.isQualified}
              onCheckedChange={(checked) => setFormData({ ...formData, isQualified: checked as boolean })}
              className="mt-1 border-white/20"
            />
            <Label htmlFor="qualified" className="text-white/80 text-sm leading-relaxed cursor-pointer">
              I confirm I am a qualified investor / accredited investor
            </Label>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
            Submit Application
          </Button>

          <p className="text-white/50 text-xs text-center">
            Admission is selective. Submitting an application does not guarantee access.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
