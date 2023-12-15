<<<<<<< HEAD
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ebooks from "./pages/Ebooks";
import Lecturerdetails from "./pages/lecturerdetails";
import Topnavbar from "./components/Navbar";
import Footer from "./components/footer";
import Login from "./components/authentication/Login";
import Wallet from "./components/wallet/wallet"; // Updated import
import PaymentProcessing from "./components/wallet/paymentProcessing"; // Updated import
=======
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Ebooks from './pages/Ebooks';
import Lecturerdetails from './pages/lecturerdetails';
import Topnavbar from './components/Navbar'
import Footer from './components/footer';
import Login from './components/authentication/Login';
import ManageWorks from './pages/ManageWorks/ManageWorks';
>>>>>>> bd59e172f03ab9ff3ba162d7e6b903718e7245c6

function App() {
  const [totalCoins, setTotalCoins] = React.useState(0);

  return (
<<<<<<< HEAD
    <Router>
      <Topnavbar />
      <Routes>
        <Route
          path={"/Login"}
          element={<Login setTotalCoins={setTotalCoins} />}
        />
        <Route path={"/"} element={<HomePage />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route
          path="/wallet"
          element={<Wallet setTotalCoins={setTotalCoins} />}
        />
        <Route
          path="/payment_Processing"
          element={<PaymentProcessing totalCoins={totalCoins} />}
        />
        <Route path="/lecturer" element={<Lecturerdetails />} />
      </Routes>
      <Footer />
    </Router>
=======
      <Router>
        <Topnavbar />
        <Routes>
          <Route path={'/Login'} element={<Login />}/>
          <Route path={"/"} element={<HomePage />} />
          <Route path='/ebooks' element={<Ebooks/>}/>
          <Route path='/lecturer' element={<Lecturerdetails/>}/>
          <Route path='/manage/works' element={<ManageWorks/>}/>
        </Routes>
        <Footer/>
      </Router>
>>>>>>> bd59e172f03ab9ff3ba162d7e6b903718e7245c6
  );
}

export default App;
