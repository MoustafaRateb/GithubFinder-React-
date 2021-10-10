import axios from 'axios';
import React, {Component} from 'react';
import './App.css';
import Alert from './components/layout/Alert';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Users from './components/users/Users';

class App extends Component {

  state = {
    users: [],
    loading: false,
    alert:null
  }
  // async componentDidMount(){
  //   this.setState({loading : true});
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  //   client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({users : res.data});
  //   this.setState({loading : false});
    
  // }
     searchUsers = async text =>{
      this.setState({loading : true});
      const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
      this.setState({users : res.data.items});
      this.setState({loading : false});
    };

    clearUsers = () => this.setState({users:[],loading:false});
    
    showAlert = (msg,type) => {
      this.setState({alert:{msg,type}});
      setTimeout(()=>{this.setState({alert:null})},5000);
    }
    render(){
      return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search 
          searchUsers = {this.searchUsers} 
          clearUsers={this.clearUsers} 
          showClear = {this.state.users.length>0} 
          showAlert={this.showAlert}/>
          <Users loading={this.state.loading} users= {this.state.users}/>
        </div>
      </div>
    );
  }
  
}

export default App;
