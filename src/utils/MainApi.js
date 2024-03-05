import { baseURL } from './constants';

class MainApi {
  constructor(url) {
    this._url = url;
    this._headers = {
      "Content-Type": "application/json",
    }
  }

  _getRequest(url, options) {
    return fetch(`${url}`, options).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    });
  }

  register(data) {
    return this._getRequest(`${this._url}/signup`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  authorization(data) {
    return this._getRequest(`${this._url}/signin`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  checkAuth(token) {
    return this._getRequest(`${this._url}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    });
  }

  signOut() {
    return this._getRequest(`${this._url}/signout`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    })
  }

  editUserInfo(data) {
    return this._getRequest(`${this._url}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }


  getUserInfo() {
    return this._getRequest(`${this._url}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    });
  }

  saveMovie(data) {
    return this._getRequest(`${this._url}/movies`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(data),
    });
    }

  removeMovie(id) {
    return this._getRequest(`${this._url}/movies/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: this._headers,
    });
  }

  getSavedMovies() {
    return this._getRequest(`${this._url}/movies`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    });
  }
}

const mainApi = new MainApi(baseURL);

export default mainApi;