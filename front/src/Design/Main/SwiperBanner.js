import React, { useState } from "react";
import "./Styles.css";
import { BannerSwiperItem } from ".";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/swiper.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const SwiperBanner = (props) => {
  const [banners, setBanners] = useState(["url 1", "url 2", "url 3"]);

  const renderLists = () => {
    const items = banners;
    return items.map((value) => (
      <SwiperSlide>
        <BannerSwiperItem url={value} />
      </SwiperSlide>
    ));
  };
  return (
    <div className="bannerSwiper">
      <h3>배너</h3>
      <Swiper
        className="fix01"
        spaceBetween={10}
        slidesPerView={1}
        direction={"horizontal"}
        navigation
        autoplay={{
          delay: 2500,
        }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {renderLists()}
      </Swiper>
    </div>
  );
};

export default SwiperBanner;
