import '../index.css';
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import axios from "axios";

export default function Account() {
  const [data, setData] = useState([]);
  const urlWithProxy = "/api";

  const deleteTransac = (id) => {
    console.log(id)
    axios
      .delete(`/api/delete/${id}`)
      .then(() => {
        setData((prev) => prev.filter((el) => el._id !== id ))
        console.log("seccessfully deleted");
      })
      .catch(err=> console.log("delete", err))
  }

  useEffect(() => {
    
    axios
    .get(urlWithProxy)
    .then((res) => {
      if(res) setData(res.data)})
      .catch((err) => {
        console.error(err);
      });
    },[])
    
    useEffect(() => {
  }, [data])

  return (
    <>
    <Header />
    <div>
      <ul  role="list" className="divide-y divide-gray-100">
        {data.length > 0 && data.map((el) => {
          return(
          <li key={el._id}>
            <div className='border-solid border-2 border-stone-300 rounded-md my-4'>
              {el.type === "income" ? 
              <h5 className=" p-4 text-lg font-semibold leading-6 text-gray-900 bg-green-300 ">{el.time}</h5>
              : <h5 className=" p-4 text-lg font-semibold leading-6 text-gray-900 bg-red-300 ">{el.time}</h5>}

              <div className=" flex justify-between gap-x-6 p-5">
                <div className="col-4">
                  <p className="card-text">{el.name}</p>
                </div>
                <div className="col-4">
                  <p className="card-text">{el.note}</p>
                </div>
                <div className="col-2">
                  <p className="badge text-bg-success m-0">{el.type}</p>
                </div>
                <div className="col-1">
                  <p className="card-text">{el.amount}</p>
                </div>
                <div className="col-1">
                <button onClick={() => deleteTransac(el._id)} className="rounded-md  px-3 py-1 font-semibold text-red-500 hover:bg-red-100">remove</button>
                </div>
              </div>
            </div>
          </li>
          )
        })}
      </ul>
      
    </div>
    </>
  )
}