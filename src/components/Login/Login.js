import Form from '../Form/Form';
import InputElement from '../InputElement/InputElement';
import FormLink from '../FormLink/FormLink';

function Login(props) {
  return (
    <>
      <Form isAuth="true" title="Рады видеть!" errorMessage="Вы ввели неправильный логин или пароль." buttonText="Войти" additionalButtonClass="button_login" link={<FormLink address="/login" isAuth="true" linkText="Ещё не зарегистрированы?" linkButton="Регистрация"/>}>
        <InputElement label="E-mail" id="email" type="email" placeholder="Введите e-mail"/>
        <InputElement label="Пароль" id="password" type="password" placeholder="Введите пароль"/>
      </Form>
    </>
  )
}

export default Login;