import React from "react";
import { SubHeading } from "../../components";
import DecreasingNumber from "../../components/DecreasingNumber/DecreasingNumber";
import { images } from "../../constants";
import "./servingcustomers.css";

const ServingCustomers = () => {
  // const [divOneNumber, setDivOneNumber] = useState(0);
  // const [divTwoNumber, setDivTwoNumber] = useState(0);
  // const [divThreeNumber, setDivThreeNumber] = useState(0);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Get the height of the viewport
  //     const viewportHeight = window.innerHeight;

  //     // Get the vertical position of the scroll
  //     const scrollPosition = window.scrollY;

  //     // Calculate the percentage of the page that has been scrolled
  //     const scrollPercentage =
  //       (scrollPosition / (document.body.scrollHeight - viewportHeight)) * 100;

  //     // Update the numbers in the divs
  //     setDivOneNumber(Math.floor((scrollPercentage / 100) * 30));
  //     setDivTwoNumber(Math.floor((scrollPercentage / 100) * 50));
  //     setDivThreeNumber(Math.floor((scrollPercentage / 100) * 8));
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  // const OverYears = [
  //   {
  //     num: `+${divOneNumber}`,
  //     Text: `Breakfast Option`,
  //   },
  //   {
  //     num: `+${divTwoNumber}`,
  //     Text: "Dinner Option",
  //   },
  //   {
  //     num: `+${divThreeNumber}`,
  //     Text: "New Location",
  //   },
  // ];
  // const [count, setCount] = useState(0);
  // const countRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     if (entries[0].isIntersecting) {
  //       countRef.current = setInterval(() => {
  //         setCount((prevCount) => prevCount + 1);
  //       }, 50);
  //     } else {
  //       clearInterval(countRef.current);
  //     }
  //   });

  //   observer.observe(document.getElementById(`div-${number}`));

  //   return () => {
  //     observer.unobserve(document.getElementById(`div-${number}`));
  //     clearInterval(countRef.current);
  //   };
  // }, [number]);

  //   return (
  //     <div id={`div-${number}`}>
  //       <p>{count <= number ? count : number}</p>
  //     </div>
  //   );
  // };

  return (
    <div
      className="app__servingcustomer flex__center section__padding"
      id="ourhistory"
      style={{ overflow: "hidden" }}
    >
      <div className="app__servingcustomer-heading">
        <SubHeading title="Our History" />
        <h1 className="headtext__cormorant">
          Serving Customers For Over A Decade
        </h1>
      </div>

      <div className="app__servingcustomer-info flex__center">
        <div
          className="app__servingcustomer-info_trattoria"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            consequuntur facilis impedit corporis reprehenderit voluptas quae.
          </p>
          <img src={images.history01} alt="history01" />
        </div>
        <div
          className="app__servingcustomer-info_years"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <img src={images.history02} alt="history02" />
          <h3 className="headtext__cormorant">Over The Years</h3>
          <div className="app__servingcustomer-info_years-info flex__center">
            <DecreasingNumber text="Breakfast Option" number={30} index={0} />
            <DecreasingNumber text="Dinner Option" number={50} index={1} />
            <DecreasingNumber text="New Location" number={8} index={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServingCustomers;
