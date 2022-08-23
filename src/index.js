import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './features/components/Homepage'
import AddUser from './features/components/AddUser';
import Edituser from './features/components/Edituser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  // <React.StrictMode>
  <>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/addUser' element={<AddUser />} />
          <Route path='/editUser/:id' element={<Edituser />} />
        </Routes>
      </Router>
    </Provider>
    <ToastContainer />
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
