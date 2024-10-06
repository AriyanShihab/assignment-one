import React from "react";
import BathroomsSvg from "../../svg/BathroomsSvg";
import BedroomSvg from "../../svg/BedroomSvg";
import SectionHeader from "../../utils/SectionHeader";
import PropertyCard from "../cards/PropertyCard";

export default function PropertySection() {
  const apartments = [
    {
      id: 1,
      image: "./assets/room-1.avif",
      apartmentName: "Luxury Loft",
      rentPerMonth: 2500,
      numberOfRooms: 3,
      numberOfBathrooms: 2,
    },
    {
      id: 2,
      image: "./assets/room-2.avif",
      apartmentName: "Modern Studio",
      rentPerMonth: 1500,
      numberOfRooms: 1,
      numberOfBathrooms: 1,
    },
    {
      id: 3,
      image: "./assets/room-3.avif",
      apartmentName: "Cozy Cottage",
      rentPerMonth: 1800,
      numberOfRooms: 2,
      numberOfBathrooms: 1,
    },
    {
      id: 4,
      image: "./assets/room-4.avif",
      apartmentName: "Urban Apartment",
      rentPerMonth: 2200,
      numberOfRooms: 2,
      numberOfBathrooms: 2,
    },
    {
      id: 5,
      image: "./assets/room-5.avif",
      apartmentName: "Spacious Penthouse",
      rentPerMonth: 3500,
      numberOfRooms: 4,
      numberOfBathrooms: 3,
    },
    {
      id: 6,
      image: "./assets/room-6.avif",
      apartmentName: "Charming Duplex",
      rentPerMonth: 2800,
      numberOfRooms: 3,
      numberOfBathrooms: 2,
    },
  ];
  let sectionTitle = "Properties";
  let sectionHeading = "Grab your Dream Property";
  let sectionDescription =
    "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.";

  return (
    <div className="container mx-auto py-16">
      {
        <SectionHeader
          title={sectionTitle}
          heading={sectionHeading}
          description={sectionDescription}
        ></SectionHeader>
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apartments.map((apartment) => (
          <PropertyCard
            key={apartment.id}
            apartment={apartment}
            bedroomSvg={<BedroomSvg></BedroomSvg>}
            bathroomSvg={<BathroomsSvg></BathroomsSvg>}
          ></PropertyCard>
        ))}
      </div>
    </div>
  );
}
