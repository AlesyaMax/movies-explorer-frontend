import React from 'react';
import NavTab from '../NavTab/NavTab';

class Promo extends React.Component {
  render() {
    return (
      <div className='promo'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <NavTab pointsSet={
          [{"id": "promoAboutProject",
          "name": "О проекте",
          "link": "/"
          },
          {"id": "promoTechno",
          "name": "Технологии",
          "link": "/"
          },
          {"id": "promoStudent",
          "name": "Студент",
          "link": "/"
          },
          ]}
        />
      </div>
    )
  }

}

export default Promo;