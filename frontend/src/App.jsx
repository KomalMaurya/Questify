import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import React from 'react'
import HomePage from './Page/HomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './Page/Dashboard';
import "@fontsource/poppins";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App