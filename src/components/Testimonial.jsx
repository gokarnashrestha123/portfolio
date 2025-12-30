import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // make sure Autoplay is imported
import "swiper/css";
import "swiper/css/pagination";
import teacher2 from "../assets/teacher2.png";
import "./Testimonial.css";

const testimonialsData = [
  {
    image: teacher2,
    name: "Roger Scott",
    role: "Marketing Manager",
    message: "Far far away, behind the word mountains...",
  },
  {
    image: teacher2,
    name: "Roger Scott",
    role: "Marketing Manager",
    message: "Far far away, behind the word mountains...",
  },
  {
    image: teacher2,
    name: "Roger Scott",
    role: "Marketing Manager",
    message: "Far far away, behind the word mountains...",
  },
  {
    image: teacher2,
    name: "Roger Scott",
    role: "Marketing Manager",
    message: "Far far away, behind the word mountains...",
  },
  {
    image: teacher2,
    name: "Roger Scott",
    role: "Marketing Manager",
    message: "Far far away, behind the word mountains...",
  },
  {
    image: teacher2,
    name: "Roger Scott",
    role: "Marketing Manager",
    message: "Far far away, behind the word mountains...",
  },
  {
    image: teacher2,
    name: "Roger Scott",
    role: "Marketing Manager",
    message: "Far far away, behind the word mountains...",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">Testimonials</h2>
      <h1 className="testimonial-subtitle">Our Successful Students</h1>
      <Swiper
        modules={[Pagination, Autoplay]} // include Autoplay here
        centeredSlides={true}
        slidesPerView={3}
        slidesPerGroup={2}
        spaceBetween={30}
        loop={true} // must be true for smooth autoplay
        autoplay={{
          delay: 2000, // 1 second
          disableOnInteraction: false, // continue autoplay even after interaction
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1, slidesPerGroup: 1 },
          640: { slidesPerView: 1, slidesPerGroup: 1 },
          1024: { slidesPerView: 3, slidesPerGroup: 2 },
        }}
      >
        {testimonialsData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                </div>
              </div>
              <p className="testimonial-message">{item.message}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
