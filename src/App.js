import Singup from "./components/Singup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Info from "./components/Info";
import Movies from "./components/Movies";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (

    <Router>
        <Routes>
          <Route path="/" element={<Singup/>}/>
              
          <Route path="login" element={<Login/>}></Route>
             <Route path="dashboard" element={<Dashboard/>}>
              <Route path="info" element={<Info/>}></Route>
              <Route index element={<Movies/>}></Route>
              </Route>
             
          
          
        </Routes>
        </Router>
  );
  
}

export default App;
