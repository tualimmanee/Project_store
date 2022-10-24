import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer,MenuSelectDesktop,AllItems} from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllMaterialItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";



import { QuerySnapshot } from "firebase/firestore";

const App = () => {
  const [{ materialItems }, dispatch] = useStateValue();

  // const ref = firebase.firestore().collection("developers")

  // const [data,setdata] = useState([])
  // const [loader,setloader] = useState(true)

  // function getData(){
  //   ref.onSnapshot((QuerySnapshot) => {
  //     const items = []
  //     QuerySnapshot.forEach((doc) =>{
  //       items.push(doc.data())
  //     })
  //     setdata(items)
  //     setloader(false)
  //   })
  // }

  // useEffect(() => {
  //   getData()
  // })

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
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>

    <div className="w-screen h-screen flex flex-col bg-primary">
      <Header />

      <main className="mt-14 md:mt-20 px-4 md:px-16 py-10 w-full ">
        <Routes>
          <Route path="/*" element={<MainContainer />} />
          <Route path="/createItem" element={<CreateContainer />} />
          <Route path="/MenuSelectDesktop" element={<MenuSelectDesktop/>} />
          <Route path="/AllItems" element={<AllItems/>} />
        </Routes>
      </main>
    </div>
    </AnimatePresence>
  );
};

export default App;