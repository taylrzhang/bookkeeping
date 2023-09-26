import { useEffect, useState } from 'react';
import '../index.css';

export default function Transaction({time, name, note, type, amount}) {
  const [isIncome, setIsIncome] = useState(false);

  useEffect(() => {
    if(type === 'income') setIsIncome(true);
  },[])
  return (
    <div className='border-solid border-2 border-stone-300 rounded-md my-4'>
      {isIncome ? 
      <h5 className=" p-4 text-lg font-semibold leading-6 text-gray-900 bg-green-300 ">{time}</h5>
      : <h5 className=" p-4 text-lg font-semibold leading-6 text-gray-900 bg-red-300 ">{time}</h5>}
      <div className=" flex justify-between gap-x-6 p-5">
        <div className="col-4">
          <p className="card-text">{name}</p>
        </div>
        <div className="col-4">
          <p className="card-text">{note}</p>
        </div>
        <div className="col-2">
          <p className="badge text-bg-success m-0">{type}</p>
        </div>
        <div className="col-1">
          <p className="card-text">{amount}</p>
        </div>
        <div className="col-1">
        <button  className="rounded-md bg-red-500 px-3 py-1 font-semibold text-white hover:bg-red-400">remove</button>
        </div>
      </div>
    </div>
  )
}