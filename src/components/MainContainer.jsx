import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";


const MainContainer = () => {
 
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <HomeContainer />

      
    </div>
  );
};

export default MainContainer;