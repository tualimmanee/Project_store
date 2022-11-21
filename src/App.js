import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer,MenuSelectDesktop,AllItems,Checkout} from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllMaterialItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import {ItemRef} from './firebase.config'

// import  firebase  from "firebase/firestore";

const App = () => {
  const [{ materialItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllMaterialItems().then((data) => {
      dispatch({
        type: actionType.SET_MATERIAL_ITEMS,
        materialItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
    console.log("################Firestore##############",ItemRef)
  }, []
  
  );

 

  return (
    <AnimatePresence exitBeforeEnter>

    <div className="w-screen h-full flex flex-col bg-primary">
      <Header />

      <main className="mt-14 md:mt-20 px-4 md:px-16 py-10 w-full ">
        <Routes>
          <Route path="/*" element={<MainContainer />} />
          <Route path="/createItem" element={<CreateContainer />} />
          <Route path="/MenuSelectDesktop" element={<MenuSelectDesktop/>} />
          <Route path="/AllItems" element={<AllItems/>} />
          <Route path="/Checkout" element={<Checkout/>} />
        </Routes>
      </main>
    </div>
    </AnimatePresence>
  );
};

export default App;