import React, { Component } from 'react';
import SingleCurrency from "./SingleCurrency";

class Currency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/currency/TRY')
            .then(response => response.json())
            .then(data => this.setState({contacts: data}))
    }

    render() {
        console.log(this.state.contacts)
        return (
            <div>
                <div className="row">
                    { this.state.contacts.map((item) => (
                        <SingleCurrency key={item.id} item={item} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Currency;