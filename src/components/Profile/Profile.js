import Form from '../Form/Form';
import InputElement from '../InputElement/InputElement';
import FormLink from '../FormLink/FormLink';
import Header from '../Header/Header';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import FormButton from '../FormButton/FormButton';
import Paragraph from '../Paragraph/Paragraph';
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from "../../context/CurrentUserContext";
import {EMAIL_REGEXP, ERROR_MESSAGES} from '../../utils/constants';



function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");  
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [hasErrors, setHasErrors] = useState(false)

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);
  
  function handleChangeName(evt) {
    setHasErrors(false);
    setName(evt.target.value);
    if(!evt.target.validity.valid) {
      setIsButtonDisabled(true);
    } else {
      if(evt.target.value === currentUser.name && email === currentUser.email) {
        setIsButtonDisabled(true);
        setHasErrors(true);
      } else {
        setIsButtonDisabled(false);
        setHasErrors(false);
      };
    };
  }

  function handleChangeEmail(evt) {
    setHasErrors(false);
    setEmail(evt.target.value)
    if(!evt.target.validity.valid || !EMAIL_REGEXP.test(evt.target.value.toLowerCase())) {
      setIsButtonDisabled(true);
    } else {
      if(evt.target.value === currentUser.email && name === currentUser.name) {
        setIsButtonDisabled(true);
        setHasErrors(true);
      } else {
        setIsButtonDisabled(false);
        setHasErrors(false);
      };
    };
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsButtonDisabled(true);
    props.onSubmit({
      name,
      email,
    });
  }

  return (
    <>
    <Header isMenuOpened={props.isMenuOpened} onMenuClick={props.onMenuClick} isLoggedIn={props.isLoggedIn} onLogoClick={props.onLogoClick}/>
    <main>
      <Form withLogo={false} 
      additionalContainerClass="profile"
      title={`Привет, ${currentUser.name}!`}
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
          placeholder={currentUser.name || "Введите имя"}
          value={name}
          isDisabled={props.isInEditingMode ? false : true}
          onChange={handleChangeName}
          isLoading={props.isLoading}
        />
        <InputElement 
          inputElementClass="profile__input-element" 
          additionalLabelClass="profile__label"
          additionalInputClass="profile__input"
          label="E-mail" 
          id="email" 
          type="email"  
          name="email"
          placeholder={currentUser.email || "Введите почту"}
          value={email}
          isDisabled={props.isInEditingMode ? false : true}
          onChange={handleChangeEmail}
          isLoading={props.isLoading}
        />
        {props.isInEditingMode 
          ? (<>
            <ErrorMessage hasErrors={hasErrors} errorMessage={ERROR_MESSAGES.SAME_DATA} additionalErrorClass="profile__error-message"/>
            <FormButton isDisabled={props.isLoading ? true : isButtonDisabled} buttonText="Сохранить" additionalButtonClass="profile__button_save" type="submit"/>
            </>)
          : (<>
            <Paragraph additionalClass="profile__edit" text="Редактировать" onClickFunction={props.onEditProfile}/>
            <FormLink address="/signin" linkText="Выйти из аккаунта" additionalLinkClass="profile__link" onClick={props.onSignOut}/>
            </>)
        } 
      </Form>
    </main>
    </>
  )
}

export default Profile;