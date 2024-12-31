
import './form-label.styles.css';

const FormLabel = (props) => {

    return (
        <label className='form-label' htmlFor={props.htmlFor}>
            {props.text}:
        </label>
    );
};
export default FormLabel;