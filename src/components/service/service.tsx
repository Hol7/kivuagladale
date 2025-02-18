import React from "react";

interface CardProps {
  title: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl }) => {
  return (
    <div className="bg-white rounded-md  w-[340px] ">
      <div className=" h-14 flex justify-center items-center transform -rotate-6 text-black bg-opacity-50 p-2">
        <p className="text-3xl text-textRed  ">
          {title}
        </p>
      </div>

      <div
        className="relative bg-cover rounded-md bg-center h-72 w-full sm:w-1/2 lg:w-full p-8"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute bottom-0 left-0 p-4 text-white  bg-opacity-50 hover:cursor-pointer hover:text-textYellow">
          En savoir +
        </div>
      </div>
    </div>
  );
};

const Service: React.FC = () => {
  const cardsData = [
    {
      title: "Coup de dalle ?",
      imageUrl:
        "https://g-ladalle.com/wp-content/uploads/2024/01/Groupe-1824.png",
    },
    {
      title: "Dalle du moment !",
      imageUrl:
        "https://g-ladalle.com/wp-content/uploads/2024/09/DALLE-DU-MOMENT.png",
    },
    {
      title: "Mon petit gld!",
      imageUrl:
        "https://g-ladalle.com/wp-content/uploads/2023/09/mon-petit-gld.png",
    },
  ];

  return (
    <div className="flex gap-10 py-10  bg-white justify-center items-center">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} imageUrl={card.imageUrl} />
      ))}
    </div>
  );
};

export default Service;
