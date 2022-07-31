import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import ArtistView from "../pages/ArtistPage";
import PlayListView from "../pages/PlayListPage";
import Tracks from "../pages/TrackList";
import TopBar from "./TopBar";
import { NotFound } from "./NotFound";

const Songs = () => {
  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="" element={<Tracks />}/>
            <Route path="/playlist/:id" element={<PlayListView />} />
            <Route path="/artist" element={<ArtistView />} />
            <Route path="/artist" element={<ArtistView />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Songs;
