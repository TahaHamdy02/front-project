// import React, { useState } from "react";
import "./allblogs.css";
import { BlogsData } from "../../../constants/Blogs";

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AllBlogs extends Component {
  constructor() {
    super();
    this.state = {
      BlogsData,
      itemsToShow: 2,
      expanded: false,
      dbBtn: false,
    };
    this.showMore = this.showMore.bind(this);
    this.showLess = this.showLess.bind(this);
  }
  showMore() {
    // this.state.itemsToShow ===2 &&
    this.setState({
      itemsToShow: Math.min(this.state.itemsToShow + 2, 10),
      //  this.state.BlogsData.length
    });
    this.state.itemsToShow === this.state.BlogsData.length &&
      this.setState({ expanded: true });
    // : this.setState({ expanded: false });
    console.log(this.state.itemsToShow);
    console.log(this.state.expanded);
  }
  showLess() {
    this.setState({
      itemsToShow: Math.max(this.state.itemsToShow - 2, 2),
    });
  }
  render() {
    return (
      <div className="app__allblogs">
        {this.state.BlogsData.slice(0, this.state.itemsToShow).map(
          (blog, index) => (
            <div
              className="app__allblogs-blog"
              key={index}
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img src={blog.images[0]} alt="gg" />
              <div className="app__allblogs-blog_about flex__center">
                <p>Posted by : {blog.by}</p>
                <p>{blog.in}</p>
                <Link
                  className="app__allblogs-blog_about-tag"
                  to={`/ourblogs/search-resault/${blog.tags[0]}`}
                >
                  {blog.tags[0]}
                </Link>
                <Link
                  className="app__allblogs-blog_about-tag"
                  to={`/ourblogs/search-resault/${blog.tags[1]}`}
                >
                  {blog.tags[1]}
                </Link>
                <Link
                  className="app__allblogs-blog_about-tag"
                  to={`/ourblogs/search-resault/${blog.tags[2]}`}
                >
                  {blog.tags[2]}
                </Link>
              </div>
              <Link
                to={`blog/${blog.id}/${blog.title}`}
                className="app__allblogs-blog_title"
              >
                {blog.title}{" "}
              </Link>
              <p className="app__allblogs-blog_text p__opensans">{blog.text}</p>
              <div className="app__allblogs-blog_hashTags flex__center">
                <p>0 Comments</p>
                <p>
                  <Link to={`/ourblogs/search-resault/${blog.hashTags[0]}`}>
                    #{blog.hashTags[0]}
                  </Link>
                </p>
                <p>
                  <Link to={`/ourblogs/search-resault/${blog.hashTags[1]}`}>
                    #{blog.hashTags[1]}
                  </Link>
                </p>
              </div>
              <button type="buttton">Read More</button>
            </div>
          )
        )}
        <div className="flex__center">
          {this.state.itemsToShow === 2 ? (
            <span className="custom__button" onClick={this.showMore}>
              Show more
            </span>
          ) : this.state.itemsToShow > 2 &&
            this.state.itemsToShow < this.state.BlogsData.length ? (
            <>
              {" "}
              <span
                className="custom__button"
                style={{ margin: "1rem" }}
                onClick={this.showMore}
              >
                Show more
              </span>{" "}
              <span
                className="custom__button"
                onClick={this.showLess}
                style={{ background: "transparent", color: "#dcca87" }}
              >
                Show less
              </span>
            </>
          ) : (
            <span className="custom__button" onClick={this.showLess}>
              Show less
            </span>
          )}
        </div>
      </div>
    );
  }
}
