import Form from '../Form/Form';
import InputElement from '../InputElement/InputElement';
import FormLink from '../FormLink/FormLink';

function Register(props) {
  return (
    <>
      <Form isAuth="true" title="Добро пожаловать!" errorMessage="При регистрации пользователя произошла ошибка." buttonText="Зарегистрироваться" link={<FormLink address="/login" isAuth="true" linkText="Уже зарегистрированы?" linkButton="Войти"/>}>
        <InputElement label="Имя" id="name" type="text" placeholder="Введите имя" errorMessage=""/>
        <InputElement label="E-mail" id="email" type="email" placeholder="Введите e-mail"/>
        <InputElement label="Пароль" id="password" type="password" placeholder="Введите пароль"/>
      </Form>
    </>
  )
}

export default Register;