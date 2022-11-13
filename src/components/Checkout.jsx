import React, { useEffect, useRef, useState } from "react";
import { collection, getDocs } from 'firebase/firestore'
import { firestore } from '../firebase.config'
import { Table } from 'react-bootstrap';
import { render } from "@testing-library/react";



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

  return (
    <div >
      <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
      Schedule
      </p>
      <div ><p className="text-white">.</p></div>
      <div><p className="text-white">.</p></div>



      <Table className=" border-4 border-r-4 border-pink-500 item-center w-full bg-white drop-shadow-2xl rounded-lg" >
        <tr >
          <th className="bg-orange-400 font-semibold border-r-4 border-pink-500 ">Profile</th>
          <th className="bg-orange-200 font-semibold border-r-4 border-pink-500">Name</th>
          <th className="bg-amber-300 font-semibold border-r-4 border-pink-500">Item</th>
          <th className="bg-lime-300 font-semibold border-r-4 border-pink-500">qty</th>
          <th className="bg-green-300 font-semibold border-r-4 border-pink-500">Information</th>
          <th className="bg-cyan-300 font-semibold">Order id</th>
        </tr>
        {
          <tr className="border-pink-500 text-lg border-4" >

            <td className=" border-t-4 border-r-4 border-pink-500  w-10 ">
              {tradingHistory.map(item => (
                <tr className="border-b-4  border-pink-500"><img src={item.data.buyerProfile}/></tr>
              ))}
            </td>

            <td className="px-20  border-pink-500  w-420 divide-y-19 divide-white border-4">
              {tradingHistory.map(item => (
                <tr className="text-center   border-pink-500">{item.data.buyerName}</tr>
              ))}
            </td>

            <td className=" px-5 border-t-4 border-r-4 border-pink-500 divide-y-19 divide-white ">
              {tradingHistory.map(item => (
                <tr className="text-center">{item.data.itemName}</tr>
              ))}
            </td>

            <td className="px-8 border-t-4 border-r-4 border-pink-500 w-5 divide-y-19 divide-white">
              {tradingHistory.map(item => (
                <tr className="text-center">{item.data.quantity}</tr>
              ))}
            </td>

            <td className="px-5 border-t-4 border-r-4 border-pink-500  divide-y-19 divide-white">
              {tradingHistory.map(item => (
                <tr className="text-center">{item.data.info}</tr>
              ))}
            </td>

            <td className="px-5 border-t-4 border-pink-500 w-10 divide-y-19 divide-white">
              {tradingHistory.map(item => (
                <tr className="text-center">{`${item.data.time}`}</tr>
              ))}

            </td>
          </tr>
        }
      </Table>




    </div>
  );




};

export default Checkout;