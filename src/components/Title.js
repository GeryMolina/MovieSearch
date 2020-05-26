import React from 'react';

export const Title = ({ children }) => (
    <h1 className="title">{children}</h1>
)

//<Title title='Search Movies'/> Esto si pasamos el prop como title
//<Title>Search Movies</Title> Esto si pasamos el prop como children 