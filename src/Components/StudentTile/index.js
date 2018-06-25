import React, {Component} from 'react';
import './style.css';
import { Redirect } from 'react-router-dom';
import avatarImg from '../../icons/avatar.png';

class StudentTile extends Component{
    constructor(props){
        super(props);
        this.state={
            redirect:false
        }
    }
    calculateTotalMarks = () =>{
        var totalMarks=0;
        for(var key in this.props.Marks){
            totalMarks+=this.props.Marks[key]
        }
        return totalMarks
    }  

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

      renderRedirect = () => {
        if (this.state.redirect) {
          return (
            <Redirect to={{
                pathname: '/StudentDetails',
                search: "?id="+this.props.Rollno,
                state: { Name: this.props.Name , Class:this.props.Class, RollNo:this.props.Rollno, Marks:this.props.Marks}
            }} />
          )
        }
      }

    render(){
        return(
        <div>
            {this.renderRedirect()}
            <div className="StudentTile" onClick={this.setRedirect}>
                <div className="TileImage">
                    <img alt="tile-pic" className="Image" src={avatarImg} />
                </div>
                <p className="Tile-info">Id: {this.props.Rollno}</p>
                <p className="Tile-info">Name: {this.props.Name}</p>
                <p className="Tile-info">Total marks: {this.calculateTotalMarks()}</p>
            </div>
            </div>
        )   
    }  
}

export default StudentTile;