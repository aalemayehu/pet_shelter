import React, {Component} from 'react';
import axios from 'axios';
import './NewPet.css';
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"


class NewPet extends Component {
    constructor (props){
        super(props);
        this.state = {
            pets:[],
            newPet:{
                Name:"",
                Type:"",
                Description:"",
                Skill_1:"",
                Skill_2:"",
                Skill_3:""
            },
            errors: {
                Name:"",
                Type:"",
                Description:"",
                Skill_1:"",
                Skill_2:"",
                Skill_3:""
            }
        }
    }
    addPet = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pet", this.state.newPet)
            .then(res => {
                if (res.data.errors){
                    this.setState({errors: res.data.errors});
                } else {
                    this.props.history.push("/");//Sends back to the rootroute after a successful form submission or(successful axios promise)
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
    changeName = e => {
        let newPet = {...this.state.newPet};
        newPet.Name = e.target.value;
        this.setState({newPet: newPet});
      }
    changeType = e => {
        let newPet = {...this.state.newPet};
        newPet.Type = e.target.value;
        this.setState({newPet: newPet});
      }
    changeDescription = e => {
        let newPet = {...this.state.newPet};
        newPet.Description = e.target.value;
        this.setState({newPet: newPet});
      }
    changeSkill_1 = e => {
        let newPet = {...this.state.newPet};
        newPet.Skill_1 = e.target.value;
        this.setState({newPet: newPet});
      }
    changeSkill_2 = e => {
        let newPet = {...this.state.newPet};
        newPet.Skill_2 = e.target.value;
        this.setState({newPet: newPet});
      }
    changeSkill_3 = e => {
        let newPet = {...this.state.newPet};
        newPet.Skill_3 = e.target.value;
        this.setState({newPet: newPet});
      }
    render () {
        return(
            <div>
            <h3>Know of a pet needing a home?</h3>
            <form onSubmit = {this.addPet}>
                <input 
                    type = "text" 
                    placeholder = "Name" 
                    onChange= {this.changeName} 
                    value = {this.state.newPet.Name}
                />
                {
                    this.state.errors.Name ?
                    <span>{this.state.errors.Name.message}</span> :
                    ""
                }
                <br/>
                <input 
                    type = "text" 
                    placeholder = "Type" 
                    onChange= {this.changeType} 
                    value = {this.state.newPet.Type}
                />
                {
                    this.state.errors.Type ?
                    <span>{this.state.errors.Type.message}</span> :
                    ""
                }
                <br/>
                <input 
                    type = "text" 
                    placeholder = "Description" 
                    onChange= {this.changeDescription} 
                    value = {this.state.newPet.Description}
                />
                {
                    this.state.errors.Description ?
                    <span>{this.state.errors.Description.message}</span> :
                    ""
                }
                <br/>
                <input 
                    type = "text" 
                    placeholder = "Skills" 
                    onChange= {this.changeSkill_1} 
                    value = {this.state.newPet.Skill_1}
                />
                <br/>
                <input 
                    type = "text" 
                    placeholder = "Skills" 
                    onChange= {this.changeSkill_2} 
                    value = {this.state.newPet.Skill_2}
                />
                <br/>
                <input 
                    type = "text" 
                    placeholder = "Skills" 
                    onChange= {this.changeSkill_3} 
                    value = {this.state.newPet.Skill_3}
                />
                <br/>

                <br/>
                <input type = "submit" value="Add Pet"/>
                &nbsp;&nbsp;
                <Link type = "button" to ={ "/"}>Cancel</Link>
            </form>
            </div>
        );
    }
}
export default NewPet;