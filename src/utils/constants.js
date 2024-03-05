export const moviesURL = "https://api.nomoreparties.co/beatfilm-movies";
export const baseURL = "https://api.movies-explorer.am.nomoredomainsmonster.ru"

export const errorMessages = {
  wrongType: "Введен неверный формат данных",
  tooLong: "Превышено максимально допустимое количество символов",
  tooShort: "Необходимо ввести не менее 2 символов",
  wrongLogin: "Вы ввели неправильный логин или пароль.",
  authError: "При авторизации произошла ошибка. Токен не передан или передан не в том формате.",
  wrongToken: "При авторизации произошла ошибка. Переданный токен некорректен.",
  duplicateError: "Пользователь с таким email уже существует.",
  registerError: "При регистрации пользователя произошла ошибка.",
  updateError: "При обновлении профиля произошла ошибка.",
  serverError: "На сервере произошла ошибка",
  pageNotFoundError: "Страница по указанному маршруту не найдена.",
  errorTitle: "Ошибка"
};

export const successMessages = {
  loginTitle: "Добро пожаловать!",
  loginMessage: "Авторизация прошла успешно.",
  registerTitle: "Добро пожаловать!",
  registerMessage: "Регистрация прошла успешно.",
  updateTitle: "Успешно",
  updateMessage: "Данные профиля изменены."
}