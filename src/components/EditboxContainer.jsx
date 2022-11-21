import React,{useState} from 'react'
import { motion } from "framer-motion";
import {ItemRef,firestore} from '../firebase.config'
import { updateDoc,doc } from 'firebase/firestore'

function EditboxContainer({item,seteditbox}) {

    const [quantity, setQuantity] = useState("");

    function editDoc(updateDocs){
        console.log("updateDocs",updateDocs)

        const docRef = doc(firestore,'materialItems',updateDocs.id) 


       /* Function From Firebase */ 
       updateDoc(docRef,{
            quantity: updateDocs.quantity
        }).then(
            alert('Sucess'),
            // เพิ่มฟังชั้น ดึงข้อมูลอีกรอบ + เอาค่าไปเก็บใน Redux 
        )
        
        
    }


    return (
        <div className="flex flex-row">
           
            <input type="number" placeholder="quantity" className="bg-primary border-gray-200 w-80" onChange={(e) => setQuantity(e.target.value)} />
            <motion.div 
            whileTap={{ scale: 0.75 }}
            onClick={() => {
                
                editDoc({quantity: quantity ,id:item.id})
                seteditbox(false)
                // window.location = "/AllItems"
            }
            
            } className="bg-red-600 rounded-lg text-white cursor-pointer">update</motion.div>
        </div>
    )
}

export default EditboxContainer