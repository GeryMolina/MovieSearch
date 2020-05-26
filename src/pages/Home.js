import React, { Component } from 'react';
import { Title } from '../components/Title';
import { SearchForm } from '../components/SearchForm';
import { MovieList } from '../components/MovieList';

export class Home extends Component {
    //Creo el estado con un array vacio
    state = { useSearch: false, results: [] }
    // se actualiza el estado pasando results y pasamos metodo como prop al componente SearchForm
    _handleResults = (results) => {
        this.setState({ results, useSearch: true }) //Le pasamos al estado declarado como array vacio el resultado de la consulta a la API
    }
    _renderResults() {
        return (
            this.state.results.length === 0 ? <p>Sorry! Results no found!</p>
                : <MovieList movies={this.state.results} />
        )
    }
    render() {
        return (
            <div>
                <Title>Search Movies</Title>
                <div className='SearchForm-wrapper'>
                    <SearchForm onResults={this._handleResults} />
                </div>
                {this.state.useSearch ? this._renderResults() : <small>Use the form to search a movie</small>}
            </div>
        )
    }

}