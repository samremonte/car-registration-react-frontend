import React, { Component } from 'react';
import Cars from './Components/Cars';
import RegisterCar from './Components/RegisterCar';

import './App.css';

class App extends Component {
    constructor(){
    super();
        this.state = {
            cars: []
        }
    }

    getAllTheGirls(){
        fetch('http://localhost:8000/api/cars')
        .then(response => response.json())
        .then(data => this.setState({cars: data}));
    }

    componentWillMount(){
        this.getAllTheGirls();
    }

    componentDidMount(){
        this.getAllTheGirls();
    }

    handleNewCar(newcar){

        fetch('http://localhost:8000/api/car', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
              },
            body: serialize(newcar)
        }).then((response) => {
            //console.log(response)
            let cars = this.state.cars;
            cars.push(newcar);
            this.setState({cars: cars});
        });

        function serialize(obj) {
        let str = [];
            for(let p in obj)
                if (obj.hasOwnProperty(p)) {
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
            return str.join("&");
        }

    }

    render() {
        return (
            <div className="App">
                <Cars cars={this.state.cars} />
                <RegisterCar registerCar={this.handleNewCar.bind(this)}/>
            </div>
        );
    }
}

export default App;
