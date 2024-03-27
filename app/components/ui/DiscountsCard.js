import React from "react";
import Image from "next/image";
import Link from "next/link";

const DiscountsCard = ({item}) => {

    const discountPrice = Math.round(item.price * 0.8);

    return (
        <article className="bg-gray-800 shadow-lg rounded-2xl text-white flex flex-col items-center border" >
            <Image
                alt={item.title}
                src={`/${item.image}`}
                width={50}
                height={50}
                style={{objectFit: "contain"}}
                />
            <div className="px-4 pt-3 border-t border-gray-200 text-center">
                <h4 className="text-sm my4">{item.title}</h4>
                <p className="text 2xl font-semibold mb-3">${discountPrice}</p>
                <p className="text 2xl font-semibold">20% off code:</p>
                <p className="text 2xl font-semibold mb-6 text-red-500">aR20o</p>
            </div>
        </article>
    );
};

export default DiscountsCard;
