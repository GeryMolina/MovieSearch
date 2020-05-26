import React, { Component } from 'react';
import Proptypes from 'prop-types';

import { Link } from 'react-router-dom';

export class Movie extends Component {
    //Indicamos todas las props que utilizará este componente
    static propTypes = {
        id:Proptypes.string,
        title: Proptypes.string,
        year: Proptypes.string,
        poster: Proptypes.string
    }
    //Renderizamos para mostrar la info
    render() {
        //Hacemos un destructuring de los props
        const { id, title, year, poster } = this.props
        return (
            <Link to={`/details/${id}`} className="card">
                <div className="card-image">
                    <figure className="image">
                        <img src={poster} alt={title} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6">{year}</p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}
