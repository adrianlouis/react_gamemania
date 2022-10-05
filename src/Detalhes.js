import React from "react";
import css from "./css/detalhes.css";
import { GlobalContext } from "./GlobalContext";
import fotos from "./fotos.json";
import jogos from "./jogosLista";
import { useParams, useLocation } from "react-router-dom";
import jogoParseReal from "./funcoes/converterParaReal";
import Input from "./Input";

const Detalhes = () => {
  const params = useParams();
  const context = React.useContext(GlobalContext);
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const item = search.get("id") - 1;
  const [cepVal, setCepVal] = React.useState("");
  const [erroCep, setErroCep] = React.useState(null);
  const [dadosCep, setDadosCep] = React.useState(null);
  const [modal, setModal] = React.useState(false);
  const [modalMiniatura, setModalMiniatura] = React.useState(2);
  const [plataforma, setPlataforma] = React.useState(null);
  const [midia, setMidia] = React.useState(null)

  const cepBr = (code) => {
    const regex = /[0-9]{5}-?[\d]{3}/;
    return regex.test(code);
  };

  function cep({ target }) {
    setCepVal(target.value);
  }

  async function consultarCep() {
    const response = await fetch("http://viacep.com.br/ws/" + cepVal + "/json");
    const cep = await response.json();
    console.log(cep);
    setDadosCep(cep);
  }

  function teste() {
    if (cepBr(cepVal) === true) {
      setErroCep(null);
      consultarCep();
    } else {
      setErroCep("Verifique o cep informado.");
      setDadosCep(null);
    }
    // cepBr(cepVal)? setErroCep(null) : setErroCep("Verifique o cep informado.")
    // console.log(cepBr(cepVal))
  }

  function moverMiniaturaLeft() {
    if (modalMiniatura === 0) {
      setModalMiniatura(4);
    } else {
      setModalMiniatura(modalMiniatura - 1);
    }
  }
  function moverMiniaturaRight() {
    if (modalMiniatura === 4) {
      setModalMiniatura(0);
    } else {
      setModalMiniatura(modalMiniatura + 1);
    }
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [modal]);

  console.log(jogos[item].screens[0]);

  // const bg = document.querySelector('.detalhesSuperior').style.backgroundImage= `url(${jogos[item].capa})`

  return (
    <div className="detalhesMainContainer">
      <div
        className="detalhesSuperior"
        style={{ backgroundImage: `url(${jogos[item].capa})` }}
      >
        <div className="detalhesDescricao">
          {<span>{jogos[item].descricao}</span>}
        </div>
      </div>

      <div className="contScreenshots">
        {jogos[item].screens.map((item, index) => {
          return (
            <div key={index}>
              <img
                onClick={() => {
                  setModal(true);
                  setModalMiniatura(index);
                }}
                src={item}
              ></img>
            </div>
          );
        })}
      </div>

      <div className="nomePreco">
        <span>{jogos[item].nome}</span>
        <p>{jogoParseReal(jogos[item].preco, jogos[item].desconto)}</p>
      </div>

      <div className="detalhesJogo">
        <div className="plataformas">

          <span>
            Plataforma: {plataforma}
          </span>

          <div className="escolhaDePlataformas">
            <div
              className="divPlataforma"
              style={{
                color: plataforma === "Xbox" ? "#0e7a0d" : null,
                // backgroundColor: plataforma === "xbox" ? "#dedede" : null,
              }}
              onClick={() => setPlataforma("Xbox")}
            >
              <i className="fa-brands fa-xbox"></i>
            </div>

            <div
              className="divPlataforma"
              style={{
                color: plataforma === "Playstation" ? "#006fcd" : null,
                // backgroundColor: plataforma === "psn" ? "#dedede" : null,
              }}
              onClick={() => setPlataforma("Playstation")}
            >
              <i class="fa-brands fa-playstation"></i>
            </div>

            <div
              className="divPlataforma"
              style={{
                color: plataforma === "PC" ? "#00a1f1" : null,
                // backgroundColor: plataforma === "ms" ? "#dedede" : null,
              }}
              onClick={() => setPlataforma("PC")}
            >
              <i class="fa-brands fa-windows"></i>
            </div>
          </div>
        </div>

        <div className="midias">

          <div className="plataformas">

            <span>
              Mídia: {midia}
            </span>

              <div className="escolhaDeMidia">

                <div className="divMidias" onClick={() => setMidia("Física")} >
                 <i class="fa-solid fa-compact-disc" style={{
                color: midia === "Física" ? "#dedede" : null,
                // backgroundColor: plataforma === "psn" ? "#dedede" : null,
              }}></i>
                </div>

                <div className="divMidias" onClick={() => setMidia("Digital")}>
                  <i class="fa-solid fa-cloud-arrow-down" style={{
                color: midia === "Digital" ? "#dedede" : null,
                // backgroundColor: plataforma === "psn" ? "#dedede" : null,
              }} ></i>
                </div>

              </div>
          </div>
        </div>
      </div>

      {/* <div className="detalhesRight">
        

          <div className="contDetalhesSelect">
            <label htmlFor="midia">Tipo da Mídia: </label>
            <select id="midia">
              <option>Física</option>
              <option>Digital</option>
            </select>
          </div>
          <div className="contDetalhesSelect">
            <label htmlFor="plataforma">Plataforma: </label>
            <select id="plataforma">
              <option>PC</option>
              <option>Playstation</option>
              <option>Xbox One</option>
            </select>
          </div>

          <div className="contDetalhesSelect">
            <Input
              inputType="text"
              textLabel="Cep: "
              placeholder="apenas números"
              maxLength={8}
              handleChange={cep}
              inputVal={cepVal}
              onBlur={teste}
            />
            {erroCep && (
              <strong>
                <span style={{ color: "#d00" }}>{erroCep}</span>
              </strong>
            )}
            {dadosCep && (
              <>
                <p className="dadosCep">{dadosCep.logradouro}</p>
                <p className="dadosCep">
                  {dadosCep.localidade} - {dadosCep.uf}
                </p>
              </>
            )}
          </div>
        </div> */}

      {modal && (
        <>
          <div className="imgModal">
            <div className="modalSuperior">
              <i
                id="iconeFecharModal"
                className="fa-solid fa-xmark"
                onClick={() => setModal(false)}
              ></i>
              <img
                className="inferiorImagemGrande"
                src={jogos[item].screens[modalMiniatura]}
              ></img>
            </div>

            <div className="modalInferior">
              <span>
                <i
                  className="fa-solid fa-chevron-left"
                  onClick={moverMiniaturaLeft}
                ></i>
              </span>

              <img
                className="modalInferiorImg"
                onClick={() => {
                  modalMiniatura === 0
                    ? setModalMiniatura(4)
                    : setModalMiniatura(modalMiniatura - 1);
                }}
                src={
                  jogos[item].screens[
                    modalMiniatura === 0 ? 4 : modalMiniatura - 1
                  ]
                }
              ></img>

              <img
                className="modalMiniaturaMeio"
                src={jogos[item].screens[modalMiniatura]}
              ></img>

              <img
                className="modalInferiorImg"
                onClick={() => {
                  modalMiniatura === 4
                    ? setModalMiniatura(0)
                    : setModalMiniatura(modalMiniatura + 1);
                }}
                src={
                  jogos[item].screens[
                    modalMiniatura === 4 ? 0 : modalMiniatura + 1
                  ]
                }
              ></img>

              <span>
                <i
                  className="fa-solid fa-chevron-right"
                  onClick={moverMiniaturaRight}
                ></i>
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Detalhes;
