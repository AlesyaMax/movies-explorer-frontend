import Form from '../Form/Form';
import InputElement from '../InputElement/InputElement';
import FormLink from '../FormLink/FormLink';
import Header from '../Header/Header';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import FormButton from '../FormButton/FormButton';
import Paragraph from '../Paragraph/Paragraph';
import { useState } from 'react';


function Profile(props) {
  const [formValue, setFormValue] = useState({
    name: "",
    email: ""
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
    <Header isMenuOpened={props.isMenuOpened} onMenuClick={props.onMenuClick} isLoggedIn={props.isLoggedIn} onLogoClick={props.onLogoClick}/>
    <main>
      <Form withLogo={false} 
      additionalContainerClass="profile"
      title="Привет, Виталий!"
      additionalTitleClass="profile__title"
      onSubmit={handleSubmit}>
        <InputElement 
          inputElementClass="profile__input-element" 
          additionalLabelClass="profile__label"
          additionalInputClass="profile__input"
          label="Имя" 
          id="name" 
          type="text" 
          name="name"
          minLength="2"
          maxLength="30"
          placeholder="Виталий" 
          inputValue={props.name}
          isDisabled={props.isInEditingMode ? false : true}
          onChange={handleChange}
        />
        <InputElement 
          inputElementClass="profile__input-element" 
          additionalLabelClass="profile__label"
          additionalInputClass="profile__input"
          label="E-mail" 
          id="email" 
          type="email"  
          name="email"
          placeholder="pochta@yandex.ru" 
          inputValue={props.email}
          isDisabled={props.isInEditingMode ? false : true}
          onChange={handleChange}
        />
        {props.isInEditingMode 
          ? (<>
            <ErrorMessage hasErrors={false} errorMessage="При обновлении профиля произошла ошибка." additionalErrorClass="profile__error-message"/>
            <FormButton buttonText="Сохранить" additionalButtonClass="profile__button_save" type="submit"/>
            </>)
          : (<>
            <Paragraph additionalClass="profile__edit" text="Редактировать" onClickFunction={props.onEditProfile}/>
            <FormLink address="/signin" linkText="Выйти из аккаунта" additionalLinkClass="profile__link"/>
            </>)
        } 
      </Form>
    </main>
    </>
  )
}

export default Profile;