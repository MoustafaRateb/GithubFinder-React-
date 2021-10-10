import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class Search extends Component {
    state = {
        text : ''
    }

    static propTypes = {
        searchUsers : PropTypes.func.isRequired,
        clearUsers  : PropTypes.func.isRequired,
        showClear   : PropTypes.bool.isRequired,
        showAlert   : PropTypes.func.isRequired,
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});
    
    onSubmit = e => {
        e.preventDefault();

        if(this.state.text === ''){
            this.props.showAlert('Please write something in the search box','light')
        }else{
            this.props.searchUsers(this.state.text);
            this.setState({text:''})
        }
        
    };

    clearUsers = e => {
        e.preventDefault();
        this.props.clearUsers();
        this.setState({text:''})
    };

    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmit} className="form">
                    <input 
                        type= "text" 
                        name= "text" 
                        placeholder= "Search users ..."
                        value= {this.state.text}
                        onChange = {this.onChange}
                    />
                    <input type="submit" value="search" className="btn btn-primary btn-block"/>
                </form>
                {
                    this.props.showClear &&
                    (<button className="btn btn-secondary btn-block" onClick={this.clearUsers}>Clear</button>)
                }
            </div>
        )
    };

}

export default Search
