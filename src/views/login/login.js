import React, { useState } from 'react';

import { mensagemErro, mensagemSucesso } from '../../components/toastr/toastr';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import api from '../../configuration/api';
import './login.css';
// import logo from '../../img/logo_app_house.jpeg';
function Login() {
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();
  const [redirecionar, setRedirecionar] = useState(false);
  const dispatch = useDispatch();
  async function entrar() {
    await autenticar({
      login: login,
      senha: senha,
    }).then((response) => {});
  }

  async function autenticar(usuario) {
    return await api
      .post('/usuarios/autenticar', usuario)
      .then((response) => {
        mensagemSucesso('Bem vindo');
        dispatch({
          type: 'LOG_IN',
          idUsuario: response.data.id,
          perfil: response.data.perfil,
        });
        setRedirecionar(true);
      })
      .catch((erro) => {
        mensagemErro('usuário não encontrado');
      });
  }

  return (
    <>
      {redirecionar && <Redirect to="/Clientes" />}
      <div 
        className="login-form col-xs-10 offset-xs-1 col-sm-6 offset-sm-3 col-md-4 offset-md-4 mx-auto">
        <header>
          
          <div className="form-group col-md-12">
            <label htmlFor="inputLogin">Login</label>
            <input
              type="text"
              className="form-control"
              id="inputLogin"
              placeholder="informe o Login"
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="inputSenha">Senha</label>
            <input
              type="password"
              className="form-control"
              id="inputSenha"
              placeholder="informe a senha"
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className="form-group col-md-12">
            <button onClick={entrar} className="btn btn-success">
              <i className="pi pi-sign-in"></i> Entrar
            </button>
            <button
              // onClick={prepareCadastrar}
              className="btn btn-primary"
            >
              <i className="pi pi-user-plus"></i> Cadastrar
            </button>
          </div>
        </header>
      </div>
    </>
  );
}

export default Login;
