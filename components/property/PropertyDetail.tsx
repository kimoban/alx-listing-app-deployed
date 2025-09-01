import { PropertyProps } from "@/interfaces/index";
import { useState } from "react";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'amenities' | 'reviews'>('overview');

  const tabs = [
    { id: 'overview', label: 'What we offer' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'reviews', label: 'Reviews' }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {property.name}
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              {renderStars(property.rating)}
              <span className="ml-2 text-gray-600 font-medium">
                {property.rating} ({property.reviews?.length || 0} reviews)
              </span>
            </div>
            <span className="text-gray-600">
              {property.address.city}, {property.address.state}, {property.address.country}
            </span>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>{property.offers.bed} beds</span>
            <span>{property.offers.shower} baths</span>
            <span>{property.offers.occupants} guests</span>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-8 h-96">
        <div className="md:col-span-2 md:row-span-2">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {property.images?.slice(1, 5).map((image, index) => (
          <div key={index} className={`${index >= 2 ? 'hidden md:block' : ''}`}>
            <img
              src={image}
              alt={`${property.name} ${index + 2}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section - Property Details */}
        <div className="lg:col-span-2">
          {/* Property Type and Host Info */}
          <div className="border-b pb-6 mb-6">
            <h2 className="text-xl font-semibold mb-2">
              {property.category[0]} hosted by Property Owner
            </h2>
            <p className="text-gray-600">
              {property.offers.occupants} guests · {property.offers.bed} bedrooms · {property.offers.shower} bathrooms
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="border-b mb-6">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mb-8">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">About this place</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {property.description}
                </p>
                {property.discount && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-medium text-green-800 mb-1">Special Offer</h4>
                    <p className="text-green-700">{property.discount}</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'amenities' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.amenities?.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <ReviewSection reviews={property.reviews || []} />
            )}
          </div>

          {/* Category Tags */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Property Features</h3>
            <div className="flex flex-wrap gap-2">
              {property.category.map((cat, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Booking */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <BookingSection 
              price={property.price} 
              rating={property.rating}
              reviewCount={property.reviews?.length || 0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
