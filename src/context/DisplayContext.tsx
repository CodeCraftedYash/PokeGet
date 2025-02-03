import React,{ createContext,ReactNode,useContext, useState } from "react";
import { DisplayContextType } from "../types/context";

const DisplayContext = createContext<DisplayContextType | undefined>(undefined);

export const DisplayContextProvider:React.FC<{children:ReactNode}> = ({children})=>{
    const [display,setDisplay] = useState<boolean>(false);
    return (
        <DisplayContext.Provider value={{display,setDisplay}}>
            {children}
        </DisplayContext.Provider>
    )
}
export const useDisplayContext = ():DisplayContextType=>{
    const context = useContext(DisplayContext);
    if(!context){
        throw new Error ("Erron in the display context");
    }
    return context;
}