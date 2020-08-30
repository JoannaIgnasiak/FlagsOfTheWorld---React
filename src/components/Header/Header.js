import React from "react";
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Button from '../Button/Button';



const Header = ({changeDarkModeFn, darkmode}) => {
       
    const headerClass = darkmode===false ? styles.wrapper : styles.wrapperDark;
    
        return(
         <header className={headerClass}>
              <Link  to="/"  style={{ color: 'inherit', textDecoration: 'inherit'}} > 
              <h1>Flags of the world</h1></Link>
           
            <Button 
            onClick={changeDarkModeFn} 
            darkmode={darkmode}
            darkmodeButton
            >Dark mode</Button>
         </header>
        )
    }

export default Header; 