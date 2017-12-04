import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <input type="text" onChange={this.props.handlerChange}></input>
        <button onClick={this.props.handlerClick}>Procurar CEP</button>
      </div>
    )
  }
}

export default Search;
