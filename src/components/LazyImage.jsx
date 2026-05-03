import React, { memo, useCallback, useEffect, useState } from "react";

const LazyImage = ({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  sizes,
  width,
  height,
  loading = "lazy",
  fetchPriority = "auto",
  decoding = "async",
  draggable = false,
  onClick,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  if (!src) {
    return null;
  }

  return (
    <div className={`lazy-image-shell ${wrapperClassName} ${isLoaded ? "is-loaded" : ""}`.trim()}>
      <img
        src={src}
        alt={alt}
        className={`lazy-image ${className}`.trim()}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        sizes={sizes}
        width={width}
        height={height}
        draggable={draggable}
        onLoad={handleLoad}
        onClick={onClick}
      />
    </div>
  );
};

export default memo(LazyImage);
