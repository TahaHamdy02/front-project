import "./booktable.css";
import React from "react";
import { SubHeading } from "../../components";
import { MdClose } from "react-icons/md";

class BookTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: "1",
      day: "",
      time: "",
      days: [],
      openHoures: [
        { time: "08:00 AM", value: "08" },
        { time: "09:00 AM", value: "09" },
        { time: "10:00 AM", value: "10" },
        { time: "11:00 AM", value: "11" },
        { time: "12:00 AM", value: "12" },
        { time: "13:00 PM", value: "13" },
        { time: "14:00 PM", value: "14" },
        { time: "15:00 PM", value: "15" },
        { time: "16:00 PM", value: "16" },
        { time: "17:00 PM", value: "17" },
        { time: "18:00 PM", value: "18" },
        { time: "19:00 PM", value: "19" },
        { time: "20:00 PM", value: "20" },
        { time: "21:00 PM", value: "21" },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => ({ ...prevState, [name]: value }));
    // this.setState({ value: e.target.value });
  }
  toggleModal = () => document.body.classList.add("open");
  removeModal = () => document.body.classList.remove("open");
  handleSubmit(event) {
    event.preventDefault();
    this.toggleModal();
  }
  close = () => {
    this.removeModal();
  };

  componentDidMount() {
    const days = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);

      const options = { weekday: "long", month: "short", day: "numeric" };
      const formattedDate = date.toLocaleDateString("en-US", options);

      days.push(formattedDate);
    }

    this.setState({ days });
  }
  render() {
    const { days, openHoures } = this.state;

    return (
      <div
        className="app__booktable section__padding"
        id="booktable"
        onClick={this.removeModal}
      >
        <form action="" onSubmit={this.handleSubmit}>
          <div className="app__booktable-heading">
            <SubHeading title="Reservations" />
            <h1
              className="headtext__cormorant"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              Book A Table
            </h1>
          </div>
          <div className="app__booktable-form_selectoions">
            <select
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              required
              id="persons"
              name="persons"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option disabled>Choose Numbers</option>
              {[1, 2, 3, 4, 5, 6].map((number) => (
                <option key={number} value={number}>
                  {number} person{number > 1 && "s"}
                </option>
              ))}
            </select>
            <select
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              required
              id="Day"
              name="day"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option disabled>Choose Day Of This Weak</option>
              {days.map((day, index) => (
                <option key={index} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <select
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              required
              id="Time"
              name="time"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option disabled>Choose Time </option>
              {openHoures.map((open, index) => (
                <option value={open.value} key={index}>
                  {open.time}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="custom__button"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Book Now
          </button>
        </form>
        <div className="modal">
          <MdClose onClick={this.close()} />
          <div className="modal-content">
            <p className="p__opensans">
              Thank you for booking a table at our restaurant. We have confirmed
              your reservation for <span>{this.state.persons}</span> people. We
              look forward to hosting you and your guests. Please arrive at
              least <span>10 minutes</span> before your scheduled time. If you
              have any questions or special requests, please let us know. We
              hope you have a great experience dining with us!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default BookTable;
