import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Droplets, 
  Sun, 
  Thermometer, 
  Wind, 
  Scissors, 
  Bug,
  Leaf,
  AlertCircle,
  Search,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const CareGuides = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedGuide, setExpandedGuide] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const careCategories = [
    { id: "all", label: "All Guides" },
    { id: "watering", label: "Watering" },
    { id: "light", label: "Light & Sun" },
    { id: "soil", label: "Soil & Fertilizer" },
    { id: "pests", label: "Pests & Disease" },
    { id: "seasonal", label: "Seasonal Care" }
  ];

  const careGuides = [
    {
      id: 1,
      title: "How to Water Your Plants Correctly",
      category: "watering",
      icon: Droplets,
      difficulty: "Beginner",
      readTime: "5 min",
      description: "Master the art of watering - the most crucial aspect of plant care.",
      content: [
        "Check soil moisture before watering - stick your finger 2 inches deep into the soil",
        "Water thoroughly until it drains from the bottom, then empty the saucer",
        "Most indoor plants prefer soil that's slightly dry between waterings",
        "Morning is the best time to water plants",
        "Use room temperature water to avoid shocking the roots",
        "Reduce watering frequency in winter when growth slows down"
      ],
      tips: [
        "Overwatering is more harmful than underwatering",
        "Yellow leaves often indicate overwatering",
        "Wilting can mean both under and overwatering - check the soil!"
      ]
    },
    {
      id: 2,
      title: "Understanding Light Requirements",
      category: "light",
      icon: Sun,
      difficulty: "Beginner",
      readTime: "6 min",
      description: "Learn how to provide the right amount of light for your plants.",
      content: [
        "Direct Light: 6+ hours of direct sunlight (south-facing windows)",
        "Bright Indirect: Bright room but no direct sun rays on leaves",
        "Medium Light: A few feet away from bright windows",
        "Low Light: North-facing windows or corners of rooms",
        "Rotate plants weekly for even growth",
        "Use sheer curtains to filter intense afternoon sun"
      ],
      tips: [
        "Leggy growth indicates insufficient light",
        "Scorched leaves mean too much direct sun",
        "Most houseplants prefer bright indirect light"
      ]
    },
    {
      id: 3,
      title: "Choosing the Right Soil Mix",
      category: "soil",
      icon: Leaf,
      difficulty: "Intermediate",
      readTime: "7 min",
      description: "Different plants need different soil compositions for optimal growth.",
      content: [
        "Well-draining soil is crucial for most houseplants",
        "Add perlite or coarse sand to improve drainage",
        "Succulents need 50% gritty material (sand, perlite)",
        "Tropical plants prefer moisture-retaining but airy mix",
        "Use coco coir or peat moss to retain moisture",
        "Repot every 1-2 years with fresh soil"
      ],
      tips: [
        "Never use garden soil for potted plants",
        "Compacted soil leads to root rot",
        "Good drainage = healthy roots"
      ]
    },
    {
      id: 4,
      title: "Fertilizing Your Plants",
      category: "soil",
      icon: Droplets,
      difficulty: "Intermediate",
      readTime: "6 min",
      description: "Feed your plants properly for lush, healthy growth.",
      content: [
        "Fertilize during growing season (spring and summer)",
        "Use half-strength liquid fertilizer every 2-4 weeks",
        "Reduce or stop fertilizing in fall and winter",
        "Water before fertilizing to avoid root burn",
        "Organic fertilizers: compost tea, worm castings, fish emulsion",
        "Look for balanced N-P-K ratios (10-10-10) for most houseplants"
      ],
      tips: [
        "More is NOT better - over-fertilizing burns roots",
        "Salt buildup from fertilizer should be flushed occasionally",
        "Slow-release granules are good for beginners"
      ]
    },
    {
      id: 5,
      title: "Common Plant Pests & Solutions",
      category: "pests",
      icon: Bug,
      difficulty: "Intermediate",
      readTime: "8 min",
      description: "Identify and treat common houseplant pests effectively.",
      content: [
        "Spider Mites: Fine webbing, tiny dots - spray with neem oil",
        "Mealybugs: White cottony masses - remove with alcohol swab",
        "Aphids: Small green/black insects - wash off with water spray",
        "Scale: Brown bumps on stems - scrape off and apply neem oil",
        "Fungus Gnats: Small flies in soil - let soil dry, use sticky traps",
        "Quarantine new plants for 2 weeks before mixing with others"
      ],
      tips: [
        "Inspect plants weekly for early detection",
        "Neem oil is a safe, effective natural pesticide",
        "Healthy plants resist pests better than stressed ones"
      ]
    },
    {
      id: 6,
      title: "Pruning & Maintenance",
      category: "seasonal",
      icon: Scissors,
      difficulty: "Intermediate",
      readTime: "5 min",
      description: "Keep your plants healthy and attractive with proper pruning.",
      content: [
        "Remove dead, yellow, or damaged leaves immediately",
        "Prune in spring when plants start active growth",
        "Cut just above a node (where leaves meet stem)",
        "Use clean, sharp scissors or pruning shears",
        "Pinch growing tips to encourage bushier growth",
        "Remove spent flowers to redirect energy to new growth"
      ],
      tips: [
        "Don't remove more than 25% of plant at once",
        "Sterilize tools between plants to prevent disease spread",
        "Save healthy cuttings for propagation"
      ]
    },
    {
      id: 7,
      title: "Seasonal Plant Care",
      category: "seasonal",
      icon: Thermometer,
      difficulty: "Beginner",
      readTime: "6 min",
      description: "Adjust your care routine with the changing seasons.",
      content: [
        "Spring: Increase watering and fertilizing as growth resumes",
        "Summer: Watch for heat stress, maintain humidity, water more frequently",
        "Fall: Gradually reduce watering and stop fertilizing",
        "Winter: Less water, no fertilizer, provide adequate light",
        "Keep plants away from cold drafts and heating vents",
        "Most houseplants prefer 65-75°F (18-24°C)"
      ],
      tips: [
        "Winter dormancy is natural for many plants",
        "Low humidity in winter can cause brown leaf tips",
        "Avoid repotting in fall/winter"
      ]
    },
    {
      id: 8,
      title: "Humidity & Air Circulation",
      category: "seasonal",
      icon: Wind,
      difficulty: "Beginner",
      readTime: "5 min",
      description: "Create the ideal atmospheric conditions for your plants.",
      content: [
        "Most tropical houseplants prefer 40-60% humidity",
        "Group plants together to increase local humidity",
        "Use a pebble tray with water under pots",
        "Mist plants regularly (morning is best)",
        "Consider a humidifier for multiple tropical plants",
        "Good air circulation prevents fungal diseases",
        "Avoid placing plants in closed, stagnant spaces"
      ],
      tips: [
        "Brown leaf tips often indicate low humidity",
        "Don't mist fuzzy-leaved plants (like African violets)",
        "Gentle fan improves air circulation without causing drafts"
      ]
    }
  ];

  const filteredGuides = careGuides.filter((guide) => {
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || guide.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "Intermediate": return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "Advanced": return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  return (
    <div className="min-h-screen pb-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-leaf-green/10 via-background to-accent/5 py-12 sm:py-20">
        <div className="container px-4 sm:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Plant Care Guides
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert tips and detailed guides to help your plants thrive. From watering basics to advanced care techniques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-border">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search care guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {careCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Care Guides Grid */}
      <section className="py-12">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="max-w-6xl mx-auto">
            {filteredGuides.length === 0 ? (
              <div className="text-center py-12">
                <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No guides found matching your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredGuides.map((guide, index) => (
                  <motion.div
                    key={guide.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* Card Header */}
                    <div className="p-6 border-b border-border">
                      <div className="flex items-start justify-between mb-3">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <guide.icon className="h-6 w-6 text-primary" />
                        </div>
                        <Badge className={getDifficultyColor(guide.difficulty)}>
                          {guide.difficulty}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{guide.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {guide.readTime} read
                      </p>
                      <p className="text-muted-foreground">{guide.description}</p>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      {/* Toggle Button */}
                      <div className="flex gap-2 mb-4">
                        <Button
                          variant={expandedGuide === guide.id ? "default" : "outline"}
                          size="sm"
                          onClick={() => setExpandedGuide(expandedGuide === guide.id ? null : guide.id)}
                          className="flex-1"
                        >
                          {expandedGuide === guide.id ? "Hide Details" : "View Steps"}
                        </Button>
                      </div>

                      {/* Expanded Content */}
                      {expandedGuide === guide.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Steps */}
                          <div className="mb-6">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary">1</span>
                              Steps
                            </h4>
                            <ul className="space-y-2">
                              {guide.content.map((step, idx) => (
                                <li key={idx} className="flex gap-2 text-sm">
                                  <span className="text-primary font-semibold flex-shrink-0">{idx + 1}.</span>
                                  <span className="text-muted-foreground">{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tips */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <AlertCircle className="h-5 w-5 text-primary" />
                              Pro Tips
                            </h4>
                            <div className="space-y-3">
                              {guide.tips.map((tip, idx) => (
                                <div key={idx} className="flex gap-2 p-3 bg-accent/50 rounded-lg">
                                  <AlertCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-muted-foreground">{tip}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Quick Plant Care Tips
              </h2>
              <p className="text-muted-foreground">
                Essential reminders for healthy, thriving plants
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Droplets, text: "Water when top 2 inches of soil is dry" },
                { icon: Sun, text: "Most houseplants prefer bright indirect light" },
                { icon: Thermometer, text: "Keep temperature between 65-75°F" },
                { icon: Wind, text: "Ensure good air circulation" },
                { icon: Bug, text: "Inspect plants weekly for pests" },
                { icon: Leaf, text: "Remove dead leaves promptly" }
              ].map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <tip.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm text-foreground">{tip.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareGuides;