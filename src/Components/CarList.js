import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CarList extends Component {

    render() {

        return(
            <ul className="CarInfo col-md-4 col-sm-6 col-xs-12">
                <li>
                    <strong className="carName">
                        {this.props.car.name}
                    </strong>
                </li>
                <li>
                <img className="specs-icon" alt={this.props.car.engine_displacement} src={require('../images/engine-displacement.png')} />
                    <span>{this.props.car.engine_displacement} Ltrs</span>
                </li>
                <li>
                <img className="specs-icon" alt={this.props.car.engine_power} src={require('../images/engine-power.png')} />
                    <span>{this.props.car.engine_power}</span>
                </li>
                <li>
                <img className="specs-icon" alt={this.props.car.price} src={require('../images/price.png')} />
                    <span>{this.props.car.price}</span>
                </li>
                <li>
                <img className="specs-icon" alt={this.props.car.location} src={require('../images/location.png')} />
                    <span>{this.props.car.location}</span>
                </li>
            </ul>
        );

    }
}

CarList.propTypes = {
    car: PropTypes.object.isRequired
}
export default CarList;
