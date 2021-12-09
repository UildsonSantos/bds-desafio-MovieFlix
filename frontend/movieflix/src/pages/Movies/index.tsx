import { Link } from 'react-router-dom';
import Select from 'react-select';

import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';

import CardMovie from 'components/CardMovie';
import Pagination from 'components/Pagination';
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

  const options = [
    { value: 'aventura', label: 'Aventura' },
    { value: 'comedia', label: 'Comédia' },
    { value: 'acao', label: 'Ação' },
  ];

  
  return (
    <div className="movie-container ">
      <div className="movie-container-filter base-card">
        <Select
          options={options}
          classNamePrefix="movie-container-select"
          placeholder="Buscar por gênero"
          isClearable
          theme={(theme) => ({
            ...theme,

            colors: {
              ...theme.colors,
              primary25: '#ffde67',
              primary: '#ffc800e7',
              neutral0: '#6c6c6c',
              neutral80: '#ffffff',
            },
          })}
        />
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
