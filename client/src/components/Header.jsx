import '../App.css'
import { Link } from "react-router-dom";
import { useAuth } from './auth/AuthContext';

export default function Header () {
  const {logout} = useAuth();
  return (
    <>
    <div className='flex flex-row justify-between header my-6'>
      <div></div>
      <button onClick={logout} className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 ">Logout</button>
    </div>
    <div className='flex flex-row justify-between header my-6'>
      <h1 className='font-semibold'>Bookkeeping</h1>
      <Link to="/account/create" className="btn">create</Link>
    </div>
    </>
  )
}

