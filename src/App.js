import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Registerparcela from "./components/register-parcela.component";
import ParcelaList from "./components/parcela-list.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/register-parcela"} className="nav-link">
                Coffee Track
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/register-parcela"} className="nav-link">
                  Registro de parcela
                </Link>
              </Nav>

              <Nav>
                <Link to={"/parcela-list"} className="nav-link">
                  Listado de parcelas
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={Registerparcela} />
                <Route path="/register-parcela" component={Registerparcela} />
                <Route path="/parcela-list" component={parcelaList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;