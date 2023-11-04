import { createContext, useEffect, useState } from "react";
export const authContext = createContext()

const AuthProvider = ({ children }) => {
    // State Declaration====================================================================== 
    const [input, setInput] = useState([]); // Contains all the input
    const [inputLength, setInputLength] = useState(0)

    useEffect(() => {
        setInputLength(input.length);
        if (input[inputLength]=="AC"){
            setInput([])
        }
      }, [input, inputLength]);
   
    console.log(inputLength, input)
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