import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class RegisterParcela extends Component {
  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeAgricultorName = this.onChangeAgricultorName.bind(this);
    this.onChangeExtension= this.onChangeExtension.bind(this);
    this.onChangeLugar = this.onChangeLugar.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      agricultor: '',
      extension: '',
      lugar: ''
    }
  }

  onChangeAgricultorName(e) {
    this.setState({agricultor: e.target.value})
  }

  onChangeExtension(e) {
    this.setState({extension: e.target.value})
  }

  onChangeLugar(e) {
    this.setState({lugar: e.target.value})
  }

 

  onSubmit(e) {
    e.preventDefault()

    const parcelaObject = {
      agricultor: this.state.agricultor,
      extension: this.state.extension,
      lugar: this.state.lugar
    };
    axios.post('https://microservice-parcela.herokuapp.com/parcelas/register-parcela', parcelaObject)
      .then(res => console.log(res.data));

    this.setState({ agricultor: '', extension: '', lugar: '' })
  }
  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Agricultor</Form.Label>
          <Form.Control type="text" value={this.state.agricultor} onChange={this.onChangeAgricultorName}/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Extension</Form.Label>
          <Form.Control type="text" value={this.state.extension} onChange={this.onChangeExtension}/>
        </Form.Group>


        
        <Form.Group controlId="Name">
          <Form.Label>Lugar</Form.Label>
          <Form.Control type="date" value={this.state.lugar} onChange={this.onChangeLugar}/>
        </Form.Group>



        <Button variant="danger" size="lg" block="block" type="submit">
          Registrar Parcela
        </Button>
      </Form>
    </div>);
  }
}