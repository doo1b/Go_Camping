import React from "react";

const SwitchToggle = ({ isToggle }) => {
  const path = isToggle ? "M14 7L9 12L14 17V7Z" : "M10 17L15 12L10 7V17Z";

  return (
    <>
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d={path} fill="#fff" />
        </g>
      </svg>
    </>
  );
};

export default SwitchToggle;
