import { useContext, useEffect, useState } from 'react';
import './Button.css'
import { authContext } from '../AuthProvider/AuthProvider';

const Button = ({ num }) => {
    // Taking state and function from authProvider component through Context API
    const { setInput, input } = useContext(authContext)
 
    return (
        <button onClick={e => setInput(input + num)} className="btn">
            {num}
        </button>
    );
};

export default Button;