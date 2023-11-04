import KeyPad from '../KeyPad/KeyPad';
import Screen from '../Screen/Screen';
import './Calculator.css'

const Calculator = () => {
    return (
        <div className='calculator'>
            <Screen></Screen>
            <KeyPad></KeyPad>
        </div>
    );
};

export default Calculator;