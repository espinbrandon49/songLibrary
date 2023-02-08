import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './pages/Login';
import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';

import { AuthContext } from './helpers/AuthContext';
// username can be accessed everywhere by importing {AuthContext} and using {authState}
//can really add anything you wanted to authState and also modify using setAuthState

function App() {
//TODO: 

//CSS media query on column, use column reverse
  const [authState, setAuthState] = useState({
    username: '',
    _id: '',
    status: false
  })

  useEffect(() => {
    Axios.get("http://localhost:3001/api/user/authToken", {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data._id,
            status: true,
          });
        }
      });
  }, [])

  // console.log(authState)
  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({
      username: "",
      id: 0,
      status: false,
    });
    window.location.replace("/")
  };

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <Router>
        <div className="app">
          <Header logout={logout} />          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<Login />} />
          </Routes>
          <div className='push'></div>
          <Footer />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;


