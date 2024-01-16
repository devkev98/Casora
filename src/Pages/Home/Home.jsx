import './Home.css';
import SearchBar from  '../../Components/SearchBar/SearchBar';
import Listings from '../../Components/Listings/Listings';

export default function Home () {
  return (
    <div className="home">
    <div className="herosection">
      <div className="herocontent">
        <h1>Discover Big Dreams in Tiny Spaces</h1>
        <h2>Your Dream Tiny Home Awaits - Begin your search</h2>
        <SearchBar/>
      </div>
    </div>
      <div className="feedsection">
        <div className="feedsection-header">
          <h3>Featured Homes</h3>
        </div>
        <div className="feedsection-listings">
          <Listings numdisplayed={5} />
        </div>
      </div>
    </div>
  )
}