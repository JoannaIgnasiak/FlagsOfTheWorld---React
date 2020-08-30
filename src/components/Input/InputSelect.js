import React from "react";
import styles from "./InputSelect.module.scss";

const InputSelect = ({changeinputRegionSelectFn, darkmode}) => {
    
    const filters = [ "Africa", "Americas", "Asia", "Europe", "Oceania" ];
    let maindropdownClassname=null;  let maindropbtnClassname=null; let maindropdowncontentClassname=null; let maindropdowncontentregionClassname=null;

    if (darkmode===false) {
        maindropdownClassname = styles.main__dropdown;
        maindropbtnClassname = styles.main__dropbtn;
        maindropdowncontentClassname = styles.main__dropdown_content;
        maindropdowncontentregionClassname = styles.main__dropdown_content__region;
    } else {
        maindropdownClassname = styles.main__dropdownDark;
        maindropbtnClassname = styles.main__dropbtnDark;
        maindropdowncontentClassname = styles.main__dropdown_contentDark;
        maindropdowncontentregionClassname = styles.main__dropdown_content__regionDark;
       };

     return (
    <>
      <div className={maindropdownClassname} >
            <button className={maindropbtnClassname} >Filtery region</button>
            <div className={maindropdowncontentClassname}>
                {filters.map(item => ( <button key={item} className={ maindropdowncontentregionClassname} onClick={() => changeinputRegionSelectFn(item)}>{item}</button>
                 ))}
            </div>
        </div>  
    </>
     )
    }


export default InputSelect; 