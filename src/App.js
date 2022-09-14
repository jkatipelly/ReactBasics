import './App.css';
import Header from './Components/Header';
import Main from './Components/Main'

function App() {
  return (
    <div className="App">
      
        <Main name="Pranaya" HeroName="Wonder Women">
          <p>This is children</p>
        </Main>

        <Main name="Jalander" HeroName="Superman">
          <button>test</button>
        </Main>

        <Main name="Ashvath" HeroName="BatMan"/>

        <Header name="Pranaya" HeroName="Wonder Women">
          <button>test Class</button>
          </Header>

        <Header name="Jalander" HeroName="Superman"/>

        <Header name="Ashvath" HeroName="Batman"/>
    </div>
  );
}

export default App;
