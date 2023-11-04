import Button from "../Button/Button";
import './ButtonHolder.css'

const ButtonHolder = ({num}) => {
    return (
        <div className="btnHolder">
            <Button num={num}></Button>
        </div>
    );
};

export default ButtonHolder;