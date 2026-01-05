import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, User, Menu, Heart, LogOut, X, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { ThemeToggle } from "./ThemeToggle";
import logo from "@/assets/logo.jpg";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const INSTAGRAM_URL = "https://www.instagram.com/prakriti_nursery_?igsh=MTYxcWd2a3NhNnkxaw%3D%3D&utm_source=qr";

const Header = () => {
  const { cartCount } = useCart();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await signOut();
    navigate('/auth');
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const plantsLinks = [
    { title: "Indoor Plants", href: "/indoor-plants" },
    { title: "Corporate/Bulk Gifting", href: "/corporate-gifting" },
    { title: "Plant Database", href: "/plant-database" },
  ];

  const potsLinks = [
    { title: "Ceramic", href: "/pots?category=Ceramic" },
    { title: "Plastic", href: "/pots?category=Plastic" },
    { title: "Metal", href: "/pots?category=Metal" },
    { title: "Fiber", href: "/pots?category=Fiber" },
    { title: "Rotomold", href: "/pots?category=Rotomold" },
    { title: "Terracotta", href: "/pots?category=Terracotta" },
    { title: "Hanging Pots", href: "/pots?category=Hanging" },
  ];

  const accessoriesLinks = [
    { title: "Garden Tools", href: "/accessories?category=Tools" },
    { title: "Watering Cans", href: "/accessories?category=Watering" },
    { title: "Fertilizers", href: "/accessories?category=Fertilizers" },
    { title: "Plant Care", href: "/accessories?category=Care" },
  ];

  const whatWeDoLinks = [
    { title: "Landscaping", href: "/what-we-do?tab=landscaping" },
    { title: "Vertical Gardening", href: "/what-we-do?tab=vertical-gardening" },
    { title: "What We Have Done", href: "/what-we-do?tab=completed" },
  ];

  // Instagram Icon Component
  const InstagramIcon = ({ className }: { className?: string }) => (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
          <img src={logo} alt="PRAKRITI NURSERY" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover" />
          <span className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-leaf-green hidden xs:block tracking-tight">PRAKRITI NURSERY</span>
        </Link>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            {/* Plants Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm font-medium">Plants</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[280px] p-5 bg-background border border-border shadow-lg">
                  <div className="mb-4 pb-2 border-b border-border/50">
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider">Explore Plants</span>
                  </div>
                  <ul className="space-y-1">
                    {plantsLinks.map((link) => (
                      <li key={link.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={link.href}
                            className="block text-[15px] font-medium text-foreground hover:text-primary hover:bg-accent/50 transition-colors py-2.5 px-3 rounded-md"
                          >
                            {link.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Pots Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm font-medium">Pots</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[220px] p-5 bg-background border border-border shadow-lg">
                  <div className="mb-4 pb-2 border-b border-border/50">
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider">Shop by Material</span>
                  </div>
                  <ul className="space-y-1">
                    {potsLinks.map((link) => (
                      <li key={link.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={link.href}
                            className="block text-[15px] font-medium text-foreground hover:text-primary hover:bg-accent/50 transition-colors py-2.5 px-3 rounded-md"
                          >
                            {link.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Accessories Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm font-medium">Accessories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[220px] p-5 bg-background border border-border shadow-lg">
                  <div className="mb-4 pb-2 border-b border-border/50">
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider">Browse Accessories</span>
                  </div>
                  <ul className="space-y-1">
                    {accessoriesLinks.map((link) => (
                      <li key={link.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={link.href}
                            className="block text-[15px] font-medium text-foreground hover:text-primary hover:bg-accent/50 transition-colors py-2.5 px-3 rounded-md"
                          >
                            {link.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* What We Do Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm font-medium">What We Do</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[220px] p-5 bg-background border border-border shadow-lg">
                  <div className="mb-4 pb-2 border-b border-border/50">
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider">Our Services</span>
                  </div>
                  <ul className="space-y-1">
                    {whatWeDoLinks.map((link) => (
                      <li key={link.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={link.href}
                            className="block text-[15px] font-medium text-foreground hover:text-primary hover:bg-accent/50 transition-colors py-2.5 px-3 rounded-md"
                          >
                            {link.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side Icons */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Instagram Icon */}
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon" className="hidden sm:flex h-9 w-9">
                <InstagramIcon className="h-5 w-5" />
              </Button>
            </motion.div>
          </a>

          {/* Order Tracking */}
          <Link to="/order-tracking">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon" className="hidden sm:flex h-9 w-9">
                <Package className="h-5 w-5" />
              </Button>
            </motion.div>
          </Link>

          <Link to="/favorites">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon" className="hidden sm:flex h-9 w-9">
                <Heart className="h-5 w-5" />
              </Button>
            </motion.div>
          </Link>

          <ThemeToggle />

          {user ? (
            <>
              <Link to="/profile">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="icon" className="hidden sm:flex h-9 w-9">
                    <User className="h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="icon" onClick={handleLogout} className="hidden sm:flex h-9 w-9">
                  <LogOut className="h-5 w-5" />
                </Button>
              </motion.div>
            </>
          ) : (
            <Link to="/auth">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="icon" className="hidden sm:flex h-9 w-9">
                  <User className="h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
          )}

          <Link to="/cart">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon" className="relative h-9 w-9">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center p-0 text-xs bg-secondary text-secondary-foreground">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </motion.div>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <span className="font-display font-bold text-lg text-leaf-green">Menu</span>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>

                <div className="flex-1 overflow-y-auto py-4">
                  {/* Plants Section */}
                  <div className="px-4 mb-4">
                    <h3 className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Plants</h3>
                    {plantsLinks.map((link) => (
                      <Link
                        key={link.title}
                        to={link.href}
                        onClick={handleNavClick}
                        className="block py-2 text-foreground hover:text-primary transition-colors"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>

                  {/* Pots Section */}
                  <div className="px-4 mb-4">
                    <h3 className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Pots</h3>
                    {potsLinks.map((link) => (
                      <Link
                        key={link.title}
                        to={link.href}
                        onClick={handleNavClick}
                        className="block py-2 text-foreground hover:text-primary transition-colors"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>

                  {/* Accessories Section */}
                  <div className="px-4 mb-4">
                    <h3 className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Accessories</h3>
                    {accessoriesLinks.map((link) => (
                      <Link
                        key={link.title}
                        to={link.href}
                        onClick={handleNavClick}
                        className="block py-2 text-foreground hover:text-primary transition-colors"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>

                  {/* What We Do Section */}
                  <div className="px-4 mb-4">
                    <h3 className="text-xs text-muted-foreground uppercase tracking-wider mb-2">What We Do</h3>
                    {whatWeDoLinks.map((link) => (
                      <Link
                        key={link.title}
                        to={link.href}
                        onClick={handleNavClick}
                        className="block py-2 text-foreground hover:text-primary transition-colors"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>

                  {/* Order Tracking Link */}
                  <div className="px-4 mb-4">
                    <Link
                      to="/order-tracking"
                      onClick={handleNavClick}
                      className="flex items-center gap-2 py-2 text-foreground hover:text-primary transition-colors font-medium"
                    >
                      <Package className="h-4 w-4" />
                      Track Your Order
                    </Link>
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-4 border-t border-border">
                  <div className="flex items-center gap-3 justify-center">
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon">
                        <InstagramIcon className="h-5 w-5" />
                      </Button>
                    </a>
                    <Link to="/favorites" onClick={handleNavClick}>
                      <Button variant="ghost" size="icon">
                        <Heart className="h-5 w-5" />
                      </Button>
                    </Link>
                    {user ? (
                      <>
                        <Link to="/profile" onClick={handleNavClick}>
                          <Button variant="ghost" size="icon">
                            <User className="h-5 w-5" />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="icon" onClick={handleLogout}>
                          <LogOut className="h-5 w-5" />
                        </Button>
                      </>
                    ) : (
                      <Link to="/auth" onClick={handleNavClick}>
                        <Button variant="ghost" size="icon">
                          <User className="h-5 w-5" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;