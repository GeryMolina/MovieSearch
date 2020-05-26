import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';

class App extends Component {
  //Creo el estado con un array vacio
  state = { results:[] }
  // se actualiza el estado pasando results y pasamos metodo como prop al componente SearchForm
  _handleResults = (results) => {
    this.setState({ results }) //Le pasamos al estado declarado como array vacio el resultado de la consulta a la API
  }
  //si tenemos resultados devolveremos, un parrafo indicando los titulos de la pelicula encontrada
  _handleRenderResults = () => {
    const {results} = this.state;
    return results.map(movie => {
      return <p key={movie.imdbID}>{movie.Title}</p>
    })
  }
  render(){
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className='SearchForm-wrapper'>
          <SearchForm onResults={this._handleResults} />
        </div>
        {
          this.state.results.length === 0 ? <p>Sin resultados</p> : this._handleRenderResults()
        }
      </div>
    )
  }
}

export default App;
