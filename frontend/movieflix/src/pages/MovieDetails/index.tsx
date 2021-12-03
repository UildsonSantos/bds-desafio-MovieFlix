import ButtonIcon from 'components/ButtonIcon';
import CardMovie from 'components/CardMovie';
import CardReview from 'components/CardReview';

import './styles.css';

const MovieDetails = () => {
  const movie = {
    id: 1,
    title: 'A Voz do Silêncio',
    subTitle: 'Koe no Katachi',
    year: 2020,
    imgUrl:
      'https://image.tmdb.org/t/p/w533_and_h300_bestv2/5lAMQMWpXMsirvtLLvW7cJgEPkU.jpg',
    synopsis:
      'Nishimiya Shouko é uma estudante com deficiência auditiva. Durante o ensino fundamental, após se transferir para uma nova escola, Shouko passa a ser alvo de bullying e em pouco tempo precisa se transferir. O que ela não esperava é que alguns anos depois, Ishida Shouya, um dos valentões que tanto a fez sofrer no passado surgisse de novo em sua vida com um novo propósito.',
    genre: {
      id: 1,
      name: 'Comédia',
    },
  };

  return (
    <>
      <div className="movie-details-container">
        <CardMovie movie={movie} />
        <div className="base-card card-rating-container">
          <form className="card-rating-container-form">
            <input
              type="text"
              placeholder="Deixe sua avaliação aqui"
              className="form-control base-input"
            />

            <div className="card-rating-container-form-button">
              <ButtonIcon text="SALVAR AVALIAÇÃO" />
            </div>
          </form>
        </div>

        <div className="movie-details-reviews">
          <CardReview 
            username="Bob"
            comment="Melhor filme do ano" />
          <CardReview
            username="Ana"
            comment="Gostei muito do final do filme, quando será que vai sair a continuação"
          />
          <CardReview
            username="Maria"
            comment="Hahahah ...também gostei, o próximo será uma loucuraaa"
          />
          <CardReview
            username="Alex"
            comment="Esse merece ser uma serie ...pra gente maratonar heheheh"
          />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
