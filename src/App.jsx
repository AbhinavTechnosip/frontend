import './App.css';
import Carousal from './componants/common/Carousal';
import Navbar from './componants/common/Navbar';
import UserRegistration from './componants/common/User/UserRegistration';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UserLogin from './componants/common/User/UserLogin';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Carousal />} />
          <Route exact path="/register" element={<UserRegistration />} />
          <Route exact path="/login" element={<UserLogin />} />
        </Routes>
  </BrowserRouter>,
    </div>
  );
}

export default App;
