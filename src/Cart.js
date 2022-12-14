import React from 'react'
import css from './css/cart.css'
import { GlobalContext } from './GlobalContext';
import Input from './Input';

const Cart = () => {

    const dados = React.useContext(GlobalContext);
    const [endereco, setEndereco] = React.useState(null)
    const [itemQuantidade, setItemQuantidade] = React.useState(1)
    const [precototal, setPrecototal] = React.useState(0)
    const [qtd, setQtd] = React.useState([])


    function calcularPreco(preco, desconto, unidade){

      if (desconto){
        return (((preco - (preco * desconto))*itemQuantidade)*unidade).toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})
      }else{
        return (((preco)*itemQuantidade)*unidade).toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})
      }
    }

    function formatarParaReal(valor){
      return valor.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})
    }

    function remover(elem){
      const deletado = dados.wishlist.filter((remove)=> remove !== elem)
      dados.setWishlist(deletado)
      dados.setPreco(dados.preco - elem.preco)
      
      if(elem.desconto){
        dados.setResumoDesconto(dados.resumoDesconto - (elem.desconto * elem.preco))
      }
    }

    function mostrarResumoCesta(el){
      el.style.transform= 'rotate(180deg)'
    }

    React.useEffect(()=>{
      console.log('MUDOU')

     const newState = dados.wishlist.map((item)=>{
      if (item.id === item.id){
        return {...item, quantidade: 1}
      }
      return item
     })
    //  console.log(newState)
     dados.setWishlist(newState)

    //  console.log(dados.wishlist)
    },[dados.wishlist.length])


    function somarQtd(item, qtd, sinal){

      if (qtd === 1 && sinal === 'minus'){
        const remover = dados.wishlist.filter((filtro)=>{
          return item.id !== filtro.id
        })
        dados.setWishlist(remover)
      }else{

        
        const filtrado = dados.wishlist.filter((filtro)=>{
          return filtro.id === item.id
      })
      const newState = dados.wishlist.map((item)=>{
        if (item === filtrado[0]){
          if (sinal === 'plus'){
            return {...item, quantidade: qtd+1}
          }else if(item.quantidade > 0){
            return {...item, quantidade: qtd-1}
          }else{
            return {...item, quantidade: 0}
          }
        }
        return item
      })
      dados.setWishlist(newState)
    }
  }


    return (
    <div id='cart'>
      <div className='minhacesta'>
      <p >Minha cesta: {dados.wishlist.length > 0 && dados.wishlist.length+' produtos.'} Valor total: {}</p>
      <div className='minhacestaDetalhesModal'>
        <span>{}</span>
      </div>
      {/* <div className='iconeDetalhesMinhaCesta'>
      <i id='iconeDetalhesMinhaCesta' className="fa-solid fa-circle-arrow-down" onClick={({target})=>mostrarResumoCesta(target)}></i>
      </div> */}

      </div>
            {/* <div className='cartEndereco'>
                <Input inputType='text' labelFor='cep'  textLabel={endereco ? 'Endere??o: ' : 'Informe seu CEP: '} ></Input>
            </div> */}

      <div className='cartContainer'>

        {dados.wishlist.map((item)=>(

          

          <div className='cartPedido' key={item.id}>
          <div className='pedidoImg'>
            <img id='capaDoPedido' src={item.capa}></img>
          </div>
      
          <div className='pedidoDados'>
            <span>{item.nome}</span>
            <span>Pre??o: {formatarParaReal(item.preco * item.quantidade)}</span>
            <span>Desconto: {formatarParaReal(((item.preco * item.desconto*item.quantidade)) * 1)}</span>
            <span>Pre??o Final: {calcularPreco(item.preco, item.desconto, item.quantidade)}</span>
          </div>

          <div className='pedidoDadosIcones'>
            <div className="pedidoQtd"> 
          <i className="fa-solid fa-circle-plus" onClick={()=>somarQtd(item, item.quantidade, 'plus')} ></i>
          {/* <i className="fa-solid fa-circle-plus" onClick={()=>setItemQuantidade(itemQuantidade + 1)} ></i> */}
           <span id={'qtdItem'+item.id}>{item.quantidade}</span>
          <i className="fa-solid fa-circle-minus" onClick={()=>somarQtd(item, item.quantidade, 'minus')} ></i>
            </div>
          <i className="fa-solid fa-trash-can" onClick={()=>remover(item)}></i>
          </div>

        </div>
        ))}
      
        {/* <div className='cartPedido'>
          <div className='pedidoImg'>
            <img id='capaDoPedido' src={dados.wishlist[0].capa}></img>
          </div>
      
          <div className='pedidoDados'>
            <span>{dados.wishlist[0].nome}</span>
            <span>Pre??o: {formatarParaReal(dados.wishlist[0].preco)}</span>
            <span>Desconto: {formatarParaReal(dados.wishlist[0].desconto)}</span>
            <span>Pre??o Final: {calcularPreco(dados.wishlist[0].preco, dados.wishlist[0].desconto)}</span>
          </div>
        </div> */}


        <section className='cartWishes'>
            

            <div className='cartPedidosContainer'>

            {dados.wishlist.length > 0 &&
            <div className='cartPedidos'>
              <span>Produto</span>
              <span>Pre??o</span>
              <span>Desconto</span>
              <span>Pre??o Final</span>
              <span>Excluir</span>
            </div>
            }
            
            {dados.wishlist.length === 0? (
              <div id='semPedidos' className='cartPedidos' >N??o h?? produtos no carrinho!</div>
              ) : (
                dados.wishlist.map((pedido, index)=>(
                  <div key={pedido.nome+index} className='cartPedidos'>
                    <span>{pedido.nome}</span>
                    <span>{formatarParaReal(pedido.preco)}</span>
                    <span>{pedido.desconto ? formatarParaReal(pedido.preco * pedido.desconto) : formatarParaReal(0)} </span>
                    <span>{calcularPreco(pedido.preco, pedido.desconto)}</span>
                    <i className="fa-solid fa-trash" onClick={()=>{remover(pedido)}} ></i>
                    </div>
                  ))
                  )}

                  </div>
        </section>

        {dados.wishlist.length !== 0 &&
        <section className='cartResume'>
        <span>Resumo dos pedidos</span>

        <div className='cartResumeLines'>
        <p>Quantidade de produtos: {dados.wishlist.length}</p>
        <p>Valor total: {formatarParaReal(dados.preco)} </p>
        <p>Desconto: {formatarParaReal(dados.resumoDesconto)}</p>
        <p>Valor final: {formatarParaReal(dados.preco - dados.resumoDesconto)}</p>
        </div>
    </section>
        }

      </div>

    </div>
  )
}

export default Cart
