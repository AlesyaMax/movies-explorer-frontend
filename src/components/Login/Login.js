import Form from '../Form/Form';
import InputElement from '../InputElement/InputElement';
import FormLink from '../FormLink/FormLink';
import FormButton from '../FormButton/FormButton';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useState } from 'react';

function Login(props) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(formValue);
  };

  return (
    <>
      <Form 
        withLogo={true} 
        title="Рады видеть!"
        onSubmit={handleSubmit}>
        <InputElement 
          label="E-mail" 
          id="email" 
          type="email" 
          name="email"
          placeholder="Введите e-mail"
          onChange={handleChange}
        />
        <InputElement 
          label="Пароль" 
          id="password" 
          type="password" 
          name="password"
          minLength="2"
          maxLength="30"
          placeholder="Введите пароль" 
          hasSecretValue={true}
          onChange={handleChange}
        />
        <ErrorMessage errorMessage="Вы ввели неправильный логин или пароль."/>
        <FormButton buttonText="Войти" additionalButtonClass="button_login"/>
        <FormLink address="/signup" linkText="Ещё не зарегистрированы?" linkButton="Регистрация"/>
      </Form>
    </>
  )
}

export default Login;