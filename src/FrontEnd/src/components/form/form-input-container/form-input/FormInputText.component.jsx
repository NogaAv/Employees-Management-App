import React from 'react';
import './form-input-text.styles.css';

const FormInputText = (props) => {
    return (
        <input className='form-input-text'
            id={props.id}
            type={props.type}
            required={props.required}
            placeholder={props.placeHolder}
            onInput={props.handleInput}
            name={props.name}
            value={props.value}
        />
    );
};

export default FormInputText;