
import './App.css';
import { Route, Routes, useNavigate, Navigate, Outlet } from "react-router-dom";
import { useAuth } from './components/auth/AuthContext';

import Account from './components/Account';
import CreateTransac from './components/CreateTransac' 
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Success from './components/auth/Success'
import Layout from './components/Layout';

import { useEffect } from 'react';


function Home() {
  const navigate = useNavigate();
  
  useEffect(() => {
      return navigate("/login")      
      },[]);
    }
    
    



function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/create" element={<CreateTransac />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
