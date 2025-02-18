'use client'

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
    title: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl }) => {
    return (
        <motion.div
            className="bg-textYellow rounded-md cursor-pointer w-full h-64 sm:w-[200px] lg:w-[240px]"
            whileHover={{ scale: 1.1 }}
        >
            {/* <div className="h-14 flex justify-center items-center transform -rotate-6 text-black bg-opacity-50 p-2">
                <h3 className="text-xl text-textRed">
                    {title}
                </h3>
            </div> */}

            <div
                className="relative bg-cover rounded-md bg-center h-44 w-full p-2"
                // style={{ backgroundImage: `url(${imageUrl})` }}
            >
                <img src={imageUrl} className="-mt-14" />
                <div className=" bottom-0 left-0 text-center italic text-xl text-white bg-opacity-50 hover:cursor-pointer hover:text-textRed">
                {title}
                </div>
            </div>
        </motion.div>
    );
};

const Products: React.FC = () => {
    const cardsData = [
        {
            title: "Menu salade cesar",
            imageUrl:
                "https://g-ladalle.com/wp-content/uploads/2023/12/menu-salade-cesar-g-la-dalle.jpg-3.png",
        },
        {
            title: "Chicken Dips x5",
            imageUrl:
                "https://g-ladalle.com/wp-content/uploads/2023/12/chicken-dips-g-la-dalle.jpg-5.png",
        },
        {
            title: "Menu enfants Nuggets",
            imageUrl:
                "https://g-ladalle.com/wp-content/uploads/2023/12/MENU-ENFANT-NUGGEST-SITE-INTERNET.png",
        },
        {
            title: "G4",
            imageUrl:
                "https://g-ladalle.com/wp-content/uploads/2023/12/g4-g-la-dalle.jpg-2.png",
        },
        {
            title: "Tiramisu Mangue",
            imageUrl:
                "https://g-ladalle.com/wp-content/uploads/2023/12/tiramisu-mangue-g-la-dalle.jpg-2.png",
        },
    ];

    return (
      <>
      <div className="flex-col h-40 p-4  mt-10 justify-center text-center">
      <p className="text-2xl text-textRed italic">
       DÉVOREZ
        </p>
      <h2 className="text-5xl italic text-textProduct">
          LES BEST OF GLD
        </h2>

      </div>
        

        <div className="flex flex-wrap gap-4 py-10 bg-white justify-center items-center">
          {cardsData.map((card, index) => (
            <Card key={index} title={card.title} imageUrl={card.imageUrl} />
          ))}
        </div>
        <div className="flex justify-center items-center mb-20">
            <button className="bg-textProduct hover:bg-textYellow uppercase text-white text-xl px-10 py-2 rounded-md">
               <h2 className="italic">voir la carte</h2> 
            </button>

        </div>
      </>
    );
};

export default Products;
