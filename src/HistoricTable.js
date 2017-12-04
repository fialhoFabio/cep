import React, {Component} from 'react';
import './HistoricTable.css';

class HistoricTable extends Component {
  constructor(props){
    super(props);
    this.items = [];
  }

  componentWillUpdate(nextProps) {
    this.items = [];
    nextProps.historic.forEach((data) => {
      this.items.push(
        <tr key={data.cep}>
          <td>{data.cep}</td>
          <td>{data.logradouro}</td>
        </tr>
      )
    })
  }

  render(){
    return (
      <table>
        <tbody>
          {this.items}
        </tbody>
      </table>
    )
  }
}

export default HistoricTable;
