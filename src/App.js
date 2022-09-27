import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import CommentBox from './components/CommentBox';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
   <>
  <Router>
  <Navbar Navbar='Textutil'/>
  <Alert/>
     <Routes>
        <Route path="/about" element={<About/>} />
        
        <Route path="/myapp" element={  
        <div className='container my-3'>
          <CommentBox />
          </div>} /> 
         
    </Routes>
    </Router>

   </>
  );
}

export default App;
