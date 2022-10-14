import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import css from './css/logcad.css'
import { GlobalContext } from './GlobalContext'
import InputLogin from './InputLogin'
import dadosJson from './db.json'

const LogCad = () => {

    const [userName, setUserName] = React.useState('')
    const [submit, setSubmit] = React.useState({nome:false, email:false, senha: false, confsenha:false })
    const [regOkay, setRegOkay] = React.useState(false)
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
        setUserName('')
        setRegEmail('')
        setSubmit({nome:false, email:false, senha: false, confsenha:false})
    }
    
    function senhaOnChange(){
        const container = document.querySelector('.validacaoRegistro')
        
        regSenha.length < 8? container.childNodes[2].style.display='block':container.childNodes[2].style.display='none'

        var charNumerico = /([0-9])/g
        regSenha.match(charNumerico)? container.childNodes[3].style.display='none':container.childNodes[3].style.display='block'

        var charEspecial = /(?=.*[!@#$%^&*])/
        regSenha.match(charEspecial)? container.childNodes[4].style.display='none':container.childNodes[4].style.display='block'
        
        const borda = document.querySelectorAll('.iconeDosInputs')
        if (regSenha.length >= 8 && regSenha.match(charNumerico) && regSenha.match(charEspecial) ){
            setSenhaValida(true)
            setSubmit({...submit, senha:true})
            borda[2].style.border='2px solid green'
            borda[2].style.boxShadow='green 0 0 7px'
        }else{
            setSenhaValida(false)
            borda[2].style.boxShadow='none'
           borda[2].style.border='2px solid red'
            // document.querySelector('#btnCadastrar').style.backgroundColor='red'
            setSubmit({...submit, senha:false})
        }
    }
    
    function verificarUserName(){
        const filtrado = dadosJson.filter((filtro)=>{
            return filtro.userName === userName
        })

        if (userName === ''){
            document.querySelector('#userName').parentNode.style.border="2px solid red"   
            document.querySelector('#userName').parentNode.style.boxShadow='none'
            setSubmit({...submit, nome:false})
        }else if (filtrado.length > 0){
            document.querySelector('#userName').parentNode.classList.add('animate')
            setTimeout(() => {
                document.querySelector('#userName').parentNode.classList.remove('animate') 
            }, 500);   
            document.querySelector('#userName').parentNode.style.border="2px solid red"   
            document.querySelector('#userName').parentNode.style.boxShadow='none'
            document.querySelector('.validacaoRegistro p:nth-child(1)').style.display='block'
            setSubmit({...submit, nome:false})
        }else{
            setSubmit({...submit, nome:true})
            document.querySelector('#userName').parentNode.style.border="2px solid green"   
            document.querySelector('#userName').parentNode.style.boxShadow='green 0 0 7px'
            document.querySelector('.validacaoRegistro p:nth-child(1)').style.display='none'
        } 
        
    }

    function verificarEmail(){
        const filtrado = dadosJson.filter((filtro)=>{
            return filtro.email === regEmail
        })

        if (regEmail === ''){
            document.querySelector('#regEmail').parentNode.style.border="2px solid red"
            document.querySelector('#regEmail').parentNode.style.boxShadow='none'
            setSubmit({...submit, email:false})
        }else if (filtrado.length > 0){
            document.querySelector('#regEmail').parentNode.style.border="2px solid red"
            document.querySelector('#regEmail').parentNode.style.boxShadow='none'
            document.querySelector('.validacaoRegistro p:nth-child(2)').style.display='block'
            setSubmit({...submit, email:false})
            document.querySelector('#regEmail').parentNode.classList.add('animate')
            setTimeout(() => {
                document.querySelector('#regEmail').parentNode.classList.remove('animate') 
            }, 500);   
        }else{
            document.querySelector('#regEmail').parentNode.style.border="2px solid green"   
            document.querySelector('#regEmail').parentNode.style.boxShadow='green 0 0 7px'
            document.querySelector('.validacaoRegistro p:nth-child(2)').style.display='none'
            setSubmit({...submit, email:true})
        }
    }

    React.useEffect(()=>{
       if (submit.nome && submit.email && submit.senha && submit.confsenha){
        setRegOkay(true)
    }else{
        setRegOkay(false)
       }
    //    console.log(submit)
    },[submit])

    React.useEffect(()=>{
        if (logReg){
            senhaOnChange()
        }
    },[regSenha])

    function conferirSenhas(){
        if (logReg){
            const borda = document.querySelectorAll('.iconeDosInputs')

            if (senhaValida && regSenha === confSenha){
                document.querySelector('.validacaoRegistro').childNodes[5].style.display='none'
                setSubmit({...submit, confsenha:true})
                borda[3].style.boxShadow='green 0 0 7px'
                borda[3].style.border='green 2px solid'
            }else{
                borda[3].style.boxShadow='none'
                borda[3].style.border='red 2px solid'
                document.querySelector('.validacaoRegistro').childNodes[5].style.display='block'
                setSubmit({...submit, confsenha:false})
            }
        }
    }
    React.useEffect(()=>{
       conferirSenhas()
    },[confSenha])

    React.useEffect(()=>{
        if(confSenha !== ''){
            conferirSenhas()
        }
    },[regSenha])

    function animarErro(elem, obj){
        if (!obj){
            elem.parentNode.classList.add('animate')
            setTimeout(() => {
                elem.parentNode.classList.remove('animate')
            }, 500);
        }
    }
   
  return (
    <div className='logcad'>

        <div className='logModal'>

            <div id='loginTitle'>
                <div className='containerLoginCadastro'>
                <span id='login' className={!logReg?'toogleEscolhido':null} >Login</span>
                <span id='cadastro' className={logReg?'toogleEscolhido':null} >Cadastro</span>
                </div>

        
                <div className='containerAlternarLoginRegistro' onClick={handleLogReg}>
                    <span  className={logReg?'alternarDot dotRight':'alternarDot'} />
                </div>

            </div>

        {logReg && <>
            <div className='containerInputs'>

<InputLogin id='userName' icone={<i className="fa-solid fa-user" />} placeholder='nome de usuário' tipo='text' handleChange={({target})=>setUserName(target.value)} valor={userName} onBlur={verificarUserName} />
<InputLogin id='regEmail' icone={<i className="fa-solid fa-user" />} placeholder='email' tipo='email' handleChange={({target})=>setRegEmail(target.value)} valor={regEmail} onBlur={verificarEmail} />
<InputLogin id='regSenha' icone={<i className="fa-solid fa-key"></i>} placeholder='senha' tipo='password' handleChange={({target})=>setRegSenha(target.value)} valor={regSenha} onBlur={({target})=>{animarErro(target, submit.senha)}} />
<InputLogin id='confSenha' icone={<i className="fa-solid fa-key"></i>} placeholder='confirme a senha' tipo='password' handleChange={({target})=>setConfSenha(target.value)} valor={confSenha} onBlur={({target})=>{animarErro(target, submit.confsenha)}} />

<div className='validacaoRegistro'>
            <p>nome de usuário já cadastrado</p>
            <p>email já cadastrado</p>
            <p>senha precisa ter pelo menos 8 dígitos</p>
            <p>senha precisa ter pelo menos um número</p>
            <p>senha precisa ter pelo menos um caracter especial</p>
            <p>as duas senhas precisam ser iguais</p>
</div>

<span onClick={log} id='btnCadastrar' style={regOkay?{backgroundColor:'green'}:{backgroundColor:''} }  >Cadastrar</span>

<span className='logregSpan'>já possui conta? <strong onClick={handleLogReg}>login</strong> </span>



</div>
        </>}

        {!logReg && <>
            <div className='containerInputs'>

<InputLogin icone={<i className="fa-solid fa-user" />} placeholder='email' tipo='email' handleChange={({target})=>setEmail(target.value)} valor={email} />
<InputLogin icone={<i className="fa-solid fa-key"></i>} placeholder='senha' tipo='password' handleChange={({target})=>setSenha(target.value)} valor={senha} />

<span onClick={log} className='btnLogar' >Login</span>
<span className='logregSpan'>esqueceu a <strong>senha</strong>?</span>
<span className='logregSpan'>não possui conta? <strong onClick={handleLogReg}>registrar</strong></span>

{/* <Link to='/asdasd'>esqueceu a <strong>senha</strong>?</Link>
<Link to='/Register'><strong>registrar</strong> usuário?</Link> */}
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
