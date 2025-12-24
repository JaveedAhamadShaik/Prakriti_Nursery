import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import CheckoutForm from "@/components/CheckoutForm";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOrderSuccess = () => {
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-10 sm:py-12 md:py-16 text-center px-4 sm:px-6">
          <ShoppingBag className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 text-muted-foreground mx-auto mb-4 sm:mb-6" />
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">Start shopping to add items to your cart</p>
          <Link to="/">
            <Button size="default" className="text-sm sm:text-base">Continue Shopping</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-6 sm:py-8 md:py-12 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Shopping Cart</h1>
          <Button variant="outline" onClick={clearCart} size="sm" className="text-sm">
            Clear Cart
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            {cartItems.map((item) => (
              <Card key={`${item.id}-${item.selectedSize}`} className="p-3 sm:p-4 md:p-6">
                <div className="flex gap-3 sm:gap-4 md:gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain bg-muted/30 rounded-lg flex-shrink-0"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1 line-clamp-1">{item.name}</h3>
                    {item.scientificName && (
                      <p className="text-xs sm:text-sm text-muted-foreground italic mb-1 sm:mb-2 line-clamp-1">
                        {item.scientificName}
                      </p>
                    )}
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                      Size: <span className="font-medium text-foreground">{item.selectedSize}</span>
                    </p>
                    
                    <div className="flex items-center gap-2 sm:gap-4">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-7 w-7 sm:h-8 sm:w-8"
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => {
                            const val = parseInt(e.target.value) || 1;
                            updateQuantity(item.id, item.selectedSize, val);
                          }}
                          className="w-10 sm:w-12 md:w-16 text-center h-7 sm:h-8 text-sm"
                          min="1"
                        />
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-7 w-7 sm:h-8 sm:w-8"
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 sm:h-8 sm:w-8 text-destructive"
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                      >
                        <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-right flex-shrink-0">
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      ₹{item.price} each
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-4 sm:p-6 sticky top-24">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Order Summary</h2>
              
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium text-leaf-green">Free</span>
                </div>
                <div className="border-t border-border pt-2 sm:pt-3 flex justify-between text-base sm:text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">₹{cartTotal.toLocaleString()}</span>
                </div>
              </div>

              <Button className="w-full mb-2 sm:mb-3" size="default" onClick={() => setIsCheckoutOpen(true)}>
                Proceed to Checkout
              </Button>
              
              <Link to="/">
                <Button variant="outline" className="w-full text-sm sm:text-base">
                  Continue Shopping
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>

      <Footer />

      <CheckoutForm
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartTotal={cartTotal}
        onOrderSuccess={handleOrderSuccess}
      />
    </div>
  );
};

export default Cart;
