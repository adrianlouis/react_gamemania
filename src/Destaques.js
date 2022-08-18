import React from "react";
import Button from "./Button";
import Card from "./Card";
import css from "./css/destaques.css";
// import capas from './capas'

const Destaques = () => {
  const jogos = [
    {
      nome: "The King of Fighters XV",
      capa: "kof.jpg",
      preco: 125,
      desconto: 0.1,
    },
    {
      nome: "Halo Infinite",
      capa: "haloinfinite.jpg",
      preco: 250,
    },
    {
      nome: "Diablo 2",
      capa: "diablo2.jpg",
      preco: 215,
    },
    {
      nome: "Farcry 6",
      capa: "farcry6.jpg",
      preco: 159,
    },
    {
        nome: "Elden Ring",
        capa: "eldenRing.jpg",
        preco: 180,
        desconto: 0.15
    },
    {
        nome: "Demon Slayer",
        capa: "demonSlayer.jpg",
        preco: 430,
        desconto: 0.05
    },
    {
        nome: "Horizon Zero Dawn",
        capa: "horizon.png",
        preco: 350
    }
  ];

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

  return (
    <div>
      <p className="destSectionTitle">Produtos em Destaque</p>
      <div className="destContainer">
        {jogos.map((jogo) => (
          <>
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
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Destaques;
