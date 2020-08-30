import React from 'react';
import styles from './Button.module.scss';


const Button = ({darkmodeButton, inputSearchButton, darkmode, children, ...props}) => {

    let buttonClass ;

    if (darkmode===true){
        if(darkmodeButton){
            buttonClass=styles.darkmodeButtondark;
        }
        else if (inputSearchButton){
            buttonClass=styles.inputSearchButtondark;
        }
        else{
            buttonClass=styles.buttondark;
        }
    }
    else{
        if(darkmodeButton){
            buttonClass=styles.darkmodeButton;
        }
        else if (inputSearchButton){
            buttonClass=styles.inputSearchButton;
        }
        else{
            buttonClass=styles.button;
        }
    }

        return(
            <button className ={buttonClass} {...props}>{children}</button>
        )
    }

export default Button;