
import { useContext } from 'react';
import './Screen.css'
import { authContext } from '../AuthProvider/AuthProvider';
const Screen = () => {
    // Taking state and function from auth provider component through context API
    const {input}= useContext(authContext)
    return (
        <div className="screen">
            {...input}
        </div>
    );
};

export default Screen;