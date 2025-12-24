import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, CheckCircle, Smartphone } from "lucide-react";

interface CheckoutFormProps {
  isOpen: boolean;
  onClose: () => void;
  cartTotal: number;
  onOrderSuccess: () => void;
}

type CheckoutStep = "details" | "otp" | "payment";

const CheckoutForm = ({ isOpen, onClose, cartTotal, onOrderSuccess }: CheckoutFormProps) => {
  const [step, setStep] = useState<CheckoutStep>("details");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    doorNo: "",
    streetName: "",
    city: "",
    pinCode: "",
    phoneNumber: "",
    email: "",
  });
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { firstName, lastName, doorNo, streetName, city, pinCode, phoneNumber, email } = formData;
    if (!firstName || !lastName || !doorNo || !streetName || !city || !pinCode || !phoneNumber || !email) {
      toast({ title: "Error", description: "Please fill all fields", variant: "destructive" });
      return false;
    }
    if (!/^\d{6}$/.test(pinCode)) {
      toast({ title: "Error", description: "Pin code must be 6 digits", variant: "destructive" });
      return false;
    }
    if (!/^\d{10}$/.test(phoneNumber)) {
      toast({ title: "Error", description: "Phone number must be 10 digits", variant: "destructive" });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Error", description: "Please enter a valid email", variant: "destructive" });
      return false;
    }
    return true;
  };

  const handleSendOtp = () => {
    if (!validateForm()) return;
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);
    toast({ title: "OTP Sent!", description: `OTP sent to ${formData.email}. (Demo OTP: ${newOtp})` });
    setStep("otp");
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      toast({ title: "OTP Verified!", description: "Proceeding to payment" });
      setStep("payment");
    } else {
      toast({ title: "Invalid OTP", description: "Please enter correct OTP", variant: "destructive" });
    }
  };

  const handlePayment = (method: string) => {
    toast({ title: "Order Placed!", description: `Payment via ${method} successful. Order confirmed!` });
    onOrderSuccess();
    onClose();
    setStep("details");
    setFormData({ firstName: "", lastName: "", doorNo: "", streetName: "", city: "", pinCode: "", phoneNumber: "", email: "" });
    setOtp("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {step === "details" && "Shipping Details"}
            {step === "otp" && "Verify Email"}
            {step === "payment" && "Payment"}
          </DialogTitle>
        </DialogHeader>

        {step === "details" && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" />
              </div>
            </div>

            <div>
              <Label htmlFor="doorNo">Door No / Flat No</Label>
              <Input id="doorNo" name="doorNo" value={formData.doorNo} onChange={handleInputChange} placeholder="Door No / Flat No" />
            </div>

            <div>
              <Label htmlFor="streetName">Street Name / Landmark</Label>
              <Input id="streetName" name="streetName" value={formData.streetName} onChange={handleInputChange} placeholder="Street Name / Landmark" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" name="city" value={formData.city} onChange={handleInputChange} placeholder="City" />
              </div>
              <div>
                <Label htmlFor="pinCode">Pin Code</Label>
                <Input id="pinCode" name="pinCode" value={formData.pinCode} onChange={handleInputChange} placeholder="6-digit Pin Code" maxLength={6} />
              </div>
            </div>

            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="10-digit Phone Number" maxLength={10} />
            </div>

            <div>
              <Label htmlFor="email">Email (for OTP verification)</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" />
            </div>

            <Button onClick={handleSendOtp} className="w-full" size="lg">
              Send OTP <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {step === "otp" && (
          <div className="space-y-6 text-center">
            <p className="text-muted-foreground">We've sent a verification code to <strong>{formData.email}</strong></p>
            <div>
              <Label htmlFor="otp">Enter OTP</Label>
              <Input id="otp" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter 6-digit OTP" maxLength={6} className="text-center text-2xl tracking-widest" />
            </div>
            <Button onClick={handleVerifyOtp} className="w-full" size="lg">
              Verify OTP <CheckCircle className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="link" onClick={handleSendOtp}>Resend OTP</Button>
          </div>
        )}

        {step === "payment" && (
          <div className="space-y-6">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total Amount</span>
                  <span className="text-primary">₹{cartTotal.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>

            <p className="text-muted-foreground text-center">Choose payment method</p>

            <div className="grid gap-3">
              <Button onClick={() => handlePayment("PhonePe")} variant="outline" className="h-14 justify-start gap-4 text-lg">
                <Smartphone className="h-6 w-6 text-purple-600" />
                PhonePe
              </Button>
              <Button onClick={() => handlePayment("Google Pay")} variant="outline" className="h-14 justify-start gap-4 text-lg">
                <Smartphone className="h-6 w-6 text-green-600" />
                Google Pay
              </Button>
              <Button onClick={() => handlePayment("Paytm")} variant="outline" className="h-14 justify-start gap-4 text-lg">
                <Smartphone className="h-6 w-6 text-blue-600" />
                Paytm
              </Button>
              <Button onClick={() => handlePayment("UPI")} variant="outline" className="h-14 justify-start gap-4 text-lg">
                <Smartphone className="h-6 w-6 text-orange-600" />
                Other UPI
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutForm;
