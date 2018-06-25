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
    const margin = {top: 20, right: 0, bottom: 30, left: 40};
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
                <p>Marks in s1: {location.state.Marks.s1}</p>
                <p>Marks in s2: {location.state.Marks.s2}</p>
                <p>Marks in s3: {location.state.Marks.s3}</p>
                {location.state.Marks.s4!==undefined ? (<p>Marks in s4: {location.state.Marks.s4}</p>): null}
                <div style={{width: '100%'}}> 
                    <BarChart ylabel='Marks'
                    width={500}
                    height={500}
                    margin={margin}
                    data={data}
                    colorByLabel={false}/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default StudentDetails;