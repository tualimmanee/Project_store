import React, { useEffect, useRef, useState } from "react";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import CartContainer from "./CartContainer";


const MainContainer = () => {
  const [{ materialItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
    

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
           ALL MATERIAL
          </p>

        </div>
        <RowContainer
         
       
          data={materialItems}
        />
      </section>

 
      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;