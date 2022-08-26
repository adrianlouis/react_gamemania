import React from "react";
import css from "./css/header.css";
import { GlobalContext } from "./GlobalContext";
import {Link} from 'react-router-dom'

const Header = () => {

  const numeroPedidos = React.useContext(GlobalContext)
  const context = React.useContext(GlobalContext)

  return (
    <header>
      <i className="fas fa-dragon" />
      <span className="headerLogo">GameMania</span>

<div className="headerBtns">
<Link to='/'><span><i className="fa-solid fa-house"/> Home</span></Link>
        {!context.logado ? (<>
            <Link to='logcad'><i className="fa-solid fa-user" /> Entrar</Link>
            <Link to='register'><i className="fa-solid fa-user-pen" /> Registrar</Link>
            
            
            
        </>
        ) : (
          <>
          <span>{context.logado.email}</span>
          <Link to='/' onClick={()=>context.setLogado(null)}><span><i className="fa-solid fa-arrow-right-from-bracket" >
          </i> Sair</span></Link>
          </>
        )}
        <Link to='cart'>
            <span style={{ cursor: "pointer", position: 'relative' }}>
              <i className="fa-solid fa-cart-shopping" /> Carrinho 
            {numeroPedidos.wishlist.length !== 0 && <div className="headerCartNumber">{(numeroPedidos.wishlist).length}</div>}
            </span>
            </Link>
        </div>

    </header>
  );
};

export default Header;
