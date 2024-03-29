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
    <main>
      <Form withLogo={true} 
      additionalContainerClass=""
      title="Добро пожаловать!"
      onSubmit={handleSubmit}>
        <InputElement 
          inputElementClass=""
          additionalLabelClass=""
          additionalInputClass=""
          label="Имя" 
          id="name" 
          type="text" 
          name="name"
          minLength="2"
          maxLength="30"
          placeholder="Введите имя" 
          errorMessage="" 
          onChange={handleChange}
        />
        
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
       
        <ErrorMessage hasErrors={true} errorMessage="При регистрации пользователя произошла ошибка."/>
        <FormButton buttonText="Зарегистрироваться" type="submit"/>
        <FormLink address="/signin" linkText="Уже зарегистрированы?" linkButton="Войти"/>
      </Form>
    </main>
  )
}

export default Register;