import React from "react";
import Validator from "validator";

// Locals
import ErrorLabel from "../helpers/errorlabel.js";

export default class Validations extends React.Component {
    static required (value){
        if(!value.toString().trim().length){
            return <ErrorLabel>Este campo es requerido</ErrorLabel>;
        }
    }
    static minLength (value, props){
        if(value.toString().trim().length < props.minLength){
            return <ErrorLabel>El campo debe tener más de  {props.minLength} carácteres</ErrorLabel>
        }
    }
    static maxLength(value, props){
        if (value.toString().trim().length > props.maxLength) {
            return <ErrorLabel>El campo debe tener un máximo de  {props.maxLength} carácteres</ErrorLabel>
        }
    }
}
