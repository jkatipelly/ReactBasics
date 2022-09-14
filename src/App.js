import './App.css';
import Header from './Components/Header';
import Main from './Components/Main'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main name="Pranaya" HeroName="Wonder Women">
        <p>This is children</p>
      </Main>
      <Main name="Jalander" HeroName="Superman">
        <button>test</button>
        </Main>
      <Main name="Ashvath" HeroName="BatMan"/>
    </div>
  );
}

export default App;
