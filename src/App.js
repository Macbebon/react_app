import './App.css';
import './pages/Home';
import Home from './pages/Home';
import "react-icons";
import Login from './pages/Login';
import Registation from './pages/Registation';


function App() {
  return (
    <div className="App">
      <Home />
     {/*  <Login />
      <Registation/> */}
    </div>
  );
}

export default App;
