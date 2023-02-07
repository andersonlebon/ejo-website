import logo from './logo.svg';
import './assets/css/main.css';
import Home from './componets/home';
// import bootstrap js file
import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './componets/topbar';
import NavBar from './componets/navbar';
import ServicesPage from './componets/pages/activities';
import Service from './componets/common/service';
import Footer from './componets/footer';



function App() {
  return (
    
    <Router>
      <div className="navigations">
        <TopBar/>
        <NavBar />
      </div>
      <Footer/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/activities" element={<ServicesPage/>} />
        <Route path="/activities/:id" element={<Service/>} />
      </Routes>
    </Router>

  );
}

export default App;
