import CardListing from "../../Components/CardListing/CardListing";
import data from '../../data.json';

export default function Listings({ numdisplayed = 4 }) {
  return (
      <>
        {data.slice(0, numdisplayed).map((listing) => (
          <CardListing
            key={Math.random()}
            listingid={listing.id}
            title={listing.title}
            price={listing.price}
            album={listing.album}
            location={listing.location}
            bedroom={listing.bedroom}
            bathroom={listing.bathroom}
            squarefoot={listing.squarefoot}
          />
        ))}
      </>
  );
}
