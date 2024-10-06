import React from "react";
import FeatureFour from "../../svg/FeatureFour";
import FeatureOne from "../../svg/FeatureOne";
import FeatureThree from "../../svg/FeatureThree";
import FeatureTwo from "../../svg/FeatureTwo";
import SectionHeader from "../../utils/SectionHeader";
import FeatureCard from "../cards/FeatureCard";

export default function FeaturesSection() {
  // data for sectionheder components
  let sectionTitle = "Features";
  let sectionHeading = "Main Features Of Play";
  let sectionDescription =
    "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.";

  // data for feature section cards
  // well, this code may look bad, but for diffarent svg icon I have to implimrent this aproch.
  //   we can also call the FeatureCard componets four times with difarent props, but that  can't good patter at all
  const propertyListings = [
    {
      id: 11,
      svgIcon: <FeatureOne></FeatureOne>,
      title: "Premium Property Listings",
      description:
        "Discover an array of hand-picked properties that meet the highest standards of luxury and comfort.",
      linkText: "Learn More",
    },
    {
      id: 12,
      svgIcon: <FeatureTwo></FeatureTwo>,
      title: "Personalized Property Matching",
      description:
        "Our advanced matching system pairs you with properties that align with your specific needs and desires.",
      linkText: "Learn More",
    },
    {
      id: 13,
      svgIcon: <FeatureThree></FeatureThree>,
      title: "Expert Guidance and Support",
      description:
        "Benefit from the expertise of our dedicated team of real estate professionals.",
      linkText: "Learn More",
    },
    {
      id: 14,
      svgIcon: <FeatureFour></FeatureFour>,
      title: "Virtual Tours",
      description:
        "Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home.",
      linkText: "Learn More",
    },
  ];

  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container mx-auto">
        {
          <SectionHeader
            title={sectionTitle}
            heading={sectionHeading}
            description={sectionDescription}
          ></SectionHeader>
        }
        <div className="-mx-4 flex flex-wrap">
          {propertyListings.map((property) => (
            <FeatureCard key={property.id} property={property}></FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}
