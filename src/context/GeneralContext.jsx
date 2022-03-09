import { createContext, useState } from "react";
export const ContextCounter = createContext(0)

export const GeneralProvider = ({ children }) => {
    const [counter, setCounter] = useState(10)
    const [name, setName] = useState("Mari")

    const data = {
        counter: counter,
        setCounter: setCounter,
        name: name


    }

    return (<ContextCounter.Provider value={data}>
        {children}
    </ContextCounter.Provider>)

}