import React, { useState } from "react";
import "./Styles.css";

const SwiperBannerItem = ({ url }) => {
  const [banner, setBanner] = useState(url);
  return (
    <div className="bannerSwiperItem">
      <p>예시: {banner}</p>
    </div>
  );
};

export default SwiperBannerItem;
