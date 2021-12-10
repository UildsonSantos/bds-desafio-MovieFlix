import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';

import { Genre } from 'types/movie';
import { requestBackend } from 'util/requests';

import './styles.css';

export type GenreFilterData = {
  genre: Genre | null;
};

type Props = {
  onSubmitFilter: (data: GenreFilterData) => void;
};

const GenreFilter = ({ onSubmitFilter }: Props) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  const { handleSubmit, setValue, getValues, control } =
    useForm<GenreFilterData>();

  const onSubmit = (formData: GenreFilterData) => {
    onSubmitFilter(formData);
  };

  const handleChangeGenre = (value: Genre) => {
    setValue('genre', value);

    const obj: GenreFilterData = {
      genre: getValues('genre'),
    };

    onSubmitFilter(obj);
  };

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/genres',
      withCredentials: true,
    };
    requestBackend(params).then((response) => {
      setGenres(response.data);
    });
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="filter-form">
      <Controller
        name="genre"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={genres}
            classNamePrefix="filter-container-select"
            placeholder="Buscar por gênero"
            isClearable
            getOptionLabel={(genre: Genre) => genre.name}
            getOptionValue={(genre: Genre) => String(genre.id)}
            onChange={(value) => handleChangeGenre(value as Genre)}
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
        )}
      />
    </form>
  );
};

export default GenreFilter;
