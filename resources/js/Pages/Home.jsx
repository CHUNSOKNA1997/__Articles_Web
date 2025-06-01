import React from "react";
import { HeroSection } from "./HeroSection";
import ArticleGrid from "./ArticleGrid";

const Home = ({ posts = [] }) => {
    const postdata = posts.data || [];

    console.log(postdata);

    return (
        <>
            <HeroSection posts={postdata} />
            <ArticleGrid posts={postdata} />
        </>
    );
};

export default Home;
