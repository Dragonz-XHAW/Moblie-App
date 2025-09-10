export interface Course {
  id: number;
  name: string;
  category: string;
  duration: string;
  price: number;
  description: string;
  content: string[];
  instructor: string;
  originalPrice?: number;
  image: any; // For require() image imports
}

export const coursesData: Course[] = [
  {
    id: 1,
    name: "First Aid",
    category: "six-month",
    duration: "6 months",
    price: 1500,
    originalPrice: 2500,
    instructor: "Dr. Sarah Mitchell",
    description: "To provide first aid awareness and basic life support",
    image: require('../assets/images/courses/First-Aid.png'),
    content: [
      "Wounds and bleeding",
      "Burns and fractures", 
      "Emergency scene management",
      "Cardio-Pulmonary Resuscitation (CPR)",
      "Respiratory distress e.g., Choking, blocked airway"
    ]
  },
  {
    id: 2,
    name: "Sewing",
    category: "six-month",
    duration: "6 months",
    price: 1500,
    originalPrice: 2500,
    instructor: "Maria Santos",
    description: "To provide alterations and new garment tailoring services",
    image: require('../assets/images/courses/Garment-Tailoring.jpg'),
    content: [
      "Types of stitches",
      "Threading a sewing machine",
      "Sewing buttons, zips, hems and seams",
      "Alterations",
      "Designing and sewing new garments"
    ]
  },
  {
    id: 3,
    name: "Landscaping",
    category: "six-month",
    duration: "6 months",
    price: 1500,
    originalPrice: 2500,
    instructor: "David Green",
    description: "To provide landscaping services for new and established gardens",
    image: require('../assets/images/courses/Landscaping.jpeg'),
    content: [
      "Indigenous and exotic plants and trees",
      "Fixed structures (fountains, statues, benches, tables, built-in braai)",
      "Balancing of plants and trees in a garden",
      "Aesthetics of plant shapes and colours",
      "Garden layout"
    ]
  },
  {
    id: 4,
    name: "Life Skills",
    category: "six-month",
    duration: "6 months",
    price: 1500,
    originalPrice: 2500,
    instructor: "Jennifer Wilson",
    description: "To provide skills to navigate basic life necessities",
    image: require('../assets/images/courses/Life-Skills.png'),
    content: [
      "Opening a bank account",
      "Basic labour law (know your rights)",
      "Basic reading and writing literacy",
      "Basic numeric literacy"
    ]
  },
  {
    id: 5,
    name: "Child Minding",
    category: "six-week",
    duration: "6 weeks",
    price: 750,
    originalPrice: 1250,
    instructor: "Lisa Thompson",
    description: "To provide basic child and baby care",
    image: require('../assets/images/courses/Baby-Care.jpg'),
    content: [
      "Birth to six-month old baby needs",
      "Seven-month to one year old needs",
      "Toddler needs",
      "Educational toys"
    ]
  },
  {
    id: 6,
    name: "Cooking",
    category: "six-week",
    duration: "6 weeks",
    price: 750,
    originalPrice: 1250,
    instructor: "Chef Michael Brown",
    description: "To prepare and cook nutritious family meals",
    image: require('../assets/images/courses/Cooking.avif'),
    content: [
      "Nutritional requirements for a healthy body",
      "Types of protein, carbohydrates and vegetables",
      "Planning meals",
      "Tasty and nutritious recipes",
      "Preparation and cooking of meals"
    ]
  },
  {
    id: 7,
    name: "Garden Maintenance",
    category: "six-week",
    duration: "6 weeks",
    price: 750,
    originalPrice: 1250,
    instructor: "Robert Johnson",
    description: "To provide basic knowledge of watering, pruning and planting in a domestic garden.",
    image: require('../assets/images/courses/Garden-Maintenance.jpg'),
    content: [
      "Water restrictions and the watering requirements of indigenous and exotic plants",
      "Pruning and propagation of plants",
      "Planting techniques for different plant types"
    ]
  }
];

export const Colors = {
  primary: '#07c597',
  darkBg: '#2d2f31',
  darkBlueBg: '#292f69',
  badgePurple: '#986cff',
  ctaBlueBtn: '#3c65f5',
  textDark: '#1c1d1f',
  textLight: '#6a6f73',
  background: '#f7f9fa',
  white: '#ffffff',
  error: '#dc3545',
  success: '#28a745',
  orange: '#ff6b35',
  yellow: '#f6b300'
}; 