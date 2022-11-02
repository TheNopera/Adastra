import "../App.css"


function Login() {
    return (
        <div className="Login">
            <h1>LOGIN</h1>
            <form className="Login_form">
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