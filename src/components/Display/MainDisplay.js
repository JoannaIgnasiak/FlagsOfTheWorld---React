import React from "react";
import styles from './MainDisplay.module.scss';
import { Link } from 'react-router-dom';
import Input from "../Input/Input";
import InputSelect from "../Input/InputSelect";
import Button from "../Button/Button";
import Tile from '../Tile/Tile'


let filterName;
let filterRegion

class MainDisplay extends React.Component {

    state= {
        title: '',
        showFilter: false,
    }
    
    handleInputChange = e => {
        this.setState({
            title: e.target.value,
        });
      };

      enterPressed(event) {
        var code = event.keyCode || event.which;
        if(code === 13) { 
            this.props.changeinputNameSelectFn(this.state.title);
        } 
    }

    clearfilters = () => {
        filterRegion=null; 
        filterName=null;
        this.props.clearfiltersFn();
    }

    render () {

        const maindisplayClass = this.props.darkmode===false ? styles.wrapper : styles.wrapperDark;
        const wrapperTilesClass = this.props.darkmode===false ? styles.wrapperTiles : styles.wrapperTilesDark;
        const filterClass = this.props.darkmode===false ? styles.filter : styles.filterDark;
        const filterButtonClass = this.props.darkmode===false ? styles.filterButton : styles.filterButtonDark;
        const filterButtonClassOk = this.props.darkmode===false ? styles.filterButtonOk : styles.filterButtonOkDark;
        
        const data = this.props.data; 
        const darkmode = this.props.darkmode; 
    
        const countriesList = 
        data && data.map((country) => {

            let name=(country.name.replace('(', '')).replace(')', '');
            return(
                <Link key={country.name} to={`/${name}`}  
                style={{ color: 'inherit', textDecoration: 'inherit'}} >
                    <Tile   darkmode={this.props.darkmode} country={country}  />
                </Link>
            )
        });

        if (this.props.inputNameSelect){
            filterRegion=null;
            filterName = 
           <div className={filterClass}>
               {!this.props.error &&
               <>
                <div>{this.props.inputNameSelect}</div>
                <button className={filterButtonClass} onClick={() => this.clearfilters()}></button>
                </>
                }
                {this.props.error &&
               <>
                <div>{this.props.inputNameSelect} - no result found</div>
                <button className={filterButtonClassOk} onClick={() => this.clearfilters()}>OK</button>
                </>
                }
            </div>            
        }
        
        if (this.props.inputRegionSelect){
            filterName=null;
            filterRegion = 
            <div className={filterClass}>
                <div>{this.props.inputRegionSelect}</div>
                <button className={filterButtonClass} onClick={() => this.clearfilters()}></button>
            </div>          
        }
        
        
        return(
            
            <div className={maindisplayClass}>
                <div className={styles.wrapper__row}>
                    <div className={styles.wrapper__row__input}>
                        <Input 
                        onChange={this.handleInputChange}
                        value={this.state.title}
                        name="title"
                        darkmode={darkmode}
                        onKeyPress={this.enterPressed.bind(this)}
                        />  
                        <Button inputSearchButton onClick={() => this.props.changeinputNameSelectFn(this.state.title)} darkmode={darkmode}/>
                    </div>
                    <InputSelect changeinputRegionSelectFn={this.props.changeinputRegionSelectFn} darkmode={darkmode}/>
                </div>
                <div >
                    {filterName}{filterRegion}
                </div>
                <div className={wrapperTilesClass}>
                    {countriesList ? countriesList : <p>Loading</p>}
                </div>   
            </div>
        )
        }
}

export default MainDisplay; 