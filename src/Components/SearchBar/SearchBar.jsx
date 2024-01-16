import "./SearchBar.css";
import { useState } from "react";


export default function SearchBar () {
  const [isSearchActive, setSearchActive] = useState(false);
  
  function handleBlur() {
    setSearchActive(false);
  }
  function handleFocus() {
    setSearchActive(true);
  }
  
  return (
    <div>
    <form>
        {/* <select id="search-type">
          <option>Buy</option>
          <option>Sell</option>
          <option>Rent</option>
        </select> */}
      
      <div id="searchbar-container">
        
        <input type="text" id="searchbar" placeholder="Search by address, city, or zip code" onFocus={handleFocus} onBlur={handleBlur} />
        <button type="submit" id="search-submit-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
        {isSearchActive && <div id="searchresults">
          <div className="searchresult-header">
            <div><i className="fa-solid fa-location-arrow"></i> Current Location</div>
          </div>
          <div className="searchresult-header">
            <h4>Recent Searches</h4>
          </div>

          <div id="searchresult-list">
            {/* <div> */}
              <div className="searchresult-item"><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;{"Orlando, FL"}</div>
              <div className="searchresult-item"><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;{"Tampa, FL"}</div>
              <div className="searchresult-item"><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;{"Chattanooga, TN"}</div>
              <div className="searchresult-item"><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;{"New York, NY"}</div>
              <div className="searchresult-item"><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;{"Atlanta, GA"}</div>
              <div className="searchresult-item"><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;{"Denver, CO"}</div>
              <div className="searchresult-item"><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;{"Phoenix, AZ"}</div>
            {/* </div> */}
          </div>
        </div>}
       
        
      </div>
      {/* <fieldset>
         <label>
           <p>Name</p>
           <input name="name" />
         </label>
       </fieldset>
       <button type="submit">Submit</button> */}
    </form>
    </div>
  ) 
}