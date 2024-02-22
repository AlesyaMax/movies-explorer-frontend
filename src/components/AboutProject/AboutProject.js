import React from 'react';
import Paragraph from '../Paragraph/Paragraph';
import SectionTitle from '../SectionTitle/SectionTitle';

class AboutProject extends React.Component {
  render() {
    return (
      <section className='about-project' id="about-project">
        <SectionTitle additionalClass='about-project__title' sectionTitle="О проекте" />
        <article className='about-project_article'>
          <h3 className='article__title'>Дипломный проект включал 5 этапов</h3>
          <Paragraph additionalClass="article__paragraph" text="Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки." />
        </article>
        <article className='about-project_article'>
          <h3 className='article__title'>На выполнение диплома ушло 5 недель</h3>
          <Paragraph additionalClass="article__paragraph" text="У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься." />
        </article>
        <div className='about-project_timeline'>
          <div className='about-project_timeline_back-end'>
            <p className='timeline__duration timeline__duration_back-end'>1 неделя</p>
            <p className='timeline__description'>Back-end</p>
          </div>
          <div className='about-project_timeline_front-end'>
            <p className='timeline__duration timeline__duration_front-end'>4 недели</p>
            <p className='timeline__description'>Front-end</p>
          </div>
        </div>

      </section>
    )
  }
}

export default AboutProject;