import React from "react";
import SectionHeader from "../../utils/SectionHeader";
import FaqCard from "../cards/FaqCard";

export default function FaqSection() {
  // section header data
  let sectionTitle = "FAQ";
  let sectionHeader = "Any Questions? Look Here";
  let sectionDescription =
    "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.";

  // question and answers, own created data...
  let realEstateFAQs = [
    {
      id: 1,
      question: "How to buy property?",
      answer:
        "Find a reputable realtor, inspect properties thoroughly, negotiate the price, secure financing, and finalize with legal documentation.",
    },
    {
      id: 2,
      question: "What is escrow process?",
      answer:
        "Involves a third party holding funds until all contract conditions are satisfied, providing security to both buyer and seller.",
    },
    {
      id: 3,
      question: "How to sell home fast?",
      answer:
        "Price your home competitively, stage it for buyers, market aggressively online and offline, and be flexible with showings.",
    },
    {
      id: 4,
      question: "What is mortgage pre-approval?",
      answer:
        "A lender's provisional approval of a loan amount based on your financial situation, making your offer more credible to sellers.",
    },
  ];

  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container mx-auto">
        <SectionHeader
          title={sectionTitle}
          heading={sectionHeader}
          description={sectionDescription}
        ></SectionHeader>
        <div className="-mx-4 flex  flex-wrap px-8">
          {/* <div className=" w-full px-4 lg:w-1/2"> */}
            {realEstateFAQs.map((faq) => (
              <FaqCard key={faq.id} faq={faq}></FaqCard>
            ))}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
