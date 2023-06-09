import React, { Component } from "react";
import "./blogsidebar.css";
import { Link, Navigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaSearch, FaTwitter } from "react-icons/fa";
import { BlogsData } from "../../../constants/Blogs";
import { Carousel } from "../../../components";
export default class BlogSidebar extends Component {
  constructor() {
    super();
    this.state = {
      tags: [],
      count: {},
      BlogsData,
      searchInput: "",
      searchError: "",
      shouldRedirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // const [inputValue, setInputValue] = useState("");

  // function handleInputChange(event) {
  //   const regex = /^[a-zA-Z0-9_]*$/; // allow only letters, numbers, and underscore
  //   if (regex.test(event.target.value)) {
  //     setInputValue(event.target.value);
  //   }
  // }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      shouldRedirect: true,
    });
  }
  Category = ({ category, number }) => (
    <div className="app__categories-head">
      <div className="app__categorie-name">
        <Link to={`/ourblogs/search-resault/${category}`}>
          <p
            className=" p__cormorant"
            style={{ color: "#aaaaaa", cursor: "pointer" }}
          >
            {category}
          </p>
        </Link>
      </div>
      <div className="app__categorie-dash" />
      <div className="app__categorie-number">
        <p className="p__cormorant" style={{ color: "#aaaaaa" }}>
          ({number})
        </p>
      </div>
    </div>
  );
  //  [...new Set([].concat(...this.state.BlogsData.map(obj => obj.tags)))]
  componentDidMount() {
    // Get all tags from the array
    let tags = [];
    let count = {};
    for (let i = 0; i < this.state.BlogsData.length; i++) {
      let item = this.state.BlogsData[i];
      let itemTags = item.tags;
      // Add the tags to the tags array
      tags.push(...itemTags);
      // Count the number of arrays that have the tag
      itemTags.forEach((tag) => {
        if (count[tag]) {
          count[tag]++;
        } else {
          count[tag] = 1;
        }
      });
    }
    // Remove duplicates
    let uniqueTags = [...new Set(tags)];
    // Put all the tags in an array with the number of arrays that have this tag
    let finalTags = uniqueTags.map((tag) => ({ tag, count: count[tag] }));
    this.setState({ tags: finalTags });
  }
  render() {
    if (this.state.shouldRedirect) {
      return <Navigate to={`/ourblogs/search-resault/${this.state.searchInput}`} />;
    }
    return (
      <div className="app__blogsidebar">
        <div className="app__blogsidebar-search app__blogsidebar-box">
          <div className="app__blogsidebar-heading">Search Page</div>
          <form action="/" onSubmit={this.handleSubmit} method="post">
            <input
              aria-autocomplete="none"
              required
              type="text"
              name="searchInput"
              className="app__blogsidebar-search_form-input"
              id="search"
              placeholder="Search"
              onChange={this.handleChange}
            />
            {this.state.searchInput !== "" && (
              <button type="submit" style={{ cursor: "pointer" }}>
                <span>
                  <FaSearch />
                </span>
              </button>
            )}
          </form>
        </div>
        <div className="app__blogsidebar-categories app__blogsidebar-box">
          <div className="app__blogsidebar-heading">All categories</div>
          <div className="app__blogsidebar-categories_categories">
            {this.state.tags.map((tag, index) => (
              <this.Category
                category={tag.tag}
                number={tag.count}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="app__blogsidebar-latest app__blogsidebar-box">
          <div className="app__blogsidebar-heading">Recent Post</div>
          <Carousel slideToShow={1}>
            {this.state.BlogsData.slice(-3).map((blog, index) => (
              <div className="app__allblogs-blog" key={index}>
                <img src={blog.images[0]} alt="gg" />
                <div className="app__allblogs-blog_about flex__center">
                  <p>{blog.by}</p>
                  <p>{blog.in}</p>
                </div>
                <Link
                  to={`/ourblogs/blog/${blog.id}/${blog.title}`}
                  className="app__allblogs-blog_title"
                >
                  {blog.title}{" "}
                </Link>
                <p className="app__allblogs-blog_text p__opensans">
                  {blog.text}
                </p>
                <button type="buttton">Read More</button>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="app__blogsidebar-social app__blogsidebar-box">
          <div className="app__blogsidebar-heading">Social</div>
          <div className="flex__center">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
    );
  }
}
