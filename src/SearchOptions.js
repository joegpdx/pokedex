import React, { Component } from "react";
import "./SearchOptions.css";

export default class SearchOptions extends Component {
    state = {
        searchName: ''
    }
    handleForm = event => {
        if(!this.state.searchName){
            event.preventDefault();
            return;
        }
        event.preventDefault();
        const queryParam = new URLSearchParams();
        queryParam.set('pokemon', this.state.searchName);
        queryParam.set('page', 1)
        window.location.hash = queryParam.toString();
        console.log(queryParam)
    }
    render() {
        return(
            <div id="search">
                <form onSubmit={this.handleForm}>
                <input 
                onChange={e => this.setState({ searchName: e.target.value})} 
                value={this.state.searchName}/>
                <button>Search</button>
                </form>
            </div>
        );
    }
}