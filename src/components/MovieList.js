import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Movie } from './Movie';

export class MovieList extends Component {
    static propTypes = {
        movies: Proptypes.array
    }
    render() {
        const { movies } = this.props;
        return (
            <div className='MoviesList'>
                {
                    movies.map(movie => {
                        return (
                            <div key={movie.imdbID + 1} className='MoviesList-item'>
                                <Movie
                                    id={movie.imdbID}
                                    title={movie.Title}
                                    year={movie.Year}
                                    poster={movie.Poster} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}