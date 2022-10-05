import React from 'react'
import css from './css/cart.css'
import { GlobalContext } from './GlobalContext';
import Input from './Input';

const Cart = () => {

    const dados = React.useContext(GlobalContext);
    const [endereco, setEndereco] = React.useState(null)

    function calcularPreco(preco, desconto){

      if (desconto){
        return (preco - (preco * desconto)).toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})
      }else{
        return (preco).toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})
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

   





  return (
    <div id='cart'>
      <p className='minhacesta'>Minha cesta</p>

            <div className='cartEndereco'>
                <Input inputType='text' labelFor='cep'  textLabel={endereco ? 'Endereço: ' : 'Informe seu CEP: '} ></Input>
            </div>

      <div className='cartContainer'>

        {dados.wishlist.map((item)=>(
          <div className='cartPedido'>
          <div className='pedidoImg'>
            <img id='capaDoPedido' src={item.capa}></img>
          </div>
      
          <div className='pedidoDados'>
            <span>{item.nome}</span>
            <span>Preço: {formatarParaReal(item.preco)}</span>
            <span>Desconto: {formatarParaReal((item. preco * item.desconto))}</span>
            <span>Preço Final: {calcularPreco(item.preco, item.desconto)}</span>
          </div>
        </div>
        ))}
      
        {/* <div className='cartPedido'>
          <div className='pedidoImg'>
            <img id='capaDoPedido' src={dados.wishlist[0].capa}></img>
          </div>
      
          <div className='pedidoDados'>
            <span>{dados.wishlist[0].nome}</span>
            <span>Preço: {formatarParaReal(dados.wishlist[0].preco)}</span>
            <span>Desconto: {formatarParaReal(dados.wishlist[0].desconto)}</span>
            <span>Preço Final: {calcularPreco(dados.wishlist[0].preco, dados.wishlist[0].desconto)}</span>
          </div>
        </div> */}


        {/* <section className='cartWishes'>
            

            <div className='cartPedidosContainer'>

            {dados.wishlist.length > 0 &&
            <div className='cartPedidos'>
              <span>Produto</span>
              <span>Preço</span>
              <span>Desconto</span>
              <span>Preço Final</span>
              <span>Excluir</span>
            </div>
            }
            
            {dados.wishlist.length === 0? (
              <div id='semPedidos' className='cartPedidos' >Não há produtos no carrinho!</div>
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
        </section> */}

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
