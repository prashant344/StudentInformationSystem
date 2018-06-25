import React from 'react';
import StudentTile from '../StudentTile'
import './style.css';


const StudentTileList = ({students}) => {
    if(students === undefined || students === 'undefined'){
        return (<div></div>);
    }
    
    else{
        var value=[];
        for(var key in students)
        {
            value.push(students[key])
        }
        return(
                <div id='StudentTileList' className='StudentTileList'>
                    <ul className='TileList'>
                    {
                        value.map((val,index)=>{
                            return (
                                <li className="TileInfo" key={index}>
                                    <StudentTile Name={val.name} Rollno={val.rollNo} Class={val.class} Marks={val.marks} />
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            )
    }   
}

export default StudentTileList;