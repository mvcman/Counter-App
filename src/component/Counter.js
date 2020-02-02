import React, { useContext } from "react"
import Context from "../context"

export default function Counter(){
    const mycontext = useContext(Context);
    return <p>Counter: {mycontext.counter}</p>
}