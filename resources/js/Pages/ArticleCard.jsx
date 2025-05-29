import React from "react";

const ArticleCard = () => {
    return (
        <div className="bg-[#1E293B] rounded-xl overflow-hidden shadow-md text-white max-w-sm">
            <img
                src="/images/climate.jpg" // Update path as needed
                alt="article visual"
                className="w-full h-40 object-cover"
            />
            <div className="p-4">
                <span className="text-sm font-semibold px-2 py-1 rounded bg-purple-500 bg-opacity-20 text-purple-300">
                    Politics
                </span>
                <h3 className="mt-2 text-lg font-bold leading-tight">
                    New Legislation Aims to Address Climate Change Concerns
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                    Lawmakers introduce comprehensive bill targeting emissions
                    reduction and renewable energy investments.
                </p>
                <p className="mt-3 text-xs text-slate-400">
                    Jessica Miller • May 14, 2023
                </p>
            </div>
        </div>
    );
};

export default ArticleCard;
