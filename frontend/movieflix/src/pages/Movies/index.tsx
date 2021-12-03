import { Link } from 'react-router-dom';
import Select from 'react-select';

import CardMovie from 'components/CardMovie';
import Pagination from 'components/Pagination';

import './styles.css';

const Movies = () => {
  const options = [
    { value: 'aventura', label: 'Aventura' },
    { value: 'comedia', label: 'Comédia' },
    { value: 'acao', label: 'Ação' },
  ];

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
    <div className="movie-container ">
      <div className="movie-container-filter base-card">
        <Select
          options={options}
          classNamePrefix="movie-container-select"
          placeholder='Buscar por gênero'
          isClearable
          theme={(theme) => ({
            ...theme,
            
            colors: {
              ...theme.colors,
              primary25: '#ffde67',
              primary: '#ffc800e7',
              neutral0: '#6c6c6c',
              neutral80: '#ffffff'
            },
          })}
        />
      </div>

      <div className="row">
        <div className=" movie-content col-sm-6 col-lg-6 col-xl-3">
          <Link to="/movies/1">
            <CardMovie movie={movie} />
          </Link>
        </div>
        <div className=" movie-content col-sm-6 col-lg-6 col-xl-3">
          <Link to="/movies/1">
            <CardMovie movie={movie} />
          </Link>
        </div>
        <div className=" movie-content col-sm-6 col-lg-6 col-xl-3">
          <Link to="/movies/1">
            <CardMovie movie={movie} />
          </Link>
        </div>
        <div className=" movie-content col-sm-6 col-lg-6 col-xl-3">
          <Link to="/movies/1">
            <CardMovie movie={movie} />
          </Link>
        </div>
        <div className=" movie-content col-sm-6 col-lg-6 col-xl-3">
          <Link to="/movies/1">
            <CardMovie movie={movie} />
          </Link>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default Movies;
