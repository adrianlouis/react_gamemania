import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import css from "./css/destaques.css";
import Galeria from "./Galeria";
import { GlobalContext } from "./GlobalContext";
import MaisVendidos from "./MaisVendidos";
import SectionTitle from "./SectionTitle";
import { useNavigate } from "react-router-dom";
import jogos from "./jogosLista";



const Destaques = () => {
 
  const games = React.useContext(GlobalContext)
  const [naLista, setNaLista] = React.useState([])
  const navigate = useNavigate();

   function verDetalhes(j){
    navigate(`detail/jogo?id=${j.id}`)
   }

   function btnIconHandle(jogo, target){
    const filtrado = games.wishlist.filter((filtro)=>{
      return filtro.id === jogo.id
    })

    if (filtrado.length === 0){
      games.setWishlist([...games.wishlist, jogo])
      setNaLista([...naLista, jogo.id])
      target.style.color = '#d00'
    }else{
      const itemRemovido = games.wishlist.filter((filtro)=>{
        return filtro.id !== jogo.id
      })
      const naListaRemovido = naLista.filter((filtro)=>{
        return filtro !== jogo.id
      })

      games.setWishlist(itemRemovido)
      setNaLista(naListaRemovido)
      target.style.color = 'unset'
    }
   }
   
  return (
    <div >
      <Banner />
      <SectionTitle title='Produtos em Destaque' subtitle='Confira os jogos em destaque do nosso site. Entre eles estão os melhores games de todos os tempos para o seu lazer ser prazeroso do início ao fim de sua aventura!' />
      <div className="destaqueContainer">
      
      <div className="destContainer"><span>{games.wishlist.nome}</span>
        {jogos.map((jogo) => (
          <div key={jogo.nome}>
            <Card
              className="destCard"
              src={jogo.capa}
              nome={jogo.nome}
              preco={jogo.preco}
              classImg="destImg"
              classNome="destNome"
              desconto={jogo.desconto? jogo.desconto :null}
              descontoTag={`-${jogo.desconto * 100}%`}
              classPreco="destPreco"
              classDesconto="destDelDesconto"
              classDescontoTag="destDescontoSpan"
              onclickInfo={()=> verDetalhes(jogo)}
              clickCart={({target})=>btnIconHandle(jogo, target)}
              btnNome={games.wishlist.includes(jogo)? <i className="fa-solid fa-cart-arrow-down" style={{color: '#d00'}}></i> : <i className="fa-solid fa-cart-shopping"></i>}
              />
             
          </div>
        ))}
      </div>
      
      </div>
      <MaisVendidos/>

      <Galeria/>

    </div>
  );
};

export default Destaques;
