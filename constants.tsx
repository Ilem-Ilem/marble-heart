
import { MenuItem, Testimonial, GalleryImage } from './types';

export const WHATSAPP_URL = "https://wa.me/15812568701";
export const PHONE_NUMBER = "+1 (581) 256-8701";
export const ADDRESS = "140 Idylwyld Dr S, Saskatoon, SK S7L 0Y7, Canada";

export const ABOUT_STORY_LONG = `At Maple Hearth Restaurant, we believe food should feel like home.

Our journey began with a simple dream: to create a place where people could gather around good food, share stories, and enjoy meals made with care. Inspired by traditional hearthside cooking and the rich sweetness of maple flavors, Maple Hearth was built on the idea that comfort food can still be crafted with quality and creativity.

We source fresh ingredients, prepare meals daily, and honor time-tested recipes while adding modern twists. From slow-cooked meats to house-made sauces and desserts baked in our kitchen, every dish reflects our passion for warm hospitality and honest cooking.

Maple Hearth isn’t just a restaurant — it’s a gathering place. A place for families to celebrate milestones, for friends to laugh over burgers, and for couples to enjoy quiet dinners by candlelight. Every guest who walks through our doors becomes part of our story.

Welcome to Maple Hearth — where every meal is served from the heart.`;

export const PARTNER_BRANDS = [
  {
    name: "Apropos",
    description: "Cocktails and light meals offered at bar seating along both sides of the concourse. Vegetarian and gluten-free options.",
    location: "Concourse Main",
    image: "/images/menu/WhatsApp Image 2026-02-08 at 7.35.28 PM.jpeg"
  },
  {
    name: "Booster Juice",
    description: "Smoothies, fresh-squeezed juice, healthy take-out meals and snacks. (T1 — After security)",
    location: "T1 — After security (USA)",
    image: "/images/menu/WhatsApp Image 2026-02-08 at 7.35.29 PM.jpeg"
  },
  {
    name: "The Burger Federation",
    description: "Angus beef burgers with unique international flavours. Vegetarian options.",
    location: "International Wing",
    image: "/images/menu/WhatsApp Image 2026-02-08 at 7.35.30 PM.jpeg"
  },
  {
    name: "Cibo Express Gourmet Market",
    description: "Packaged sandwiches, salads, snacks and drinks, ready for travel. Gluten-free, halal, kosher and vegan options.",
    location: "Market Plaza",
    image: "/images/menu/WhatsApp Image 2026-02-08 at 7.35.31 PM.jpeg"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Breakfast & Brunch
  {
    id: 'b1',
    name: 'Maple Pancake Stack',
    description: 'Fluffy buttermilk pancakes served with warm pure maple syrup and whipped maple butter.',
    category: 'Breakfast & Brunch',
    isMapleSpecial: true,
    image: '/images/menu/WhatsApp Image 2026-02-08 at 7.35.28 PM.jpeg',
    price: '$14'
  },
  {
    id: 'b2',
    name: 'Hearthside French Toast',
    description: 'Thick-cut brioche, cinnamon infusion, topped with a delicate vanilla glaze.',
    category: 'Breakfast & Brunch',
    image: '/images/menu/WhatsApp Image 2026-02-08 at 7.35.29 PM.jpeg',
    price: '$15'
  },
  {
    id: 'b3',
    name: 'Farmhouse Breakfast Platter',
    description: 'Farm eggs, crispy bacon or savory sausage, herb-roasted potatoes, and artisan toast.',
    category: 'Breakfast & Brunch',
    image: '/images/menu/WhatsApp Image 2026-02-08 at 7.35.30 PM.jpeg',
    price: '$18'
  },

  // Burgers & Sandwiches
  {
    id: 's1',
    name: 'Peameal on a Bun',
    description: 'Maple mustard peameal bacon, tomato, aged Canadian cheddar & onion jam with a side of house-cut fries.',
    category: 'Burgers & Sandwiches',
    isMapleSpecial: true,
    image: '/images/menu/WhatsApp Image 2026-02-08 at 7.35.29 PM.jpeg',
    price: '$19'
  },
  {
    id: 's2',
    name: 'The Burger Federation Classic',
    description: 'Angus beef burger with unique international flavours and unique toppings.',
    category: 'Burgers & Sandwiches',
    image: '/images/menu/WhatsApp Image 2026-02-08 at 7.35.31 PM.jpeg',
    price: '$20'
  },

  // Main Courses
  {
    id: 'm1',
    name: 'Crispy Fish Tacos',
    description: 'Crispy Fogo Island cod, carrot and cabbage coleslaw, chipotle mayo, served in warm tortillas.',
    category: 'Main Courses',
    image: '/images/menu/WhatsApp Image 2026-02-08 at 7.35.28 PM.jpeg',
    price: '$21'
  },
  {
    id: 'm2',
    name: 'Grilled Salmon Maple Glaze',
    description: 'Atlantic salmon fillet with a rich maple-soy glaze and seasonal vegetables.',
    category: 'Main Courses',
    isMapleSpecial: true,
    image: '/images/menu/WhatsApp Image 2026-02-08 at 7.35.30 PM.jpeg',
    price: '$28'
  },

  // Salads & Soups
  {
    id: 'sl1',
    name: 'Maple Harvest Salad',
    description: 'Mixed greens, crisp apples, walnuts, and our signature maple vinaigrette.',
    category: 'Salads & Soups',
    isMapleSpecial: true,
    image: '/images/menu/WhatsApp Image 2026-02-08 at 7.35.31 PM.jpeg',
    price: '$16'
  },

  // Desserts
  {
    id: 'd1',
    name: 'Maple Cheesecake',
    description: 'Rich creamy cheesecake with a dark maple syrup swirl baked fresh daily.',
    category: 'Desserts',
    isMapleSpecial: true,
    image: '/images/menu/WhatsApp Image 2026-02-08 at 7.35.32 PM.jpeg',
    price: '$10'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Happy Customer',
    text: 'Absolutely delicious food and wonderful service. Maple Hearth feels like home!'
  },
  {
    id: '2',
    author: 'Local Guest',
    text: 'The flavors are amazing and the atmosphere is perfect for family dinners.'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', url: '/images/menu/WhatsApp Image 2026-02-08 at 7.35.32 PM.jpeg', title: 'Cozy Dining Room', category: 'Interior' },
  { id: '2', url: '/images/menu/WhatsApp Image 2026-02-08 at 7.35.28 PM.jpeg', title: 'Signature Pancakes', category: 'Food' },
];
