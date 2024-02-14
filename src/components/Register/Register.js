import Form from '../Form/Form';
import InputElement from '../InputElement/InputElement';
import FormLink from '../FormLink/FormLink';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import FormButton from '../FormButton/FormButton';
import { useState } from 'react';

function Register(props) {
  const [formValue, setFormValue] = useState({
    name: "",
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
      <Form withLogo={true} 
      title="Добро пожаловать!"
      onSubmit={handleSubmit}>
        <InputElement 
          label="Имя" 
          id="name" 
          type="text" 
          name="name"
          placeholder="Введите имя" 
          errorMessage="" 
          onChange={handleChange}
        />
        
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
          placeholder="Введите пароль" 
          hasSecretValue={true} 
          onChange={handleChange}
        />
       
        <ErrorMessage errorMessage="При регистрации пользователя произошла ошибка."/>
        <FormButton buttonText="Зарегистрироваться"/>
        <FormLink address="/signin" linkText="Уже зарегистрированы?" linkButton="Войти"/>
      </Form>
    </>
  )
}

export default Register;