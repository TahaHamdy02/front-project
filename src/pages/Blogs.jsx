import React from "react";
import { Footer, Mainbg } from "../container";
import { AllBlogs, BlogSidebar } from "../container/BlogsContainer/Blogs";

function Blogs() {
  return (
    <div className="app__blogs">
      <Mainbg
        pageTiltle="Our Blogs"
        path1="Home"
        to1="/home"
        path2="Our Blogs"
        to2="/ourblogs"
      />
      <div className="app__blogpage section__padding app__wrapper">
        <AllBlogs />
        <BlogSidebar />
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;
