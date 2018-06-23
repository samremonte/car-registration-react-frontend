import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RegisterCar extends Component {

    constructor(){
    super();
        this.state = {
            newCar: []
        }
    }

    static defaultProps = {
        units:[
            'Liters',
            'Cubic centimetres',
            'Cubic inches'
        ]
    }

    handleSubmit(event){

        console.log(this.refs.unit.value);
        var dsplcmnt;

        if(this.refs.unit.value === "Liters"){
            dsplcmnt = this.refs.engine_displacement.value;
        }

        if(this.refs.unit.value === "Cubic centimetres"){
            dsplcmnt = this.refs.engine_displacement.value * 0.001;
        }

        if(this.refs.unit.value === "Cubic inches"){
            dsplcmnt = this.refs.engine_displacement.value * 0.016387;
            dsplcmnt = Math.round( dsplcmnt * 10 ) / 10;
        }

        if(this.refs.name.value === ""){
            alert('Fields are empty');
        }else{
            this.setState({ newCar:{
                name: this.refs.name.value,
                engine_displacement: dsplcmnt,
                engine_power: this.refs.engine_power.value,
                price: this.refs.price.value.toLocaleString(),
                location: this.refs.location.value
            }}, function() {
                //console.log(this.refs.engine_displacement.value);
                this.props.registerCar(this.state.newCar);
                this.refs.carRegisterForm.reset();
            });
        }
        event.preventDefault();
    }

    render() {

        let unitSize = this.props.units.map(unit => {
            return <option key={unit} value={unit}>{unit}</option>
        });

        return (
            <div className="RegisterCar col-md-5 col-sm-5 col-xs-12">
                <div className="formHeader">
                    <h2>Register Car</h2>
                </div>
                <form onSubmit={this.handleSubmit.bind(this)} ref="carRegisterForm">
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-addon">
                                <i className="fas fa-car"></i>
                            </div>
                            <input className="form-control" type="text" ref="name" placeholder="Car Name" />
                        </div>
                    </div>

                    <div className="form-group disabled-field">
                    <select className="unitSelect" ref="unit">
                        {unitSize}
                    </select>
                        <div className="input-group">
                            <div className="input-group-addon">
                                <i className="fas fa-clipboard-list"></i>
                            </div>
                            <input className="form-control engine-displacement" type="number" ref="engine_displacement" placeholder="Engine Displacement" lang="en" />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-addon">
                                <i className="fas fa-bolt"></i>
                            </div>
                            <input className="form-control" type="text" ref="engine_power" placeholder="Engine Power" />

                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-addon">
                                <i className="fas fa-dollar-sign"></i>
                            </div>
                            <input className="form-control" type="number" ref="price" placeholder="Price" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-addon">
                                <i className="fas fa-location-arrow"></i>
                            </div>
                            <input className="form-control" type="text" ref="location" placeholder="Location" />
                        </div>
                    </div>
                    <input type="submit" className="btn btn-secondary btn-block" value="Add Car" />
                </form>
            </div>
        );
    }
}

RegisterCar.propTypes = {
    registerCar: PropTypes.func.isRequired
}

export default RegisterCar;
