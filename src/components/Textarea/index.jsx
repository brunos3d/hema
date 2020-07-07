import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

// import { Container } from './styles';

const Input = ({ name, ...rest }) => {
    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField } = useField(name);
    // const { fieldName, defaultValue, registerField, error } = useField(name);
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value",
        });
    }, [fieldName, registerField]);
    return <textarea ref={inputRef} defaultValue={defaultValue} {...rest} />;
};

export default Input;
