import React from 'react';

const MovieList = ({movies}) => {
  return (
    <div className='movie-list'>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {
                    movies.map((movie, index) => {
                        return <tr>
                            <td>{movie.title}</td>
                            <td>{movie.genre}</td>
                            <td>{movie.year}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  );
}

export default MovieList;
