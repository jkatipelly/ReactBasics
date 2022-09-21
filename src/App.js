import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import Stylesheets from './Components/Stylesheets';
import Inline from './Components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';


function App() {

  return (
    <div className="App"> 
<h1 className='error'>Error</h1>
<h1 className={styles.success}>Success</h1>


    <Inline></Inline>

    {/* <Stylesheets primary={true}/> */}
        {/* <NameList></NameList> */}

    {/* <UserGreeting></UserGreeting>  */}
      
     {/* <ParentComponent></ParentComponent> */}

     {/* <EventBind />
        
        <FunctionClick />
        
        <ClassClick />

        <Main name="Jalander" HeroName="Superman">
          <button>test</button>
        </Main>

        <Main name="Ashvath" HeroName="BatMan"/>

        <Header name="Pranaya" HeroName="Wonder Women">
          <button>test Class</button>
          </Header>

        <Header name="Jalander" HeroName="Superman"/>

  <Header name="Ashvath" HeroName="Batman"/>*/}
    </div>
  );
}

export default App;
