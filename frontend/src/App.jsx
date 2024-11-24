import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import React from 'react'
import HomePage from './Page/HomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import "@fontsource/poppins";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App