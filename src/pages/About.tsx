import { useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf, Users, Award, Heart, ShoppingBag, Truck, Shield, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We practice eco-friendly growing methods and promote sustainable gardening practices."
    },
    {
      icon: Heart,
      title: "Quality First",
      description: "Every plant is carefully nurtured and inspected to ensure it reaches you in perfect health."
    },
    {
      icon: Users,
      title: "Customer Care",
      description: "Our expert team is always ready to help you with plant selection and care advice."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Years of experience and dedication to bringing you the finest plants and products."
    }
  ];

  const features = [
    {
      icon: ShoppingBag,
      title: "Wide Selection",
      description: "Over 500+ varieties of indoor and outdoor plants"
    },
    {
      icon: Truck,
      title: "Delivery",
      description: "Safe and secure delivery to your doorstep"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Healthy plants backed by our quality promise"
    },
    {
      icon: Sprout,
      title: "Expert Guidance",
      description: "Free plant care tips and consultation"
    }
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Plant Varieties" },
    { number: "5000+", label: "Happy Customers" },
    { number: "100+", label: "Projects Completed" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-leaf-green/10 via-background to-accent/5 py-16 sm:py-24">
        <div className="container px-4 sm:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-primary/10 flex items-center justify-center">
                <Leaf className="h-12 w-12 sm:h-16 sm:w-16 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              About PRAKRITI NURSERY
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your trusted partner in bringing nature home. We've been nurturing green lives and spreading happiness through plants for over a decade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-20">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 text-center">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a passion for plants and a vision to make greenery accessible to everyone, PRAKRITI NURSERY has grown from a small local nursery to a trusted name in the plant community. Located at Satenapalle Road, opposite Ayyappa Swami Temple, Narasaraopeta, we've been serving plant enthusiasts for over 10 years.
                </p>
                <p>
                  What started as a humble venture has blossomed into a comprehensive plant destination, offering everything from indoor plants and pots to complete landscaping solutions. Our commitment to quality, sustainability, and customer satisfaction has earned us the trust of thousands of happy customers.
                </p>
                <p>
                  Today, we're proud to offer over 500 varieties of plants, expert landscaping services, vertical gardening solutions, and a complete range of gardening accessories. Whether you're a seasoned gardener or just starting your green journey, we're here to help every step of the way.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-20">
        <div className="container px-4 sm:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container px-4 sm:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What makes PRAKRITI NURSERY your ideal plant partner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="container px-4 sm:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Green Journey?
            </h2>
            <p className="text-muted-foreground mb-8 text-base sm:text-lg">
              Explore our wide collection of plants and accessories, or get in touch with our expert team for personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/indoor-plants">
                <Button size="lg" className="w-full sm:w-auto">
                  Shop Plants
                </Button>
              </Link>
              <Link to="/what-we-do">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;