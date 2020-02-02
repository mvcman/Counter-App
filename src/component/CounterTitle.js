import React, {useContext} from "react"
import Context from "../context"

export default function CounterTitle(){
    const mycontext = useContext(Context);
    return <h1>{mycontext.title}</h1>;
}