import React, { Component } from 'react';
import axios from 'axios';
import {Link,BrowserRouter} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css"

class OnePet extends Component {
    constructor (props){
        super (props);
        this.state = {
            pet: {},
            errors:{}
        }
    }

    componentDidMount(){
        let _id = this.props.match.params._id;
        axios.get(`http://localhost:8000/api/pet/${_id}`)
            .then (res => {this.setState ({pet:res.data})})
            .catch(err => console.log(err));
    }
    delete = (_id,e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/pet/${_id}`)
            .then(res => this.props.history.push("/"))
            .catch(err => console.log(err));
        }
    render (){
        return (
            <> 
            <div className="container-fluid">
                <Link type = "button" to ={ "/"}>Home</Link>
                <h3 className="display-4">Details about {this.state.pet.Name} </h3>
                <p className="lead">Description: {this.state.pet.Description}</p>
                <p className="lead">Pet type: {this.state.pet.Type}</p>
                Skills:<ul className="lead">
                    <ul>{this.state.pet.Skill_1} </ul>
                    <ul>{this.state.pet.Skill_2}</ul>
                    <ul>{this.state.pet.Skill_3}</ul>
                </ul>
                <p className="lead">Likes:{this.state.count} </p>
                <a href = "/" onClick = {this.delete.bind(this, this.state.pet._id)}>
                    <button>Adopt this pet</button>
                </a>
                &nbsp;&nbsp;
            </div>
            </>
        );
    }
}
export default OnePet;