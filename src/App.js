import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Login from './componets/Login';
import Header from './componets/Header';
import Home from './componets/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<><Header/><Home/></>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
