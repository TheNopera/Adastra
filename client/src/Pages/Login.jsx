import "../App.css"


function Login() {
    return (
        <div className="Login">
            <h1>LOGIN</h1>
            <form className="Login_form">
                <label >Nome</label>
                <input type="text" name='Nome' />
                <label >Sobrenome</label>
                <input type="text" name='Sobrenome' />
                <label >Email</label>
                <input type="text" name='Email' />
                <label>Senha</label>
                <input type="password" name='Senha' />
                <button>Entrar</button>
            </form>
        </div>
    )
}

export default Login;