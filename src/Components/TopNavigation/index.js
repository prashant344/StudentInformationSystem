import React, {Component} from 'react';
import './style.css';

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

    componentDidMount(){
        const studentInfo = this.props.students;
        var students = [];
        for(var keyname in studentInfo){
            students.push(studentInfo[keyname]);
        }
        this.setState({
            results:students
        })
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
        if (Object.keys(this.props).length > 0){
            this.props.searchResult(results);
        }
    }

    sortByName(){
        const studentInfo = this.state.results;
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
        const studentInfo = this.state.results;
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
                <a href="/"><i className="fas fa-home homeicon"></i></a>
                <input className="Search" type="text" placeholder="search" onKeyUp={this.search} />
                <button id='sortByName' className="SortButton" onClick = {this.sortByName} ><i className="fas fa-sort-alpha-down"></i></button>
                <button id='sortByMarks' className="SortButton" onClick = {this.sortByMarks}><i className="fas fa-sort-numeric-up"></i></button>
            </div>
        )
    } 
}

export default TopNavigation;