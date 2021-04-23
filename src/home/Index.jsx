import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>React App CRUD para Gestionar Usuarios </h1>
            <p>Crud de Usuarios</p>
            <p><Link to="users">&gt;&gt; Gestionar Usuarios</Link></p>
        </div>
    );
}

export { Home };