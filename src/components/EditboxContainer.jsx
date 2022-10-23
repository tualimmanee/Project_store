import React,{useState} from 'react'
import { ref } from "firebase/storage"

function EditboxContainer({seteditbox}) {

    const [quantity, setQuantity] = useState("");

    function editDoc(updateDoc){
        ref
        .doc(updateDoc.id)
        .update(updateDoc)
        .catch((err) => {
            alert(err)
            console.error(err);
        })
    }



    return (
        <div>
            <p>editbox</p>
            <input type="number" placeholder="quantity" onChange={(e) => setQuantity(e.target.value)} />
            <button onClick={() => {
                editDoc({quantity: quantity})
                seteditbox(false)
            }}>update</button>
        </div>
    )
}

export default EditboxContainer