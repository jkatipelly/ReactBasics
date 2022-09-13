import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import {Greet} from './Components/Main';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Greet />
      <Header />
    </div>
  );
}

export default App;
