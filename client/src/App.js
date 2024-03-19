import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Books from './pages/Books';
import Add from './pages/Add';
import Update from './pages/Update';
import 'bootstrap/dist/css/bootstrap.min.css';
import navbar from './pages/navigationbar';




function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<Books/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/update" element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;