import React from "react";
import { useParams } from "react-router-dom";
import { Footer, Mainbg } from "../container";
import SearchReasult from "../container/BlogsContainer/SearchReasult/SearchReasult";
const ReasultPage = () => {
  const whatDoYouWant = useParams().type;
  console.log(whatDoYouWant);
  return (
    <div className="app__reasultpage">
      <Mainbg
        pageTiltle="Search Reasult"
        path1="Home"
        to1="/home"
        path2={`Search results for :"${whatDoYouWant}"`}
        to2=""
      />
      <SearchReasult />
      <Footer />
    </div>
  );
};

export default ReasultPage;
