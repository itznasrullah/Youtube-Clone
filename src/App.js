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
          <Route path="/" exact element={
            <div className="main-video-list">
              <SideMenu /> <SuggestedVideosList />
            </div>}
          />
          <Route path="/Youtube-Clone" element={
            <div className="main-video-list">
              <SideMenu /> <SuggestedVideosList />
            </div>}
          />
          <Route path="/Youtube-Clone/searchResults" element={ <> <SideMenu /> <SearchResults /> </> } />
          <Route path="/Youtube-Clone/video" element={<Video />} />
        </Routes>
      </div>
  );
}

export default App;