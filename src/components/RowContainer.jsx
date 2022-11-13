import React, { useEffect, useRef, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";







import EditboxContainer from "./EditboxContainer";

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();

  const [items, setItems] = useState([]);

  const [{ cartItems }, dispatch] = useStateValue();

  const addtocart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };




  const [editbox, seteditbox] = useState(false)






  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addtocart();
  }, [items]);

  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${flag
        ? "overflow-x-scroll scrollbar-none"
        : "overflow-x-hidden flex-wrap justify-center"
        }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
          >





            <div className="w-full flex flex-row items-center justify-between">
              <motion.div
                className="w-130 h-130 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
              >


                <img
                  src={item?.imageURL}
                  alt=""
                  className="w-full h-full object-contain rounded-md"
                />


              </motion.div>


              <div className="flex flex-col  gap-2 w-130">
                <div className="w-full flex flex-col items-end justify-end  ">
                  {/* ชื่อวัสดูแสดง */}
                  <div className="w-full flex flex-col items-end justify-end">
                    <p className="text-base text-textColor font-semibold">
                      {item?.title}
                    </p>
                    <p className="text-sm text-textColor ">
                      {item?.info}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row justify-between">
                  {user && user.email === "osuzumiyao@gmail.com" && (
                    <div className="flex-row ">
                      <button className="w-9 h-5 text-white rounded-full bg-red-500 flex flex-row items-center justify-center cursor-pointer hover:shadow-md "
                        onClick={() => seteditbox(true)}>edit</button>
                      {editbox === true && <EditboxContainer item={item} seteditbox={seteditbox} />}
                    </div>
                  )}


                  <motion.div
                    whileTap={{ scale: 0.75 }}
                    className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center cursor-pointer hover:shadow-md -mt-1 "
                    onClick={() => setItems([...cartItems, item])}
                  >
                    <IoIosAddCircle className="text-white" />
                  </motion.div>
                </div>

              </div>









            </div>


            {/* info วัสดูแสดง
              <div className="w-100 flex flex-col items-end justify-end -mt-8 ">
                <p className="text-sm text-textColor ">
                  {item?.info}
                </p>
              </div> */}


            <div className="flex items-end gap-8 place-content-end">
              <p className="text-lg text-headingColor font-semibold">
                <span className="text-base text-red-500">Quantity</span> {item?.quantity}
              </p>
            </div>

          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-340" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
