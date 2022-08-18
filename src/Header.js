import React from "react";
import css from "./css/header.css";

const Header = () => {

  const [inputUser, setInputUser] = React.useState("");
  const [inputSenha, setInputSenha] = React.useState("");
  const [logado, setLogado] = React.useState(null);
  const [aviso, setAviso] = React.useState(null);
  const [logar, setLogar] = React.useState(false);
  const [registrar, setRegistrar] = React.useState(false);
  const [inputs, setInputs] = React.useState(false);
  const [cartItens, setCartItens] = React.useState(null)
  const [users, setUsers] = React.useState([{email:'Louis', senha:'code'}])

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
      <i class="fas fa-dragon" />
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

      {!logado && (
        <div className="headerBtns">
          {!registrar && (
            <span onClick={handleLogar} style={{ cursor: "pointer" }}>
              <i class="fa-solid fa-user" /> {inputs? '' : 'Entrar'}
            </span>
          )}

          {!logar && (
            <span onClick={handleRegister} style={{ cursor: "pointer" }}>
              <i class="fa-solid fa-user-pen" /> {inputs? '' : 'Registrar'}
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

          {!inputs && (
            <span style={{ cursor: "pointer", position: 'relative' }}>
              <i class="fa-solid fa-cart-shopping" /> Carrinho
            {cartItens && <div className="headerCartNumber">{cartItens}</div>}</span>
          )}
        </div>
      )}

      {logado && (
        <div className="headerUserName">
          <span>{inputUser}</span>
          <i class="fa-solid fa-arrow-right-from-bracket" onClick={handleExit}>
            {" "}
            sair
          </i>
        </div>
      )}
    </header>
  );
};

export default Header;
