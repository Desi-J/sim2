import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';


class Wizard extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addHouse = this.addHouse.bind(this);
    }

    handleChange(e) {
        console.log('title', e.target.title);
        console.log('value', e.target.value);
        this.setState({ [e.target.title]: e.target.value }); 
       }

    addHouse(id) {
        const {name,address,city,state,zipcode} = this.state
        const addedHouse = {
            name: name,
            address: address,
            city: city,
            state: state,
            zipcode:zipcode
        }
        Axios.post(`/api/inventory`, addedHouse).then((response) => {
            this.setState({houseList: response.data})
        }).catch(error => {
            console.log('update error frontend:', error)
        })

    }
    render() {
    return(
        <div className="wizard-component">
        Wizard
        <Link to={'/'/*Link to DAshboard */}><button>Cancel</button></Link>

        <input title="name"  onChange={this.handleChange}/>
        <input title="address" onChange={this.handleChange}/>
        <input title="city" onChange={this.handleChange}/>
        <input title="state" onChange={this.handleChange}/>
        <input title="zipcode" onChange={this.handleChange}/>
        <button onClick={this.addHouse}>Complete</button>
        </div>
    )
    }
}

export default Wizard