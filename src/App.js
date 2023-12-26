import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ebooks from "./pages/Ebooks";
import Lecturerdetails from "./pages/lecturerdetails";
import Topnavbar from "./components/Navbar";
import Footer from "./components/footer";
import Login from "./components/authentication/Login";
import Wallet from "./components/wallet/wallet"; // Updated import
import PaymentProcessing from "./components/wallet/paymentProcessing"; // Updated import
import ManageWorks from "./pages/ManageWorks/ManageWorks";
import Setting from "./pages/ManageSettings/ManageSetting";
import NavigationBar from "./components/NavigationBar";
import UserRoute from "./Guards/UserGuard";

function App() {
  const [totalCoins, setTotalCoins] = React.useState(0);

  return (
    <Router>
      {/* <Topnavbar /> */}
      <NavigationBar/>
      <Routes>
        <Route
          path={"/Login"}
          element={<Login setTotalCoins={setTotalCoins} />}
        />
        <Route path={"/"} element={<HomePage />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/wallet" element={<UserRoute><Wallet setTotalCoins={setTotalCoins} /></UserRoute>} />
        <Route path="/payment_Processing" element={<UserRoute><PaymentProcessing totalCoins={totalCoins} /></UserRoute>} />
        <Route path="/settings" element={<UserRoute><Setting totalCoins={totalCoins} /></UserRoute>} />
        <Route path="/lecturers" element={<Lecturerdetails />} />
        <Route path='/manage/works' element={<UserRoute><ManageWorks type={"works"}/></UserRoute> }/>
        <Route path='/upload/video' element={<UserRoute><ManageWorks type={"uploadVideo"}/></UserRoute> }/>
        <Route path='/upload/video/live' element={<UserRoute><ManageWorks type={"uploadLive"}/></UserRoute> }/>
        <Route path='/upload/ebook' element={<UserRoute><ManageWorks type={"uploadEbook"}/></UserRoute> }/>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
