import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "./TopRated.css";

const TopRated = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const url = "https://movie-hub-server.vercel.app/movies";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div className="container">
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
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        <div>
          {movies.map((movie: any) => (
            <SwiperSlide>
              <Link to={`../movie/${movie._id}`}>
                <div className="top-rated-movie">
                  <img
                    className="popularMovie-img"
                    src={movie.poster}
                    alt="movie-poster"
                  />
                  <div className="flex-content">
                    <div className="content">
                      <h3>{movie.name}</h3>
                      <button>
                        <FaHeart />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default TopRated;
