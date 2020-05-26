import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { ButtonBackHome } from '../components/ButtonBackHome'

const API_KEY = '3a4ab00';

export class Details extends Component {
    static propTypes = {
        //El Id ya no llega por props sino que por la url
        //Para acceder a esta info, cuando usamos un componente pagina en una Route de react router 
        //le inyecta automaticamente una serie de props a las que podemos acceder
        //Esta props(match) es un objeto qe contiene paramns con todos los parametros de la url
        //tambien trae un boleano llamado isExact que nos indica si la ruta a la que se ha entredo es exactamente la que se esperaba
        //Otra llamada path que tiene el valor que ptron que hemos usado para esta ruta 
        match: Proptypes.shape({
            params: Proptypes.object,
            isExact: Proptypes.bool,
            path: Proptypes.string,
            url: Proptypes.string
        })
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

    //Ciclo de vida que indica que ya se ha renderizado al menos una vez
    componentDidMount() {
        console.log(this.props)
        const { id } = this.props.match.params
        this._fetchMovie({ id })
    }

    render() {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
        return (
            <div className="Movie-details" >
                <section>
                    <ButtonBackHome />
                </section>
                <div className="Movie-info" >
                    <img className='image is-3by' src={Poster} alt={Title} />
                    <section>
                        <h1 className="title is-1">{Title}</h1>
                        <h3 className="subtitle">{Actors}</h3>
                        <span className="subtitle is-3">{Metascore}</span>
                        <p className="subtitle">{Plot}</p>
                    </section>
                </div>
            </div>

        )
    }
}
