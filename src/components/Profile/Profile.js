import Form from '../Form/Form';
import InputElement from '../InputElement/InputElement';
import FormLink from '../FormLink/FormLink';
import Header from '../Header/Header';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import FormButton from '../FormButton/FormButton';

function Profile(props) {
  return (
    <>
    <Header/>
      <Form withLogo={false} 
      title="Привет, Виталий!"
      additionalTitleClass="profile__title">
        <InputElement 
        inputElementClass="profile__input-element" 
        additionalLabelClass="profile__label"
        additionalInputClass="profile__input"
        label="Имя" 
        id="name" 
        type="text" 
        placeholder="Виталий" 
        inputValue={props.name}/>
        <InputElement 
        inputElementClass="profile__input-element" 
        additionalLabelClass="profile__label"
        additionalInputClass="profile__input"
        label="E-mail" 
        id="email" 
        type="email"  
        placeholder="pochta@yandex.ru" 
        inputValue={props.email}/>
        <ErrorMessage hasErrors={true} errorMessage=" При обновлении профиля произошла ошибка." additionalErrorClass="profile__error-message"/>
        <FormButton isSubmitButton={true} buttonText="Сохранить" additionalButtonClass="profile__button_save"/>
        <FormButton additionalButtonClass="profile__button_edit" buttonText="Редактировать"/>
        <FormLink address="/login" linkText="Выйти из аккаунта" additionalLinkClass="profile__link"/>
      </Form>
    </>
  )
}

export default Profile;