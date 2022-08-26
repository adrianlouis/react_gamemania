import React from 'react'
import Input from './Input'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContext } from './GlobalContext'

const Register = () => {

    const [nome, setNome] = React.useState('')
    const [nascimento, setNascimento] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const [senhaConf, setSenhaConf] = React.useState('')
    const [aviso, setAviso] = React.useState(null)
    const [jaRegistrado, setJaRegistrado] = React.useState(false)
    const context = React.useContext(GlobalContext)
    const navigate = useNavigate()

    function cadastrar(){
        if (nome === ''){
            erroAviso('Preencha seu nome!')
        } else if (nascimento ===''){
            erroAviso('Preencha sua data de nascimento!')
        } else if (email ==='') {
            erroAviso('Preencha seu email!')
        } else if (senha ===''){
            erroAviso('Preencha sua senha!')
        } else if (senhaConf !== senha){
            erroAviso('Suas senhas não conferem!')
        } else {

            setJaRegistrado(false)
            context.users.map((user)=>{
                if (user.email === email){
                    erroAviso('Email já cadastrado!')
                    console.log(user.email+' ja existe')
                    setJaRegistrado(true)
                }
            })

            if (jaRegistrado === true){
                return 
            }else{
                erroAviso(null)
                context.setUsers([...context.users, {email: email, senha: senha}])
                console.log(context.users)
                navigate('/')
            }
            
            
        }
    }

    function erroAviso(warning){
        setAviso(warning)
        setTimeout(() => {
            setAviso(null)
        }, 4000);
    }

  return (
      <div className='logcad'>
      <h1><i className="fa-solid fa-user-pen" /> Crie seu cadastro</h1>
      {aviso ? <p style={{color: '#d00', fontSize: '1.3rem', fontWeight: '700'}}>{aviso}</p> : <p>Veja seus pedidos de forma fácil, compre mais rápido e tenha uma experiência personalizada</p>}

      <Input labelFor='nome' textLabel='nome completo' inputType='text' handleChange={(event)=>setNome(event.target.value)} inputVal={nome} />
      <Input labelFor='nascDate' textLabel='data de nascimento' inputType='date' handleChange={(event)=>setNascimento(event.target.value)} inputVal={nascimento} />
      <Input labelFor='email' textLabel='e-mail' inputType='email' handleChange={(event)=>setEmail(event.target.value)} inputVal={email} />
      <Input labelFor='senha' textLabel='senha' inputType='password' handleChange={(event) => setSenha(event.target.value)} inputVal={senha} />
      <Input labelFor='senhaConfirmation' textLabel='confirme a senha' inputType='password' handleChange={(event)=>setSenhaConf(event.target.value)} inputVal={senhaConf} />
      <button id='logcadBtn' onClick={cadastrar}>criar seu cadastro</button>

      <p>Já tem cadastro? <Link to='/logcad'><strong>Entrar</strong></Link></p>
    </div>
  )
}

export default Register
