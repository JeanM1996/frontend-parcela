import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import LocationPicker from 'react-location-picker';


const defaultPosition = {
  lat: -4.0003167,
  lng: -79.2287213
};

export default class RegisterParcela extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: "Loja,Ecuador",
      position: {},
      defaultPosition: defaultPosition
    };

    // Bind
    this.handleLocationChange = this.handleLocationChange.bind(this);

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
  handleLocationChange ({ position, address }) {

    // Set new location
    this.setState({ position, address });
  }

  onChangeAgricultorName(e) {
    this.setState({agricultor: e.target.value})
  }

  onChangeExtension(e) {
    this.setState({extension: e.target.value})
  }

  onChangeLugar(e) {
    this.setState({lugar: this.state.address})
  }

   componentDidMount () {
    navigator && navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      this.setState({
        defaultPosition: {
          lat: latitude,
          lng: longitude
        }
      });
    });
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

        <Form.Label>Lugar</Form.Label>
        <LocationPicker
            containerElement={ <div style={ {height: '100%'} } /> }
            mapElement={ <div style={ {height: '400px'} } /> }
            defaultPosition={this.state.defaultPosition}
            radius={-1}
            onChange={this.handleLocationChange}
          />

        <Form.Group controlId="Name">
          <Form.Control type="text" value={this.state.lugar} onChange={this.onChangeLugar}/>
        </Form.Group>



        <Button variant="danger" size="lg" block="block" type="submit">
          Registrar Parcela
        </Button>
      </Form>
    </div>);
  }
}