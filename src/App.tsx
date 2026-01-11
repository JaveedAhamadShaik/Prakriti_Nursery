import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { CartProvider } from "./contexts/CartContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { AuthProvider } from "./contexts/AuthContext";

/* Pages */
import Index from "./pages/Index";
import About from "./pages/About";
import CareGuides from "./pages/CareGuides";
import IndoorPlants from "./pages/IndoorPlants";
import OutdoorPlants from "./pages/OutdoorPlants";
import CorporateGifting from "./pages/CorporateGifting";
import Pots from "./pages/Pots";
import Accessories from "./pages/Accessories";
import PlantDatabase from "./pages/PlantDatabase";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Gallery from "./pages/Gallery";
import WhatWeDo from "./pages/WhatWeDo";
import OrderTracking from "./pages/OrderTracking";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/* ✅ FIXED ScrollToTop */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <FavoritesProvider>
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />

            <BrowserRouter>
              <ScrollToTop />

              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/care-guides" element={<CareGuides />} />

                {/* Shop */}
                <Route path="/indoor-plants" element={<IndoorPlants />} />
                <Route path="/outdoor-plants" element={<OutdoorPlants />} />
                <Route path="/corporate-gifting" element={<CorporateGifting />} />
                <Route path="/pots" element={<Pots />} />
                <Route path="/accessories" element={<Accessories />} />

                {/* Utility */}
                <Route path="/plant-database" element={<PlantDatabase />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/what-we-do" element={<WhatWeDo />} />
                <Route path="/order-tracking" element={<OrderTracking />} />

                {/* User */}
                <Route path="/auth" element={<Auth />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/profile" element={<Profile />} />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>

          </TooltipProvider>
        </CartProvider>
      </FavoritesProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
