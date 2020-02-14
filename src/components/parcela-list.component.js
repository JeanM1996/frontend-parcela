import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ParcelaTableRow from './ParcelaTableRow';

export default class ParcelaList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      parcelas: []
    };
  }

  componentDidMount() {
    axios.get('https://microservice-parcela.herokuapp.com/parcelas/')
      .then(res => {
        this.setState({
          parcelas: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.parcelas.map((res, i) => {
      return <ParcelaTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Agricultor</th>
            <th>Extension</th>
            <th>Lugar</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}