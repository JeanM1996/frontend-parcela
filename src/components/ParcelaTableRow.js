import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);
    }


    

    render() {
        return (
            <tr>
                <td>{this.props.obj.agricultor}</td>
                <td>{this.props.obj.parcela}</td>
                <td>{this.props.obj.fecha}</td>
		<td>{this.props.obj.especie}</td>

            </tr>
        );
    }
}