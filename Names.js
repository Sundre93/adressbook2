import React, {Component} from 'react';
import './App.css';
import './bootstrap-anpassungen4.css';
import ListGroup from 'react-bootstrap/ListGroup';
import {NameFill} from './actions/index';

class Names extends Component {
    render() {
    return(

        <ListGroup className="NamesList" variant="flush">
            {this.props.names.map(function(name) {
                return(
                    <ListGroup.Item key={name.id}> {name.title} <input onClick={NameFill} type="button" id="btn-kontakt"
                                                                       value="Kontakt anzeigen"/>
                    </ListGroup.Item>
                )
            })}
        </ListGroup>

    )
    }
}

export default Names;