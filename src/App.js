import React from 'react';
 
class App extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      data: null,
    };

   
  }
  
  componentDidMount() {
      
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(data => this.setState({ data }));
      
  }
  
 

}
 
export default App;