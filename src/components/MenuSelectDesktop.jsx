import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";


const MenuSelectDesktop = () => {
  const [{cartShow }] = useStateValue();




  return (
    <div>
      

      <MenuContainer />

      {cartShow && <CartContainer />}
    </div>
  );
};

export default MenuSelectDesktop;