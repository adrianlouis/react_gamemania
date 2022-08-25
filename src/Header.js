import React from "react";
import css from "./css/header.css";
import { GlobalContext } from "./GlobalContext";
import {Link} from 'react-router-dom'

const Header = () => {

  const numeroPedidos = React.useContext(GlobalContext)
  const [inputUser, setInputUser] = React.useState("");
  const [inputSenha, setInputSenha] = React.useState("");
  const [logado, setLogado] = React.useState(null);
  const [aviso, setAviso] = React.useState(null);
  const [logar, setLogar] = React.useState(false);
  const [registrar, setRegistrar] = React.useState(false);
  const [inputs, setInputs] = React.useState(false);
  const [users, setUsers] = React.useState([{email:'Louis', senha:'code'}])
  const [iconToggle, setIconToggle] = React.useState(false)
  // const iconCart = ""

  function handleIconCart(){
    iconToggle ? setIconToggle(false) : setIconToggle(true)
  }

  function handleChange({ target }) {
    if (target.id === "userId") {
      setInputUser(target.value);
    } else if (target.id === "senhaid") {
      setInputSenha(target.value);
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      setAviso(null);
    }, 3000);
  }, [aviso]);

  function handleClick() {
    users.map((user) => {
      if (user.email === inputUser && user.senha === inputSenha) {
        setAviso("Usuário logado");
        setLogado(true);
        console.log('encontrado')
      } else {
        setAviso("Verifique seu usuário e senha!");
      }
    });
  }

  function handleRegistro(){
        if (inputUser === '' && inputSenha === ''){
            console.log('Prencha os campos')
        } else if (inputSenha === ''){
            console.log('Preencha senha')
        } else if (inputUser === ''){
            console.log('Preencha usuário')
        } else{
            //verificar se a conta já existe
            users.map((user)=>{
                if (user.email === inputUser){
                }else{
                    setUsers([...users, {email: inputUser, senha: inputSenha}])
                    handleExit()
                }
            })
        }
  }

  function handleLogar() {
    setLogar(true);
    setInputs(true);
  }

  function handleRegister() {
    setRegistrar(true);
    setInputs(true);
  }

  function handleExit() {
    setLogado(false);
    setRegistrar(false);
    setLogar(false);
    setInputs(false);
    setInputUser("");
    setInputSenha("");
  }

  return (
    <header>
      <i className="fas fa-dragon" />
      {aviso ? (
        <span
          className="aviso"
          style={logado || registrar ? { color: "#ddd" } : { color: "#d00" }}
        >
          {aviso}
        </span>
      ) : (
        <span className="headerLogo">GameMania</span>
      )}

        <Link to='/'><span><i className="fa-solid fa-house"/> Home</span></Link>

      {!logado && (
        <div className="headerBtns">
          {!registrar && (
            <span onClick={handleLogar} style={{ cursor: "pointer" }}>
              <i className="fa-solid fa-user" /> {inputs? '' : 'Entrar'}
            </span>
          )}

          {!logar && (
            <span onClick={handleRegister} style={{ cursor: "pointer" }}>
              <i className="fa-solid fa-user-pen" /> {inputs? '' : 'Registrar'}
            </span>
          )}

          {inputs && (
            <>
              <input
                type="text"
                id="userId"
                placeholder="Usuário"
                value={inputUser}
                onChange={handleChange}
              ></input>
              <input
                type="password"
                id="senhaid"
                placeholder="Senha"
                value={inputSenha}
                onChange={handleChange}
              ></input>
              <a className="headerButtons" onClick={logar ? handleClick : handleRegistro}>
                {logar ? "Entrar" : "Registrar"}
              </a>
              <a className="headerButtons" onClick={handleExit}>
                Cancelar
              </a>
            </>
          )}

          <Link to='cart'>
          {!inputs && (
            <span style={{ cursor: "pointer", position: 'relative' }}>
              <i className="fa-solid fa-cart-shopping" /> Carrinho 
            {numeroPedidos.wishlist.length !== 0 && <div className="headerCartNumber">{(numeroPedidos.wishlist).length}</div>}
            
            </span>
          )}
          </Link>
        </div>
      )}

      {logado && (
        <div className="headerUserName">
          <span style={{fontWeight: '700'}}><i className="fa-solid fa-user" /> {inputUser}</span>
          
          <Link to='cart'>
          
            <span style={{ cursor: "pointer", position: 'relative' }}>
              <i className="fa-solid fa-cart-shopping" /> Carrinho 
            {numeroPedidos.wishlist.length !== 0 && <div className="headerCartNumber">{(numeroPedidos.wishlist).length}</div>}
            
            </span>
          
          </Link>

          <span><i className="fa-solid fa-arrow-right-from-bracket" onClick={handleExit}>
            {" "}
          </i> Sair</span>
        </div>
      )}
    </header>
  );
};

export default Header;
