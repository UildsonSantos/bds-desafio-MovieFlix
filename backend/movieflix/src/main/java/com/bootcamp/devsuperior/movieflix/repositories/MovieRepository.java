package com.bootcamp.devsuperior.movieflix.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bootcamp.devsuperior.movieflix.entities.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
	
@Query(nativeQuery = true, value = " SELECT * FROM tb_movie INNER JOIN tb_genre where " 
				+	" tb_genre.id = tb_movie.genre_id and "
				+ " (tb_movie.genre_id = :genreId OR :genreId = 0) "
				+ " order by tb_movie.title ")
	Page<Movie> find( Long genreId, Pageable pageable);
}