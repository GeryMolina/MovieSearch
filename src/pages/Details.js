import React, { Component } from 'react';
import Proptypes from 'prop-types';

const API_KEY = '3a4ab00';

export class Details extends Component {
    static propTypes = {
        id: Proptypes.string
    }
    state = { movie: {} }

    //Hacemos un llamado a la API para que nos entregue info de la pelicula
    _fetchMovie({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())//transformamos la respuesta a JSON
            .then(movie => {
                console.log({ movie })
                this.setState({ movie })
            })
    }
    _goBack(){
        window.history.back()
    }

    //Ciclo de vida que indica que ya se ha renderizado al menos una vez
    componentDidMount() {
        const { id } = this.props
        this._fetchMovie({ id })
    }

    render() {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
        return (
            <div>
                <button onClick={this._goBack}>Volver</button>
                <h1>{Title}</h1>
                <img src={Poster} alt={Title} />
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>

        )
    }
}
