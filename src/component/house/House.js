import React, {Component} from 'react';
import axios from 'axios'


function deleteHouse(id){
    axios.delete(`/api/houses/${id}`).then((response) => {
            this.setState({itemList: response.data})
  }).catch(error => {
    console.log('delete error frontend:', error)
  })
}

function House(props) {
    return <div>
         House
    <button onClick={deleteHouse} >Delete</button>
    </div>
}

export default House;