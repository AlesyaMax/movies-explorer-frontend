import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Paragraph from "../Paragraph/Paragraph";
import NavTab from "../NavTab/NavTab";

class Techs extends React.Component {
  render() {
    return (
      <section className='techs' id="techs">
        <SectionTitle additionalClass="techs__section-title" sectionTitle="Технологии"/>
        <h3 className='techs__title'>7 технологий</h3>
        <Paragraph additionalClass="techs__paragraph" text="На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте."/>
        <NavTab additionalClass="techs__navtab" pointsSet={
          [
            {"id": "techsHTML",
          "name": "HTML",
          "additionalPointClass": "techs__navtab-item",
          "additionalLinkClass": "techs__navtab-link"
          },
          {"id": "techsCSS",
          "name": "CSS",
          "additionalPointClass": "techs__navtab-item",
          "additionalLinkClass": "techs__navtab-link"
          },
          {"id": "techsJS",
          "name": "JS",
          "additionalPointClass": "techs__navtab-item",
          "additionalLinkClass": "techs__navtab-link"
          },
          {"id": "techsReact",
          "name": "React",
          "additionalPointClass": "techs__navtab-item",
          "additionalLinkClass": "techs__navtab-link"
          },
          {"id": "techsGit",
          "name": "Git",
          "additionalPointClass": "techs__navtab-item",
          "additionalLinkClass": "techs__navtab-link"
          },
          {"id": "techsExpress.js",
          "name": "Express.js",
          "additionalPointClass": "techs__navtab-item",
          "additionalLinkClass": "techs__navtab-link"
          },
          {"id": "techsmongoDB",
          "name": "mongoDB",
          "additionalPointClass": "techs__navtab-item",
          "additionalLinkClass": "techs__navtab-link"
          },
          ]
        }/>
      </section>
    )
  }
}

export default Techs;