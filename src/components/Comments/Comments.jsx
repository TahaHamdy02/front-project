import React from "react";

const Comments = ({ img, name, content, date, onToggle, active }) => {
  return (
    <>
      <div
        className="app__blog-comments"
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1500"
        style={{ backgroundColor: active && "transparent" }}
      >
        <span>
          <div className="app__blog-comments_imgae">
            <img src={img} alt="" />
          </div>
          <div className="app__blog-comments_body">
            <div className="app__blog-comments_body-header">
              <p
                className="p__cormorant"
                style={{ color: active ? "#dcca87" : "#F4F4F4" }}
              >
                {name}
              </p>
              <p className="p__opensans" onClick={onToggle}>
                reply
              </p>
            </div>
            <p className="p__opensans app__blog-comments_body-date">{date}</p>
            <div className="app__blog-comments_body-content">
              <p className="p__opensans">{content}</p>
            </div>
          </div>
        </span>

        {active && (
          <div
            className={`app__blog-comments_body-reply ${
              active && "body-reply_active"
            }`}
          >
            <div className="app__blog-comments_body-reply_header">
              <p
                className="p__opensans"
                style={{ color: active ? "#dcca87" : "#F4F4F4" }}
              >
                reply to {name}
              </p>
              <p className="p__opensans" onClick={onToggle}>
                cancle reply
              </p>
            </div>
            <div className="app__blog-comments_body-reply_form">
              <form>
                <textarea
                  name="userReply"
                  className="app__blog-comments_body-reply_form-input"
                  placeholder="Hi there! leave you reply"
                  style={{ height: "150px" }}
                ></textarea>
                <input
                  type="submit"
                  value="submit"
                  className="custom__button"
                />
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Comments;
