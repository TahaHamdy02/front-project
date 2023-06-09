import React from "react";
import { useParams } from "react-router-dom";
import { Footer, Mainbg } from "../container";
import { BlogDetailSec, BlogSidebar } from "../container/BlogsContainer/Blogs";

const BlogDetails = () => {
  const blogTitle = useParams().blogtitle;
  return (
    <div className="app__blogdetails">
      <Mainbg
        pageTiltle="How To Make Your Food Photographs Look Aesthetic"
        path1="Home"
        to1="/home"
        path2="Our Blogs"
        to2="/ourblogs"
        path3={`Blog "${blogTitle}"`}
      />
      <div
        className="app__blogdetails-container section__padding"
        style={{ overflow: "hidden" }}
      >
        <BlogDetailSec />
        <BlogSidebar />
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
