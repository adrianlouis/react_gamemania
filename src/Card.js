import React from 'react'
import Button from './Button'

const Card = ({onclick, className, classImg, classDescontoTag, descontoTag, classNome, classPreco, classDesconto, desconto, src, nome, preco, props}) => {

  return (
    <div className={className} >
      {props}
      <img className={classImg} src={src} />
      <span className= {classNome}>{nome}</span>
      {desconto && <span className={classDescontoTag}>{descontoTag}</span>}
      {!desconto && <p className={classPreco}>{(preco).toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})}</p>}
      {desconto &&  <p className={classPreco}><del className={classDesconto}>{preco.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})}</del> {(preco - (preco * desconto)).toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})}</p>}
      
      <Button nome={'Comprar'} onclick={onclick} />
    </div>
  )
}

export default Card
