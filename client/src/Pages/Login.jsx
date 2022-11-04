import { useState } from "react";
import "../App.css"



function Login() {

    const [passport, setPassport] = useState({
        Email: '',
        Senha: ''
    })

    const { Email, Senha } = passport;

    const changeHandler = e => {
        setPassport({ ...passport, [e.target.name]: [e.target.value] })
    }

    const submitHandler = e =>{
        e.preventDefault();
        fetch('http://localhost:3001/Login',{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(passport)
        }).then(function(response) {
            if(response.status === 200){
                console.log('Logado com sucesso')
            } 
            else if(response.status === 401){
                console.log('Senha incorreta')
            }
        })
    }
    return (
        <div className="Login">
            <h1>LOGIN</h1>
            <form onSubmit={submitHandler} className="Login_form">
                <label >Email</label>
                <input type="text" name='Email'  value={Email} onChange={changeHandler} />
                <label>Senha</label>
                <input type="password" name='Senha'  value={Senha} onChange={changeHandler} />
                <button>Entrar</button>
            </form>
        </div>
    )
}

export default Login;