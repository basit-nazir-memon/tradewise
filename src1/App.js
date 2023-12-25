import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topnavbar from './Navbar'; 
import Ebooks from './Ebooks';
import Lecturerdetails from './lecturerdetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Topnavbar />} />
        <Route path='/Ebooks' element={<Ebooks/>}/>
        <Route path='/Lecturer' element={<Lecturerdetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
