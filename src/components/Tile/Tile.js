import React from "react";
import styles from "./Tile.module.scss";

const Tile = ({country, darkmode}) => {
    
 const wrapperClassName = darkmode===false ? styles.wrapper : styles.wrapperDark;
 const headlineClassName = darkmode===false ? styles.headline : styles.headlineDark;
 const paraClassName = darkmode===false ? styles.para : styles.paraDark;
    return (
        <div className={wrapperClassName} >
            <img src={country.flag} className={styles.img} alt="flag_image" />
            <p className={headlineClassName}>{country.name}</p>
            <p className={paraClassName}>Population:  {country.population}</p>
            <p className={paraClassName}>Region:  {country.region}</p>
            <p className={paraClassName}>Capital:  {country.capital}</p>
        </div>
    )
};

export default Tile;