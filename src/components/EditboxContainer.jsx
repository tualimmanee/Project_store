import React,{useState} from 'react'
// import { ref } from "firebase/storage"
import {ItemRef,firestore} from '../firebase.config'
import { updateDoc,doc } from 'firebase/firestore'
import {getAllMaterialItems} from '../utils/firebaseFunctions'
import {actionType} from '../context/reducer'
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
        <div>
            <p>editbox</p>
            <input type="number" placeholder="quantity" onChange={(e) => setQuantity(e.target.value)} />
            <button onClick={() => {
                editDoc({quantity: quantity ,id:item.id})
                seteditbox(false)
                // window.location = "/AllItems"
            }}>update</button>
        </div>
    )
}

export default EditboxContainer