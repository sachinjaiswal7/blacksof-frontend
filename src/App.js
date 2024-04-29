import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Form from './Components/Form';
import MainPage from './Components/MainPage';
import Congratulations from './Components/Congratulations';
import WaitlistTable from './Components/WaitlistTable';

function App() {
  return (
    <div style={{height:"100vh"}} className="App">
      {/* Header */}
    
      <Router>
        <Routes>
          <Route path='/form' element={<Form/>} />
          <Route path='/' element={<MainPage/>}/>
          <Route path='/congratulations' element={<Congratulations/>}/>
          <Route path='/waitlist' element={<WaitlistTable/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
