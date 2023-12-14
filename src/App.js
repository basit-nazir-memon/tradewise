import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Ebooks from './pages/Ebooks';
import Lecturerdetails from './pages/lecturerdetails';
import Topnavbar from './components/Navbar'
import Footer from './components/footer';

function App() {
  return (
      <Router>
        <Topnavbar />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path='/ebooks' element={<Ebooks/>}/>
          <Route path='/lecturer' element={<Lecturerdetails/>}/>
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
