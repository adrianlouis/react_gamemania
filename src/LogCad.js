import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import css from './css/logcad.css'
import { GlobalContext } from './GlobalContext'
import Input from './Input'
import InputLogin from './InputLogin'

const LogCad = () => {

    const [email, setEmail] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const users = React.useContext(GlobalContext)
    const [aviso, setAviso] = React.useState(null)
    const navigate = useNavigate()
    const [alert, setAlert] = React.useState(null)
    
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
        setAlert(msg)
        setTimeout(() => {
            setAlert(null)
        }, 5000);
    }


   
  return (
    <div className='logcad'>

        <div className='logModal'>

        <span id='loginTitle'>Login</span>

        <div className='containerInputs'>

        <InputLogin icone={<i className="fa-solid fa-user" />} placeholder='email' tipo='email' handleChange={({target})=>setEmail(target.value)} valor={email} />

        <InputLogin icone={<i className="fa-solid fa-key"></i>} placeholder='senha' tipo='password' handleChange={({target})=>setSenha(target.value)} valor={senha} />

        <span onClick={log}>Login</span>
        
        <Link to='/asdasd'>esqueceu a <strong>senha</strong>?</Link>
        <Link to='/Register'><strong>registrar</strong> usuário?</Link>
        </div>


      {/* <h1><i className="fa-solid fa-user" /> Login</h1>
      <p>Veja seus pedidos de forma fácil, compre mais rápido e tenha uma experiência personalizada</p>

      <Input labelFor='e-mail' textLabel='e-mail' inputType='email' handleChange={(event)=>setEmail(event.target.value)} inputVal={email} />
      <Input labelFor='logcadSenha' textLabel='senha' inputType='password' handleChange={(event) => setSenha(event.target.value)} inputVal={senha} />
      <button id='logcadBtn' onClick={log}>continuar</button>
      
      <p>esqueceu a senha? <Link to='/asdasd'><strong>Clique aqui!</strong></Link> </p>
      <p>não tem cadastro? <Link to='/Register'><strong>Cadastre-se</strong></Link></p>
        {aviso && <p id='aviso'>{aviso}</p>} */}

    <span className='loginAlert'>{alert}</span>

    </div>


</div>
  )
}

export default LogCad
