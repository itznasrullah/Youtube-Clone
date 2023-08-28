import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import SuggestedVideosList from "./components/SuggestedVideosList";
import Video from "./components/Video";
import SearchResults from "./components/SearchResults";
import './App.css';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="main-video-list">
              <SideMenu /> <SuggestedVideosList />
            </div>}
          />
          <Route path="/Youtube-Clone" element={
            <div className="main-video-list">
              <SideMenu /> <SuggestedVideosList />
            </div>}
          />
          <Route path="searchResults" element={ <> <SideMenu /> <SearchResults /> </> } />
          <Route path="video" element={<Video />} />
        </Routes>
      </div>
  );
}

export default App;