import React, { Component } from 'react';
import SingleCurrency from "./SingleCurrency";

class Currency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/currency/USD')
            .then(response => response.json())
            .then(data => this.setState({contacts: data}))
    }

    render() {
        var arr = [];
        let rates = this.state.contacts["rates"];

        if(typeof rates != "undefined") {
            {Object.entries(rates).map(entry => (
                arr.push(entry)
            ))}
        }

        arr.sort(function (a, b) {
            return a[0].localeCompare(b[0]);
        });

        return (
            <div>
                <div className="row">
                    <ul>
                        {arr.map(item => (
                            <SingleCurrency key={item[0]} item={item} />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Currency;