import Form from '../Form/Form';
import InputElement from '../InputElement/InputElement';
import FormLink from '../FormLink/FormLink';
import FormButton from '../FormButton/FormButton';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function Login(props) {
  return (
    <>
      <Form 
        withLogo={true} 
        title="Рады видеть!">
        <InputElement label="E-mail" id="email" type="email" placeholder="Введите e-mail"/>
        <InputElement label="Пароль" id="password" type="password" placeholder="Введите пароль" hasSecretValue={true}/>
        <ErrorMessage errorMessage="Вы ввели неправильный логин или пароль."/>
        <FormButton isSubmitButton={true} buttonText="Войти" additionalButtonClass="button_login"/>
        <FormLink address="/signup" linkText="Ещё не зарегистрированы?" linkButton="Регистрация"/>
      </Form>
    </>
  )
}

export default Login;