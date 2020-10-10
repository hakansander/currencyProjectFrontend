import React from 'react';

const SingleCurrency = ({item}) => (
    <div className="row">
        <div className="col s12 m6">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{item.date}</span>
                </div>
                <div className="card-action">
                    <p>{item.email}</p>
                </div>
            </div>
        </div>
    </div>
);

export default SingleCurrency;