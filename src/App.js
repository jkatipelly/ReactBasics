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
import FocusInput from './Components/FocusInput';
import FRParentInput from './Components/FRParentInput';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import User from './Components/User';
import CounterTwo from './Components/CounterTwo';


function App() {

  return (
    <div className="App">  

    <CounterTwo render={(count,incrementCount) => (
                                  <ClickCounterTwo count={count} incrementCount={incrementCount}/>
                        )} />

    <CounterTwo render={(count, incrementCount)=>(
                                  <HoverCounterTwo count={count} incrementCount={incrementCount}/>
                        )} />
   
    </div>
  );
}

export default App;
