import React from 'react'
import css from './css/detalhes.css'
import { GlobalContext } from './GlobalContext'
import fotos from './fotos.json'
import jogos from './jogosLista'
import { useParams, useLocation } from 'react-router-dom'
import jogoParseReal from './funcoes/converterParaReal'
import Input from './Input'


const Detalhes = () => {

    const params = useParams();
    const context = React.useContext(GlobalContext)
    const location = useLocation();
    const search = new URLSearchParams(location.search)
    const item = search.get('id')-1
    const [cepVal, setCepVal] = React.useState('')
    const [erroCep, setErroCep] = React.useState(null)
    const [dadosCep, setDadosCep] = React.useState(null)
    const cepBr = (code) => {
      const regex = /[0-9]{5}-?[\d]{3}/
      return regex.test(code)}

    function cep({target}){
      setCepVal(target.value)   
    }
  

    async function consultarCep(){
      const response = await fetch('http://viacep.com.br/ws/'+cepVal+'/json')
      const cep = await response.json()
      console.log(cep)
      setDadosCep(cep)
    }


    function teste(){

      if (cepBr(cepVal) === true){
        setErroCep(null) 
        consultarCep()
      }else{
        setErroCep("Verifique o cep informado.")
        setDadosCep(null)
      }
      // cepBr(cepVal)? setErroCep(null) : setErroCep("Verifique o cep informado.")
      // console.log(cepBr(cepVal))
    }

  return (
    <div className='detalhesMainContainer'>
            <img className='detalhesCapaPequena' src={jogos[item].capa} />
        <div className='detalhesLeft'>
          {<span>{jogos[item].descricao}</span>}
      </div>

        <div className='detalhesRight'>
            <strong><span className='detalhesNomeProduto'>{jogos[item].nome}</span>
            <br/>
            <br/>
            <p className='detalhesNomeProduto'>{jogoParseReal(jogos[item].preco, jogos[item].desconto)}</p></strong>
            <label htmlFor='midia'>Tipo da Mídia: </label>
            <select id='midia'>
              <option>Física</option>
              <option>Digital</option>
            </select>
            <br></br>

            {/* <Input inputType='radio' textLabel='Digital' />
            <Input inputType='radio' textLabel='Física' /> */}

            <label htmlFor='plataforma' >Plataforma: </label>
            <select id='plataforma'>
              <option>PC</option>
              <option>Playstation</option>
              <option>Xbox One</option>
            
            </select>

            <Input inputType='text' textLabel='Cep: ' placeholder='apenas números' maxLength={8} handleChange={cep} inputVal={cepVal} onBlur={teste} />
            {erroCep && <strong><span style={{color: '#d00'}}>{erroCep}</span></strong>}
            {dadosCep && <>
              <p>{dadosCep.logradouro}</p>
              <p>{dadosCep.localidade} - {dadosCep.uf}</p>
            </>
            }


            {/* <span>Física - Digital</span> */}
        </div>

    </div>
  )
}

export default Detalhes
