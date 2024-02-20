import React from 'react';
import SectionTitle from "../SectionTitle/SectionTitle";
import Paragraph from "../Paragraph/Paragraph";
import studentPhoto from '../../images/student.png';
import linkIcon from "../../images/link-icon.svg";

class AboutMe extends React.Component {
  render() {
    return (
      <section className='student' id="about-me">
        <SectionTitle sectionTitle="Студент"/>
        <article className='student_info'>
          <h3 className='student_info__name'>Виталий</h3>
          <p className='student_info__subtitle'>Фронтенд-разработчик, 30 лет</p>
          <Paragraph additionalClass='student_info__description' text="Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы."/>
          <img className='student_info__photo' alt="Фотография студента Яндекс.Практикума" src={studentPhoto}></img>
          <a className='student_info__github-link' href="https://github.com/AlesyaMax" target="blank">Github</a>
        </article>
        <p className='student__portfolio'>Портфолио</p>
        <nav className='student_projects'>
          <a className='student_projects__item' href="https://github.com/AlesyaMax/how-to-learn.git" target="blank">Статичный сайт<img className="student_projects__link-icon" alt='ссылка' src={linkIcon}></img></a>
          <a className='student_projects__item' href="https://alesyamax.github.io/russian-travel/" target="blank">Адаптивный сайт<img className="student_projects__link-icon" alt='ссылка' src={linkIcon}></img></a>
          <a className='student_projects__item' href="https://github.com/AlesyaMax/react-mesto-api-full-gha.git" target="blank">Одностраничное приложение<img className="student_projects__link-icon" alt='ссылка' src={linkIcon}></img></a>
        </nav>
      </section>
    )
  }
}

export default AboutMe;