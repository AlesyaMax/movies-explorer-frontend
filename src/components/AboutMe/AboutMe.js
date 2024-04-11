import React from 'react';
import SectionTitle from "../SectionTitle/SectionTitle";
import Paragraph from "../Paragraph/Paragraph";
import studentPhoto from '../../images/photo.jpg';
import linkIcon from "../../images/link-icon.svg";

class AboutMe extends React.Component {
  render() {
    return (
      <section className='student' id="about-me">
        <SectionTitle sectionTitle="Студент"/>
        <article className='student__info'>
          <h3 className='student__name'>Алеся</h3>
          <p className='student__subtitle'>Фронтенд-разработчик, 29 лет</p>
          <Paragraph additionalClass='student__description' text='Я родилась в Брянской области, но училась и живу в Москве. Закончила финансовый факультет РЭУ им. Г.В.Плеханова. Более 7 лет проработала в международной консалтинговой компании, где успела попробовать свои силы в аудите и бизнес-консалтинге. Год назад решила последовать зову сердца - начала изучать программирование и прошла обучение в Яндекс Практикуме по специальности "Веб-разработчик". Мне очень нравится создавать что-то своими руками и видеть результат своей работы. Мечтаю разрабатывать цифровые продукты в сфере образования, чтобы люди по всему миру имели удобный доступ к знаниям.'/>
          <img className='student__photo' alt="Фотография студента Яндекс.Практикума" src={studentPhoto}></img>
          <a className='student__github-link' href="https://github.com/AlesyaMax" target="blank">Github</a>
        </article>
        <p className='student__portfolio'>Портфолио</p>
        <ul className='student__projects'>
          <li className='student__project'>
            <a className='student__project-link' href="https://github.com/AlesyaMax/how-to-learn.git" target="blank">Статичный сайт<img className="student__link-icon" alt='ссылка' src={linkIcon}></img></a>
          </li>
          <li className='student__project'>
            <a className='student__project-link' href="https://github.com/AlesyaMax/russian-travel.git" target="blank">Адаптивный сайт<img className="student__link-icon" alt='ссылка' src={linkIcon}></img></a>
          </li>
          <li className='student__project'>
            <a className='student__project-link' href="https://github.com/AlesyaMax/react-mesto-api-full-gha.git" target="blank">Одностраничное приложение<img className="student__link-icon" alt='ссылка' src={linkIcon}></img></a>
          </li>
        </ul>
      </section>
    )
  }
}

export default AboutMe;