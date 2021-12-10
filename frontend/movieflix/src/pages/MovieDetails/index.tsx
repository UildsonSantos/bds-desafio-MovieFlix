import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';

import ButtonIcon from 'components/ButtonIcon';
import CardReview from 'components/CardReview';
import CardMovie from 'components/CardMovie';
import { requestBackend } from 'util/requests';
import { hasAnyRoles, isAuthenticated } from 'util/auth';
import history from 'util/history';
import { Review } from 'types/review';
import { Movie } from 'types/movie';

import './styles.css';

type UrlParams = {
  movieId: string;
};

type FormData = {
  text: string;
  movieId: number;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();
  const [movieReviews, setMovieReviews] = useState<Review[]>([]);
  const [movie, setMovie] = useState<Movie>();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    const params: AxiosRequestConfig = {
      method: 'POST',
      url: `/reviews`,
      withCredentials: true,
      data: {
        text: formData.text,
        movieId: movieId,
      },
    };
    
    requestBackend(params).then((response) => {
      setMovieReviews((movieReviews) => [...movieReviews, response.data]);
      setValue("text", '')
    });
  };


  useEffect(() => {
    setIsLoading(true);
    const params: AxiosRequestConfig = {
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    isAuthenticated() ? 
    (
      requestBackend(params)
      .then((response) => {
        setMovieReviews(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      })
    ) : (
      history.push("/")
    );
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
        {isLoading ? (
          <h3 className="text-white">Carregando...</h3>
        ) : (
          movie && <CardMovie movie={movie} />
        )}
        {hasAnyRoles(['ROLE_MEMBER']) && (
          <div className="base-card card-rating-container">
            <form className="card-rating-container-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                {...register('text')}
                placeholder="Deixe sua avaliação aqui"
                className="form-control base-input"
              />

              <div className="card-rating-container-form-button">
                <ButtonIcon text="SALVAR AVALIAÇÃO" />
              </div>
            </form>
          </div>
        )}
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
