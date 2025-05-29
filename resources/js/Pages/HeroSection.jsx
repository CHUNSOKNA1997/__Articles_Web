import React from "react";
export function HeroSection() {
    return (
        <section className="pt-24 pb-10 px-4 bg-gray-900">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Featured Article */}
                    <div className="lg:col-span-2 relative overflow-hidden rounded-lg group">
                        <div className="relative h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt="Global tech conference"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold bg-blue-600 text-white rounded">
                                Technology
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                Global Tech Leaders Gather for Annual Innovation
                                Summit
                            </h2>
                            <p className="text-gray-300 mb-3 line-clamp-2">
                                Industry giants discuss AI regulation,
                                sustainability in tech, and the future of
                                digital innovation at this year's most
                                anticipated tech conference.
                            </p>
                            <div className="flex items-center text-sm text-gray-400">
                                <span>By Sarah Chen</span>
                                <span className="mx-2">•</span>
                                <span>May 15, 2023</span>
                            </div>
                        </div>
                    </div>
                    {/* Secondary Featured Articles */}
                    <div className="flex flex-col space-y-6">
                        <div className="relative overflow-hidden rounded-lg group">
                            <div className="relative h-[190px]">
                                <img
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                    alt="Business markets"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <span className="inline-block px-2 py-1 mb-2 text-xs font-semibold bg-green-600 text-white rounded">
                                    Business
                                </span>
                                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                    Markets Rally as Fed Signals Potential Rate
                                    Cuts
                                </h3>
                                <div className="flex items-center text-xs text-gray-400 mt-2">
                                    <span>By Robert Johnson</span>
                                    <span className="mx-2">•</span>
                                    <span>May 14, 2023</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg group">
                            <div className="relative h-[190px]">
                                <img
                                    src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                    alt="Basketball game"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <span className="inline-block px-2 py-1 mb-2 text-xs font-semibold bg-red-600 text-white rounded">
                                    Sports
                                </span>
                                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                    Underdogs Stun Champions in Playoff Thriller
                                </h3>
                                <div className="flex items-center text-xs text-gray-400 mt-2">
                                    <span>By Michael Rodriguez</span>
                                    <span className="mx-2">•</span>
                                    <span>May 13, 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
