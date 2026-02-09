
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: 'Breakfast & Brunch' | 'Burgers & Sandwiches' | 'Main Courses' | 'Salads & Soups' | 'Sides' | 'Desserts' | 'Drinks';
  isMapleSpecial?: boolean;
  image: string;
  // Added price property to resolve "Property 'price' does not exist on type 'MenuItem'" error
  price: string;
}

export interface Testimonial {
  id: string;
  author: string;
  text: string;
  role?: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: 'Food' | 'Interior' | 'Exterior';
}