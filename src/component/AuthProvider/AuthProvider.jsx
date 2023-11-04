import { createContext, useEffect, useState } from "react";
export const authContext = createContext()

const AuthProvider = ({ children }) => {
    // State Declaration====================================================================== 
    const [input, setInput] = useState([]); // Contains all the input
    const [inputLength, setInputLength] = useState(0)

    // AC button, Del buttons functionality==================================================
    useEffect(() => {
        setInputLength(input.length);
        
        // AC buttons functionality
        if (input[inputLength]=="AC"){
            setInput([])
        }

        // Del buttons functionality
        if (input[inputLength]=="Del"){
            setInput([...input.slice(0,inputLength-1)])
        }
      }, [input, inputLength]);
   

    // Handeling all buttons functionality=====================================================




    //  Pass state and function to all over application==========================================
    const passedValue = {
        setInput,
        input,
    }

    return (
        <authContext.Provider value={passedValue}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;