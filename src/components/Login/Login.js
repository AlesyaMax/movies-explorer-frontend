import Form from '../Form/Form';
import InputElement from '../InputElement/InputElement';
import FormLink from '../FormLink/FormLink';
import FormButton from '../FormButton/FormButton';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    email: "",
    password: ""
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const checkValidity = (e) => {
    if(formValue.email === "" || formValue.password === "" || !e.target.validity.valid) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
    checkValidity(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(formValue);
  };

  useEffect(() => {
    if(props.isLoggedIn) {
      navigate("/", { replace: true })
    } 
  })

  return (
    <main>
      <Form 
        withLogo={true} 
        additionalContainerClass=""
        title="Рады видеть!"
        onSubmit={handleSubmit}>
        <InputElement 
          inputElementClass=""
          additionalLabelClass=""
          additionalInputClass=""
          label="E-mail" 
          id="email" 
          type="email" 
          name="email"
          placeholder="Введите e-mail"
          onChange={handleChange}
        />
        <InputElement 
          inputElementClass=""
          additionalLabelClass=""
          additionalInputClass=""
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
        <FormButton buttonText="Войти" additionalButtonClass="button_login" type="submit" isDisabled={isDisabled}/>
        <FormLink address="/signup" linkText="Ещё не зарегистрированы?" linkButton="Регистрация"/>
      </Form>
    </main>
  )
}

export default Login;