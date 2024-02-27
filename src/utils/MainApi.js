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
      return Promise.reject(`Ошибка: ${res.status}`);
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

  saveMovie() {

  }

  removeMovie() {

  }

  getSavedMovies() {

  }
}

const mainApi = new MainApi("http://localhost:3001");

export default mainApi;