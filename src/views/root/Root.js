import React from 'react';
import "./index.css";
import { Route, Switch, HashRouter } from 'react-router-dom';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainView from "../MainView/MainView";
import DetailView from "../DetailView/DetailView";





class Root extends React.Component {

    state = {
        darkmode: true,
        inputNameSelect: null,
        inputRegionSelect:null, 
        mainData : null,
        data: null,
        country: null,       
        error: false,
    };

   

    handleDataLoad = () => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => this.setState({data}))
        //.then(mainData => this.setState({data}))
        .catch(err => console.log(err))

        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(mainData => this.setState({mainData}))
        .catch(err => console.log(err))
    }

 
    handleDataLoadRegion = ({region}) => {
        fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        .then(response => response.json())
        .then(data => this.setState({data}))
        .catch(err => console.log(err))
    }

    componentDidMount(){
        this.handleDataLoad();  
    }

    changeDarkModeOn = () => {
        this.setState({
            darkmode: true,
        })
    }

    changeDarkModeOff = () => {
       this.setState({
            darkmode: false,
        })
    }

    clearfilters = () => {
        this.setState({
            inputRegionSelect: null,
        })
        this.setState({
            inputNameSelect: null,
        })
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => this.setState({data}))
        .catch(err => console.log(err))
    }

    changeinputRegionSelect = (region) => {
        
        this.setState({
            inputRegionSelect: region,
        })
        this.setState({
            inputNameSelect: null,
        })

                
        fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        .then(response => response.json())
        .then(data => this.setState({data}))
        .catch(err => console.log(err))
        
    }


    changeinputNameSelect = (name) => {


        this.setState({
            inputRegionSelect: null,
        })

        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            .then(response => response.json())
            .then(res => {
                if (res.status===404) {
                    this.setState({
                        error: true,
                    })     
                }
                else {
                    this.setState({
                    data: res,
                    error: false,
                })}
            })
            
            .catch(err => console.log(err))
            
            this.setState({
                inputNameSelect: name,
            })
    }

    handleCountrychange= (country) =>{
        this.setState({
            country: country,
        })
    }

    handleCountrychangeCode = (code) => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
        .then(response => response.json())
        .then(country => this.setState({country}))
        .catch(err => console.log(err))
    }
  
    funcionlog = (name) => {
        console.log("url name = "+ name);

    }
   
    render () {
    
        
        const {darkmode} = this.state;
        
        let listOfRutes  =
        this.state.mainData && this.state.mainData.map(country => { 
            
        let name=(country.name.replace('(', '')).replace(')', '');

                return(
                    <Route key={country.name} path={`/${name}`} component={() => <DetailView country={country}  darkmode={this.state.darkmode} handleInicialDataLoadFn={this.handleInicialDataLoad} />}> 
                    </Route>
                )
        });
       
        return(
            <HashRouter>
                    { darkmode===true ?  
                    (<Header changeDarkModeFn={this.changeDarkModeOff} darkmode={darkmode}/>) 
                    : 
                    (<Header changeDarkModeFn={this.changeDarkModeOn} darkmode={darkmode}/>)
                    }
                    
                    <Switch>
                    <Route exact path="/" component={() => 
                        <MainView  
                        darkmode={darkmode}
                        data={this.state.data}
                        error={this.state.error}
                        inputNameSelect={this.state.inputNameSelect}
                        inputRegionSelect={this.state.inputRegionSelect}
                        changeinputRegionSelectFn= {this.changeinputRegionSelect}
                        changeinputNameSelectFn= {this.changeinputNameSelect}
                        clearfiltersFn={this.clearfilters}
                        />}
                    />
                     {listOfRutes}
                    </Switch>
                <Footer />
            </HashRouter>
        );
    }

}

export default Root;