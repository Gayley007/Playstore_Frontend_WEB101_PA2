import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './game.jsx'
    


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,

)

// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import './index.css';
// import App from './game.jsx';
// import New from './components/new.jsx'; 
// import Data from './components/data.jsx'; 

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/new" element={<New />} />
//         <Route path="/Data" element={<Data />} />
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>
// );

