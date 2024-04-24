// import { useState } from "react";

// export default function AddCustomer() {

//     const [items, setItems] = useState([]);

//     const [name, setName] = useState('');

//     function handleChange(event: any) {
//         setName(event.target.value);
//     }

//     function handleAdd() {
//         const newList = items.concat({ name });
//         setItems(newList);
//       }

//     return (
//         <div>
//             <input type="text" placeholder="Add an item" onChange={handleChange}/>
//             <button type="button" onClick={handleAdd}>Add</button>
//         </div>
//     )
// }