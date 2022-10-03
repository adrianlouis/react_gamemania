import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import css from './css/footer.css'

const Footer = () => {

    let location = useLocation()
    React.useEffect(()=>{
     window.scrollTo({top: 1, left:0, behavior:'smooth'})
    }, [location])
    
    function redirecionar(link){
        window.location.replace(link)
    }


  return (
    <div className='footer'>

      <div className='footerUpperside'>
        <span className='footerTitle'>GameMania</span>
        <p>CNPJ 22.183.899/0001-68 </p>
      </div>

      <div className='footerBootomside'>
        <div className='footerLeftside'>
            <span>Links úteis</span>
            <Link to='/'><span>Home</span></Link>
            <Link to='logcad'><span >Login</span></Link>
            <Link to='register'><span>Registrar</span></Link>
            <Link to='cart'><span>Carrinho</span></Link>
        </div>

        <div className='footerMidside'>
            <div className='footerEndereco'>
                <p>Rua Edward Kenway, 6645</p>
                <p>Vila LeFleu - Rio de Janeiro - RJ</p>
                <p>Telefone: 21 9 8786 5450</p>
            </div>

            <div className='footerRedesSociais'>
                <p>email: informacao@gamemania.com.br</p>

                <div className='footerRedesSociaisIcones'>
                    <a href='https://www.facebook.com'><i className="fa-brands fa-square-facebook"  ></i></a>
                    <a href='https://www.twitter.com'><i className="fa-brands fa-square-twitter"></i></a>
                    <a href='https://www.instagram.com'><i className="fa-brands fa-square-instagram"></i></a>
                </div>
            </div>
        </div>

        <div className='footerRightside'>
            <span>Horário de atendimento</span>
            <span>Segunda à sexta<br/>09h às 18h</span>
            <span>Sábado, domingo e feriados<br/>08h às 12h</span>
        </div>
      </div>

        <div className='footerFoot'>
        <span>GameMania s. a. / CNPJ 22.183.899/0001-68 / Inscrição Estadual: 85.451.01-1 / Todos os direitos reservados.</span>
        </div>
    </div>
  )
}

export default Footer
