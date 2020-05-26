import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonBackHome = () => (
    <Link to='/'>
        <button className='button is-info'>Volver</button>
    </Link>
)
