

import React from "react";
import { PropertyProps } from "@/interfaces";
import Image from "next/image";

interface PropertyCardProps {
	property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
		return (
			<div className="border rounded-lg shadow-md p-4 bg-white">
				<div className="w-full h-48 relative mb-2">
					<Image
						src={property.image}
						alt={property.name}
						fill
						className="object-cover rounded-md"
						sizes="(max-width: 768px) 100vw, 33vw"
						priority={false}
					/>
				</div>
				<h2 className="text-lg font-bold mb-1">{property.name}</h2>
				<p className="text-sm text-gray-600 mb-1">
					{property.address.city}, {property.address.state}, {property.address.country}
				</p>
				<p className="text-sm text-gray-800 mb-1">Category: {property.category.join(", ")}</p>
				<p className="text-sm text-gray-800 mb-1">Price: ${property.price}</p>
				<p className="text-sm text-gray-800 mb-1">Rating: {property.rating} ⭐</p>
				<div className="text-xs text-gray-500 mt-2">
					<span>Bed: {property.offers.bed} | </span>
					<span>Shower: {property.offers.shower} | </span>
					<span>Occupants: {property.offers.occupants}</span>
				</div>
				{property.discount && (
					<div className="mt-2 text-green-600 font-semibold">{property.discount} OFF</div>
				)}
			</div>
		);
};

export default PropertyCard;

