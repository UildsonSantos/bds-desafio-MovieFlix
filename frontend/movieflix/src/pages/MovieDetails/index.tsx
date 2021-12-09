import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';

import ButtonIcon from 'components/ButtonIcon';
import CardReview from 'components/CardReview';
import { requestBackend } from 'util/requests';
import { Review } from 'types/review';
import CardMovie from 'components/CardMovie';
import { Movie } from 'types/movie';

import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();
  const [movieReviews, setMovieReviews] = useState<Review[]>([]);
  const [movie, setMovie] = useState<Movie>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const params: AxiosRequestConfig = {
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(params)
      .then((response) => {
        setMovieReviews(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  useEffect(() => {
    setIsLoading(true);
    const params: AxiosRequestConfig = {
      url: `/movies/${movieId}`,
      withCredentials: true,
    };
    requestBackend(params)
      .then((response) => {
        setMovie(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <>
      <div className="movie-details-container">
        {isLoading ? <h3 className="text-white">Carregando...</h3> : movie && <CardMovie movie={movie}/>}
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
          {isLoading ? (
            <h3>Carregando...</h3>
          ) : movieReviews && movieReviews.length > 0 ? (
            movieReviews?.map((ele) => (
              <CardReview key={ele.id} review={ele}></CardReview>
            ))
          ) : (
            <h3>Este filme não possui comentários</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
