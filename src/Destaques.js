import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import css from "./css/destaques.css";
import Galeria from "./Galeria";
import { GlobalContext } from "./GlobalContext";
import MaisVendidos from "./MaisVendidos";
import SectionTitle from "./SectionTitle";

const Destaques = () => {
  // const jogos = [
  //   {
  //     nome: "The King of Fighters XV",
  //     capa: "kof.jpg",
  //     preco: 125,
  //     desconto: 0.1,
  //   },
  //   {
  //     nome: "Halo Infinite",
  //     capa: "haloinfinite.jpg",
  //     preco: 250,
  //   },
  //   {
  //     nome: "Diablo 2",
  //     capa: "diablo2.jpg",
  //     preco: 215,
  //   },
  //   {
  //     nome: "Farcry 6",
  //     capa: "farcry6.jpg",
  //     preco: 159,
  //   },
  //   {
  //       nome: "Elden Ring",
  //       capa: "eldenRing.jpg",
  //       preco: 180,
  //       desconto: 0.15
  //   },
  //   {
  //       nome: "Demon Slayer",
  //       capa: "demonSlayer.jpg",
  //       preco: 430,
  //       desconto: 0.05
  //   },
  //   {
  //       nome: "Horizon Zero Dawn",
  //       capa: "horizon.png",
  //       preco: 350
  //   }
  // ];

  const games = React.useContext(GlobalContext)

  const [newArr, setNewArr] = React.useState([])

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("./capas", false, /\.(png|jpe?g|svg)$/)
  );

  function listaCarrinho(j){
    games.setWishlist([...games.wishlist, j])
    // console.log(games.wishlist)
    games.setPreco(games.preco + j.preco)


    const newState = games.jogos.map((item)=>{
      if (item === j){
        return {...item, click: (j.click + 1)}
      }

      return item
    })

    games.setJogos(newState)
    // console.log(games.jogos)

    // games.jogos.map((elem)=>{
    //   elem === j? setNewArr([...newArr, {nome: j.nome, capa: j.capa, preco: j.preco, desconto: j.desconto, click: (j.click + 1)}]) : setNewArr([...newArr, {elem}])
    // })

    // console.log(newArr)


    // const jogoClick = ga
    // const listaJogos = games.jogos.filter((filtro)=> filtro !== j)
    // games.setJogos([...listaJogos, {nome: j.nome, capa: j.capa, preco: j.preco, desconto: j.desconto, click: j.click + 1}])



    // console.log(games.jogos)
      
    

    if (j.desconto){
      games.setResumoDesconto(games.resumoDesconto+(j.desconto*j.preco))
    }
   }
   
  return (
    <div >
      <Banner />
      <SectionTitle title='Produtos em Destaque' subtitle='Confira os jogos em destaque do nosso site. Entre eles estão os melhores games de todos os tempos para o seu lazer ser prazeroso do início ao fim de sua aventura!' />
      <div className="destaqueContainer">
      
      <div className="destContainer">
        {games.jogos.map((jogo) => (
          <div key={jogo.nome}>
            <Card
              className="destCard"
              src={images[jogo.capa]}
              nome={jogo.nome}
              preco={jogo.preco}
              classImg="destImg"
              classNome="destNome"
              desconto={jogo.desconto}
              descontoTag={`-${jogo.desconto * 100}%`}
              classPreco="destPreco"
              classDesconto="destDelDesconto"
              classDescontoTag="destDescontoSpan"
              onclick={()=> listaCarrinho(jogo)}
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
