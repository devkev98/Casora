import "./SearchResults.css";
import MapboxComponent from '../../API/MapboxComponent/MapboxComponent';
import Listings from '../../Components/Listings/Listings';

// import { useState } from 'react';
export default function SearchResults() {
  return (
    <div id="searchpage-container">
      <div id="filter-bar">
        <div className="filter-field-container">
          <button className="filter-field-btn">{"Any Price"}</button>
        </div>
        <div className="filter-field-container">
          <button className="filter-field-btn">{"All Beds"}</button>
          {/* {
            <div className="filter-dropdown-menu">
            <div className="filter-option">Any</div>
            <div className="filter-option">1+</div>
            <div className="filter-option">2+</div>
            <div className="filter-option">3+</div>
            <div className="filter-option">4+</div>
            <div className="filter-option">5+</div>
          </div>} */}
        </div>

        <div className="filter-field-container">
          <button className="filter-field-btn">{"All Baths"}</button>
        </div>

        <div className="filter-field-container">
          <button className="filter-field-btn">{"All Home Types"}</button>
        </div>

        <div className="filter-field-container">
          <button className="filter-field-btn">{"More"}</button>
        </div>

        <div className="filter-field-container">
          <button className="filter-field-btn">{"Save Search"}</button>
        </div>

      </div>
      <div id="search-results-container">
        <div id="search-results-listing-container">
          <Listings numdisplayed={5} />
          {/* Increase the numdisplayed value when scrolling down to the end of the height of the search results container the increase should apply to the mapbox elements as well*/}
          {/* <div id="no-listings-message-container">
            <div>No listings in this area ):</div><br/>
            <div>Share your tiny home or check back for updates.</div>
            <br/>
            <div id="search-no-listings-buttons">
              <button id="add-listing-btn" className="listings-buttons">Add Listing <i className="fa-solid fa-plus"></i></button>
              <button id="get-updates-btn" className="listings-buttons">Get Updates <i className="fa-solid fa-exclamation"></i></button>
            </div>
          </div> */}
        </div>
        {/* Remove the map for mobile view, make listings container full width for mobile*/}
        <div id="search-results-map-container">
          {/* <MapboxComponent long={40.7128} lat={-74.006} /> */}
          <MapboxComponent />
        </div>
      </div>
    </div>
  )
}