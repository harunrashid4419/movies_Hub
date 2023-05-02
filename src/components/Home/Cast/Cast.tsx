import React from "react";
import { FaUsers } from "react-icons/fa";
import "./Cast.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Cast = ({ movie }: any) => {
  const { casts } = movie;

  return (
    <div className="main-cast">
      <h1>
        <FaUsers /> Casts
      </h1>
      <div className="cast-sections">
        <Swiper
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 2,
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
          {casts?.map((cast: any, i: number) => (
            <SwiperSlide className="cast-img" key={i}>
              <img src={cast.img} alt="cast img" />
              <p>{cast.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Cast;
