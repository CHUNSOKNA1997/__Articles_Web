import React from "react";
import { HeroSection } from "./HeroSection";
import ArticleGrid from "./ArticleGrid";
import { Head } from "@inertiajs/react";

const Home = ({ posts = [] }) => {
    const postdata = posts.data || [];
    return (
        <>
            <Head title="Home" />
            <HeroSection posts={postdata} />
            <ArticleGrid posts={postdata} />
        </>
    );
};

export default Home;
