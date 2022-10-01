import React from "react";
import css from "./css/header.css";
import { GlobalContext } from "./GlobalContext";
import {Link} from 'react-router-dom'

const Header = () => {

  const numeroPedidos = React.useContext(GlobalContext)
  const context = React.useContext(GlobalContext)
  const [width, setWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <header>
      <i className="fas fa-dragon" />
      <span className="headerLogo">GameMania</span>

<div className="headerBtns">
<Link to='/'><span><i className="fa-solid fa-house"/> {width <= 412 ? '' : 'Home'}</span></Link>
        {!context.logado ? (<>
            <Link to='logcad'><i className="fa-solid fa-user" /> {width <= 412 ? '' : 'Entrar'}</Link>
            <Link to='register'><i className="fa-solid fa-user-pen" /> {width <= 412 ? '' : 'Registrar'}</Link>   
        </>
        ) : (
          <>
          <span id='headerUsuarioLogado'><strong>{context.logado.email}</strong></span>
          <Link to='/' onClick={()=>context.setLogado(null)}><span><i className="fa-solid fa-arrow-right-from-bracket" >
          </i> {width <= 412 ? '' : 'Sair'}</span></Link>
          </>
        )}
        <Link to='cart'>
            <span style={{ cursor: "pointer", position: 'relative' }}>
              <i className="fa-solid fa-cart-shopping" /> {width <= 412 ? '' : 'Carrinho'} 
            {numeroPedidos.wishlist.length !== 0 && <div className="headerCartNumber">{(numeroPedidos.wishlist).length}</div>}
            </span>
            </Link>
        </div>

    </header>
  );
};

export default Header;
