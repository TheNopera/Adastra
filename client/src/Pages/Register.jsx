import { useState } from 'react';
import '../App.css';



function Register() {
  const [data, Setdata] = useState({
    Email: '',
    Nome: '',
    Sobrenome: ''
  });
  const { Email, Nome, Sobrenome } = data;

  const changeHandler = e => {
    Setdata({ ...data, [e.target.name]: [e.target.value] })
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log(JSON.stringify(data))
    fetch('http://localhost:3001/store-data',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(function(response){
      return response.json();
    }).catch(err => console.log(err));
  }

  return (
    <div className="Register">
      <h1>REGISTER</h1>
      <form onSubmit={submitHandler} className="Register_form">
        <label >Nome</label>
        <input type="text" name='Nome' value={Nome} onChange={changeHandler} />
        <label >Sobrenome</label>
        <input type="text" name='Sobrenome' value={Sobrenome} onChange={changeHandler} />
        <label >Email</label>
        <input type="text" name='Email' value={Email} onChange={changeHandler} />
        <button>Cadastrar</button>
      </form>
    </div>
  );
}

export default Register;