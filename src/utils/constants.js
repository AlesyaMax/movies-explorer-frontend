export const MOVIES_URL = "https://api.nomoreparties.co/beatfilm-movies";
// export const BASE_URL = "https://api.movies-explorer.am.nomoredomainsmonster.ru"
export const BASE_URL= "http://localhost:3006"

export const ERROR_MESSAGES = {
  WRONG_TYPE: "Введен неверный формат данных",
  TOO_LONG: "Превышено максимально допустимое количество символов",
  TOO_SHORT: "Необходимо ввести не менее 2 символов",
  WRONG_LOGIN: "Вы ввели неправильный логин или пароль.",
  AUTH_ERROR: "При авторизации произошла ошибка. Токен не передан или передан не в том формате.",
  WRONG_TOKEN: "При авторизации произошла ошибка. Переданный токен некорректен.",
  DUPLICATE_ERROR: "Пользователь с таким email уже существует.",
  REGISTER_ERROR: "При регистрации пользователя произошла ошибка.",
  UPDATE_ERROR: "При обновлении профиля произошла ошибка.",
  SERVER_ERROR: "На сервере произошла ошибка",
  PAGE_NOT_FOUND_ERROR: "Страница по указанному маршруту не найдена.",
  ERROR_TITLE: "Ошибка",
  SAME_DATA: "Новые данные профиля совпадают со старыми данными"
};

export const SUCCESS_MESSAGES = {
  LOGIN_TITLE: "Добро пожаловать!",
  LOGIN_MESSAGE: "Авторизация прошла успешно.",
  REGISTER_TITLE: "Добро пожаловать!",
  REGISTER_MESSAGE: "Регистрация прошла успешно.",
  UPDATE_TITLE: "Успешно",
  UPDATE_MESSAGE: "Данные профиля изменены."
}

export const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export const WINDOW_WIDTH = {
  LAPTOP: 1279,
  TABLET: 767
};

export const NUMBER_OF_CARDS = {
  LAPTOP: 12,
  TABLET: 8,
  MOBILE: 5
};

export const ADDITIONAL_CARDS = {
  LAPTOP: 3,
  TABLET: 2
}

export const SHORT_MOVIES_DURATION = 41;