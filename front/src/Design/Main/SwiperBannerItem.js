import React, { useState } from "react";
import "./Styles.css";

const SwiperBannerItem = (props) => {
  const [banner, setBanner] = useState(props.url);
  return (
    <div className="bannerSwiperItem">
      <p>예시: {banner}</p>
    </div>
  );
};

export default SwiperBannerItem;
