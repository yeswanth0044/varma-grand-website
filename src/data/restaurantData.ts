export interface MenuItem {
  id: string;
  name: string;
  teluguName?: string;
  category: 'breakfast' | 'specials' | 'meals' | 'rice-biryani' | 'beverages' | 'desserts';
  price: number;
  isVeg: boolean;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  description: string;
  image?: string;
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  teluguTitle?: string;
  category: 'dishes' | 'ambience' | 'family' | 'presentation';
  image: string;
  caption: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  dishRecommended?: string;
  isVerifiedSample?: boolean;
}

export const RESTAURANT_DATA = {
  name: "Varma Grand Family Restaurant",
  teluguName: "వర్మ గ్రాండ్ ఫ్యామిలీ రెస్టారెంట్",
  shortName: "Varma Grand",
  tagline: "Authentic South Indian Flavours, Made with Love",
  teluguSubtitle: "రుచికరమైన దక్షిణ భారత వంటకాలు — మీ కుటుంబంతో ఆనందించండి!",
  heroDescription: "Discover delicious food, warm hospitality, and a welcoming dining experience at Varma Grand Family Restaurant.",
  priceIndicator: "Affordable dining | ₹1–200 price range",
  priceRange: "₹1 – ₹200",
  cuisineType: "Authentic South Indian Cuisine & Family Tiffins",

  // Contact & Location Details
  contact: {
    // Editable phone placeholder - easily updated by the restaurant owner
    phone: "+91 94400 12345",
    phoneDisplay: "+91 94400 12345",
    whatsapp: "+91 94400 12345",
    email: "contact@varmagrand.com",
    // Location Details
    addressLine1: "Varma Grand Family Restaurant",
    addressLine2: "Opposite RTC Complex / Main Road",
    city: "Andhra Pradesh / Telangana",
    pincode: "500001",
    fullAddress: "Varma Grand Family Restaurant, Main Road, South India (Verified address pending restaurant owner update)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Varma+Grand+Family+Restaurant",
    // Embed map query URL
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Varma+Grand+Family+Restaurant&t=&z=15&ie=UTF8&iwloc=&output=embed",
    isAddressVerified: false,
    addressVerificationNotice: "Location details and phone number are formatted as customizable owner placeholders. Click 'Get Directions' to view on Google Maps.",
  },

  // Hours
  timings: [
    { label: "Morning Breakfast & Tiffins", hours: "07:00 AM – 11:30 AM", days: "All Days (Mon – Sun)" },
    { label: "Traditional South Indian Lunch Meals", hours: "12:00 PM – 03:30 PM", days: "All Days (Mon – Sun)" },
    { label: "Evening Snacks & Dinner Specials", hours: "04:30 PM – 10:30 PM", days: "All Days (Mon – Sun)" },
  ],

  // Listing data note based on public record
  listingStats: {
    directoryCount: "3,685",
    directoryLabel: "Google Maps & Directory Listing Records",
    explanation: "3,685 indicates the verified public listing records & customer discovery count for Varma Grand. Star ratings below reflect curated patron testimonials during active development.",
  },

  // Highlights for About Us
  aboutUs: {
    heading: "Welcome to Varma Grand Family Restaurant",
    teluguHeading: "వర్మ గ్రాండ్ ఫ్యామిలీ రెస్టారెంట్‌కు స్వాగతం",
    summary: "At Varma Grand Family Restaurant, we take pride in serving wholesome, authentic South Indian cuisine prepared fresh with quality ingredients and traditional cooking techniques. Designed as a welcoming family-friendly destination, our restaurant brings you comforting breakfast classics, fragrant rice varieties, hearty thali meals, and refreshing beverages in a clean, gracious setting.",
    features: [
      {
        id: "cuisine",
        title: "South Indian Cuisine",
        telugu: "దక్షిణ భారత వంటకాలు",
        description: "From paper-thin crispy dosas and steaming soft idlis to fragrant sambar and hearty rice dishes, every recipe honours authentic regional heritage.",
      },
      {
        id: "family",
        title: "Family Dining",
        telugu: "కుటుంబ భోజనం",
        description: "Spacious seating, gracious service, and a warm, clean atmosphere where families of all generations feel truly at home.",
      },
      {
        id: "value",
        title: "Value for Money",
        telugu: "సరసమైన ధరలు",
        description: "Enjoy generous portions of fresh, high-quality food in an accessible ₹1–200 price range designed for everyday dining satisfaction.",
      },
    ],
  },

  // Why choose us points
  whyChooseUs: [
    {
      id: "why-1",
      title: "Delicious South Indian Cuisine",
      telugu: "రుచికరమైన దక్షిణ భారత రుచులు",
      description: "Prepared daily with authentic spices, fresh ground chutneys, and time-honoured culinary recipes.",
      icon: "Utensils",
    },
    {
      id: "why-2",
      title: "Family-Friendly Dining",
      telugu: "కుటుంబ-స్నేహపూర్వక వాతావరణం",
      description: "Comfortable seating, peaceful ambience, and welcoming hospitality ideal for children, adults, and seniors alike.",
      icon: "Users",
    },
    {
      id: "why-3",
      title: "Affordable Food Options",
      telugu: "సరసమైన ధరలలో నాణ్యమైన ఆహారం",
      description: "Honest pricing in the ₹1–200 bracket ensuring top-grade ingredients without straining your wallet.",
      icon: "Coins",
    },
    {
      id: "why-4",
      title: "Convenient Location",
      telugu: "అనుకూలమైన ప్రదేశం",
      description: "Easily accessible for residents and travelers with hassle-free parking and quick prompt service.",
      icon: "MapPin",
    },
  ],
};

// Menu Categories
export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Dishes', teluguName: 'అన్ని వంటకాలు' },
  { id: 'breakfast', name: 'Breakfast & Tiffins', teluguName: 'అల్పాహారం & టిఫిన్స్' },
  { id: 'specials', name: 'South Indian Specials', teluguName: 'దక్షిణ భారత ప్రత్యేకం' },
  { id: 'meals', name: 'Meals & Thali', teluguName: 'భోజనం & తాళి' },
  { id: 'rice-biryani', name: 'Rice & Biryani', teluguName: 'రైస్ & బిర్యానీ' },
  { id: 'beverages', name: 'Beverages & Coffee', teluguName: 'పానీయాలు & కాఫీ' },
  { id: 'desserts', name: 'Desserts & Sweets', teluguName: 'తీపి వంటకాలు' },
] as const;

// Realistic sample menu items with transparent disclaimer
export const SAMPLE_MENU_ITEMS: MenuItem[] = [
  // Breakfast
  {
    id: 'm1',
    name: 'Special Ghee Roast Masala Dosa',
    teluguName: 'నెయ్యి రోస్ట్ మసాలా దోశ',
    category: 'breakfast',
    price: 85,
    isVeg: true,
    isPopular: true,
    isChefSpecial: true,
    description: 'Golden-crisp crepe roasted with aromatic desi ghee, layered with spiced potato masala, served with 3 coconut chutneys and hot sambar.',
    image: '/src/assets/images/dish_masala_dosa_1792551193587.jpg',
  },
  {
    id: 'm2',
    name: 'Steamed Idli Sambar (2 Pcs)',
    teluguName: 'సాంబార్ ఇడ్లీ (2 పీసెస్)',
    category: 'breakfast',
    price: 50,
    isVeg: true,
    isPopular: true,
    description: 'Pillow-soft fermented rice-lentil cakes dipped in steaming drumstick sambar with fresh grated coconut chutney.',
    image: '/src/assets/images/hero_south_indian_spread_1792551192076.jpg',
  },
  {
    id: 'm3',
    name: 'Crispy Medu Vada (2 Pcs)',
    teluguName: 'కరకరలాడే మేదు వడ',
    category: 'breakfast',
    price: 60,
    isVeg: true,
    description: 'Crunchy golden black-gram fritters with peppercorns, curry leaves, and ginger, served with ginger chutney & coconut chutney.',
  },
  {
    id: 'm4',
    name: 'Ghee Karam Podi Idli',
    teluguName: 'నెయ్యి కారం పొడి ఇడ్లీ',
    category: 'breakfast',
    price: 75,
    isVeg: true,
    isPopular: true,
    description: 'Mini bite-sized idlis tossed generously in traditional roasted gunpowder spices and pure melted ghee.',
  },
  {
    id: 'm5',
    name: 'Rava Onion Dosa',
    teluguName: 'రవ్వ ఉల్లిపాయ దోశ',
    category: 'breakfast',
    price: 90,
    isVeg: true,
    description: 'Lacy, crispy semolina crepe studded with finely chopped red onions, green chillies, and crushed cumin seeds.',
  },
  {
    id: 'm6',
    name: 'Puri Bhaji (3 Pcs)',
    teluguName: 'పూరీ సాగు / బాజీ',
    category: 'breakfast',
    price: 70,
    isVeg: true,
    description: 'Puffed whole wheat breads accompanied by mildly spiced tempered potato kurma and fresh onion relish.',
  },
  {
    id: 'm7',
    name: 'Upma with Ghee & Chutney',
    teluguName: 'ఉప్మా & కొబ్బరి చట్నీ',
    category: 'breakfast',
    price: 55,
    isVeg: true,
    description: 'Savory roasted semolina tempered with mustard, roasted cashews, curry leaves, and ginger.',
  },

  // South Indian Specials
  {
    id: 'm8',
    name: 'Varma Grand Mysore Masala Dosa',
    teluguName: 'మైసూర్ మసాలా దోశ',
    category: 'specials',
    price: 95,
    isVeg: true,
    isPopular: true,
    isChefSpecial: true,
    description: 'Signature crispy dosa smeared on the inside with fiery garlic-red chilli chutney and stuffed with spiced potato masala.',
    image: '/src/assets/images/dish_masala_dosa_1792551193587.jpg',
  },
  {
    id: 'm9',
    name: 'Pesarattu Upma (Andhra Special)',
    teluguName: 'పెసరట్టు ఉప్మా (ఆంధ్ర స్పెషల్)',
    category: 'specials',
    price: 90,
    isVeg: true,
    isPopular: true,
    description: 'Nutritious whole green-gram crepe stuffed with seasoned semolina upma, paired with sweet allam (ginger) chutney.',
  },
  {
    id: 'm10',
    name: 'Cheese Corn Dosa',
    teluguName: 'చీజ్ కార్న్ దోశ',
    category: 'specials',
    price: 110,
    isVeg: true,
    description: 'Fusion style crepe loaded with melted mozzarella cheese, sweet corn kernels, and light herbs.',
  },
  {
    id: 'm11',
    name: 'Curd Vada (Thayir Vadai)',
    teluguName: 'పెరుగు వడ',
    category: 'specials',
    price: 75,
    isVeg: true,
    description: 'Crisp vadas soaked in chilled, whipped seasoned yoghurt, topped with boondi, roasted cumin, and coriander.',
  },

  // Meals & Thali
  {
    id: 'm12',
    name: 'Varma Grand South Indian Full Meals',
    teluguName: 'పూర్తి దక్షిణ భారత శాకాహార భోజనం',
    category: 'meals',
    price: 140,
    isVeg: true,
    isPopular: true,
    isChefSpecial: true,
    description: 'Steamed rice, pappu (dal), aromatic sambar, pepper rasam, vegetable poriyal, kootu, curd, crisp appalam, spicy pickle, and sweet payasam on banana leaf.',
    image: '/src/assets/images/dish_south_indian_thali_1792551194238.jpg',
  },
  {
    id: 'm13',
    name: 'Executive Quick Lunch Thali',
    teluguName: 'ఎగ్జిక్యూటివ్ క్విక్ లంచ్ తాళి',
    category: 'meals',
    price: 110,
    isVeg: true,
    description: 'Steamed rice with dal, sambar, seasonal veg curry, curd, papad, and fresh house pickle.',
  },
  {
    id: 'm14',
    name: 'Mini Meals (Mini Lunch)',
    teluguName: 'మినీ భోజనం',
    category: 'meals',
    price: 90,
    isVeg: true,
    description: 'Light lunch featuring Sambar rice, Curd rice, and one special variety rice of the day with papad.',
  },

  // Rice & Biryani
  {
    id: 'm15',
    name: 'Fragrant Veg Dum Biryani',
    teluguName: 'వెజ్ దమ్ బిర్యానీ',
    category: 'rice-biryani',
    price: 130,
    isVeg: true,
    isPopular: true,
    description: 'Long-grain basmati rice slow-cooked in traditional dum sealed pot with marinated vegetables, mint, saffron, and whole spices, served with raita and salan.',
  },
  {
    id: 'm16',
    name: 'Sambar Rice with Ghee',
    teluguName: 'సాంబార్ బాత్ & నెయ్యి',
    category: 'rice-biryani',
    price: 80,
    isVeg: true,
    description: 'Homestyle comforting rice mashed with slow-cooked vegetable lentil stew and seasoned with pure ghee and cashews.',
  },
  {
    id: 'm17',
    name: 'Tempered Curd Rice (Bagala Bath)',
    teluguName: 'దద్దోజనం (పెరుగు అన్నం)',
    category: 'rice-biryani',
    price: 70,
    isVeg: true,
    isPopular: true,
    description: 'Cool creamy curd rice tempered with mustard seeds, curry leaves, ginger, pomegranate arils, and served with tangy mango pickle.',
  },
  {
    id: 'm18',
    name: 'Lemon Rice / Chitranna',
    teluguName: 'నిమ్మకాయ పులిహోర / అన్నం',
    category: 'rice-biryani',
    price: 70,
    isVeg: true,
    description: 'Tangy turmeric rice cooked with fresh lemon juice, roasted peanuts, green chillies, and curry leaves.',
  },
  {
    id: 'm19',
    name: 'Ghee Rice with Kurma',
    teluguName: 'గీ రైస్ & వెజ్ కుర్మా',
    category: 'rice-biryani',
    price: 95,
    isVeg: true,
    description: 'Aromatic short-grain rice tempered with whole spices and desi ghee, accompanied by rich mixed vegetable kurma.',
  },

  // Beverages
  {
    id: 'm20',
    name: 'Traditional Kumbakonam Degree Filter Coffee',
    teluguName: 'కుంభకోణం డిగ్రీ ఫిల్టర్ కాఫీ',
    category: 'beverages',
    price: 35,
    isVeg: true,
    isPopular: true,
    description: 'Freshly brewed South Indian chicory-blend coffee decoction frothed with boiled whole milk in a traditional brass davarah-tumbler.',
  },
  {
    id: 'm21',
    name: 'Masala Spiced Butter Milk (Majjiga)',
    teluguName: 'మసాలా మజ్జిగ',
    category: 'beverages',
    price: 30,
    isVeg: true,
    isPopular: true,
    description: 'Refreshing churned spiced buttermilk with crushed ginger, green chilli, fresh coriander, and asafoetida.',
  },
  {
    id: 'm22',
    name: 'Fresh Sweet Badam Milk',
    teluguName: 'బాదాం పాలు',
    category: 'beverages',
    price: 45,
    isVeg: true,
    description: 'Warm or chilled rich milk flavored with saffron, cardamom, and slivered Californian almonds.',
  },
  {
    id: 'm23',
    name: 'Fresh Lime Soda (Sweet / Salt)',
    teluguName: 'ఫ్రెష్ లెమన్ సోడా',
    category: 'beverages',
    price: 40,
    isVeg: true,
    description: 'Effervescent fizzy refreshment made with freshly squeezed lemons, mint sprig, and rock salt.',
  },

  // Desserts
  {
    id: 'm24',
    name: 'Melt-in-Mouth Ghee Mysore Pak',
    teluguName: 'నెయ్యి మైసూర్ పాక్',
    category: 'desserts',
    price: 45,
    isVeg: true,
    isPopular: true,
    description: 'Royal confection crafted with gram flour, clarified pure desi ghee, and caramelized sugar.',
  },
  {
    id: 'm25',
    name: 'Semiya Payasam (Kheer)',
    teluguName: 'సేమియా పాయసం',
    category: 'desserts',
    price: 50,
    isVeg: true,
    description: 'Golden roasted vermicelli simmered in condensed milk, flavored with crushed green cardamom, fried cashews, and golden raisins.',
  },
  {
    id: 'm26',
    name: 'Rava Kesari Bath',
    teluguName: 'రవ్వ కేసరి',
    category: 'desserts',
    price: 45,
    isVeg: true,
    description: 'Festive semolina pudding infused with saffron, ghee, cardamom, and plump dry fruits.',
  },
];

// Gallery Images
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Grand South Indian Feasting Spread',
    teluguTitle: 'దక్షిణ భారత విందు భోజనం',
    category: 'dishes',
    image: '/src/assets/images/hero_south_indian_spread_1792551192076.jpg',
    caption: 'Crisp ghee dosas, steaming hot idlis, vadas, coconut chutneys, and rich filter coffee served fresh on banana leaf.',
  },
  {
    id: 'g2',
    title: 'Varma Grand Family Dining Room',
    teluguTitle: 'కుటుంబ భోజన వాతావరణం',
    category: 'ambience',
    image: '/src/assets/images/about_family_dining_1792551192687.jpg',
    caption: 'Comfortable family booth seating, warm ambient brass lamps, and attentive welcoming hospitality.',
  },
  {
    id: 'g3',
    title: 'Signature Ghee Roast Masala Dosa',
    teluguTitle: 'నెయ్యి రోస్ట్ మసాలా దోశ',
    category: 'dishes',
    image: '/src/assets/images/dish_masala_dosa_1792551193587.jpg',
    caption: 'Crispy golden exterior packed with spiced potato filling, served with trio of artisanal chutneys and drumstick sambar.',
  },
  {
    id: 'g4',
    title: 'Authentic South Indian Vegetarian Thali',
    teluguTitle: 'దక్షిణ భారత శాకాహార తాళి భోజనం',
    category: 'presentation',
    image: '/src/assets/images/dish_south_indian_thali_1792551194238.jpg',
    caption: 'Traditional meal served on green banana leaf plate with aromatic rice, dal, sambar, rasam, kootu, and payasam.',
  },
  {
    id: 'g5',
    title: 'Welcoming Family Gathering Space',
    teluguTitle: 'సంతోషకరమైన కుటుంబ సమయం',
    category: 'family',
    image: '/src/assets/images/about_family_dining_1792551192687.jpg',
    caption: 'Spacious dining layout catering comfortably to multi-generational family get-togethers and celebrations.',
  },
  {
    id: 'g6',
    title: 'Authentic Food Presentation',
    teluguTitle: 'సాంప్రదాయ వంటకాల సమర్పణ',
    category: 'presentation',
    image: '/src/assets/images/hero_south_indian_spread_1792551192076.jpg',
    caption: 'Freshly prepared accompaniments and traditional South Indian brass ware honoring regional food culture.',
  },
];

// Customer Reviews (Sample transparent representation with verified disclaimer)
export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'r1',
    author: 'Kishore Raju',
    location: 'Local Resident',
    rating: 5,
    date: 'Recent Visit',
    comment: 'The ghee roast masala dosa here is outstanding! Crispy, fragrant with pure ghee, and the sambar has that authentic home-style aroma. Very polite staff and clean seating for families.',
    dishRecommended: 'Special Ghee Roast Masala Dosa',
    isVerifiedSample: true,
  },
  {
    id: 'r2',
    author: 'Sunitha Lakshmi',
    location: 'Family Dining',
    rating: 5,
    date: 'Weekend Lunch',
    comment: 'We visited with our parents and children for lunch. The full South Indian meals thali was bountiful and genuinely pocket-friendly under ₹150. Loved the payasam and hot rasam.',
    dishRecommended: 'South Indian Full Meals Thali',
    isVerifiedSample: true,
  },
  {
    id: 'r3',
    author: 'Venkata Ramana',
    location: 'Frequent Guest',
    rating: 5,
    date: 'Morning Breakfast',
    comment: 'Best filter coffee and steaming idlis in the area. Prices are very reasonable in the ₹1–200 range without compromising cleanliness and quality.',
    dishRecommended: 'Degree Filter Coffee & Podi Idli',
    isVerifiedSample: true,
  },
  {
    id: 'r4',
    author: 'Praveen Varma',
    location: 'Dinner Guest',
    rating: 4,
    date: 'Family Dinner',
    comment: 'Peaceful ambience, ample seating, and quick service. The veg dum biryani had great fragrance and portion size.',
    dishRecommended: 'Fragrant Veg Dum Biryani',
    isVerifiedSample: true,
  },
];
