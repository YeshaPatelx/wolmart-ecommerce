import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { blogData } from "../../data/blogData";

function PopularPostsSlider() {
  const slides = [];

  for (let i = 0; i < blogData.length; i += 3) {
    slides.push(blogData.slice(i, i + 3));
  }

  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      navigation={{
        prevEl: ".popular-prev",
        nextEl: ".popular-next",
      }}
    >
      {slides.map((group, index) => (
        <SwiperSlide key={index}>
          <div className="popular-posts-slide">
            {group.map((post) => (
              <div className="popular-post" key={post.id}>
                <img src={post.image} alt={post.title} />

                <div className="popular-post-content">
                  <h4>{post.title}</h4>
                  <span>{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default PopularPostsSlider;