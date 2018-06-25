import React, { Component } from 'react';
import { ClipLoader } from 'react-spinners';
import StudentTileList from '../StudentTileList';
import TopNavigation from '../TopNavigation';
import './style.css';

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            isloading:true,
            Info:{},
            searchedResults:{}
        }
    }

    componentDidMount(){
        fetch('https://api.myjson.com/bins/1dlper').then(
            (data)=>{return data.json()}).then(
            (res)=>{
                this.setState({
                    isloading:false,
                    Info: res,
                    searchedResults:res
                })
            }
        ) 
    }

    populateSearchResult = (result) => {
        this.setState({
            searchedResults:result
        })
    }

    render(){
        return(
            this.state.isloading ? (<div><TopNavigation /><div className='loader'><ClipLoader
            color={'#123abc'}
            loading={this.state.loading} 
            /></div></div>) : (
        <div>
            <TopNavigation students={this.state.Info} searchResult={this.populateSearchResult} />
            <StudentTileList students={this.state.searchedResults} />
        </div>
        ) )
    }
}

export default Dashboard;
