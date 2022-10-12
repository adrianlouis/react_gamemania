import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import css from './css/logcad.css'
import { GlobalContext } from './GlobalContext'
import Input from './Input'
import InputLogin from './InputLogin'

const LogCad = () => {

    const [email, setEmail] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const [regEmail, setRegEmail] = React.useState('')
    const [regSenha, setRegSenha] = React.useState('')
    const [logReg, setLogReg] = React.useState(false)
    const [alert, setAlert] = React.useState(null)
    const [confSenha, setConfSenha] = React.useState('')
    const [senhaValida, setSenhaValida] = React.useState(false)

    const users = React.useContext(GlobalContext)
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
        setAlert(msg)
        setTimeout(() => {
            setAlert(null)
        }, 5000);
    }

    function handleLogReg(){
        logReg?setLogReg(false):setLogReg(true)
        setSenha('')
        setConfSenha('')
        setRegSenha('')
    }
    
    function senhaOnChange(){
        const container = document.querySelector('.validacaoRegistro')
        regSenha !== ''? container.style.display='flex':container.style.display='none'
        
        regSenha.length < 8? container.childNodes[0].style.color='red':container.childNodes[0].style.color='green'

        var charNumerico = /([0-9])/g
        regSenha.match(charNumerico)? container.childNodes[1].style.color='green':container.childNodes[1].style.color='red'

        var charEspecial = /(?=.*[!@#$%^&*])/
        regSenha.match(charEspecial)? container.childNodes[2].style.color='green':container.childNodes[2].style.color='red'
        
        const borda = document.querySelectorAll('.iconeDosInputs')
        if (regSenha.length >= 8 && regSenha.match(charNumerico) && regSenha.match(charEspecial) ){
            setSenhaValida(true)
            borda[1].style.border='2px solid green'
            borda[1].style.boxShadow='green 0 0 7px'
        }else{
            
           borda[1].style.border='2px solid red'
            document.querySelector('#btnCadastrar').style.backgroundColor='red'
        }
    }
    
    React.useEffect(()=>{
        if (logReg){
            senhaOnChange()
        }
    },[regSenha])


    React.useEffect(()=>{
        if (logReg){
            const borda = document.querySelectorAll('.iconeDosInputs')

            if (senhaValida && regSenha === confSenha){
                document.querySelector('.validacaoRegistro').childNodes[3].style.color='green'
                document.querySelector('#btnCadastrar').style.backgroundColor='green'
                borda[2].style.boxShadow='green 0 0 7px'
                borda[2].style.border='green 2px solid'
                document.querySelector('#btnCadastrar').style.border='green 2px solid'
            }else{
                borda[2].style.boxShadow='none'
                borda[2].style.border='red 2px solid'
                document.querySelector('.validacaoRegistro').childNodes[3].style.color='red'
                document.querySelector('#btnCadastrar').style.backgroundColor='red'
                document.querySelector('#btnCadastrar').style.border='red 2px solid'

            }
        }
    },[confSenha])
   
  return (
    <div className='logcad'>

        <div className='logModal'>

        <span id='loginTitle'>{logReg?'Cadastro':'Login'}</span>
        <span id='loginTitle'>


        <div className='containerAlternarLoginRegistro'>
            <span onClick={handleLogReg} className={logReg?'alternarDot dotRight':'alternarDot'} />
        </div>
        </span>

        {logReg && <>
            <div className='containerInputs'>

<InputLogin id='regEmail' icone={<i className="fa-solid fa-user" />} placeholder='email' tipo='email' handleChange={({target})=>setRegEmail(target.value)} valor={regEmail} />
<InputLogin id='regSenha' icone={<i className="fa-solid fa-key"></i>} placeholder='senha' tipo='password' handleChange={({target})=>setRegSenha(target.value)} valor={regSenha} />
<InputLogin id='confSenha' icone={<i className="fa-solid fa-key"></i>} placeholder='confirme a senha' tipo='password' handleChange={({target})=>setConfSenha(target.value)} valor={confSenha} />

<div className='validacaoRegistro'>
            <span>senha precisa ter pelo menos 8 dígitos</span>
            <span>senha precisa ter pelo menos um número</span>
            <span>senha precisa ter pelo menos um caracter especial</span>
            <span>as duas senhas precisam ser iguais</span>
</div>

<span onClick={log} id='btnCadastrar'>Cadastrar</span>

<Link to='/logcad'>já possui conta? <strong>login</strong></Link>
{/* <Link to='/Register'><strong>registrar</strong> usuário?</Link> */}



</div>
        </>}

        {!logReg && <>
            <div className='containerInputs'>

<InputLogin icone={<i className="fa-solid fa-user" />} placeholder='email' tipo='email' handleChange={({target})=>setEmail(target.value)} valor={email} />
<InputLogin icone={<i className="fa-solid fa-key"></i>} placeholder='senha' tipo='password' handleChange={({target})=>setSenha(target.value)} valor={senha} />

<span onClick={log}>Login</span>

<Link to='/asdasd'>esqueceu a <strong>senha</strong>?</Link>
<Link to='/Register'><strong>registrar</strong> usuário?</Link>
</div>
        </>}


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
