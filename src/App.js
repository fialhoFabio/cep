import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import HistoricTable from './HistoricTable'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Search: "",
      Historic: [],
    }
  }

  shouldComponentUpdate(nextState) {
    return !(JSON.stringify(nextState.Historic) === JSON.stringify(this.state.Historic));
  }

  handlerChange = (e) => {
    this.setState({
      Search: e.target.value,
    });
  }

  handlerClick = (e) => {
    fetch('https://viacep.com.br/ws/' + this.state.Search + '/json/')
	  .then((response) => response.json())
    .then((responseJson) => {this.saveHistoric(responseJson)})
  }

  saveHistoric = (resJson) => {
    let exists = this.state.Historic.filter((data) => data.cep === resJson.cep);
    if(!exists[0] && !resJson.erro){
      this.setState({
        Historic: [
          ...this.state.Historic,
          resJson,
        ]
      })
    }
  }

  // ordinateHistoric = (by = "cep", asc = true) => {
  //   let temp = this.state.Historic;
  //   temp.sort((a, b) => {
  //     if(by === "cep") asc? a.cep > b.cep : a.cep < b.cep;
  //   });
  // }

  render() {
    return (
      <div>
        <Search handlerChange={this.handlerChange} handlerClick={this.handlerClick}/>
        <HistoricTable historic={this.state.Historic}/>
      </div>
    );
  }
}

export default App;
