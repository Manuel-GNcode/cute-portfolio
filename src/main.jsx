import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Thanks } from './components/thanks/thanks.jsx';
import { Error } from './components/error/Error.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' exact element={<App />} />
        <Route path='/home' exact element={<App />} />
        <Route path='/thanks' element={<Thanks />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)