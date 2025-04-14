import './App.css';
import Home from './components/home';
import View from "./components/views"
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/views' element={<View/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
