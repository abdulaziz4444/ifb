import Image from "next/image";
import React from "react";

const cardsData = [
  {
    id: 1,
    image: "/images/card-pic.png",
    iconImage: "/images/card-icon.png",
    heading: "card one",
  },
  {
    id: 2,
    image: "/images/card-pic.png",
    iconImage: "/images/card-icon.png",
    heading: "card two",
  },
  {
    id: 3,
    image: "/images/card-pic.png",
    iconImage: "/images/card-icon.png",
    heading: "card three",
  },
  {
    id: 4,
    image: "/images/card-pic.png",
    iconImage: "/images/card-icon.png",
    heading: "card four",
  },
  {
    id: 5,
    image: "/images/card-pic.png",
    iconImage: "/images/card-icon.png",
    heading: "card five",
  },
  {
    id: 6,
    image: "/images/card-pic.png",
    iconImage: "/images/card-icon.png",
    heading: "card six",
  },
  {
    id: 7,
    image: "/images/card-pic.png",
    iconImage: "/images/card-icon.png",
    heading: "card seven",
  },
  {
    id: 8,
    image: "/images/card-pic.png",
    iconImage: "/images/card-icon.png",
    heading: "card eight",
  },
];

const Cards = () => {
  return (
    <>
      <section className="pb-20">
        <div className="container">
          <h2 className="font-medium text-5xl leading-[55px] max-w-2xl mx-auto">
            <span className="text-[#6AAD80]">Diese Leistungen </span>bringen
            dich und deine Organisation voran
          </h2>
          <p className="text-lg font-normal text-[#656565] max-w-5xl text-center pt-4 mx-auto">
            Es ist kein Geheimnis, dass klassische Weiterbildungen oft wenig
            Wirkung zeigen. Beim 
            <strong className="text-black ">
              Institut für Feelgood Beratung
            </strong>
             ist das anders. Unsere Leistungen sind praxisnah, modern und so
            gestaltet, dass du sofort Fortschritte spürst.
          </p>
          {/* cards */}
          <div className="mt-10 grid grid-cols-4 gap-6">
            {cardsData.map((card) => (
              <div key={card.id} className="relative">
                <Image
                  src={card.image}
                  width={405}
                  height={627}
                  alt={card.heading || "cards image"}
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute bg-[#000000B2] inset-0 rounded-3xl"></div>
                <div className="absolute bottom-10 pl-8">
                  <Image
                    src={card.iconImage}
                    width={48}
                    height={48}
                    alt={card.heading || "icon"}
                    className="object-cover "
                  />
                  <h5 className="text-white text-2xl font-medium pt-5">
                    {card.heading}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
