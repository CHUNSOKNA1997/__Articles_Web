import React, { useEffect } from "react";
import { ArticleCard } from "../components/front/ArticleCard";
import { HeroSection } from "./HeroSection";

const Home = ({ posts = [] }) => {
    const postdata = posts.data || [];

    console.log(postdata);

    useEffect(() => {
        fetch("/api/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => console.error("Failed to fetch posts", err));
    }, []);

    return (
        <>
            <HeroSection posts={postdata} />
        </>
    );
};

export default Home;
