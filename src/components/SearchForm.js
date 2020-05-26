import React, { Component } from 'react';

const API_KEY = '3a4ab00';

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }
    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }
    //Acá tomamos el valor ingresado en el input y hacemos una petición a la API con el valor buscado
    _handleSubmit = (e) => {
        e.preventDefault();
        const { inputMovie } = this.state;
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then( res => res.json())//transformamos la respuesta a JSON
            .then(results => {
                //se extrae la propiedad Search y Total results del JSON
                const { Search= [], totalResults='0'} = results;//Se le asigna un valor por defecto
                console.log(Search, totalResults)
                //Pasamos Search el metodo onResults para enviarle los resultados al App.js
                this.props.onResults(Search)
            })
    }
    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            onChange={this._handleChange}
                            className="input"
                            type="text"
                            placeholder="Movie to search..." />
                    </div>
                    <div className="control">
                        <button className="button is-info">Search</button>
                    </div>
                </div>
            </form>
        )



    }
}

