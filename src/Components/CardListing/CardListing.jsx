import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import "./CardListing.css";

export default function CardListing({
  listingid,
  title = "no title",
  location = "no location",
  bedroom = "0",
  bathroom = "0",
  squarefoot = "0",
  price = "$0",
  album = ["https://placehold.co/600x400/EEE/31343C"]
}) {
  // Accessing values from the context
  const { listingStates, toggleSave } = useContext(Context);
  // const isListingSaved = listingStates[listingid] || false;
  const isListingSaved = listingStates?.[listingid] ?? false;
  const [imageCounter, setImageCounter] = useState(0);
  function slideRight() {
    setImageCounter((prevCounter) =>
      prevCounter === album.length - 1 ? 0 : prevCounter + 1
    );
  }
  function slideLeft() {
    setImageCounter((prevCounter) =>
      prevCounter === 0 ? album.length - 1 : prevCounter - 1
    );
  }
  return (
    <div className={`CardListing`} key={listingid}>
      <div className="CardListing-thumbnail">
        <div className="CardListing-carousel-container">
          {<img src={album[imageCounter]} />}
        </div>
        <div className="CardListing-img-overlay">
          <div className="CardListing-save-btn" onClick={() => toggleSave(listingid)}>
          {/* <div className="CardListing-save-btn" onClick={() => toggleSave(listingid)}> */}
            {isListingSaved ? (
              <i className="fa-solid fa-heart" style={{ opacity: 1 }}></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </div>

          <div className="CardListing-price">{"$"}{price}</div>
          <div className="CardListing-arrows-container">
            <div className="left-arrow" onClick={slideLeft}>
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className="right-arrow" onClick={slideRight}>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
          <div className="CardListing-carousel-dots-container">
            {album.map((_, index) => (
              <div
                key={index}
                className={`carousel-dot ${
                  imageCounter === index ? "active" : "non-active"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="CardListing-info">
        <div className="CardListing-title" title={title}>
          {title}
        </div>
        <div className="CardListing-features">
          {bedroom} bed {bathroom} bath • {squarefoot} sq. ft.
        </div>
        <div className="CardListing-location">{location}</div>
      </div>
    </div>
  );
}
