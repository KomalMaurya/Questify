import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import React from 'react'
import HomePage from './Page/HomePage';
import Home from './Page/Home';
import Quiz from './Page/Quiz';
import Course from './Page/Course';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard/Dashboard';
import "@fontsource/poppins";
import Analytics from './Page/Analytics';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="home" element={<Home />}/>
        <Route path="quiz" element={<Quiz />}/>
        <Route path="course" element={<Course />}/>
        <Route path="analytics" element={<Analytics />}/>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App