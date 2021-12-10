import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';

import CardMovie from 'components/CardMovie';
import Pagination from 'components/Pagination';
import GenreFilter, { GenreFilterData } from 'components/GenreFilter';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import { isAuthenticated } from 'util/auth';
import history from 'util/history';

import './styles.css';

type ControlComponentsData = {
  filterData: GenreFilterData;
};

const Movies = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();
  const [isLoading, setIsLoading] = useState(false);

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      filterData: { genre: { id: 0, name: '' } },
    });

  const handleSubmitFilter = (data: GenreFilterData) => {
    setControlComponentsData({ filterData: data });
  };

  const getMovies = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      params: {
        page: 0,
        size: 4,
        genreId: controlComponentsData.filterData.genre?.id,
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
  }, [controlComponentsData]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className="movie-container ">
      <div className="movie-container-filter base-card">
        <GenreFilter onSubmitFilter={handleSubmitFilter} />
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
