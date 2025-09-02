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
  images: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
  discount: "",
  description: "A beautiful villa with ocean views and a private pool.",
  reviews: [],
  amenities: ["WiFi", "Pool", "Parking"]
  },
  {
    name: "Mountain Retreat",
    address: { state: "Colorado", city: "Aspen", country: "USA" },
    rating: 4.75,
    category: ["Cabin", "Mountain View", "Fireplace"],
    price: 2100,
    offers: { bed: "2", shower: "2", occupants: "2-4" },
    image: "https://example.com/image3.jpg",
    images: ["https://example.com/image3.jpg", "https://example.com/image4.jpg"],
    discount: "10% off for stays over 5 nights",
    description: "Cozy mountain cabin with stunning views and a fireplace.",
    reviews: [],
    amenities: ["WiFi", "Fireplace", "Mountain View"]
  },
  {
    name: "Alpine Chalet",
    address: { state: "Valais", city: "Zermatt", country: "Switzerland" },
    rating: 4.75,
    category: ["Chalet", "Ski-in/Ski-out", "Hot Tub"],
    price: 4500,
    offers: { bed: "5", shower: "4", occupants: "8-10" },
    image: "https://example.com/image2.jpg",
    images: ["https://example.com/image2.jpg", "https://example.com/image5.jpg"],
    discount: "15% off for 7+ nights",
    description: "Luxury chalet with ski-in/ski-out access and a private hot tub.",
    reviews: [],
    amenities: ["WiFi", "Hot Tub", "Ski-in/Ski-out"]
  },
  {
  name: "City Center Apartment",
  address: { state: "New York", city: "Manhattan", country: "USA" },
  rating: 4.50,
  category: ["Apartment", "Downtown", "Free Wi-Fi"],
  price: 2500,
  offers: { bed: "2", shower: "1", occupants: "2-4" },
  image: "https://example.com/image6.jpg",
  images: ["https://example.com/image6.jpg", "https://example.com/image7.jpg"],
  discount: "",
  description: "Modern apartment in the heart of Manhattan with free Wi-Fi.",
  reviews: [],
  amenities: ["WiFi", "Elevator", "Downtown"]
  }
];

// Add more constants as needed