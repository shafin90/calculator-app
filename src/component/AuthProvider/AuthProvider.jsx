import { createContext, useEffect, useState } from "react";
export const authContext = createContext()

const AuthProvider = ({ children }) => {
    // State Declaration====================================================================== 
    const [input, setInput] = useState(''); // Contains all the input
    const [inputLength, setInputLength] = useState(0)


    // AC button, Del buttons functionality==================================================
    useEffect(() => {
        setInputLength(input.length);

        setTimeout(() => {
            // AC buttons functionality
            if (input.slice(-2) === "AC") {
                setInput('')
            }

            // Del buttons functionality
            if (input.slice(-3) === "Del") {
                setInput(input.slice(0, inputLength - 4))
            }

            // "=" button functionality
            if (input.slice(-1) === "=") {
                const result = input.slice(0, inputLength)
                setInput(result)
                // setInput(eval(result) )

                setInput(eval(input.slice(0, inputLength-1)))

            }
        }, 200)
    }, [input, inputLength, setInputLength]);

    console.log(input)


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