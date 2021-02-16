import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../views/login/login';
import Home from '../views/home/index';
import Cliente from '../views/cliente';
import ClienteCadastro from '../views/cliente/cadastro';
import CadastroUsuario from '../views/usuario/cadastroUsuario';

// PAGES

function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/cadastro-usuarios" component={CadastroUsuario} />
      <Route exact path="/clientes" component={Cliente} />
      <Route exact path="/clientes/cadastro" component={ClienteCadastro} />
      <Route exact path="/clientes/cadastro/:id" component={ClienteCadastro} />
    </BrowserRouter>
  );
}
export default Router;
