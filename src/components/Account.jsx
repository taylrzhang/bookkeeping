import '../index.css';
import Header from '../components/Header'
import Transaction from './Transaction'
import { useState } from 'react'

export default function Account() {
  return (
    <>
    <Header />
    <div>
      <ul  role="list" className="divide-y divide-gray-100">
        <li>
          {/* <Transaction name={name} time={time} note={note} type={type} amount={amount}/> */}
          <Transaction name='bob' time='1-1-2033' note='' type='income' amount='100'/>
        </li>
      </ul>
    </div>
    </>
  )
}