import React, { useEffect, useRef, useState } from "react";
import { collection, getDocs } from 'firebase/firestore'
import { firestore } from '../firebase.config'
import {Table} from 'react-bootstrap';

export const Checkout = () => {

  const [tradingHistory, setHistory] = useState([])

  useEffect(() => {
    getHistory()
  }, [])

  useEffect(() => {
    console.log(tradingHistory)
  }, [tradingHistory])

  function getHistory() {
    const CollectionRef = collection(firestore, 'tradingHistory')
    getDocs(CollectionRef)
      .then(response => {
        const history = response.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }))
        setHistory(history)
      })
      .catch(error => console.log(error.message))
  }

  const num1 = 0;
  //   {tradingHistory.map(item => (
    // <tr key={item.id}>{item.data.buyerName}</tr>

    // ))}
  return (

    <div className=" center  ">
      <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">Checkout</p>
      <div >
      <table className="border-separate border border-slate-400 rounded-xl w-auto h-auto  items-center justify-center ">
        <thead>
          <tr className="border-separate border border-slate-400 text-2xl font-semibold capitalize text-headingColor rounded-xl w-auto">
            <th className="border-separate border border-slate-400 rounded-xl">Name</th>
            <th className="border-separate border border-slate-400 rounded-xl">itemName</th>
            <th className="border-separate border border-slate-400 rounded-xl">quantity</th>
            <th className="border-separate border border-slate-400 rounded-xl">information</th>                
          </tr>
        </thead>
        
        <tbody className="border-separate border border-slate-400 text-xl font-semibold capitalize text-headingColor items-center ">

          

          <td className="border-separate border border-slate-400 text-xl font-semibold capitalize text-headingColor items-center rounded-xl">
          {tradingHistory.map(item => (
           <tr key={item.id}>{item.data.buyerName}</tr>
           ))}
          </td>


          <td className="border-separate border border-slate-400 text-xl font-semibold capitalize text-headingColor items-center rounded-xl">
          {tradingHistory.map(item => (
           <tr key={item.id}>{item.data.itemName}</tr>
           ))}
          </td>

          <td className="border-separate border border-slate-400 text-xl font-semibold capitalize text-headingColor items-center rounded-xl">
          {tradingHistory.map(item => (
           <tr className="items-center " key={item.id}>{item.data.quantity}</tr>
           ))}
          </td>       

          <td className="border-separate border border-slate-400 text-xl font-semibold capitalize text-headingColor items-center rounded-xl">
          {tradingHistory.map(item => (
           <tr className="items-center " key={item.id} >{item.data.info}</tr>
           ))}
          </td>     


        </tbody>
        
      </table>
      </div>
      


    </div>
  )
};

export default Checkout;