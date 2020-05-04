import React, { Component } from 'react';

class NameAdd extends Component {

    constructor(props) {
        super(props);

        this.onNameAdd = this.onNameAdd.bind(this);
        this.onNameInputChange= this.onNameInputChange.bind(this);

            this.state={
            newName:""
            }
    }

    onNameAdd() {
        this.props.onAdd(this.state.newName);
    }

    onNameInputChange (event){
        this.setState({
            newName: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onNameInputChange}
                    value={this.state.newName} />
                <button id="btn-add-Kontakt" onClick={this.onNameAdd} className="btn btn-secondary"
                        >Kontakt hinzufügen</button>
            </div>
        )
    }
}

export default NameAdd;