import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userStoriesApi } from "../../redux/action/authAction";
import Cookies from "js-cookie";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 8,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 8,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 7,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 512,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

const Stories = () => {
  let stories = useSelector((state) => state.userstories);
  let dispatch = useDispatch();
  let jwtToken = Cookies.get("jwt_token");
  console.log("stories==00------", stories);

  useEffect(() => {
    dispatch(userStoriesApi(jwtToken));
  }, []);

  return (
    <div className="w-75 m-4">
      {stories && (
        <Slider {...settings} slidesToShow={6}>
          {stories.map((each) => (
            <div key={each.user_id} className="">
              <div className="each-story">
                <img
                  className="each-story-image"
                  src={each.story_url}
                  alt="user story"
                />
                <p className="each-story-name text-dark">{each.user_name}</p>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Stories;
