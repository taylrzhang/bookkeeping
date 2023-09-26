import '../App.css'
import { Link } from "react-router-dom";

export default function Header () {
  return (
    <div className='flex flex-row justify-between header my-6'>
      <h1 className='font-semibold'>Bookkeeping</h1>
      <Link to="/account/create" className="btn">create</Link>
    </div>
  )
}

