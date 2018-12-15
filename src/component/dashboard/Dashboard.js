import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Wizard from '../wizard/Wizard';
import House from '../house/House';
import axios from 'axios';


class Dashboard extends Component {
    constructor() {
        super();

        this.state ={
            houseList: [],
            loading: "https://http.cat/402"
        }
        this.getHouses = this.getHouses.bind(this);
    }

    componentDidMount() {
        this.getHouses();
    }


    getHouses() {
    axios.get('/api/houses').then((response) => {
        this.setState ({ houseList: response.data});
    }).catch(error => {
        console.log('read error frontend:', error)
    })
}

    

    
    render() {
        const {houseList,loading} = this.state
        
        const display = houseList.map(house => {
            //console.log(house)
            return(
              <div key={houseList.id}><House/> </div> 
            )
        })
    return(
        <div>
            Dashboard
            <Link to={'/wizard'}><button> Add New Property</button></Link>
            {display ? display : loading} 
        
        </div>
    )
    }
}

export default Dashboard;