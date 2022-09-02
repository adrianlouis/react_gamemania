import React from "react";
import { GlobalContext } from "./GlobalContext";
import SectionTitle from "./SectionTitle";
import Card from "./Card";

const MaisVendidos = () => {
  const context = React.useContext(GlobalContext);

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

  function listaCarrinho(j) {
    context.setWishlist([...context.wishlist, j]);
    context.setPreco(context.preco + j.preco);

    if (j.desconto) {
      context.setResumoDesconto(context.resumoDesconto + j.desconto * j.preco);
    }
  }

  const jogosClicados = context.jogos.filter((clicados) => clicados.click > 0);
  const jogosOrdenadosDecrescente = jogosClicados.sort(function (a, b) {
    return b.click - a.click;
  });

  return (
    <div>
      {jogosClicados.length != 0 && (
        <>
          <SectionTitle
            title="Mais Vendidos"
            subtitle="Estes são os jogos mais vendidos do nosso site nos últimos 30 dias!"
          />

          <div className="destaqueContainer">
            <div className="mvendidosContainer">
              {jogosOrdenadosDecrescente.map((jogo, index) =>
                index < 3 ? (
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
                      onclick={() => listaCarrinho(jogo)}
                    />
                  </div>
                ) : null
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MaisVendidos;
