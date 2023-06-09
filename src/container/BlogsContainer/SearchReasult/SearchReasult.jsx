import React, { useState } from "react";
import "./searchreasult.css";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BlogsData } from "../../../constants/Blogs";
const SearchReasult = () => {
  const searchQuery = useParams().type;
  const [search, setState] = useState({
    search: searchQuery || "",
  });
  const navigate = useNavigate();
  const filteredData = BlogsData.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.join(" ").toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/ourblogs/search-resault/${search.search}`);
  };
  console.log(filteredData);

  return (
    <div className="app__searchreasult flex__center section__padding">
      {filteredData.length > 0 ? (
        filteredData.map((blog, index) => (
          <div className="app__allblogs-blog" key={index}>
            <img src={blog.images[0]} alt="gg" />
            <div className="app__allblogs-blog_about flex__center">
              <p>Posted by : {blog.by}</p>
              <p>{blog.in}</p>
              <p className="app__allblogs-blog_about-tag">{blog.tags[0]}</p>
              <p className="app__allblogs-blog_about-tag">{blog.tags[1]}</p>
              <p className="app__allblogs-blog_about-tag">{blog.tags[2]}</p>
            </div>
            <Link
              to={`/ourblogs/blog/${blog.id}/${blog.title}`}
              className="app__allblogs-blog_title"
            >
              {blog.title}{" "}
            </Link>
            <p className="app__allblogs-blog_text p__opensans">{blog.text}</p>
            <div className="app__allblogs-blog_hashTags flex__center">
              <p>0 Comments</p>
              <p>#{blog.hashTags[0]}</p>
              <p>#{blog.hashTags[1]}</p>
            </div>
            <button type="buttton">Read More</button>
          </div>
        ))
      ) : (
        <div className="app__searchreasult-error flex__center">
          <h2 className="headtext__cormorant">Nothing Found</h2>
          <p className="p__opensans">
            Sorry, but nothing matched your search terms. Please try again with
            some different keywords.
          </p>
          <form
            className="app__searchreasult-error_form"
            onSubmit={handleSubmit}
          >
            <input
              required
              value={search.search}
              name="search"
              onChange={handleInputChange}
              type="text"
              className="app__searchreasult-error_form-input"
              placeholder="search..."
            />
            <span className="icon">
              <button type="submit">
                <FiSearch />
              </button>
            </span>
          </form>
          <div className="btns flex__center">
            <button type="button" className=" custom__button">
              <Link to="/home">back to Home</Link>
            </button>
            <button type="button" className=" custom__button">
              <Link to="/ourblogs">back to blogs</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchReasult;
