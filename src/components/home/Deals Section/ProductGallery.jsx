import React from "react";

const ProductGallery = ({
  productImages,
  currentIndex,
  mainImage,
  handleThumbClick,
  handlePrevImage,
  handleNextImage,
  handleMouseMove,
  imageRef,
}) => {
  return (
    <div className="left-gallery">
      <div className="thumbs">
        {productImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={currentIndex === index ? "active" : ""}
            onClick={() => handleThumbClick(img, index)}
          />
        ))}
      </div>

      <div
        className="main-image"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          imageRef.current.style.transformOrigin = "center";
        }}
      >
        <span className="discount">25% OFF</span>

        <button
          className="image-arrow left-arrow"
          onClick={handlePrevImage}
        >
          ❮
        </button>

        <img
          ref={imageRef}
          src={mainImage}
          alt=""
          className="zoom-image"
        />

        <button
          className="image-arrow right-arrow"
          onClick={handleNextImage}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default ProductGallery;