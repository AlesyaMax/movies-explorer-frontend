
import {moviesURL} from "../utils/constants";

class MoviesApi {
  constructor(url) {
    this._url = url;
  }

  getMovies() {
    return fetch(`${this._url}`, {method: "GET", headers: {"Content-Type": "application/json"}})
    .then((res) => {
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }
}

const moviesApi = new MoviesApi(moviesURL)

export default moviesApi;