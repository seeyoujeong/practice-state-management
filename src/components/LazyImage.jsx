import { useState } from "react";

const LazyImage = ({ url, alt }) => {
  const [isLoading, setIsLoading] = useState(true);
  const opacity = isLoading ? "opacity-0" : "opacity-100";

  return (
    <>
      {isLoading && (
        <div className="absolute h-full w-full z-10 flex justify-center items-center">
          ...Loading
        </div>
      )}
      <img
        src={url}
        alt={alt}
        className={`w-full h-full object-contain ${opacity}`}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
};

export default LazyImage;
