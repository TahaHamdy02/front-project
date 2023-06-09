import React, { useState } from "react";
import "./blogdetail.css";
import { useParams } from "react-router-dom";
import { BlogsData } from "../../../constants/Blogs";
import { Video } from "../../../components";
import { meal } from "../../../constants";
import blogsComments from "../../../constants/Blogs/BlogsComments";
import Comments from "../../../components/Comments/Comments";
const BlogDetailSec = () => {
  const { blogtitle, id } = useParams();
  const targetBlog = BlogsData.find(
    (blog) => blog.id === Number(id) && blog.title === blogtitle
  );
  const blog = blogsComments.find((blog) => blog.id === Number(id));
  const [clicked, setClicked] = useState("0");
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  const videoStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const blogAbout = (
    <div
      className="app__allblogs-blog_about flex__center"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <p>Posted by : {targetBlog.by}</p>
      <p>{targetBlog.in}</p>
      <p className="app__allblogs-blog_about-tag">{targetBlog.tags[0]}</p>
      <p className="app__allblogs-blog_about-tag">{targetBlog.tags[1]}</p>
      <p className="app__allblogs-blog_about-tag">{targetBlog.tags[2]}</p>
    </div>
  );
  const blogDescriptionInfo = (
    <div
      className="app__allblogs-blog_description-info"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      {targetBlog.detailDesc.map((text, index) => (
        <div className="flex__start" key={index}>
          <div className="dash" />
          <p
            className="app__allblogs-blog_text p__opensans"
            style={{ margin: ".5rem 0" }}
          >
            {text}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="app__blogdetail">
      <div className="app__allblogs-blog">
        <img
          src={targetBlog.images[0]}
          alt="gg"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        />
        {blogAbout}
        <p
          className="app__allblogs-blog_text p__opensans"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          {targetBlog.detailText}
        </p>
        <div
          className="app__allblogs-blog_quote"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h2
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            {targetBlog.detailQuote}
          </h2>
        </div>
        <div className="app__allblogs-blog_description">
          <h2
            className="app__allblogs-blog_heading"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            How To Prepare
          </h2>
          <p
            className="app__allblogs-blog_text p__opensans"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            {targetBlog.detailMainDesc}
          </p>
          {blogDescriptionInfo}
          <div
            className="app__allblogs-blog_description-video"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <Video
              VidSrc={meal}
              vidStyle={videoStyle}
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            />
          </div>
          <p
            className="app__allblogs-blog_text p__opensans"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            {targetBlog.videoDetails}
          </p>
          <h2
            className="app__allblogs-blog_heading"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            ingredients
          </h2>
          <div className="app__allbogs-blog_ingredients">
            <div
              className="app__allbogs-blog_ingredients-img"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img src={targetBlog.images[2]} alt="ingredients-img" />
            </div>
            <div className="app__allbogs-blog_ingredients-info_gap">
              {targetBlog.ingredients.map((ingredient, index) => (
                <div
                  className="flex__start"
                  key={index}
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className="dash" />
                  <p
                    className="app__allblogs-blog_text p__opensans"
                    style={{ margin: ".5rem 0" }}
                  >
                    {ingredient}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <h2
            className="app__allblogs-blog_heading"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Directions
          </h2>
          <div className="app__allblogs_ingredients-directions">
            {targetBlog.Directions.map((text, index) => (
              <p
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="app__allblogs-blog_text p__opensans"
                key={index}
                style={{ margin: ".5rem 0" }}
              >
                {text}
              </p>
            ))}
          </div>
          <div
            className="app__allblogs-blog_hashTags flex__center"
            style={{ margin: "2rem 0" }}
          >
            <p
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              0 Comments
            </p>
            <p
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              #{targetBlog.hashTags[0]}
            </p>
            <p
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              #{targetBlog.hashTags[1]}
            </p>
          </div>
        </div>
      </div>
      {blog && <h1 className="app__allblogs-blog_heading">Comments(3)</h1>}
      {blog &&
        blog.comments.map((comment, index) => (
          <Comments
            img={comment.user_img}
            name={comment.user_name}
            content={comment.comment_text}
            date={comment.date}
            key={index}
            onToggle={() => handleToggle(index)}
            active={clicked === index}
          />
        ))}
    </div>
  );
};

export default BlogDetailSec;
