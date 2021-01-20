import React from "react";
import "./Body.css";

function Body() {
  return (
    <div className="body__container">
      <img
        src="https://media.sweetwater.com/api/i/f-webp__w-1820__q-58__ha-be8047fb54ac3c2b__hmac-52addf9bfc6a3d83d4abc73e2189f12498fcc095/images/homepage_features/january-clearance/2021/1820x700v1.jpg.auto.webp"
        alt="rock the new year"
        className="body__imageLarge"
      />
      <img
        src="https://media.sweetwater.com/api/i/f-webp__w-940__q-58__ha-3b87bbbba5d23b31__hmac-e5804141d04ce28c375b12ee6b63c6b066c32bc5/images/homepage_features/namm/2021/940x700.jpg.auto.webp"
        alt="2021 NAMM SHOW REPORT"
        className="body__imageSmall"
      />
    </div>
  );
}

export default Body;
