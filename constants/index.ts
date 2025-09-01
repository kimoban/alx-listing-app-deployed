export const API_URL = 'https://api.example.com/listings';

export const DEFAULT_IMAGE = '/assets/placeholder.jpg';

import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://example.com/image1.jpg",
    discount: ""
  },
  {
    name: "Mountain Retreat",
    address: { state: "Colorado", city: "Aspen", country: "USA" },
    rating: 4.75,
    category: ["Chalet", "Ski-in/Ski-out", "Hot Tub"],
    price: 4500,
    offers: { bed: "5", shower: "4", occupants: "8-10" },
    image: "https://example.com/image2.jpg",
    discount: "15% off for 7+ nights"
  },
  {
    name: "City Center Apartment",
    address: { state: "New York", city: "Manhattan", country: "USA" },
    rating: 4.50,
    category: ["Apartment", "Downtown", "Free Wi-Fi"],
    price: 2500,
    offers: { bed: "2", shower: "1", occupants: "2-4" },
    image: "https://example.com/image3.jpg",
    discount: ""
  }
];

// Add more constants as needed