import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Card = ({btnNome, clickCart, onclickInfo, className, classImg, classDescontoTag, descontoTag, classNome, classPreco, classDesconto, desconto, src, nome, preco, props}) => {
const [like, setLike] = React.useState(false)


  return (
    <div className={className} >
      {props}
      <img className={classImg} src={src} />
      <span className= {classNome}>{nome}</span>
      {desconto && <span className={classDescontoTag}>{descontoTag}</span>}
      {!desconto && <p className={classPreco}>{(preco).toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})}</p>}
      {desconto &&  <p className={classPreco}><del className={classDesconto}>{preco.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})}</del> {(preco - (preco * desconto)).toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})}</p>}
      
      <div className='cardBtns'>
      <Button nome={<i className="fa-solid fa-circle-info"></i>} onclick={onclickInfo} />

      <Button nome={btnNome} onclick={clickCart} />
      {/* <Button nome={!cartList ? <i className="fa-solid fa-cart-arrow-down"></i> : <i  style={{color:'rgb(146, 0, 204)'}} class="fa-solid fa-cart-shopping"></i>} onclick={clickCart} /> */}
      {/* ()=>cartList? setCartList(false) : setCartList(true) */}

      <Button nome={!like ? <i className="fa-regular fa-heart"></i> : <i style={{color:'#d00'}}  class="fa-solid fa-heart"></i>} onclick={()=>like? setLike(false) : setLike(true)} />
      </div>
    </div>
  )
}

export default Card
