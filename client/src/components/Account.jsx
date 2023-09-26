import '../index.css';
import Header from '../components/Header'
import Transaction from './Transaction'
import { useEffect, useState } from 'react'
import axios from "axios";

export default function Account() {
  const [data, setData] = useState([]);
  const urlWithProxy = "/api";


  useEffect(() => {
    axios
    .get(urlWithProxy)
    .then((res) => {
      setData(res.data)})
    .catch((err) => {
      console.error(err);
    });
  },[data])

  // console.log(data)
  return (
    <>
    <Header />
    <div>
      <ul  role="list" className="divide-y divide-gray-100">
        {data.map((el) => {
          return(
          <li key={el._id}>
            <Transaction name={el.name} time={el.time} note={el.note} type={el.type} amount={el.amount} key={el._id} id={el._id}/>
          </li>
          )
        })}
      </ul>
      
    </div>
    </>
  )
}