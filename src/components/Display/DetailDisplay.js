import React from "react";
import styles from './DetailDisplay.module.scss';
import { Link } from 'react-router-dom';

class DetailDisplay extends React.Component {
    state= {
        data: [],
            };

   codesToStringFn = (country) => {
    let neighboursCodeList= "";
        for(let i=0; i<country.borders.length; i++){
            if(i===0){
                neighboursCodeList=neighboursCodeList+country.borders[i];
            }
            else{
                neighboursCodeList=neighboursCodeList+";"+country.borders[i];
            }
        };
     
        if (neighboursCodeList.length>0){
            fetch(`https://restcountries.eu/rest/v2/alpha?codes=${neighboursCodeList}`)
            .then(response => response.json())
            .then(data => this.setState({data}))
            .catch(err => console.log(err))
        }
   }
    
    render () {
        
        const country=this.props.country;
        this.codesToStringFn(this.props.country);    
        const wrapperClassame = this.props.darkmode===false ? styles.wrapper : styles.wrapperDark;
        const buttonClassName = this.props.darkmode===false ? styles.button : styles.buttonDark; 
        const mapClassName = this.props.darkmode===false ? styles.map : styles.mapDark;
    
        let currencies =  null;
        for( let i =0; i<country.currencies.length; i++){
            if(i===0){
                currencies=country.currencies[i].code + " - " + country.currencies[i].name;
            }
            else {
                currencies= currencies + ",  " + country.currencies[i].code + " - " + country.currencies[i].name;
            }
        };
       
        
        let fullNamesNeighboursList ;
        if (this.state.data.length>0){
                fullNamesNeighboursList =
                this.state.data && this.state.data.map(neighbour => { 
                    let name=(neighbour.name.replace('(', '')).replace(')', '');
                        return(
                            <Link  key={neighbour.name} to={`${name}`}>
                            <button className={buttonClassName} darkmode={this.props.darkmode} country={country}>{neighbour.name}</button>
                            </Link>
                        )
                });
        }
        else {
            fullNamesNeighboursList = "No border countries";
        }
      
      
        return(
            <>
            <div className={wrapperClassame}>
                <img src={country.flag} className={styles.wrapper__img} alt="flag_image" />
                <div className={styles.wrapper__rightcolumn}>
                         <p className={styles.wrapper__name}> {country.name}</p>
                         <div className={styles.wrapper__rightcolumn__columns}>
                                <p>Native name: {country.nativeName}</p>
                                <p>Population: {country.population}</p>
                                <p>Region: {country.region}</p>
                                <p>Subregion: {country.subregion}</p>
                                <p>Capital: {country.capital}</p>
                                <p>Top level domain: {country.topLevelDomain}</p>
                                <p> Currency:  {currencies}</p>
                          </div>
                          <p className={styles.wrapper__borders}> Borders: {fullNamesNeighboursList ? fullNamesNeighboursList : null}</p>
                </div>
            </div>   
            <div className={mapClassName}>
                
                    <div className={styles.maprouter}>
                            <iframe  title={country.name} className={styles.map__map}  id="gmap_canvas" src={`https://maps.google.com/maps?q=${country.name}&t=&z=5&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                        </div>
                        
            </div>
            </>    
        )
    }
}

export default DetailDisplay; 
