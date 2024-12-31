import './custom-button.styles.css';

const CustomButton = (props) => {

    return (
        <button className={`button ${props.className}`}>
            {props.children}
        </button>
    );
};

export default CustomButton;