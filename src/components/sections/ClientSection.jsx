import React from "react";
import SectionHeader from "../../utils/SectionHeader";
import ClientCard from "../cards/ClientCard";

export default function ClientSection() {
  // data for section header component
  const sectionHeaderData = {
    sectionTitle: "Our Team Members",
    sectionHeading: "Our Clients",
    sectionDescription:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.",
  };

  // clients data for mapping to render clientCard Component

  const clients = [
    {
      id: 1,
      name: "Melissa Tatcher",
      post: "Marketing Expert",
      img: "./assets/team-01.png",
    },
    {
      id: 2,
      name: "Stuard Ferrel",
      post: "Digital Marketer",
      img: "./assets/image-02.png",
    },
    {
      id: 3,
      name: "Eva Hudson",
      post: "Creative Designer",
      img: "./assets/image-03.png",
    },
    {
      id: 4,
      name: "Jackie Sanders",
      post: "Founder of Facebook",
      img: "./assets/image-04.png",
    },
  ];
  return (
    <section className="overflow-hidden bg-gray-100/50 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="">
          <SectionHeader data={sectionHeaderData}
          ></SectionHeader>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          {clients.map((client) => (
            <ClientCard key={client.id} client={client}></ClientCard>
          ))}
        </div>
      </div>
    </section>
  );
}
