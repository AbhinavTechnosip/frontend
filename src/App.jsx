import './App.css';
import Carousal from './componants/common/Carousal';
import Navbar from './componants/common/Navbar';
import UserRegistration from './componants/common/User/UserRegistration';
import {BrowserRouter, Route, Routes   } from 'react-router-dom'
import UserLogin from './componants/common/User/UserLogin';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function App(props) {
  // const [loggedInStatus, setLoggedInStatus] = useState('NOT_LOGGED_IN')
  localStorage.setItem('logged_in','NOT_LOGGED_IN')
  const [user, setUser] = useState({})




  const handleSuccessfulAuth = (data) =>{
    console.log("data geted",data.user);
    // setLoggedInStatus('LOGGED_IN')
    localStorage.setItem('logged_in','LOGGED_IN')
    setUser(data.user)
  }

  return (
    <div className="App">
     <BrowserRouter>
        <Navbar {...props} />
        <Routes>

          <Route path="/" element={<Carousal />} />

          <Route
           exact
           path="/register" 
           element={<UserRegistration handleSuccessfulAuth={handleSuccessfulAuth}/>}
            />

          <Route exact path="/login" element={<UserLogin handleSuccessfulAuth={handleSuccessfulAuth}/>} />

        </Routes>
    </BrowserRouter>,
    </div>
  );
}

export default App;
