import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import css from './css/logcad.css'
import { GlobalContext } from './GlobalContext'
import Input from './Input'

const LogCad = () => {

    const [email, setEmail] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const users = React.useContext(GlobalContext)
    const [aviso, setAviso] = React.useState(null)
    const navigate = useNavigate()
    
    function log(){
        if (email === ''){
           erroLogin('Preencha seu e-mail')
        }else if(senha === ''){
            erroLogin('Preencha sua senha')
        }else{
            users.users.map((user)=>{
                if (user.email === email && user.senha === senha) {
                    users.setLogado({email: user.email})
                    navigate('/')
    
                    return
                }else{
                    erroLogin('Usuário e/ou senha não encontrado!')
                }
            })
        }
    }

    function erroLogin(msg){
        setAviso(msg)
        setTimeout(() => {
            setAviso(null)
        }, 5000);
    }

  return (
    <div className='logcad'>
      <h1><i className="fa-solid fa-user" /> Login do cliente</h1>
      <p>Veja seus pedidos de forma fácil, compre mais rápido e tenha uma experiência personalizada</p>

      <Input labelFor='e-mail' textLabel='e-mail' inputType='email' handleChange={(event)=>setEmail(event.target.value)} inputVal={email} />
      <Input labelFor='logcadSenha' textLabel='senha' inputType='password' handleChange={(event) => setSenha(event.target.value)} inputVal={senha} />
      <button id='logcadBtn' onClick={log}>continuar</button>

        <p>esqueceu a senha? <Link to='/asdasd'><strong>Clique aqui!</strong></Link> </p>
      <p>não tem cadastro? <Link to='/Register'><strong>Cadastre-se</strong></Link></p>
        {aviso && <p id='aviso'>{aviso}</p>}
    </div>
  )
}

export default LogCad
