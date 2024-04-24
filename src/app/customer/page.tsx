"use client"

import { useState } from "react";

let course = ["Full stack", "MERN", "REACT", "NEXT"];

export default function Customer() {

    const [arr, setArr] = useState(course);

    const arrayDataItem = arr.map((val, index) => 
        <li key={index}>
            <span className="mr-4">{val}</span>
            <span className="mr-4"><button className="bg-blue-300">EDIT</button></span>
            <span className="mr-4"><button className="bg-red-600" onClick={() => onDelete(index)}>Delete</button></span>
        </li>
    );

    const onDelete = (index: number) =>{
        const newArray = arr.filter((item, i) => i !== index);
        setArr(newArray);
    }

    const [items, setItems] = useState([]);

    const [name, setName] = useState('');

    function handleChange(event: any) {
        setName(event.target.value);
    }

    function handleAdd(e: any) {
        setArr([...arr, name]);
    }

    function edit() {

    }

    return (
        <div>
            <div>
                <p className="bg-blue-200">List Of Customers</p>
            </div>
            <ul>
                {arrayDataItem}
            </ul>
            <input type="text" placeholder="Add an item" onChange={handleChange}/>
            <button className="bg-green-500 m-4" type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}
