import mapboxgl from 'mapbox-gl';
import { useEffect, createElement, useContext } from 'react';
import ReactDOM from 'react-dom';
import './MapboxComponent.css';
import data from '../../data.json';
import CardListing from '../../Components/CardListing/CardListing'; 
import { renderToString } from 'react-dom/server';
import { Context } from '../../Components/Context';

export default function MapboxComponent () {
  const { toggleSave } = useContext(Context);
  
  useEffect(() => {
      if (!mapboxgl) {
        console.error('Mapbox is not loaded!');
        return null; // or handle the error appropriately
      }
      mapboxgl.accessToken = 'pk.eyJ1Ijoia2VwZXIxMSIsImEiOiJjbHJhMG90ZHQwOTFrMmpuMTZkYnlhNjZ5In0.OFp1LEjjMMbNoEFUyM9LGA';
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-74.009, 40.7200],
        zoom: 13,
      });
      data.forEach((listing) => {
        // const placeholder = document.createElement('div');
        // ReactDOM.render(<CardListing {...listing} />,placeholder);
        // const popup = new mapboxgl.Popup().setDOMContent(placeholder);
        const placeholder = document.createElement('div');
        const listingComponent = <CardListing {...listing} toggleSave={toggleSave} />;
        ReactDOM.render(listingComponent, placeholder);

        const popupContent = renderToString(listingComponent);
        const popup = new mapboxgl.Popup().setHTML(popupContent);
        
        const marker = new mapboxgl.Marker({element: createCustomMarkerElement(listing.price)}).setLngLat([listing.coordinates[0],listing.coordinates[1]]).setPopup(popup).addTo(map);
        //making the marker on the map (the pin)
          function createCustomMarkerElement(price) {
            var element = document.createElement('div');
            element.className = 'custom-marker';
            element.innerHTML = `${"$"}${price}`; //insert the price from the 
            return element;
          }
        });

        // Cleanup function
        return () => {
          map.remove(); // Remove the map on component unmount
        };
      }, [toggleSave]);

      return createElement('div', { id: 'map' });
    };

/*
const placeholder = document.createElement('div');
ReactDOM.render(el, placeholder);

new mapboxgl.Popup().setLngLat(coordinates).setDOMContent(placeholder).addTo(this.map);
*/