import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Paragraph from "../Paragraph/Paragraph";
import NavTab from "../NavTab/NavTab";

class Techs extends React.Component {
  render() {
    return (
      <section className='techs'>
        <SectionTitle additionalClass="techs__title" sectionTitle="Технологии"/>
        <p className='techs__article_title'>7 технологий</p>
        <Paragraph additionalClass="techs__paragraph" text="На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте."/>
        <NavTab additionalClass="techs__navtab" pointsSet={
          [
            {"id": "techsHTML",
          "name": "HTML",
          "additionalClass": "techs__navtab_item",
          },
          {"id": "techsCSS",
          "name": "CSS",
          "additionalClass": "techs__navtab_item",
          },
          {"id": "techsJS",
          "name": "JS",
          "additionalClass": "techs__navtab_item",
          },
          {"id": "techsReact",
          "name": "React",
          "additionalClass": "techs__navtab_item",
          },
          {"id": "techsGit",
          "name": "Git",
          "additionalClass": "techs__navtab_item",
          },
          {"id": "techsExpress.js",
          "name": "Express.js",
          "additionalClass": "techs__navtab_item",
          },
          {"id": "techsmongoDB",
          "name": "mongoDB",
          "additionalClass": "techs__navtab_item",
          },
          ]
        }/>
      </section>
    )
  }
}

export default Techs;