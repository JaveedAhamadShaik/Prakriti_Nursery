import { useState } from "react";
import { motion } from "framer-motion";
import { Package, Truck, CheckCircle, Clock, MapPin, Search, Phone, Mail, Calendar, Box, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface OrderStatus {
  id: string;
  status: "processing" | "confirmed" | "shipped" | "out-for-delivery" | "delivered";
  date: string;
  estimatedDelivery: string;
  items: { name: string; quantity: number; image: string }[];
  shippingAddress: string;
  trackingNumber: string;
  carrier: string;
  updates: { date: string; time: string; status: string; location: string; completed: boolean }[];
}

// Demo order for demonstration
const demoOrder: OrderStatus = {
  id: "ORD-2024-001234",
  status: "out-for-delivery",
  date: "2024-01-02",
  estimatedDelivery: "2024-01-05",
  items: [
    { name: "Monstera Deliciosa", quantity: 1, image: "/placeholder.svg" },
    { name: "Ceramic White Pot 8\"", quantity: 2, image: "/placeholder.svg" },
    { name: "Potting Soil 5kg", quantity: 1, image: "/placeholder.svg" },
  ],
  shippingAddress: "123 Green Avenue, Bangalore, Karnataka - 560001",
  trackingNumber: "TRK789456123",
  carrier: "BlueDart Express",
  updates: [
    { date: "Jan 02", time: "10:30 AM", status: "Order Placed", location: "Online", completed: true },
    { date: "Jan 02", time: "02:45 PM", status: "Order Confirmed", location: "Prakriti Nursery Warehouse", completed: true },
    { date: "Jan 03", time: "09:00 AM", status: "Packed & Ready", location: "Prakriti Nursery Warehouse", completed: true },
    { date: "Jan 03", time: "04:30 PM", status: "Shipped", location: "Bangalore Sorting Hub", completed: true },
    { date: "Jan 04", time: "08:15 AM", status: "In Transit", location: "Local Delivery Center", completed: true },
    { date: "Jan 05", time: "07:00 AM", status: "Out for Delivery", location: "On the way", completed: true },
    { date: "Jan 05", time: "--:--", status: "Delivered", location: "Your Address", completed: false },
  ],
};

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState<OrderStatus | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = () => {
    setIsSearching(true);
    setError("");
    
    // Simulate API call
    setTimeout(() => {
      if (orderId.toLowerCase() === "demo" || orderId === "ORD-2024-001234") {
        setOrder(demoOrder);
      } else if (orderId.length > 0) {
        setOrder(null);
        setError("Order not found. Please check your order ID and try again. Try 'demo' to see a sample order.");
      }
      setIsSearching(false);
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "bg-green-500";
      case "out-for-delivery": return "bg-blue-500";
      case "shipped": return "bg-purple-500";
      case "confirmed": return "bg-yellow-500";
      case "processing": return "bg-orange-500";
      default: return "bg-muted";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "delivered": return "Delivered";
      case "out-for-delivery": return "Out for Delivery";
      case "shipped": return "Shipped";
      case "confirmed": return "Confirmed";
      case "processing": return "Processing";
      default: return status;
    }
  };

  const statusSteps = [
    { key: "processing", icon: Clock, label: "Processing" },
    { key: "confirmed", icon: CheckCircle, label: "Confirmed" },
    { key: "shipped", icon: Package, label: "Shipped" },
    { key: "out-for-delivery", icon: Truck, label: "Out for Delivery" },
    { key: "delivered", icon: MapPin, label: "Delivered" },
  ];

  const getStepStatus = (stepKey: string, currentStatus: string) => {
    const stepOrder = ["processing", "confirmed", "shipped", "out-for-delivery", "delivered"];
    const currentIndex = stepOrder.indexOf(currentStatus);
    const stepIndex = stepOrder.indexOf(stepKey);
    
    if (stepIndex < currentIndex) return "completed";
    if (stepIndex === currentIndex) return "current";
    return "pending";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 sm:py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 mb-4 sm:mb-6">
            <Package className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3 sm:mb-4">
            Track Your Order
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
            Enter your order ID to track the delivery status of your plants and gardening supplies
          </p>
        </motion.div>

        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-xl mx-auto mb-8 sm:mb-12"
        >
          <Card className="border-border/50 shadow-lg">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter Order ID (e.g., ORD-2024-001234 or 'demo')"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className="pl-10 h-12"
                  />
                </div>
                <Button 
                  onClick={handleSearch} 
                  disabled={isSearching || !orderId}
                  className="h-12 px-6 sm:px-8"
                >
                  {isSearching ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      Searching...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Track Order
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </div>
              {error && (
                <p className="text-destructive text-sm mt-3">{error}</p>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Order Details */}
        {order && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {/* Order Summary Card */}
            <Card className="border-border/50 shadow-lg overflow-hidden">
              <div className={`h-2 ${getStatusColor(order.status)}`} />
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <CardTitle className="text-lg sm:text-xl">Order #{order.id}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Placed on {new Date(order.date).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </p>
                  </div>
                  <Badge className={`${getStatusColor(order.status)} text-white px-4 py-1.5 text-sm`}>
                    {getStatusLabel(order.status)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {/* Progress Tracker - Desktop */}
                <div className="hidden md:block mb-8">
                  <div className="relative flex items-center justify-between">
                    {/* Progress Line */}
                    <div className="absolute left-0 right-0 top-6 h-1 bg-muted">
                      <div 
                        className={`h-full ${getStatusColor(order.status)} transition-all duration-500`}
                        style={{ 
                          width: `${(statusSteps.findIndex(s => s.key === order.status) / (statusSteps.length - 1)) * 100}%` 
                        }}
                      />
                    </div>
                    
                    {statusSteps.map((step, index) => {
                      const stepStatus = getStepStatus(step.key, order.status);
                      const Icon = step.icon;
                      
                      return (
                        <div key={step.key} className="relative flex flex-col items-center z-10">
                          <div 
                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                              stepStatus === "completed" 
                                ? "bg-green-500 text-white" 
                                : stepStatus === "current"
                                  ? `${getStatusColor(order.status)} text-white ring-4 ring-primary/20`
                                  : "bg-muted text-muted-foreground"
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className={`mt-2 text-xs font-medium ${
                            stepStatus === "pending" ? "text-muted-foreground" : "text-foreground"
                          }`}>
                            {step.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Progress Tracker - Mobile */}
                <div className="md:hidden mb-6">
                  <div className="space-y-3">
                    {statusSteps.map((step, index) => {
                      const stepStatus = getStepStatus(step.key, order.status);
                      const Icon = step.icon;
                      
                      return (
                        <div key={step.key} className="flex items-center gap-3">
                          <div 
                            className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                              stepStatus === "completed" 
                                ? "bg-green-500 text-white" 
                                : stepStatus === "current"
                                  ? `${getStatusColor(order.status)} text-white`
                                  : "bg-muted text-muted-foreground"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className={`text-sm font-medium ${
                            stepStatus === "pending" ? "text-muted-foreground" : "text-foreground"
                          }`}>
                            {step.label}
                          </span>
                          {stepStatus === "current" && (
                            <Badge variant="outline" className="ml-auto text-xs">Current</Badge>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Estimated Delivery */}
                <div className="bg-accent/50 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                      <p className="font-semibold text-foreground">
                        {new Date(order.estimatedDelivery).toLocaleDateString('en-IN', { 
                          weekday: 'long',
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Shipping Details */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Delivery Address</p>
                        <p className="text-sm text-foreground">{order.shippingAddress}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Truck className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Carrier</p>
                        <p className="text-sm text-foreground">{order.carrier}</p>
                        <p className="text-xs text-muted-foreground mt-1">Tracking: {order.trackingNumber}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Box className="w-4 h-4" />
                    Order Items ({order.items.length})
                  </h4>
                  <div className="space-y-3">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                          <Package className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground text-sm truncate">{item.name}</p>
                          <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tracking Timeline */}
            <Card className="border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Tracking Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {order.updates.map((update, index) => (
                    <div key={index} className="flex gap-4 pb-6 last:pb-0">
                      {/* Timeline Line */}
                      <div className="flex flex-col items-center">
                        <div 
                          className={`w-3 h-3 rounded-full flex-shrink-0 ${
                            update.completed ? "bg-green-500" : "bg-muted"
                          }`} 
                        />
                        {index !== order.updates.length - 1 && (
                          <div className={`w-0.5 flex-1 mt-1 ${
                            update.completed ? "bg-green-500" : "bg-muted"
                          }`} />
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pb-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <p className={`font-medium text-sm ${
                            update.completed ? "text-foreground" : "text-muted-foreground"
                          }`}>
                            {update.status}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {update.date} at {update.time}
                          </p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{update.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Help Section */}
            <Card className="border-border/50 shadow-lg bg-accent/30">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Need Help with Your Order?</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" className="flex-1">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Support
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Empty State */}
        {!order && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center py-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
              <Truck className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Enter your Order ID</h3>
            <p className="text-muted-foreground text-sm max-w-sm mx-auto">
              Your order ID can be found in your order confirmation email or SMS. Try entering "demo" to see a sample tracking.
            </p>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default OrderTracking;
