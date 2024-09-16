import React from "react";
import regionImages from "../../assets/region/regionImages";

const RegionCard = ({ region, name }) => {
  return (
    <div className="relative cursor-pointer">
      <img
        src={regionImages[region]}
        alt={name}
        className="relative filter brightness-[80%] hover:brightness-[90%] transition-all duration-300 ease-in-out"
      />
      <span className="absolute top-[6px] left-2 text-white z-10">{name}</span>
    </div>
  );
};

export default RegionCard;
