import React from 'react';
import BarChart from 'react-bar-chart';
import TopNavigation from '../TopNavigation';
import './style.css';
import avatarImg from '../../icons/avatar.png';

const StudentDetails = ({location}) => {
    var data=[];
    const marks=location.state.Marks;
    for(var key in marks){
        data.push({text:key,value:marks[key]})
    }
    const margin = {top: 20, right: 20, bottom: 30, left: 20};
    return(
        <div>
            <TopNavigation />
            <div className="container">
            <div className="TileImage">
                <img alt="tile-pic" className="Image" src={avatarImg} />
            </div>
            <div>
                <p>Name: {location.state.Name}</p>
                <p>Class: {location.state.Class}</p>
                <p>Roll No.: {location.state.RollNo}</p>
                {data.map((val)=>{return (
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
                    data={data}
                    colorByLabel={false}/>
            </div>
        </div>
    )
}

export default StudentDetails;