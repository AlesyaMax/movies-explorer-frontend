import React from 'react';
import SectionTitle from "../SectionTitle/SectionTitle";
import Paragraph from "../Paragraph/Paragraph";
import { NavLink } from 'react-router-dom';
import studentPhoto from '../../images/student.png';
import linkIcon from "../../images/link-icon.svg";

class AboutMe extends React.Component {
  render() {
    return (
      <section className='student' >
        <SectionTitle sectionTitle="Студент"/>
        <article className='student_info'>
          <h3 className='student_info__name'>Виталий</h3>
          <p className='student_info__subtitle'>Фронтенд-разработчик, 30 лет</p>
          <Paragraph additionalClass='student_info__description' text="Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы."/>
          <img className='student_info__photo' alt="фото" src={studentPhoto}></img>
          <a className='student_info__github-link'>Github</a>
        </article>
        <p className='student__portfolio'>Портфолио</p>
        <nav className='student_projects'>
          <NavLink className='student_projects__item' to="/">Статичный сайт<img className="student_projects__link-icon" alt='ссылка' src={linkIcon}></img></NavLink>
          <NavLink className='student_projects__item' to="/">Адаптивный сайт<img className="student_projects__link-icon" alt='ссылка' src={linkIcon}></img></NavLink>
          <NavLink className='student_projects__item' to="/">Одностраничное приложение<img className="student_projects__link-icon" alt='ссылка' src={linkIcon}></img></NavLink>
        </nav>
      </section>
    )
  }
}

export default AboutMe;