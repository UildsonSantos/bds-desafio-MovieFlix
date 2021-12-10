import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';

import CardMovie from 'components/CardMovie';
import Pagination from 'components/Pagination';
import GenreFilter from 'components/GenreFilter';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import { isAuthenticated } from 'util/auth';
import history from 'util/history';

import './styles.css';

const Movies = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      params: {
        page: 0,
        size: 4,
      },
      withCredentials: true,
    };

    setIsLoading(true);
    isAuthenticated()
      ? requestBackend(params)
          .then((response) => {
            setPage(response.data);
          })
          .finally(() => {
            setIsLoading(false);
          })
      : history.push('/');
  }, []);


  return (
    <div className="movie-container ">
      <div className="movie-container-filter base-card">
        <GenreFilter />
      </div>

      <div className="row">
        {isLoading ? (
          <h1 className="text-white">Carregando...</h1>
        ) : (
          page?.content.map((movie) => (
            <div
              className="movie-content col-sm-6 col-lg-6 col-xl-3"
              key={movie.id}
            >
              <Link to={`/movies/${movie.id}`}>
                <CardMovie movie={movie} />
              </Link>
            </div>
          ))
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default Movies;
