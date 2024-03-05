import Form from '../Form/Form';
import InputElement from '../InputElement/InputElement';
import FormLink from '../FormLink/FormLink';
import FormButton from '../FormButton/FormButton';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register(props) {
  const navigate = useNavigate();
  
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const checkValidity = (e) => {
    if(formValue.name === "" || formValue.email === "" || formValue.password === "" || !e.target.validity.valid) {
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
        <FormButton buttonText="Зарегистрироваться" type="submit" isDisabled={isDisabled}/>
        <FormLink address="/signin" linkText="Уже зарегистрированы?" linkButton="Войти"/>
      </Form>
    </main>
  )
}

export default Register;