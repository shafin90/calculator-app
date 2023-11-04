import './Button.css'

const Button = ({ num }) => {

    const style = {
        backgroundColor:"#e0e0e0"
    }

    return (
        <div style={style} className="btn">
            {num}
        </div>
    );
};

export default Button;