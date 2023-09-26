import '../index.css';
import Header from '../components/Header'
import Transaction from './Transaction'
import { useState } from 'react'
import axios from "axios";

export default function Account() {
  const [data, setData] = useState();
  const urlWithProxy = "/api";

  function getDataFromServer() {
    axios
      .get(urlWithProxy)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
    <Header />
    <div>
      <ul  role="list" className="divide-y divide-gray-100">
        <li>
          {/* <Transaction name={name} time={time} note={note} type={type} amount={amount}/> */}
          <Transaction name='bob' time='1-1-2033' note='' type='income' amount='100'/>
        </li>
          <button onClick={getDataFromServer}>Access server using proxy</button>
          <p>data : {data}</p>
      </ul>
    </div>
    </>
  )
}