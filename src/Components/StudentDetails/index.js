import React, { Component } from 'react';
import BarChart from 'react-bar-chart';
import TopNavigation from '../TopNavigation';
import { ClipLoader } from 'react-spinners';
import './style.css';
import avatarImg from '../../icons/avatar.png';

class StudentDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            isloading:true,
            iserror:false,
            Marks:[],
            Name:'',
            Class:'',
            RollNo:''
        }
    }
    setData(){
        const data=[];
        const marks=this.props.location.state.Marks;
        for(var key in marks){
            data.push({text:key,value:marks[key]})
        }
        this.setState({
            Marks:data,
            Name:this.props.location.state.Name,
            Class:this.props.location.state.Class,
            RollNo:this.props.location.state.RollNo,
            isloading:false
        })
    }

    getData(){
        var id = window.location.href.split('?')[1].split('=')[1];
        const data=[];
        fetch('https://api.myjson.com/bins/1dlper').then(
            (data)=>{return data.json()}).then(
            (res)=>{
                    const marks=res[id].marks;
                    for(var key in marks){
                        data.push({text:key,value:marks[key]})
                    }
                    this.setState({
                        Name:res[id].name,
                        Class:res[id].class,
                        RollNo:res[id].rollNo,
                        Marks:data,
                        isloading:false
                    })
                }
            ).catch((err)=>this.setState({iserror:true}));
    }

    componentDidMount(){
        this.props.location.state ? this.setData(): this.getData();
    }

    render(){
        const margin = {top: 20, right: 20, bottom: 30, left: 20};
        if(this.state.iserror){
            return(
                <div>
                    <TopNavigation />
                    <div className="container">OOPS... Something Went Wrong..</div>
                </div>
            )
        }
        return(
            this.state.isloading ? (
                <div><TopNavigation />
                    <div className='loader'>
                        <ClipLoader
                            color={'#123abc'}
                            loading={this.state.loading} 
                        />
                    </div>
                </div>
                ):( 
            <div>
                <TopNavigation />
                <div className="container">
                <div className="TileImage">
                    <img alt="tile-pic" className="Image" src={avatarImg} />
                </div>
                <div>
                    <p>Name: {this.state.Name}</p>
                    <p>Class: {this.state.Class}</p>
                    <p>Roll No.: {this.state.RollNo}</p>
                    {this.state.Marks.map((val)=>{return (
                        <p key={val.text}>Marks in {val.text}: {val.value}</p>
                    )})}
                    <p></p>  
                </div>
                </div>
                <div> 
                    <BarChart ylabel='Marks'
                    height= {400}
                        width={400}
                        margin={margin}
                        data={this.state.Marks}
                        colorByLabel={false}/>
                </div>
            </div>
            )
        )
    } 
}

export default StudentDetails;