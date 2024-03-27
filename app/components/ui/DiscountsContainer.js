import React from "react";
import { data } from "../../utils/products";
import DiscountsCard from "./DiscountsCard";

const DiscountsContainer = () => {
    const getRandomItems = () => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    };

    const randomItems = getRandomItems();

    return (
        <section className="container flex justify-center items-center content-center gap-12 flex-wrap m-5 p-5 bg-slate-600 rounded-2xl w-2/4 border">
            <h1 className="text-4xl text-white text-center">Only for you</h1>
            <div className="container flex items-center justify-center gap-10">
                {randomItems.map(item => (
                    <DiscountsCard key={item.slug} item={item} />
                ))}
            </div>
        </section>
    );
};

export default DiscountsContainer;
