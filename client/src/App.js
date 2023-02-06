import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
        </Routes>
        <div className='push'></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
