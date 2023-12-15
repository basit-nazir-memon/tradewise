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
import ManageWorks from './pages/ManageWorks/ManageWorks';

function App() {
  const [totalCoins, setTotalCoins] = React.useState(0);

  return (
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
        <Route path='/manage/works' element={<ManageWorks/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
