import React from "react";

const WeatherIcon = ({ url, className }) => {
  const URL = url
    ? `https://openweathermap.org/img/wn/${url}@2x.png`
    : "data:image/png;base64,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";

  // 고유한 ID 생성
  const uniqueId = Math.random().toString(36).substr(2, 9);

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="24" height="24" fill={`url(#pattern${uniqueId})`} />
      <defs>
        <pattern
          id={`pattern${uniqueId}`}
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref={`#image${uniqueId}`} transform="scale(0.01)" />
        </pattern>
        <image id={`image${uniqueId}`} width="100" height="100" xlinkHref={URL} />
      </defs>
    </svg>
  );
};

export default React.memo(WeatherIcon);
