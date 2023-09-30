import '../App.css'
import { Link } from "react-router-dom";
import { useState } from 'react'
import axios from "axios";
import { useAuth } from './auth/AuthContext';
import { useNavigate } from 'react-router-dom';


export default function CreateTransac() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    time: '',
    type: '',
    amount:'',
    note:''
  });
  const [inputError, setInputError] = useState("");
  const urlWithProxy = "/api/create";
  const {token} = useAuth();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    if(data.name === "") {
      setInputError("name required!");
      return
    }
    if(data.type === "") {
      setInputError("type required!");
      return
    }


    const dataBody = {
      name: data.name,
      time: data.time,
      type: data.type,
      amount:data.amount,
      note:data.note
    }

    const headers = {
      'Authorization': `${token}`,
      withCredentials: true
    };

    axios
      .post(urlWithProxy, dataBody, {headers})
      .then((response) => {
        console.log('Response from server:', response.data);
        // window.location = "/account"
        navigate('/account', { replace: true });
      })
      .catch((err) => {
        console.error("create api POST: ERROR", err);
      });
  }
  return (
    <>
      <div className='flex flex-row justify-between header my-6 place-self-center'>
      <h1 className='font-semibold'>Add</h1>
      <Link to="/account" className="btn">List</Link>
    </div>
      <hr />

      <form onSubmit={handleSubmit}>
          {inputError 
          ? <p className='bg-red-100 text-red-800 py-2 px-4 rounded-md font-semibold my-3'>{inputError}</p> 
          : null}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">title</label>
          <input type="text" className="form-control" name="name" id="name" value={data.name} onChange={handleChange}/>
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">time</label>
          <input type="date" className="form-control" name="time" id="time" value={data.time} onChange={handleChange}/>
        </div>

        <div className="mb-3">
          <label htmlFor="type" className="form-label">type</label>
          <select
            className="form-select"
            name="type"
            id="type"
            value={data.type} 
            onChange={handleChange}
          >
            <option defaultValue aria-disabled>Select...</option>
            <option >income</option>
            <option >spending</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">amount</label>
          <input type="text" className="form-control" name="amount" id="amount" value={data.amount} onChange={handleChange}/>
        </div>

        <div className="mb-3">
          <label htmlFor="note" className="form-label">note</label>
          <textarea type="text" className="form-control" name="note" id="note" value={data.note} onChange={handleChange}/>
        </div>
        
        <div className='mt-6 flex items-center justify-end gap-x-6'>
        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 ">Save</button>
        </div>
      </form>
    </>
  )
  }