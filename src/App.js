import axios from 'axios';
import React, {Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Users from './components/users/Users';

class App extends Component {

  state = {
    users: [],
    loading: false
  }
  async componentDidMount(){
    this.setState({loading : true});
    const res = await axios.get('https://api.github.com/users');
    this.setState({users : res.data});
    this.setState({loading : false});
    
  }
    searchUsers =async text =>{
      this.setState({loading : true});
      const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
      this.setState({users : res.data.items});
      this.setState({loading : false});
    }
    render(){
      return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers = {this.searchUsers} />
          <Users loading={this.state.loading} users= {this.state.users}/>
        </div>
      </div>
    );
  }
  
}

export default App;
