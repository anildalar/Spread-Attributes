import logo from './logo.svg';
import './App.css';

function App(props) { //Formal Argument
  return (
    <div className="App">
      <h1>{props.firstName}</h1>
      <h1>{props.surname}</h1>
      <h1>{props.addr}</h1>
      <h1>{props.contact}</h1>
      {console.log(props)}
      {console.log(props.firstName)}
      {console.log(props.surname)}
      {console.log(props.addr)}
      {console.log(props.contact)}
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
