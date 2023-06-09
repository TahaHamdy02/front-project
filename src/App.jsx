import React, { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import "./pages.css";
import { Routes, Route } from "react-router-dom";
import { Navbar, ScrollTop } from "./components/index";
import Preloader from "./container/PreLoader/PreLoader";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS file
const pages = {
  Home: lazy(() => import("./pages/Home")),
  Erorr: lazy(() => import("./pages/404")),
  ContactUsPage: lazy(() => import("./pages/ContactUs")),
  ChefDetail: lazy(() => import("./pages/ChefDetail")),
  OurChefsPage: lazy(() => import("./pages/OurChefs")),
  AboutUsPage: lazy(() => import("./pages/AboutUs")),
  CommingSoon: lazy(() => import("./pages/CommingSoon")),
  OurServicesPage: lazy(() => import("./pages/OurServices")),
  FAQPage: lazy(() => import("./pages/FAQ")),
  BlogsPage: lazy(() => import("./pages/Blogs")),
  BlogDetails: lazy(() => import("./pages/BlogDetails")),
  Register: lazy(() => import("./User/UserHandle/Register")),
  Login: lazy(() => import("./User/UserHandle/Login")),
  ReasultPage: lazy(() => import("./pages/ReasultPage")),
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false); //for preloader
  }, []);
  useEffect(() => {
    AOS.init(); // Initialize the library
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {isLoading ? (
          <Preloader />
        ) : (
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route index element={<pages.Home />} />
              <Route path="/home" element={<pages.Home />} />
              <Route path="*" element={<pages.Erorr />} />
              <Route path="/commingsoon" element={<pages.CommingSoon />} />
              <Route path="/aboutus" element={<pages.AboutUsPage />} />
              <Route path="/ourchefs" element={<pages.OurChefsPage />} />
              <Route
                path="/ourchefs/chef/detail/:name/:id"
                element={<pages.ChefDetail />}
              />
              <Route path="/contactus" element={<pages.ContactUsPage />} />
              <Route path="/ourservices" element={<pages.OurServicesPage />} />
              <Route path="/faq" element={<pages.FAQPage />} />
              <Route path="/ourblogs" element={<pages.BlogsPage />} />
              <Route
                path="/ourblogs/blog/:id/:blogtitle"
                element={<pages.BlogDetails />}
              />
              <Route path="/register" element={<pages.Register />} />
              <Route path="/login" element={<pages.Login />} />
              <Route
                path="/ourblogs/search-resault/:type"
                element={<pages.ReasultPage />}
              />
            </Routes>
          </Suspense>
        )}
      </main>
      <ScrollTop />
    </>
  );
}

export default App;
