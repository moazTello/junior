import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AuthProvider} from './context/AuthProvider';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
// const places = [
//   {latitude: 25.8103146,longitude: -80.1751609},
//   {latitude: 27.9947147,longitude: -82.5943645},
//   {latitude: 28.4813018,longitude: -81.4387899}
// ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
          <Routes>
            <Route path='/*' element={<App 
            // defaultZoom={7} places={places} 
            />}/>
          </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

