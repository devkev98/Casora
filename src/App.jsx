import { Route, Routes } from "react-router-dom";
import './App.css';
import NavigationBar from './Layout/NavigationBar/NavigationBar';
import Home from './Pages/Home/Home';
// import Blog from './Pages/Blog/Blog';
import SearchResults from './Pages/SearchResultsPage/SearchResults';
// import Footer from './Layout/Footer/Footer';
// import { ContextProvider } from './Components/Context';

export default function App() {
  return (
      // <main>
      //   <NavigationBar />
      //   <Routes>
      //     <Route path="/" element={<Home />} />
      //     <Route path="/searchresults" element={<SearchResults />} />
      //     {/* <Route path="/blog" element={<Blog />} /> */}
      //   </Routes>
      // </main>
    /* <ContextProvider> */
      <main>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchresults" element={<SearchResults />} />
        </Routes>
      </main>
    // </ContextProvider>
  )
}