import FormInputText from "./form-input/FormInputText.component";
import FormLabel from "./form-label/FormLabel.component";
import './form-input-container.styles.css';

const FormInputContainer = (props) => {
    return (
        <div className="form-input-container">

            <FormLabel htmlFor={props.id} text={props.labelText} />
            <FormInputText
                id={props.id}
                type={props.type}
                required={props.required}
                placeHolder={props.placeHolder}
                name={props.id}
                handleInput={props.handleInput}
                value={props.value}
            />

        </div>
    );
};

export default FormInputContainer;