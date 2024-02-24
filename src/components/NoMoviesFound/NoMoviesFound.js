import Paragraph from '../Paragraph/Paragraph';

function NoMoviesFound(props) {
  return(
    <div className='no-movies'>
      <Paragraph text="Ничего не найдено" additionalClass="no-movies__message"/>
    </div>
  )
}

export default NoMoviesFound;