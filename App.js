import React, { Component} from 'react';
import './App.css';
import './bootstrap-anpassungen4.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Names from './Names';
import NameAdd from "./NameAdd";
import Form from 'react-bootstrap/Form';


class App extends Component {

    constructor(props) {
        super(props);

        this.state={
        names: [
            {id:1, title:"Peter Müller"},
            {id:2, title:"Lischen Müller"},
            {id:3,title:"Emma Sommer"},
            {id:4,title:"Franz Winter"}
        ]
        }

this.addName= this.addName.bind(this);
    }

    addName(title){
        let names= this.state.names;
        let maxId=0;
        for(let name of names){
            if(name.id > maxId){
                maxId=name.id;
            }
        }

        names.push({id: (maxId+1), title: title});
        this.setState({
            names:names
        })
    }


    render() {
        return (
            <Container>
                <header id="header-banner"><p> adressbook </p></header>

                <div>
                    <Row>
                        <Col>
                            <Names names={this.state.names}/>
                            <NameAdd onAdd={this.addName}/>
                        </Col>
                        <Col>

                            <Form>
                                <Form.Row>
                                    <Form.Group>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control id="kontakt-form-firstname" type="text" placeholder="First Name"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control id="kontakt-form-lastname" type="text" placeholder="Last Name"/>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control id="kontakt-form-email" placeholder="E-Mail"/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control id="kontakt-form-address" placeholder="XY Street 2"/>
                                </Form.Group>

                                <Form.Row>
                                    <Form.Group>
                                        <Form.Label>City</Form.Label>
                                        <Form.Control id="kontakt-form-stadt"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control id="kontakt-form-plz"/>
                                    </Form.Group>
                                </Form.Row>


                                <Button id="btn-submit" variant="secondary" type="submit">
                                    Änderungen speichern
                                </Button>
                            </Form>

                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}


export default App;

