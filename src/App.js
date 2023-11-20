import logo from './logo.svg';
import './App.css';

import PersonList from "./components/PersonList"
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Week 11 - Lab</h1>
      <BrowserRouter>
        <nav>
          <NavLink to="/"><p>Home</p></NavLink>
          
          <NavLink to="/person"><p>User List</p></NavLink>
        </nav>

        <Routes>
          {/* <Route path="/" element={<App/>} /> */}
          
         
          <Route path="/person" element={<PersonList/>} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
