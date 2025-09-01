
import axios from "axios";
import { useState } from "react";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Simple validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.cardNumber) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    try {
      await axios.post("/api/bookings", formData);
      setSuccess("Booking confirmed!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        billingAddress: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
      });
    } catch {
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Contact Detail</h2>
          <form onSubmit={handleSubmit}>
            {/* Contact Information */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label>First Name</label>
                <input name="firstName" type="text" className="border p-2 w-full mt-2" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
              </div>
              <div>
                <label>Last Name</label>
                <input name="lastName" type="text" className="border p-2 w-full mt-2" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label>Email</label>
                <input name="email" type="email" className="border p-2 w-full mt-2" placeholder="Email" value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <label>Phone Number</label>
                <input name="phoneNumber" type="text" className="border p-2 w-full mt-2" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
              </div>
            </div>

            {/* Payment Information */}
            <h2 className="text-xl font-semibold mt-6">Pay with</h2>
            <div className="mt-4">
              <label>Card Number</label>
              <input name="cardNumber" type="text" className="border p-2 w-full mt-2" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label>Expiration Date</label>
                <input name="expirationDate" type="text" className="border p-2 w-full mt-2" placeholder="MM/YY" value={formData.expirationDate} onChange={handleChange} />
              </div>
              <div>
                <label>CVV</label>
                <input name="cvv" type="text" className="border p-2 w-full mt-2" placeholder="CVV" value={formData.cvv} onChange={handleChange} />
              </div>
            </div>

            {/* Billing Address */}
            <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
            <div className="mt-4">
              <label>Street Address</label>
              <input name="billingAddress" type="text" className="border p-2 w-full mt-2" placeholder="Street Address" value={formData.billingAddress} onChange={handleChange} />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label>City</label>
                <input name="city" type="text" className="border p-2 w-full mt-2" placeholder="City" value={formData.city} onChange={handleChange} />
              </div>
              <div>
                <label>State</label>
                <input name="state" type="text" className="border p-2 w-full mt-2" placeholder="State" value={formData.state} onChange={handleChange} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label>Zip Code</label>
                <input name="zipCode" type="text" className="border p-2 w-full mt-2" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange} />
              </div>
              <div>
                <label>Country</label>
                <input name="country" type="text" className="border p-2 w-full mt-2" placeholder="Country" value={formData.country} onChange={handleChange} />
              </div>
            </div>

            {/* Submit Button */}
            <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full" type="submit" disabled={loading}>
              {loading ? "Processing..." : "Confirm & Pay"}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {success && <p className="text-green-600 mt-2">{success}</p>}
          </form>
        </div>
        <OrderSummary bookingDetails={bookingDetails} />
      </div>
      <CancellationPolicy />
    </div>
  );
}
