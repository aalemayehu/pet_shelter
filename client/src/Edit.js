import React, {Component} from 'react';
import axios from 'axios';
import './Edit.css';
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"


class Edit extends Component {
    constructor (props){
        super (props);
        this.state = {
            pet:{
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
    componentDidMount () {
        let _id = this.props.match.params._id;
        axios.get(`http://localhost:8000/api/pet/${_id}`)
        .then(res =>{
             this.setState ({pet: res.data})
            })
        
        .catch(err => console.log(err));
    }
    changeName = e => {
        let pet = {...this.state.pet};
        pet.Name = e.target.value;
        this.setState({pet: pet});
      }
    changeType = e => {
        let pet = {...this.state.pet};
        pet.Type = e.target.value;
        this.setState({pet: pet});
      }
    changeDescription = e => {
        let pet = {...this.state.pet};
        pet.Description = e.target.value;
        this.setState({pet: pet});
      }
    changeSkill_1 = e => {
        let pet = {...this.state.pet};
        pet.Skill_1 = e.target.value;
        this.setState({pet: pet});
      }
    changeSkill_2 = e => {
        let pet = {...this.state.pet};
        pet.Skill_2 = e.target.value;
        this.setState({pet: pet});
      }
    changeSkill_3 = e => {
        let pet = {...this.state.pet};
        pet.Skill_3 = e.target.value;
        this.setState({pet: pet});
      }
      editPet = e => {
        e.preventDefault();
        let _id = this.props.match.params._id;
        axios.put(`http://localhost:8000/api/pet/${_id}`, this.state.pet) //this.state.show is the data being passed, 
            .then(res => {
                if(res.data.errors){
                    this.setState({errors: res.data.errors});// catch is the errors caused by the promise not being fulfilled, errors here are data related errors. 
                }else {
                 this.props.history.push("/")
                }
            })
            .catch (err => console.log(err));
    }   
    render () {
        return (
            <form className="form-group"onSubmit = {this.editPet}>
                <label htmlFor="exampleInputEmail1">Name</label><br/>
                <input 
                    type = "text" 
                    placeholder = "Name" 
                    onChange= {this.changeName} 
                    value = {this.state.pet.Name}
                />
                {
                    this.state.errors.Name ?
                    <span>{this.state.errors.Name.message}</span> :
                    ""
                }
                <br/>
                <label htmlFor="exampleInputEmail1">Type</label><br/>
                <input 
                    type = "text" 
                    placeholder = "Type" 
                    onChange= {this.changeType} 
                    value = {this.state.pet.Type}
                />
                {
                    this.state.errors.Type ?
                    <span>{this.state.errors.Type.message}</span> :
                    ""
                }
                <br/>
                <label htmlFor="exampleInputEmail1">Description</label> <br/>
                <input 
                    type = "text" 
                    placeholder = "Description" 
                    onChange= {this.changeDescription} 
                    value = {this.state.pet.Description}
                />
                {
                    this.state.errors.Description ?
                    <span>{this.state.errors.Description.message}</span> :
                    ""
                }
                <br/>
                <label htmlFor="exampleInputEmail1">Skill_1</label> <br/>
                <input 
                    type = "text" 
                    placeholder = "Skills" 
                    onChange= {this.changeSkill_1} 
                    value = {this.state.pet.Skill_1}
                />
                <br/>
                <label htmlFor="exampleInputEmail1">Skill_2</label> <br/>
                <input 
                    type = "text" 
                    placeholder = "Skills" 
                    onChange= {this.changeSkill_2} 
                    value = {this.state.pet.Skill_2}
                />
                <br/>
                <label htmlFor="exampleInputEmail1">Skill_3</label> <br/>
                <input 
                    type = "text" 
                    placeholder = "Skills" 
                    onChange= {this.changeSkill_3} 
                    value = {this.state.pet.Skill_3}
                />
                <br/>

                <br/>
                <input type = "submit" value="Edit Pet"/>
                &nbsp;&nbsp;
                <Link type = "button" to ={ "/"}>Cancel</Link>
            </form>
        );
    }
}
export default Edit;