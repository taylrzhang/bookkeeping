
import './App.css'
import { Route, Routes } from "react-router-dom";
import Account from './components/Account';
import CreateTransac from './components/CreateTransac' 


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/account" element={<Account />} />
        <Route path="/account/create" element={<CreateTransac />} />
      </Routes>
    </>
  )
}

export default App
