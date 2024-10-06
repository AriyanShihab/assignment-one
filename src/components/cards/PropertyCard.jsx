import React from "react";

export default function PropertyCard({ apartment, bedroomSvg, bathroomSvg }) {
  
  const {
    image,
    apartmentName,
    rentPerMonth,
    numberOfRooms,
    numberOfBathrooms,
  } = apartment;
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-600/10">
      <img src={image} />

      <div className="p-6">
        <h4 className="text-2xl font-bold cursor-pointer">{apartmentName}</h4>

        <div className="mt-2">
          <span className="text-xl font-extrabold text-blue-600">
            ${rentPerMonth}
          </span>{" "}
          /M
        </div>
      </div>
      <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
        <div className="flex items-center">
          {bedroomSvg}
          <p>
            <span className="font-bold text-gray-900">3</span> Bedrooms
          </p>
        </div>
        <div className="flex items-center">
          {bathroomSvg}
          <p>
            <span className="font-bold text-gray-900">2</span> Bathrooms
          </p>
        </div>
      </div>
    </div>
  );
}
