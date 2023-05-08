import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "./TopRated.css";

const TopRated = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = "https://movie-hub-server.vercel.app/topRated";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div className="container">
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          400: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1080: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        <div>
          {movies?.map((movie: any) => (
            <SwiperSlide key={movie._id}>
              <Link to={`../topRated/${movie._id}`}>
                <div className="single-movie">
                  <img
                    className="popularMovie-img"
                    src={movie.poster}
                    alt="movie-poster"
                  />
                  <p className="imdb-rating">IMDB: {movie.imdb}</p>
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
