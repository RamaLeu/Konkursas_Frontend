import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Rover from './rover/Rover';
import RoverPics from './roverPics/RoverPics';
import SavedPhotos from './savedPhotos/SavedPhotos';
import Footer from './footer/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path ="/" element={<Main/>}/>
          <Route path = "/rover/:name" element={<Rover/>}/>
          <Route path = "/rover/:name/:camera/:date" element={<RoverPics/>}/>
          <Route path = "/rover/:name/:camera/:date/:imageUrl" element={<RoverPics/>}/>
          <Route path = "/savedPhotos" element={<SavedPhotos/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
