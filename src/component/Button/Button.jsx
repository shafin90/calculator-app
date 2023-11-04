import { useContext, useEffect, useState } from 'react';
import './Button.css'
import { authContext } from '../AuthProvider/AuthProvider';


const Button = ({ num }) => {
    // Taking state and function from authProvider component through Context API
    const { setInput, input } = useContext(authContext)

    // State declaration of this component
    const [textToShow, setTextToShow] = useState('');
    const [audioElement, setAudioElement] = useState(null);

    // Defining what to show on the screen
    useEffect(() => {
        if (input.length === 0 && typeof num !== "number") {
            setTextToShow('')
        }
        else {
            setTextToShow(num);
        }
    }, [num, setTextToShow, input])

    // Defining what to do when the component mounts
    useEffect(() => {
        const audioElement = new Audio('/public/sounds/click.wav');
        setAudioElement(audioElement);

        return () => {
            audioElement.pause();
        };
    }, []);

    // button handler
    const clickOnBtn = () => {
        setInput(input + textToShow)
        audioElement.play();
    }

console.log(audioElement)
    return (
        <button  onClick={clickOnBtn} className="btn">
            {num}
        </button>
    );

};

export default Button;