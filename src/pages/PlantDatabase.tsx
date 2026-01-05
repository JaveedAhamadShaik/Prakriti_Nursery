import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Leaf,
  Droplet,
  Sun,
  ThermometerSun,
  TrendingUp,
} from "lucide-react";

// ACCURATE BOTANICAL DATA - Each plant has been researched for precise care requirements
const comprehensiveIndoorPlants = [
  // ===== FOLIAGE PLANTS =====
  { 
    id: "ip-001", 
    name: "Monstera Deliciosa", 
    scientificName: "Monstera deliciosa", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "medium", 
    waterRequirement: "medium", 
    description: "Swiss cheese plant with large fenestrated leaves",
    difficulty: "Easy",
    climate: "Tropical",
    growthRate: "Fast",
    temperature: "18–27°C",
    humidity: "60-80%",
    potType: "Well-draining pot with drainage holes, use peat-based mix",
    toxicity: "Toxic to pets",
    fertilizer: "Monthly during growing season (spring-summer)",
    careTips: [
      "Provide bright indirect light; direct sun burns leaves",
      "Water when top 2-3 cm of soil is dry",
      "Requires support structure like moss pole as it grows",
      "Wipe large leaves weekly to remove dust",
      "High humidity promotes larger leaf fenestration"
    ]
  },
  { 
    id: "ip-002", 
    name: "Snake Plant", 
    scientificName: "Sansevieria trifasciata", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "low", 
    waterRequirement: "low", 
    description: "Upright sword-like leaves with yellow margins, extremely hardy",
    difficulty: "Very Easy",
    climate: "Arid/Semi-arid",
    growthRate: "Slow",
    temperature: "15–29°C",
    humidity: "30-50%",
    potType: "Terracotta or ceramic pot with excellent drainage",
    toxicity: "Toxic to pets",
    fertilizer: "Once every 2-3 months during growing season",
    careTips: [
      "Tolerates low light but grows better in bright indirect light",
      "Water every 2-4 weeks; allow soil to dry completely",
      "Excellent air purifier, removes toxins like formaldehyde",
      "Avoid overwatering - root rot is main cause of death",
      "Can survive extended periods without water"
    ]
  },
  { 
    id: "ip-003", 
    name: "Dieffenbachia", 
    scientificName: "Dieffenbachia seguine", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "medium", 
    waterRequirement: "medium", 
    description: "Large variegated leaves with cream and green patterns",
    difficulty: "Easy",
    climate: "Tropical",
    growthRate: "Medium",
    temperature: "18–24°C",
    humidity: "60-70%",
    potType: "Well-draining pot with rich, moisture-retaining soil",
    toxicity: "Highly toxic if ingested - keep away from children and pets",
    fertilizer: "Every 4-6 weeks during spring and summer",
    careTips: [
      "Bright indirect light maintains variegation patterns",
      "Keep soil consistently moist but not waterlogged",
      "Yellow leaves indicate overwatering or cold temperature",
      "Rotate plant weekly for even growth",
      "Mist regularly to maintain humidity levels"
    ]
  },
  { 
    id: "ip-004", 
    name: "Philodendron Fire", 
    scientificName: "Philodendron erubescens", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "medium", 
    waterRequirement: "medium", 
    description: "Stunning red-orange new leaves that mature to dark green",
    difficulty: "Easy",
    climate: "Tropical",
    growthRate: "Fast",
    temperature: "18–26°C",
    humidity: "60-80%",
    potType: "Well-draining aroid mix with orchid bark and perlite",
    toxicity: "Toxic to pets and humans",
    fertilizer: "Monthly with balanced liquid fertilizer",
    careTips: [
      "Bright indirect light intensifies red coloration",
      "Water when top 2 cm of soil is dry",
      "Provide climbing support for upright growth",
      "Red stems and leaves are normal, not stress indicators",
      "Thrives in warm, humid environments"
    ]
  },
  { 
    id: "ip-005", 
    name: "Philodendron Lime", 
    scientificName: "Philodendron hederaceum 'Lemon Lime'", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "medium", 
    waterRequirement: "medium", 
    description: "Vibrant neon yellow-green heart-shaped trailing leaves",
    difficulty: "Very Easy",
    climate: "Tropical",
    growthRate: "Fast",
    temperature: "18–27°C",
    humidity: "50-70%",
    potType: "Hanging basket or pot with well-draining soil",
    toxicity: "Toxic to pets",
    fertilizer: "Monthly during growing season",
    careTips: [
      "Bright light maintains vibrant lime color; low light causes darkening",
      "Allow top 2-3 cm to dry between waterings",
      "Excellent trailing plant for shelves or hanging baskets",
      "Prune regularly to encourage bushier growth",
      "Adaptable to various indoor conditions"
    ]
  },
  { 
    id: "ip-006", 
    name: "Alocasia Jacklyn", 
    scientificName: "Alocasia sulawesi 'Jacklyn'", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "medium", 
    waterRequirement: "high", 
    description: "Rare aroid with deeply textured, ribbed arrow-shaped leaves",
    difficulty: "Moderate",
    climate: "Tropical",
    growthRate: "Medium",
    temperature: "20–27°C",
    humidity: "70-80%",
    potType: "Well-draining aroid mix with perlite and orchid bark",
    toxicity: "Toxic to pets and humans",
    fertilizer: "Every 2 weeks during growing season with diluted fertilizer",
    careTips: [
      "Requires bright indirect light for optimal growth",
      "Keep soil consistently moist but never soggy",
      "High humidity is essential - use humidifier or pebble tray",
      "Sensitive to cold drafts and temperature fluctuations",
      "May go dormant in winter; reduce watering during dormancy"
    ]
  },
  { 
    id: "ip-007", 
    name: "Syngonium Albo", 
    scientificName: "Syngonium podophyllum 'Albo-Variegatum'", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "medium", 
    waterRequirement: "medium", 
    description: "White and green variegated arrow-shaped leaves",
    difficulty: "Moderate",
    climate: "Tropical",
    growthRate: "Fast",
    temperature: "18–26°C",
    humidity: "60-80%",
    potType: "Well-draining potting mix with perlite",
    toxicity: "Toxic to pets",
    fertilizer: "Monthly during growing season",
    careTips: [
      "Bright indirect light maintains white variegation",
      "Water when top 2 cm of soil is dry",
      "More light = more white; too much causes leaf burn",
      "Prune to maintain bushy shape or allow to climb",
      "Variegated sections have less chlorophyll, grow slower"
    ]
  },
  { 
    id: "ip-008", 
    name: "Syngonium Pink", 
    scientificName: "Syngonium podophyllum 'Pink Splash'", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "medium", 
    waterRequirement: "medium", 
    description: "Soft pink and green variegated arrowhead vine",
    difficulty: "Easy",
    climate: "Tropical",
    growthRate: "Fast",
    temperature: "18–26°C",
    humidity: "50-70%",
    potType: "Well-draining standard potting mix",
    toxicity: "Toxic to pets",
    fertilizer: "Monthly during spring and summer",
    careTips: [
      "Bright indirect light enhances pink coloration",
      "Keep soil evenly moist during growing season",
      "Pink color intensifies with maturity and proper light",
      "Can be trained to climb or left to trail",
      "Easy to propagate from stem cuttings"
    ]
  },
  { 
    id: "ip-009", 
    name: "Syngonium White", 
    scientificName: "Syngonium podophyllum 'White Butterfly'", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "medium", 
    waterRequirement: "medium", 
    description: "Creamy white leaves with green margins",
    difficulty: "Easy",
    climate: "Tropical",
    growthRate: "Fast",
    temperature: "18–26°C",
    humidity: "50-70%",
    potType: "Well-draining potting mix",
    toxicity: "Toxic to pets",
    fertilizer: "Monthly during growing season",
    careTips: [
      "Bright indirect light keeps white color vibrant",
      "Water when top inch of soil is dry",
      "Compact variety suitable for small spaces",
      "Pinch back regularly to encourage bushiness",
      "Tolerates lower light but loses white coloration"
    ]
  },
  { 
    id: "ip-010", 
    name: "Marble Pothos", 
    scientificName: "Epipremnum aureum 'Marble Queen'", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "low", 
    waterRequirement: "medium", 
    description: "White and green marbled heart-shaped trailing leaves",
    difficulty: "Very Easy",
    climate: "Tropical",
    growthRate: "Medium",
    temperature: "17–30°C",
    humidity: "40-60%",
    potType: "Standard well-draining potting mix",
    toxicity: "Toxic to pets",
    fertilizer: "Every 4-6 weeks during growing season",
    careTips: [
      "Medium to bright indirect light maintains variegation",
      "Allow top 50% of soil to dry between waterings",
      "Excellent air purifier and low-maintenance plant",
      "Can grow in water or soil; very forgiving",
      "Prune leggy vines to promote fuller growth"
    ]
  },
  { 
    id: "ip-011", 
    name: "Neon Pothos", 
    scientificName: "Epipremnum aureum 'Neon'", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "low", 
    waterRequirement: "medium", 
    description: "Electric chartreuse-yellow trailing foliage",
    difficulty: "Very Easy",
    climate: "Tropical",
    growthRate: "Fast",
    temperature: "17–30°C",
    humidity: "40-60%",
    potType: "Well-draining standard potting soil",
    toxicity: "Toxic to pets",
    fertilizer: "Monthly during growing season",
    careTips: [
      "Moderate light keeps neon color bright; darkens in low light",
      "Water when top 2-3 cm of soil is dry",
      "One of the easiest houseplants for beginners",
      "Thrives in hanging baskets or climbing supports",
      "Color is brightest on new growth"
    ]
  },
  { 
    id: "ip-012", 
    name: "Aglaonema Lipstick", 
    scientificName: "Aglaonema 'Lipstick'", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "low", 
    waterRequirement: "medium", 
    description: "Deep red edges with green centers on oval leaves",
    difficulty: "Easy",
    climate: "Tropical",
    growthRate: "Slow",
    temperature: "18–26°C",
    humidity: "50-70%",
    potType: "Well-draining peat-based potting mix",
    toxicity: "Toxic to pets",
    fertilizer: "Every 6-8 weeks during growing season",
    careTips: [
      "Tolerates low to medium indirect light",
      "Water when top 2 cm of soil is dry",
      "Red coloration intensifies with proper care",
      "Avoid cold drafts and sudden temperature changes",
      "Excellent air purifier for indoor spaces"
    ]
  },
  { 
    id: "ip-013", 
    name: "Aglaonema Red Valentine", 
    scientificName: "Aglaonema 'Red Valentine'", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "low", 
    waterRequirement: "medium", 
    description: "Vibrant pink-red variegation with green accents",
    difficulty: "Easy",
    climate: "Tropical",
    growthRate: "Slow",
    temperature: "18–26°C",
    humidity: "50-70%",
    potType: "Well-draining potting mix with peat",
    toxicity: "Toxic to pets",
    fertilizer: "Every 6-8 weeks with balanced fertilizer",
    careTips: [
      "Low to medium indirect light is ideal",
      "Keep soil slightly moist but not waterlogged",
      "Pink-red color is most vibrant in younger leaves",
      "Very forgiving and low-maintenance",
      "Avoid cold water; use room temperature water"
    ]
  },
  { 
    id: "ip-014", 
    name: "Aglaonema Snow White", 
    scientificName: "Aglaonema 'Snow White'", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "low", 
    waterRequirement: "medium", 
    description: "Creamy white and light green patterned leaves",
    difficulty: "Easy",
    climate: "Tropical",
    growthRate: "Slow",
    temperature: "18–26°C",
    humidity: "50-70%",
    potType: "Well-draining soil with good aeration",
    toxicity: "Toxic to pets",
    fertilizer: "Every 2 months during active growth",
    careTips: [
      "Thrives in low to medium indirect light",
      "Water when top inch of soil feels dry",
      "White variegation requires more light than green varieties",
      "Compact growth habit perfect for desks and tables",
      "Remove yellowed leaves to maintain appearance"
    ]
  },
  { 
    id: "ip-015", 
    name: "Boston Fern", 
    scientificName: "Nephrolepis exaltata", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "low", 
    waterRequirement: "high", 
    description: "Lush, feathery arching fronds with delicate leaflets",
    difficulty: "Moderate",
    climate: "Tropical/Subtropical",
    growthRate: "Medium",
    temperature: "16–24°C",
    humidity: "70-80%",
    potType: "Hanging basket with moisture-retaining peat-based mix",
    toxicity: "Non-toxic to pets",
    fertilizer: "Monthly with diluted liquid fertilizer",
    careTips: [
      "Prefers bright indirect light but tolerates low light",
      "Keep soil consistently moist; never let it dry out",
      "High humidity is critical - mist daily or use humidifier",
      "Brown, crispy fronds indicate low humidity or underwatering",
      "Excellent natural air humidifier"
    ]
  },
  { 
    id: "ip-016", 
    name: "Parlor Palm", 
    scientificName: "Chamaedorea elegans", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "low", 
    waterRequirement: "medium", 
    description: "Compact palm with delicate feathery fronds",
    difficulty: "Easy",
    climate: "Tropical",
    growthRate: "Slow",
    temperature: "18–27°C",
    humidity: "50-60%",
    potType: "Well-draining pot with palm-specific or general mix",
    toxicity: "Non-toxic to pets",
    fertilizer: "Every 2-3 months during growing season",
    careTips: [
      "Thrives in low to medium indirect light",
      "Water when top 2-3 cm of soil is dry",
      "Excellent air purifier, removes formaldehyde",
      "Avoid direct sunlight which scorches fronds",
      "Slow-growing and stays compact indoors"
    ]
  },
  { 
    id: "ip-017", 
    name: "Bird of Paradise", 
    scientificName: "Strelitzia reginae", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "high", 
    waterRequirement: "medium", 
    description: "Large banana-like leaves, dramatic tropical statement plant",
    difficulty: "Moderate",
    climate: "Tropical/Subtropical",
    growthRate: "Medium",
    temperature: "18–30°C",
    humidity: "50-70%",
    potType: "Large pot with well-draining soil, slightly root-bound",
    toxicity: "Toxic to pets",
    fertilizer: "Monthly during spring and summer with balanced fertilizer",
    careTips: [
      "Requires at least 4-6 hours of bright indirect light daily",
      "Water thoroughly when top 5 cm of soil is dry",
      "Flowers only appear on mature plants (3-5 years old)",
      "Wipe large leaves regularly to prevent dust buildup",
      "Rotate plant weekly for even growth"
    ]
  },
  { 
    id: "ip-018", 
    name: "Rosemary", 
    scientificName: "Rosmarinus officinalis", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "high", 
    waterRequirement: "low", 
    description: "Aromatic herb with needle-like leaves, culinary and ornamental",
    difficulty: "Moderate",
    climate: "Mediterranean",
    growthRate: "Slow",
    temperature: "15–24°C",
    humidity: "40-50%",
    potType: "Terracotta pot with excellent drainage, sandy soil",
    toxicity: "Non-toxic to pets in small amounts",
    fertilizer: "Monthly with half-strength liquid fertilizer",
    careTips: [
      "Requires 6-8 hours of direct sunlight daily",
      "Water when soil is dry 2-3 cm deep; avoid overwatering",
      "Good air circulation prevents powdery mildew",
      "Harvest regularly to encourage bushier growth",
      "Bring outdoors in summer for best growth"
    ]
  },
  { 
    id: "ip-022", 
    name: "Poinsettia Ice Pink", 
    scientificName: "Euphorbia pulcherrima 'Ice Pink'", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "medium", 
    waterRequirement: "medium", 
    description: "Delicate ice pink bracts with cream edges",
    difficulty: "Moderate",
    climate: "Tropical",
    growthRate: "Medium",
    temperature: "18–24°C",
    humidity: "50-70%",
    potType: "Well-draining pot with standard potting mix",
    toxicity: "Toxic to pets; sap can cause skin irritation",
    fertilizer: "Monthly during active growth with balanced fertilizer",
    careTips: [
      "Bright indirect light maintains bract color",
      "Water when top 2 cm of soil is dry",
      "Keep away from cold drafts and heating vents",
      "Requires 14 hours of darkness daily to re-bloom",
      "Pink bracts last 2-4 months with proper care"
    ]
  },
  { 
    id: "ip-023", 
    name: "Poinsettia Pink", 
    scientificName: "Euphorbia pulcherrima 'Pink'", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "medium", 
    waterRequirement: "medium", 
    description: "Soft pink bracts surrounding small yellow flowers",
    difficulty: "Moderate",
    climate: "Tropical",
    growthRate: "Medium",
    temperature: "18–24°C",
    humidity: "50-70%",
    potType: "Well-draining pot, avoid water-logged soil",
    toxicity: "Toxic to pets",
    fertilizer: "Every 2-3 weeks during growing season",
    careTips: [
      "Needs 6 hours of indirect bright light daily",
      "Keep soil evenly moist but not soggy",
      "Colorful bracts are modified leaves, not flowers",
      "Prune after bracts fade to encourage new growth",
      "Can be kept as perennial with proper care"
    ]
  },
  { 
    id: "ip-024", 
    name: "Poinsettia Red", 
    scientificName: "Euphorbia pulcherrima", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "medium", 
    waterRequirement: "medium", 
    description: "Classic vibrant red bracts, traditional holiday plant",
    difficulty: "Moderate",
    climate: "Tropical",
    growthRate: "Medium",
    temperature: "18–24°C",
    humidity: "50-70%",
    potType: "Well-draining container with drainage holes",
    toxicity: "Toxic to pets; milky sap is irritant",
    fertilizer: "Monthly during active growth period",
    careTips: [
      "Bright indirect light for 6+ hours daily",
      "Water when soil surface feels dry to touch",
      "Avoid temperature below 12°C",
      "Re-blooming requires 14-16 hours darkness for 8-10 weeks",
      "Protect from cold drafts when transporting"
    ]
  },
  { 
    id: "ip-025", 
    name: "Poinsettia Variegated", 
    scientificName: "Euphorbia pulcherrima 'Variegata'", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "medium", 
    waterRequirement: "medium", 
    description: "Unique cream and pink mottled bracts",
    difficulty: "Moderate",
    climate: "Tropical",
    growthRate: "Medium",
    temperature: "18–24°C",
    humidity: "50-70%",
    potType: "Well-draining potting mix with perlite",
    toxicity: "Toxic to pets",
    fertilizer: "Every 2-3 weeks during growing season",
    careTips: [
      "Bright indirect light maintains variegation",
      "Water moderately; allow slight drying between waterings",
      "Variegated varieties are more sensitive to overwatering",
      "Prune to 15 cm in early spring for bushier growth",
      "Rare variety requires careful temperature management"
    ]
  },
  { 
    id: "ip-026", 
    name: "Poinsettia White", 
    scientificName: "Euphorbia pulcherrima 'White'", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "medium", 
    waterRequirement: "medium", 
    description: "Elegant creamy white bracts with green foliage",
    difficulty: "Moderate",
    climate: "Tropical",
    growthRate: "Medium",
    temperature: "18–24°C",
    humidity: "50-70%",
    potType: "Container with good drainage",
    toxicity: "Toxic to pets",
    fertilizer: "Monthly with balanced fertilizer",
    careTips: [
      "Requires bright indirect light to maintain white color",
      "Keep soil consistently moist during blooming period",
      "White varieties show stress quickly through bract discoloration",
      "Mist occasionally to maintain humidity",
      "Less common variety, highly decorative"
    ]
  },
  { 
    id: "ip-027", 
    name: "Poinsettia Yellow", 
    scientificName: "Euphorbia pulcherrima 'Yellow'", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "medium", 
    waterRequirement: "medium", 
    description: "Cheerful lemon-yellow bracts, unusual variety",
    difficulty: "Moderate",
    climate: "Tropical",
    growthRate: "Medium",
    temperature: "18–24°C",
    humidity: "50-70%",
    potType: "Well-draining pot with standard mix",
    toxicity: "Toxic to pets",
    fertilizer: "Every 2-3 weeks during active growth",
    careTips: [
      "Bright indirect light prevents color fading",
      "Water when top inch of soil is dry",
      "Yellow varieties are rare and require same care as red",
      "Protect from ethylene gas (fruits) which causes bract drop",
      "Unique color makes striking holiday decoration"
    ]
  },
  { 
    id: "ip-037", 
    name: "ZZ Plant", 
    scientificName: "Zamioculcas zamiifolia", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "low", 
    waterRequirement: "low", 
    description: "Glossy, waxy leaflets on thick upright stems, drought-tolerant",
    difficulty: "Very Easy",
    climate: "Tropical/Arid",
    growthRate: "Slow",
    temperature: "15–29°C",
    humidity: "40-50%",
    potType: "Well-draining pot; thrives when slightly root-bound",
    toxicity: "Toxic to pets and humans if ingested",
    fertilizer: "Every 2-3 months during growing season",
    careTips: [
      "Tolerates very low light but grows faster in bright indirect",
      "Water every 2-3 weeks; overwatering causes rhizome rot",
      "Stores water in rhizomes, extremely drought-tolerant",
      "Yellowing leaves indicate overwatering",
      "One of the most indestructible houseplants"
    ]
  },
  { 
    id: "ip-043", 
    name: "Aglaonema Burking", 
    scientificName: "Aglaonema 'Burking'", 
    category: "indoor", 
    subcategory: "Foliage", 
    lightRequirement: "low", 
    waterRequirement: "medium", 
    description: "Cream and green variegated oval leaves",
    difficulty: "Easy",
    climate: "Tropical",
    growthRate: "Slow",
    temperature: "18–26°C",
    humidity: "50-70%",
    potType: "Well-draining peat-based potting soil",
    toxicity: "Toxic to pets",
    fertilizer: "Every 6-8 weeks during growing season",
    careTips: [
      "Low to medium indirect light is ideal",
      "Water when top 2 cm of soil is dry",
      "Very adaptable to indoor conditions",
      "Remove brown leaf tips caused by fluoride in tap water",
      "Excellent choice for offices and low-light spaces"
    ]
  },

  // ===== FLOWERING PLANTS =====
  { 
    id: "ip-019", 
    name: "Anthurium", 
    scientificName: "Anthurium andraeanum", 
    category: "indoor", 
    subcategory: "Flowering", 
    lightRequirement: "medium", 
    waterRequirement: "medium", 
    description: "Glossy heart-shaped red spathes with yellow spadix",
    difficulty: "Moderate",
    climate: "Tropical",
    growthRate: "Slow to Medium",
    temperature: "18–29°C",
    humidity: "70-80%",
    potType: "Well-draining orchid mix or chunky aroid mix",
    toxicity: "Toxic to pets and humans",
    fertilizer: "Weekly with diluted quarter-strength fertilizer",
    careTips: [
      "Bright indirect light encourages continuous blooming",
      "Keep roots moist but never waterlogged",
      "High humidity is essential for flowers and foliage",
      "Flowers can last 2-3 months with proper care",
      "Repot only when roots emerge from drainage holes"
    ]
  },
  { 
    id: "ip-020", 
    name: "Peace Lily", 
    scientificName: "Spathiphyllum wallisii", 
    category: "indoor", 
    subcategory: "Flowering", 
    lightRequirement: "low", 
    waterRequirement: "medium", 
    description: "Elegant white spathes and glossy dark green foliage",
    difficulty: "Easy",
    climate: "Tropical",
    growthRate: "Medium",
    temperature: "18–27°C",
    humidity: "50-70%",
    potType: "Well-draining peat-based potting mix",
    toxicity: "Toxic to pets and humans",
    fertilizer: "Every 6 weeks during growing season",
    careTips: [
      "Thrives in low to medium indirect light",
      "Water when leaves begin to droop slightly",
      "One of the best air-purifying plants (NASA study)",
      "Brown leaf tips indicate over-fertilization or fluoride",
      "Blooms several times per year in ideal conditions"
    ]
  },
  { 
    id: "ip-021", 
    name: "Desert Rose", 
    scientificName: "Adenium obesum", 
    category: "indoor", 
    subcategory: "Flowering", 
    lightRequirement: "high", 
    waterRequirement: "low", 
    description: "Succulent with swollen trunk (caudex) and trumpet-shaped flowers",
    difficulty: "Moderate",
    climate: "Arid/Desert",
    growthRate: "Slow",
    temperature: "21–35°C",
    humidity: "30-50%",
    potType: "Terracotta pot with cactus/succulent mix and excellent drainage",
    toxicity: "Highly toxic; sap is poisonous",
    fertilizer: "Monthly during growing season with high-phosphorus fertilizer",
    careTips: [
      "Requires 6+ hours of direct sunlight for flowering",
      "Water deeply but allow soil to dry completely between waterings",
      "Goes dormant in winter; reduce watering significantly",
      "Flowers appear on new growth in spring and summer",
      "Prune after flowering to maintain shape and encourage branching"
    ]
  },
  { 
    id: "ip-087", 
    name: "Heliconia Variegated", 
    scientificName: "Heliconia", 
    category: "indoor", 
    subcategory: "Flowering", 
    lightRequirement: "high", 
    waterRequirement: "high", 
    description: "Dramatic tropical flowers with variegated foliage",
    difficulty: "Difficult",
    climate: "Tropical",
    growthRate: "Fast",
    temperature: "21–32°C",
    humidity: "70-90%",
    potType: "Large container with rich, moisture-retaining soil",
    toxicity: "Non-toxic to pets",
    fertilizer: "Every 2 weeks during growing season with balanced fertilizer",
    careTips: [
      "Requires bright direct light for several hours daily",
      "Keep soil consistently moist, never dry",
      "Extremely high humidity required for flowering",
      "Flowers appear on mature plants in warm conditions",
      "Best grown outdoors in tropical climates; challenging indoors"
    ]
  },
  { 
    id: "ip-088", 
    name: "Heliconia", 
    scientificName: "Heliconia rostrata", 
    category: "indoor", 
    subcategory: "Flowering", 
    lightRequirement: "high", 
    waterRequirement: "high", 
    description: "Exotic hanging red and yellow bracts resembling lobster claws",
    difficulty: "Difficult",
    climate: "Tropical",
    growthRate: "Fast",
    temperature: "21–32°C",
    humidity: "70-90%",
    potType: "Large, deep pot with moisture-retaining organic mix",
    toxicity: "Non-toxic to pets",
    fertilizer: "Biweekly with high-nitrogen fertilizer during growing season",
    careTips: [
      "Needs full sun or very bright light for blooming",
      "Water abundantly; soil should remain moist at all times",
      "Mist daily to maintain extremely high humidity",
      "Requires warm temperatures year-round",
      "More suitable for greenhouses than typical homes"
    ]
  },

  // ===== BONSAI =====
  { 
    id: "ip-028", 
    name: "2-Step Lucky Bamboo", 
    scientificName: "Dracaena sanderiana", 
    category: "indoor", 
    subcategory: "Bonsai", 
    lightRequirement: "low", 
    waterRequirement: "high", 
    description: "Two-tier arrangement of bamboo-like stalks, feng shui plant",
    difficulty: "Easy",
    climate: "Tropical",
    growthRate: "Slow",
    temperature: "18–32°C",
    humidity: "40-60%",
    potType: "Vase with water or well-draining soil",
    toxicity: "Toxic to pets",
    fertilizer: "Every 2 months with diluted liquid fertilizer (water-grown)",
    careTips: [
      "Thrives in low to medium indirect light",
      "Change water weekly if grown in water; use filtered or distilled",
      "Can grow in water or soil; water method is easier",
      "Keep water level 2-3 cm above roots",
      "Yellowing leaves indicate too much light or fertilizer"
    ]
  },
  { 
    id: "ip-029", 
    name: "3-Step Lucky Bamboo", 
    scientificName: "Dracaena sanderiana", 
    category: "indoor", 
    subcategory: "Bonsai", 
    lightRequirement: "low", 
    waterRequirement: "high", 
    description: "Three-tier lucky bamboo arrangement symbolizing happiness and longevity",
    difficulty: "Easy",
    climate: "Tropical",
    growthRate: "Slow",
    temperature: "18–32°C",
    humidity: "40-60%",
    potType: "Glass vase or container with water or soil",
    toxicity: "Toxic to pets",
    fertilizer: "Once every 2 months with very diluted fertilizer",
    careTips: [
      "Prefers indirect light; direct sun causes leaf burn",
      "Replace water weekly to prevent algae and bacteria",
      "Stalks are shaped when young; do not attempt to bend mature stalks",
      "Can live for years with minimal care",
      "Popular gift symbolizing good fortune in feng shui"
    ]
  },
  { 
    id: "ip-030", 
    name: "Ficus Bonsai", 
    scientificName: "Ficus retusa", 
    category: "indoor", 
    subcategory: "Bonsai", 
    lightRequirement: "medium", 
    waterRequirement: "medium", 
    description: "Classic bonsai with aerial roots and small oval leaves",
    difficulty: "Moderate",
    climate: "Tropical/Subtropical",
    growthRate: "Medium",
    temperature: "16–24°C",
    humidity: "50-70%",
    potType: "Shallow bonsai pot with bonsai soil (akadama, pumice)",
    toxicity: "Toxic to pets",
    fertilizer: "Every 2 weeks during growing season with balanced bonsai fertilizer",
    careTips: [
      "Needs bright indirect light; some morning sun is beneficial",
      "Water when top layer of soil feels slightly dry",
      "Prune regularly to maintain shape and encourage dense foliage",
      "Wire branches when young for shaping",
      "Most forgiving bonsai species for beginners"
    ]
  },
  { 
    id: "ip-031", 
    name: "Jade Mini Bonsai", 
    scientificName: "Crassula ovata", 
    category: "indoor", 
    subcategory: "Bonsai", 
    lightRequirement: "high", 
    waterRequirement: "low", 
    description: "Miniature money tree with thick trunk and succulent leaves",
    difficulty: "Easy",
    climate: "Arid/Semi-arid",
    growthRate: "Slow",
    temperature: "18–27°C",
    humidity: "30-50%",
    potType: "Shallow bonsai pot with well-draining succulent mix",
    toxicity: "Toxic to pets",
    fertilizer: "Monthly during growing season with diluted succulent fertilizer",
    careTips: [
      "Requires 4-6 hours of bright light daily",
      "Water sparingly; allow soil to dry completely between waterings",
      "Easy to shape; prune to encourage tree-like form",
      "Develops thick trunk naturally over time",
      "Excellent beginner bonsai due to low maintenance"
    ]
  },
  { 
    id: "ip-090", 
    name: "Dwarf Jade", 
    scientificName: "Portulacaria afra", 
    category: "indoor", 
    subcategory: "Bonsai", 
    lightRequirement: "high", 
    waterRequirement: "low", 
    description: "Elephant bush with small round succulent leaves, ideal for bonsai",
    difficulty: "Easy",
    climate: "Arid/Semi-arid",
    growthRate: "Medium",
    temperature: "18–29°C",
    humidity: "30-50%",
    potType: "Bonsai pot with fast-draining succulent soil",
    toxicity: "Non-toxic to pets",
    fertilizer: "Monthly during growing season",
    careTips: [
      "Needs bright direct light for at least 4-6 hours",
      "Water when soil is completely dry; reduce in winter",
      "Responds well to pruning and wiring for bonsai styling",
      "Develops woody trunk faster than Crassula ovata",
      "Very forgiving and easy to propagate from cuttings"
    ]
  },

  // ===== SUCCULENTS =====
  { 
    id: "ip-032", 
    name: "Christmas Cactus", 
    scientificName: "Schlumbergera bridgesii", 
    category: "indoor", 
    subcategory: "Succulents", 
    lightRequirement: "medium", 
    waterRequirement: "medium", 
    description: "Segmented stems with tubular pink flowers in winter",
    difficulty: "Easy",
    climate: "Tropical/Subtropical",
    growthRate: "Medium",
    temperature: "15–21°C",
    humidity: "50-60%",
    potType: "Well-draining pot with cactus mix and perlite",
    toxicity: "Non-toxic to pets",
    fertilizer: "Monthly during spring and summer with diluted fertilizer",
    careTips: [
      "Bright indirect light; avoid direct sun which causes leaf burn",
      "Water when top 2 cm of soil is dry; more than typical cacti",
      "Requires 12-14 hours of darkness for 6 weeks to initiate blooming",
      "Cool temperatures (10-15°C) in fall trigger flower bud formation",
      "Long-lived plant that can bloom for decades"
    ]
  },
  { 
    id: "ip-033", 
    name: "Crassula Yellow", 
    scientificName: "Crassula ovata 'Hummel's Sunset'", 
    category: "indoor", 
    subcategory: "Succulents", 
    lightRequirement: "high", 
    waterRequirement: "low", 
    description: "Yellow-gold tinged jade plant with red edges in bright light",
    difficulty: "Easy",
    climate: "Arid/Semi-arid",
    growthRate: "Slow",
    temperature: "18–27°C",
    humidity: "30-50%",
    potType: "Terracotta pot with cactus/succulent soil",
    toxicity: "Toxic to pets",
    fertilizer: "Every 2-3 months with diluted succulent fertilizer",
    careTips: [
      "Bright light brings out yellow-gold coloration",
      "Water deeply but infrequently; every 2-3 weeks in growing season",
      "Yellow color intensifies with proper light and slight stress",
      "Avoid overwatering which causes root rot",
      "Propagates easily from leaf or stem cuttings"
    ]
  },
  { 
    id: "ip-034", 
    name: "Echeveria Apus", 
    scientificName: "Echeveria 'Apus'", 
    category: "indoor", 
    subcategory: "Succulents", 
    lightRequirement: "high", 
    waterRequirement: "low", 
    description: "Compact rosette with powdery blue-green leaves",
    difficulty: "Easy",
    climate: "Arid/Desert",
    growthRate: "Slow",
    temperature: "18–27°C",
    humidity: "30-40%",
    potType: "Shallow pot with excellent drainage, gritty succulent mix",
    toxicity: "Non-toxic to pets",
    fertilizer: "Once during spring with diluted cactus fertilizer",
    careTips: [
      "Requires 4-6 hours of bright light daily",
      "Water only when soil is completely dry; reduce in winter",
      "Avoid getting water on leaves to preserve powdery coating (farina)",
      "Bottom leaves naturally die off as plant grows",
      "Produces offsets (pups) that can be separated and propagated"
    ]
  },
  { 
    id: "ip-035", 
    name: "Echeveria Doris Taylor", 
    scientificName: "Echeveria 'Doris Taylor'", 
    category: "indoor", 
    subcategory: "Succulents", 
    lightRequirement: "high", 
    waterRequirement: "low", 
    description: "Fuzzy succulent with soft white hairs and pink-tipped leaves",
    difficulty: "Easy",
    climate: "Arid/Desert",
    growthRate: "Slow",
    temperature: "18–27°C",
    humidity: "30-40%",
    potType: "Well-draining cactus mix in terracotta pot",
    toxicity: "Non-toxic to pets",
    fertilizer: "Sparingly in spring with diluted succulent fertilizer",
    careTips: [
      "Needs bright direct light for best coloration",
      "Water sparingly; allow complete drying between waterings",
      "Fuzzy leaves are prone to rot if water sits on them",
      "Pink tips intensify with bright light and cool nights",
      "Also known as 'Woolly Rose' due to fuzzy appearance"
    ]
  },
  { 
    id: "ip-036", 
    name: "Graptosedum", 
    scientificName: "Graptosedum 'Bronze'", 
    category: "indoor", 
    subcategory: "Succulents", 
    lightRequirement: "high", 
    waterRequirement: "low", 
    description: "Bronze-pink rosettes, hybrid of Graptopetalum and Sedum",
    difficulty: "Very Easy",
    climate: "Arid/Desert",
    growthRate: "Medium",
    temperature: "18–27°C",
    humidity: "30-40%",
    potType: "Shallow dish or pot with gritty, fast-draining mix",
    toxicity: "Non-toxic to pets",
    fertilizer: "Optional; once in spring if desired",
    careTips: [
      "Bright light brings out bronze-pink coloration",
      "Extremely drought-tolerant; water every 2-3 weeks",
      "Cold stress enhances pink/red tones",
      "Easy to propagate from leaves or stem cuttings",
      "Great for succulent arrangements and fairy gardens"
    ]
  },
  { 
    id: "ip-038", 
    name: "Zebra Haworthia", 
    scientificName: "Haworthiopsis fasciata", 
    category: "indoor", 
    subcategory: "Succulents", 
    lightRequirement: "medium", 
    waterRequirement: "low", 
    description: "Dark green leaves with distinctive white horizontal stripes",
    difficulty: "Very Easy",
    climate: "Arid/Semi-arid",
    growthRate: "Slow",
    temperature: "18–27°C",
    humidity: "30-50%",
    potType: "Small pot with cactus/succulent mix and good drainage",
    toxicity: "Non-toxic to pets",
    fertilizer: "Rarely needed; once in spring if desired",
    careTips: [
      "Prefers bright indirect light; tolerates some shade",
      "Water every 2-3 weeks in growing season, monthly in winter",
      "One of the easiest succulents for beginners",
      "Compact size perfect for small spaces and terrariums",
      "Produces offsets that can be separated and potted"
    ]
  },
  { 
    id: "ip-039", 
    name: "Monkey Tail Cactus", 
    scientificName: "Cleistocactus colademononis", 
    category: "indoor", 
    subcategory: "Succulents", 
    lightRequirement: "high", 
    waterRequirement: "low", 
    description: "Trailing cactus covered in soft white hairs resembling monkey tail",
    difficulty: "Easy",
    climate: "Arid/Desert",
    growthRate: "Medium",
    temperature: "18–29°C",
    humidity: "30-40%",
    potType: "Hanging basket with very well-draining cactus mix",
    toxicity: "Non-toxic to pets",
    fertilizer: "Monthly during growing season with cactus fertilizer",
    careTips: [
      "Requires bright direct light for several hours daily",
      "Water thoroughly but allow complete drying between waterings",
      "Soft white spines are harmless to touch",
      "Excellent for hanging baskets where it can cascade",
      "May produce red tubular flowers on mature plants"
    ]
  },
  { 
    id: "ip-040", 
    name: "Column Cactus", 
    scientificName: "Cactaceae (mixed species)", 
    category: "indoor", 
    subcategory: "Succulents", 
    lightRequirement: "high", 
    waterRequirement: "low", 
    description: "Classic upright columnar cactus with ribs and spines",
    difficulty: "Very Easy",
    climate: "Desert",
    growthRate: "Slow",
    temperature: "18–32°C",
    humidity: "20-40%",
    potType: "Heavy pot with pure cactus mix and excellent drainage",
    toxicity: "Non-toxic but has sharp spines",
    fertilizer: "Monthly during spring and summer with cactus fertilizer",
    careTips: [
      "Needs full sun or brightest possible indoor light",
      "Water every 3-4 weeks in summer, monthly or less in winter",
      "Etiolation (stretching) indicates insufficient light",
      "Handle with thick gloves or folded newspaper",
      "Can live for decades with minimal care"
    ]
  },
  { 
    id: "ip-041", 
    name: "Spherical Cactus", 
    scientificName: "Cactaceae (mixed species)", 
    category: "indoor", 
    subcategory: "Succulents", 
    lightRequirement: "high", 
    waterRequirement: "low", 
    description: "Round ball-shaped cactus with geometric spine patterns",
    difficulty: "Very Easy",
    climate: "Desert",
    growthRate: "Very Slow",
    temperature: "18–32°C",
    humidity: "20-40%",
    potType: "Small terracotta pot with pure cactus soil",
    toxicity: "Non-toxic but has sharp spines",
    fertilizer: "3-4 times per year during growing season",
    careTips: [
      "Maximum sunlight exposure for healthy growth",
      "Water sparingly; once a month or less in winter",
      "May produce colorful flowers on mature specimens",
      "Perfect for beginners and minimal-care collections",
      "Overwatering causes rotting from the base"
    ]
  },
  { 
    id: "ip-042", 
    name: "Prickly Pear Cactus", 
    scientificName: "Opuntia spp.", 
    category: "indoor", 
    subcategory: "Succulents", 
    lightRequirement: "high", 
    waterRequirement: "low", 
    description: "Flat paddle-shaped segments with glochids and spines",
    difficulty: "Easy",
    climate: "Desert/Arid",
    growthRate: "Medium",
    temperature: "18–35°C",
    humidity: "20-40%",
    potType: "Wide pot with cactus mix and gravel for drainage",
    toxicity: "Non-toxic but has glochids (tiny barbed bristles)",
    fertilizer: "Monthly during spring and summer",
    careTips: [
      "Requires full sun or maximum bright light",
      "Water every 2-3 weeks in summer, very sparingly in winter",
      "Handle carefully; glochids are difficult to remove from skin",
      "New pads can be cut and rooted to propagate",
      "May produce beautiful flowers and edible fruits outdoors"
    ]
  },
  { 
    id: "ip-060", 
    name: "Graptoveria", 
    scientificName: "× Graptoveria", 
    category: "indoor", 
    subcategory: "Succulents", 
    lightRequirement: "high", 
    waterRequirement: "low", 
    description: "Hybrid succulent with pastel rosettes in pink, purple, or blue tones",
    difficulty: "Easy",
    climate: "Arid/Desert",
    growthRate: "Medium",
    temperature: "18–27°C",
    humidity: "30-40%",
    potType: "Shallow pot with gritty succulent mix",
    toxicity: "Non-toxic to pets",
    fertilizer: "Once in spring with diluted succulent fertilizer",
    careTips: [
      "Bright light enhances pastel coloration",
      "Water when soil is dry; every 2 weeks in growing season",
      "Color intensifies with temperature stress and bright light",
      "Easy to propagate from leaves",
      "Produces offsets that form attractive clusters"
    ]
  },
  { 
    id: "ip-066", 
    name: "Baby Rubber Plant", 
    scientificName: "Peperomia obtusifolia 'Variegata'", 
    category: "indoor", 
    subcategory: "Succulents", 
    lightRequirement: "medium", 
    waterRequirement: "low", 
    description: "Thick variegated cream and green succulent-like leaves",
    difficulty: "Easy",
    climate: "Tropical",
    growthRate: "Slow",
    temperature: "18–24°C",
    humidity: "40-60%",
    potType: "Small pot with well-draining peperomia or succulent mix",
    toxicity: "Non-toxic to pets",
    fertilizer: "Every 2-3 months during growing season",
    careTips: [
      "Bright indirect light maintains variegation",
      "Water when soil is mostly dry; semi-succulent",
      "Thick leaves store water; drought-tolerant",
      "Compact size perfect for desks and small spaces",
      "Sensitive to overwatering; allow good drying between waterings"
    ]
  },
  { 
    id: "ip-067", 
    name: "Perle von Nurnberg", 
    scientificName: "Echeveria 'Perle von Nürnberg'", 
    category: "indoor", 
    subcategory: "Succulents", 
    lightRequirement: "high", 
    waterRequirement: "low", 
    description: "Stunning purple-pink rosette with powdery coating",
    difficulty: "Easy",
    climate: "Arid/Desert",
    growthRate: "Slow",
    temperature: "18–27°C",
    humidity: "30-40%",
    potType: "Terracotta pot with very well-draining succulent mix",
    toxicity: "Non-toxic to pets",
    fertilizer: "Once in spring with half-strength succulent fertilizer",
    careTips: [
      "Full sun brings out deep purple-pink coloration",
      "Water deeply but infrequently; every 2-3 weeks",
      "Avoid water on leaves to preserve farina (powdery coating)",
      "One of the most beautiful echeveria varieties",
      "Produces pink flowers on tall stems in spring"
    ]
  },
  { 
    id: "ip-091", 
    name: "Jade Plant", 
    scientificName: "Crassula ovata", 
    category: "indoor", 
    subcategory: "Succulents", 
    lightRequirement: "high", 
    waterRequirement: "low", 
    description: "Classic money tree with thick woody trunk and oval jade leaves",
    difficulty: "Very Easy",
    climate: "Arid/Semi-arid",
    growthRate: "Slow",
    temperature: "18–27°C",
    humidity: "30-50%",
    potType: "Heavy pot with cactus/succulent mix and excellent drainage",
    toxicity: "Toxic to pets",
    fertilizer: "Every 2-3 months during growing season",
    careTips: [
      "Needs at least 4-6 hours of bright light daily",
      "Water thoroughly, then allow soil to dry completely",
      "Develops tree-like form over years; can live for decades",
      "Red edges on leaves indicate good light exposure",
      "Symbol of good luck and prosperity in feng shui"
    ]
  },
  { 
    id: "ip-092", 
    name: "Echeveria Elegans", 
    scientificName: "Echeveria elegans", 
    category: "indoor", 
    subcategory: "Succulents", 
    lightRequirement: "high", 
    waterRequirement: "low", 
    description: "Classic blue-green rosette with powdery white coating",
    difficulty: "Easy",
    climate: "Arid/Desert",
    growthRate: "Slow",
    temperature: "18–27°C",
    humidity: "30-40%",
    potType: "Shallow pot with gritty succulent soil",
    toxicity: "Non-toxic to pets",
    fertilizer: "Once in spring, optional",
    careTips: [
      "Bright light maintains compact rosette shape",
      "Water every 2-3 weeks; reduce significantly in winter",
      "Also called 'Mexican Snowball' due to blue-white color",
      "Easy care makes it perfect for beginners",
      "Produces pink flowers on stems in late winter/spring"
    ]
  },
  { 
    id: "ip-093", 
    name: "Echeveria Rosette", 
    scientificName: "Echeveria spp.", 
    category: "indoor", 
    subcategory: "Succulents", 
    lightRequirement: "high", 
    waterRequirement: "low", 
    description: "Perfect geometric rosette formation in various colors",
    difficulty: "Easy",
    climate: "Arid/Desert",
    growthRate: "Slow",
    temperature: "18–27°C",
    humidity: "30-40%",
    potType: "Well-draining pot with succulent/cactus mix",
    toxicity: "Non-toxic to pets",
    fertilizer: "Minimal; once in spring if desired",
    careTips: [
      "Requires bright direct light for tight rosette formation",
      "Water when soil is completely dry to touch",
      "Symmetrical growth indicates proper care and lighting",
      "Bottom leaves naturally dry and can be removed",
      "Hundreds of varieties with different colors and sizes"
    ]
  },
];

const PlantDatabase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [expandedPlant, setExpandedPlant] = useState(null);

  const categories = ["All", "Indoor"];
  const subcategories = ["All", "Foliage", "Flowering", "Bonsai", "Succulents"];

  // Apply filters
  const filteredByCategory = selectedCategory === "All" 
    ? comprehensiveIndoorPlants 
    : comprehensiveIndoorPlants.filter((p) => p.category === "indoor");

  const filteredBySubcategory = selectedSubcategory === "All"
    ? filteredByCategory
    : filteredByCategory.filter((p) => p.subcategory === selectedSubcategory);

  const filteredPlants = filteredBySubcategory.filter(
    (plant) =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getLightColor = (level) => {
    switch (level) {
      case "low": return "text-blue-500";
      case "medium": return "text-yellow-500";
      case "high": return "text-orange-500";
      default: return "text-gray-500";
    }
  };

  const getWaterColor = (level) => {
    switch (level) {
      case "low": return "text-amber-600";
      case "medium": return "text-blue-400";
      case "high": return "text-blue-600";
      default: return "text-gray-500";
    }
  };

  const getDifficultyColor = (difficulty) => {
    if (difficulty.includes("Very Easy")) return "bg-green-100 text-green-700";
    if (difficulty.includes("Easy")) return "bg-emerald-100 text-emerald-700";
    if (difficulty.includes("Moderate")) return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-green-600 font-medium text-lg">
              Complete Indoor Plant Encyclopedia
            </span>
          </div>

          <h1 className="text-5xl font-bold mb-4 text-gray-900">Plant Database</h1>
          <p className="text-gray-600 max-w-2xl text-lg">
            Comprehensive botanical information for {comprehensiveIndoorPlants.length} indoor plants with scientifically accurate care requirements.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="container mx-auto py-6 px-4 border-b bg-white sticky top-0 z-10 shadow-sm">
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 justify-center flex-wrap">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={cat === selectedCategory ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className="min-w-[100px]"
              >
                {cat}
              </Button>
            ))}
          </div>
          
          <div className="flex gap-3 justify-center flex-wrap">
            {subcategories.map((sub) => (
              <Button
                key={sub}
                variant={sub === selectedSubcategory ? "default" : "outline"}
                onClick={() => setSelectedSubcategory(sub)}
                size="sm"
              >
                {sub}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="container mx-auto py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search by name, scientific name, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-lg border-2 focus:border-green-500"
            />
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">
            Showing <span className="font-semibold text-green-600">{filteredPlants.length}</span> plants
            {selectedSubcategory !== "All" && ` in ${selectedSubcategory}`}
          </p>
        </div>
      </section>

      {/* PLANT GRID */}
      <section className="container mx-auto pb-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlants.map((plant) => (
            <Card key={plant.id} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-green-300">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-gray-900 mb-1">
                      {plant.name}
                    </CardTitle>
                    <p className="text-sm italic text-gray-500">
                      {plant.scientificName}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Badge className="bg-green-100 text-green-700">
                      {plant.subcategory}
                    </Badge>
                    <Badge className={getDifficultyColor(plant.difficulty)}>
                      {plant.difficulty}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{plant.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-3 bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Sun className={`h-5 w-5 ${getLightColor(plant.lightRequirement)}`} />
                    <div>
                      <p className="text-xs text-gray-500">Light</p>
                      <p className="text-sm font-semibold capitalize">{plant.lightRequirement}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplet className={`h-5 w-5 ${getWaterColor(plant.waterRequirement)}`} />
                    <div>
                      <p className="text-xs text-gray-500">Water</p>
                      <p className="text-sm font-semibold capitalize">{plant.waterRequirement}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <ThermometerSun className="h-5 w-5 text-red-500" />
                    <div>
                      <p className="text-xs text-gray-500">Temp</p>
                      <p className="text-sm font-semibold">{plant.temperature}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="text-xs text-gray-500">Growth</p>
                      <p className="text-sm font-semibold">{plant.growthRate}</p>
                    </div>
                  </div>
                </div>

                {/* Detailed Information */}
                <div className="space-y-2 text-sm bg-white p-3 rounded-lg border">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Climate:</span>
                    <span className="font-semibold text-gray-700">{plant.climate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Humidity:</span>
                    <span className="font-semibold text-gray-700">{plant.humidity}</span>
                  </div>
                  <div className="pt-2 border-t">
                    <span className="text-gray-500 font-medium block mb-1">Pot Type:</span>
                    <p className="text-gray-700 text-xs leading-relaxed">{plant.potType}</p>
                  </div>
                  <div className="pt-2 border-t">
                    <span className="text-gray-500 font-medium block mb-1">Toxicity:</span>
                    <p className={`text-xs font-medium ${plant.toxicity.includes("Non-toxic") ? "text-green-600" : "text-red-600"}`}>
                      {plant.toxicity}
                    </p>
                  </div>
                  <div className="pt-2 border-t">
                    <span className="text-gray-500 font-medium block mb-1">Fertilizer:</span>
                    <p className="text-gray-700 text-xs leading-relaxed">{plant.fertilizer}</p>
                  </div>
                </div>

                {/* Care Tips */}
                <div className="border-t pt-3">
                  <p className="text-sm font-semibold mb-2 text-gray-900 flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-green-600" />
                    Expert Care Tips
                  </p>
                  <ul className="space-y-2">
                    {plant.careTips.map((tip, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start gap-2 leading-relaxed">
                        <span className="text-green-500 mt-0.5 flex-shrink-0">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expand Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-2"
                  onClick={() => setExpandedPlant(expandedPlant === plant.id ? null : plant.id)}
                >
                  {expandedPlant === plant.id ? "Show Less" : "View Full Details"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredPlants.length === 0 && (
          <div className="text-center py-16">
            <Leaf className="h-20 w-20 mx-auto text-gray-300 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No plants found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Leaf className="h-6 w-6" />
            <span className="font-semibold text-lg">Complete Plant Encyclopedia</span>
          </div>
          <p className="text-gray-400 text-sm mb-1">
            {comprehensiveIndoorPlants.length} Indoor Plants with Scientific Care Data
          </p>
          <p className="text-gray-500 text-xs">
            Botanically accurate • Research-based • Updated care requirements
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PlantDatabase;