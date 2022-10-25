import { useState } from 'react';
import './App.css';



function App() {
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
    fetch('http://localhost:3001/store-data',{
      method:'POST',
      body: JSON.stringify(data)
    }).then(function(response){
      console.log(response)
      return response.json();
    });
  }

  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>
      
      <form onSubmit={submitHandler} className="form">
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

export default App;
