import React from "react";

const ArticleGrid = () => {
    return (
        <section className="bg-[#0F172A] px-21 py-10 min-h-screen text-white">
            <h2 className="text-3xl font-bold mb-6">Latest News</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-[#1E293B] rounded-xl overflow-hidden shadow-md">
                    <img
                        src="/images/climate.jpg"
                        alt="Climate legislation"
                        className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="mt-2 text-lg font-bold leading-tight">
                            New Legislation Aims to Address Climate Change
                            Concerns
                        </h3>
                        <p className="mt-1 text-sm text-slate-300">
                            Lawmakers introduce comprehensive bill targeting
                            emissions reduction and renewable energy
                            investments.
                        </p>
                        <p className="mt-3 text-xs text-slate-400">
                            Jessica Miller • May 14, 2023
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#1E293B] rounded-xl overflow-hidden shadow-md">
                    <img
                        src="/images/startup.jpg"
                        alt="Startup funding"
                        className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="mt-2 text-lg font-bold leading-tight">
                            Startup Secures $50 Million in Series B Funding
                            Round
                        </h3>
                        <p className="mt-1 text-sm text-slate-300">
                            Tech innovator attracts major investment for
                            expansion into European markets and product
                            development.
                        </p>
                        <p className="mt-3 text-xs text-slate-400">
                            David Chen • May 13, 2023
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#1E293B] rounded-xl overflow-hidden shadow-md">
                    <img
                        src="/images/quantum.jpg"
                        alt="Quantum computing"
                        className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="mt-2 text-lg font-bold leading-tight">
                            Revolutionary Quantum Computing Breakthrough
                            Announced
                        </h3>
                        <p className="mt-1 text-sm text-slate-300">
                            Scientists achieve quantum supremacy with new
                            processor capable of solving complex problems in
                            seconds.
                        </p>
                        <p className="mt-3 text-xs text-slate-400">
                            Emily Zhang • May 12, 2023
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArticleGrid;
