import Form from '../Form/Form';
import InputElement from '../InputElement/InputElement';
import FormLink from '../FormLink/FormLink';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import FormButton from '../FormButton/FormButton';

function Register(props) {
  return (
    <>
      <Form withLogo={true} 
      title="Добро пожаловать!">
        <InputElement label="Имя" id="name" type="text" placeholder="Введите имя" errorMessage=""/>
        <InputElement label="E-mail" id="email" type="email" placeholder="Введите e-mail"/>
        <InputElement label="Пароль" id="password" type="password" placeholder="Введите пароль" hasSecretValue={true}/>
        <ErrorMessage errorMessage="При регистрации пользователя произошла ошибка."/>
        <FormButton isSubmitButton={true} buttonText="Зарегистрироваться"/>
        <FormLink address="/signin" linkText="Уже зарегистрированы?" linkButton="Войти"/>
      </Form>
    </>
  )
}

export default Register;