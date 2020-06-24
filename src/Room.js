import React, { useState } from 'react'
import './Room.css';


export default function () {
    const [islit, setLit] = useState(false)
    let [age, setAge] = useState(true)


    return (
        <div className={`room  ${islit ? 'lit' : 'dark'}`}>
            the room component is {islit ? 'lit' : 'dark'}
            Age is {age}
            <button onClick={() => {
                { setLit(!islit) }
                { setAge(++age) }
            }}    > clik mee</button>
        </div >
    )
}
