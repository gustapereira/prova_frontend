// import React from 'react';
// import Card from '../components/card'
// import FormGroup from '../components/form-group'
// import { withRouter } from 'react-router-dom'
// import UsuarioService from '../app/services/usuarioService'
// import { mensagemErro, mensagemSucesso } from '../components/toastr'

// class CadastroUsuario extends React.Component {

//     state = {
//         nome: '',
//         cpf: '',
//         perfil: '',
//         senha: '',
//         senhaRepeticao: ''
//     }

//     constructor() {
//         super();
//         this.service = new UsuarioService();
//     }

//     cadastrar = () => {

//         const { nome, cpf, login, perfil, senha, senhaRepeticao } = this.state
//         const usuario = { nome, cpf, login, perfil, senha, senhaRepeticao }

//         try {
//             this.service.validar(usuario)
//         } catch (error) {
//             const msgs = error.mensagens
//             msgs.forEach(msg => {
//                 mensagemErro(msg)
//             })
//             return false;
//         }

//         this.service
//             .salvar(usuario)
//             .then(response => {
//                 mensagemSucesso('Usuário cadastrado com sucesso! faça o login para acessar o sistema.')
//                 this.props.history.push('/login')
//             }).catch(error => {
//                 mensagemErro(error.response.data)
//             })


//     }



//     cancelar = () => {
//         this.props.history.push('/login')
//     }

//     render() {
//         return (

//             <Card title="Cadastro de Usuários">
//                 <div className="row">
//                     <div className="col-lg-6">
//                         <div className="bs-component">
//                             <FormGroup label="Nome: *" htmlFor="inputNome">
//                                 <input type="text"
//                                     value={this.state.nome}
//                                     onChange={e => this.setState({ nome: e.target.value })}
//                                     className="form-control"
//                                     id="inputNome"
//                                     aria-describedby="nameHelp"
//                                     placeholder="Informe seu nome"
//                                 />
//                             </FormGroup>

//                             <FormGroup label="Login: *" htmlFor="inputLogin">
//                                 <input type="text"
//                                     value={this.state.login}
//                                     onChange={e => this.setState({ login: e.target.value })}
//                                     className="form-control"
//                                     id="inputLogin"
//                                     aria-describedby="loginHelp"
//                                     placeholder="Digite o Login"
//                                 />
//                             </FormGroup>

//                             <FormGroup label="Senha: *" htmlFor="inputSenha">
//                                 <input type="password"
//                                     value={this.state.senha}
//                                     onChange={e => this.setState({ senha: e.target.value })}
//                                     className="form-control"
//                                     id="inputSenha"
//                                     placeholder="password" />
//                             </FormGroup>

//                             <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
//                                 <input type="password"
//                                     value={this.state.senhaRepeticao}
//                                     onChange={e => this.setState({ senhaRepeticao: e.target.value })}
//                                     className="form-control"
//                                     id="inputRepitaSenha"
//                                     placeholder="password" />
//                             </FormGroup>

//                             <button
//                                 onClick={this.cadastrar}
//                                 className="btn btn-success">
//                                 <i className="pi pi-save"></i> Salvar
//                             </button>
//                             <button
//                                 onClick={this.cancelar}
//                                 className="btn btn-danger">
//                                 <i className="pi pi-times"></i> cancelar
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </Card>



//         )
//     }
// }

// export default withRouter(CadastroUsuario)