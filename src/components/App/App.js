import { Route, Routes} from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/movies" element={<Movies/>}></Route>
    </Routes>)
}

export default App;
