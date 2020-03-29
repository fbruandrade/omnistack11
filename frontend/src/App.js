import React from 'react'; // , { useState }

import './global.css';

import Routes from './routes';
// import Header from './Header';

function App() {
  // const [counter, setCounter] = useState(0);

  // Array [valor, funcao de atualizacao]
  
  // function increment() {
  //   setCounter(counter + 1);
  // }
  return (
    <Routes />
    // <div>
    //   <Header>Contator: {counter}</Header>
    //   <button onClick={increment}>Incrementar</button>
    // </div>
  );
}

export default App;
 