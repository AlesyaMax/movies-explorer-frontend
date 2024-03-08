import React from 'react';
import NavTab from '../NavTab/NavTab';

class Promo extends React.Component {
  render() {
    return (
      <section className='promo'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <NavTab 
          additionalClass=""
          pointsSet={
            [{"id": "promoAboutProject",
            "name": "О проекте",
            "link": "#about-project",
            "additionalPointClass": "",
            "additionalLinkClass": ""
            },
            {"id": "promoTechno",
            "name": "Технологии",
            "link": "#techs",
            "additionalPointClass": "",
            "additionalLinkClass": ""
            },
            {"id": "promoStudent",
            "name": "Студент",
            "link": "#about-me",
            "additionalPointClass": "",
            "additionalLinkClass": ""
            },
            ]
          }
        />
      </section>
    )
  }

}

export default Promo;