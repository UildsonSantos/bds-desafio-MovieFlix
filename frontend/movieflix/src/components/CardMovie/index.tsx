import { Movie } from 'types/movie';

import './styles.css';

type Props = {
  movie: Movie;
};

const CardMovie = ({ movie }: Props) => {
  return (
    <div className="card-movies-container base-card">
      <div className="card-movies-image">
        <img src={movie.imgUrl} alt="Imagem do filme" />
      </div>
      <div className="card-movies-content">
        <h3>{movie.title}</h3>
        <h5>{movie.year}</h5>
        <h6>{movie.subTitle}</h6>
        <p>{movie.synopsis}</p>
      </div>
    </div>
  );
};

export default CardMovie;
