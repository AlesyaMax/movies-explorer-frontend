import { Route, Routes} from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/movies" element={<Movies/>}></Route>
      <Route path="/saved-movies" element={<SavedMovies/>}></Route>
      <Route path="/signup" element={<Register/>}></Route>
    </Routes>)
}

export default App;
