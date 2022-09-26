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
import Form from './Components/Form';
import LifecycleA from './Components/LifecycleA';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import RefsDemo from './Components/RefsDemo';


function App() {

  return (
    <div className="App">  
        
        <RefsDemo></RefsDemo>
        {/* <ParentComp></ParentComp> */}
        {/* <LifecycleA /> */}
        {/* <Form></Form> */}    

    </div>
  );
}

export default App;
