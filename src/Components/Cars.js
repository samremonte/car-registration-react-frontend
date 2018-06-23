import React, { Component } from 'react';
import CarList from './CarList';
import PropTypes from 'prop-types';

class Cars extends Component {
    render() {
        return (
            <div className="Cars col-md-7 col-sm-7 col-xs-12">
                <div className="carListContainer">
                { this.props.cars.reverse().map((carinfo) => {
                    return <CarList key={carinfo.name} car={carinfo} />
                }) }
                </div>
            </div>
        );
    }
}

Cars.propTypes = {
    cars: PropTypes.array.isRequired,
}

export default Cars;
