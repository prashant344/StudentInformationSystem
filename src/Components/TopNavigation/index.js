import React, {Component} from 'react';
import './style.css';
import homeicon from '../../icons/home-icon.png';
import sortingIconAZ from '../../icons/sorting-icon-a-z.jpg';
import sortingIconMarks from '../../icons/sorting-icon-marks.jpg';

class TopNavigation extends Component{
    constructor(props){
        super(props);
        this.state = {
            results:[],
            sortedAscendingByName:false,
            sortedAscendingByMarks:false
        }
        this.search = this.search.bind(this);
        this.sortByName = this.sortByName.bind(this);
        this.sortByMarks = this.sortByMarks.bind(this);
    }

    search(event){
        const studentInfo = this.props.students;
        var results = [];
        var searchedKey = event.target.value.toLowerCase();
        
        for(var key in studentInfo){
            if(studentInfo[key].name.toLowerCase().startsWith(searchedKey)){
                results.push(studentInfo[key]);
            }
        }

        this.setState({
            results:results
        })
        if(results.length > 0){
            this.props.searchResult(results);
        }
        
    }

    sortByName(){
        const studentInfo = this.props.students;
        var results = {};
        var students = [];
        for(var keyname in studentInfo){
            students.push(studentInfo[keyname]);
        }
        students.sort((a, b)=> {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            if(this.state.sortedAscendingByName){
                return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
            }
            else{
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            }
        });

        for (var i = 0; i < students.length; ++i)
         {
            results[i] = students[i];
         } 

        this.setState({
            results:results,
            sortedAscendingByName:!this.state.sortedAscendingByName
        })
        if(Object.keys(results).length > 0){
            this.props.searchResult(results);
        }
    }

    sortByMarks(){
        const studentInfo = this.props.students;
        var results = {};
        var students = [];
        for(var keyname in studentInfo){
            students.push(studentInfo[keyname]);
        }
        students.sort((a, b)=> {
             a.totalMarks=0;
             b.totalMarks=0;
            for(var key in a.marks){
                a.totalMarks+=a.marks[key]
            }
            for(var index in b.marks){
                b.totalMarks+=b.marks[index]
            }
            var marksA = a.totalMarks;
            var marksB = b.totalMarks;
            if(this.state.sortedAscendingByMarks){
                return (marksA > marksB) ? -1 : (marksA < marksB) ? 1 : 0;
            }
            else{
                return (marksA < marksB) ? -1 : (marksA > marksB) ? 1 : 0;
            }
        });

        for (var i = 0; i < students.length; ++i)
         {
            results[i] = students[i];
         } 

        this.setState({
            results:results,
            sortedAscendingByMarks:!this.state.sortedAscendingByMarks
        })
        if(Object.keys(results).length > 0){
            this.props.searchResult(results);
        }
    }

    render(){
        return (
            <div className="Top-nav">
                <a href="/"><img className="Dashboardicon" alt="dashboard" src= {homeicon} /></a>
                <input className="Search" type="text" placeholder="search" onKeyUp={this.search} />
                <button id='sortByName' className="SortButton" onClick = {this.sortByName} ><img className="btnIcon"src={sortingIconAZ} alt="sort by name"/></button>
                <button id='sortByMarks' className="SortButton" onClick = {this.sortByMarks}><img className="btnIcon"src={sortingIconMarks} alt="sort by marks" /></button>
            </div>
        )
    } 
}

export default TopNavigation;