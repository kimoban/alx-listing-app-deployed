import React from "react";

interface BookingSectionProps {
  price: number;
  rating: number;
  reviewCount: number;
}

const BookingSection: React.FC<BookingSectionProps> = ({ price, rating, reviewCount }) => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Book this property</h2>
      <p className="mb-2">Price: ${price}</p>
      <p className="mb-2">Rating: {rating} stars</p>
      <p className="mb-2">Reviews: {reviewCount}</p>
      {/* Add booking form or actions here */}
    </section>
  );
};

export default BookingSection;
