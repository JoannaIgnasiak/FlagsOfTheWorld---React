import React from "react";
import styles from "./Input.module.scss";

const Input = ({name, darkmode, ...props}) => {
    
const inputClassName= darkmode===false ? styles.input : styles.inputDark;
    return(
    <>
        <div className={styles.wrapper}>
            <input className={inputClassName}
            type="text" 
            placeholder="Select by country name"
            name={name}
            autoComplete="off" 
            {...props}>
            </input>
        </div>
    </>
    )
};


export default Input; 