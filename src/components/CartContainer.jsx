import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";

import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import EmptyCart from "../img/emptyCart.svg";
import CartItem from "./CartItem";

import { updateDoc,doc,setDoc } from 'firebase/firestore'
import {ItemRef,firestore} from '../firebase.config'


const CartContainer = () => {
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  useEffect(() => {
    let totalQuantity = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty + 0;
    }, 0);
    setTot(totalQuantity);
    console.log(tot);
  }, [tot, flag]);

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [],
    });

    localStorage.setItem("cartItems", JSON.stringify([]));
  };
  




  async function checkout(){
   await cartItems.forEach(item => {
      
    const docRef = doc(firestore,'materialItems',item.id) 
  
    const user = JSON.parse(localStorage.getItem('user'))


    /* Function From Firebase */ 


    updateDoc(docRef,{
         quantity: item.quantity-item.qty
     }).then(

      setDoc(doc(firestore, "tradingHistory", `${Date.now()}`), 
      {
        buyerName : user.displayName,
        buyerEmail : user.email,
        buyerProfile : user.photoURL,
        itemName : item.title,
        quantity : item.qty,
        info : item.info,
        time : Date.now(),
      }, {
        merge: true,
      }),
    
         console.log("success")
     )

    })

    // window.location = "/AllItems"
    

  }







  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]"
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
          onClick={clearCart}
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>

      {/* bottom section  */}
      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-100 bg-cartBg rounded-t-[2rem] flex flex-col">
          {/* cart Items section */}
          <div className="w-full h-[753px] px-6 py-6 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {/* cart Item */}
            {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  setFlag={setFlag}
                  flag={flag}
                />
              ))}
          </div>

          {/* cart total section */}
          <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem]  px-8 py-2 ">
            <div className="w-full flex justify-between items-end">
              <p className="text-gray-200 text-xl font-semibold">Total</p>
              <p className="text-gray-200 text-xl font-semibold">
                {tot}
              </p>
            </div>
             {/* user.email === "osuzumiyao@gmail.com"||"varuttete30@gmail.com" */}
            {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="submit"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
                
                
                onClick={checkout}
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="submit"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
              >
                Login to check out
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className="w-300" alt="" />
          <p className="text-xl text-textColor font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;

//db.collection('materialItems').doc('Value').update({quantity: quantity-qty})
