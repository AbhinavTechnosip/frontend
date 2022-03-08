import './App.css';
import Carousal from './componants/common/Carousal';
import Navbar from './componants/common/Navbar';
import UserRegistration from './componants/common/User/UserRegistration';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Carousal/> */}
      <UserRegistration/>
    </div>
  );
}

export default App;
