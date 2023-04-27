import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./Banner.css";
import { FaCalendarAlt, FaStopwatch, FaHeart } from "react-icons/fa";
const Banner = () => {
  const movies = [
    {
      id: "1",
      name: "Skyscraper",
      genra: "Action",
      year: "2012",
      length: "2h 20min",
      poster: "https://i.ibb.co/sH5FDC1/New-Project-2.png",
    },
    {
      id: "2",
      name: "Avengers Endgame",
      genra: "Action, Sci-fi",
      year: "2019",
      length: "3h 05min",
      poster: "https://i.ibb.co/VC2gc7f/New-Project.png",
    },
    {
      id: "3",
      name: "Aynabaji",
      genra: "Crime, Mystery",
      year: "2016",
      length: "2h 27min",
      poster: "https://i.ibb.co/MB4Qm0z/New-Project-3.png",
    },
  ];
  return (
    <div className="movies_banner">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide>
            <img src={movie.poster} alt="movies-img" />
            <div className="content">
              <h1>{movie.name}</h1>
              <div className="content-item">
                <span>{movie.genra}</span>
                <span>
                  {" "}
                  <FaCalendarAlt /> {movie.year}
                </span>
                <span>
                  {" "}
                  <FaStopwatch /> {movie.length}
                </span>
              </div>
              <div className="button">
                <button>Watch</button>
                <button>
                  <FaHeart />{" "}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
