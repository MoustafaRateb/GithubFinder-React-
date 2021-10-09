import axios from 'axios';
import React, {Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Users from './components/users/Users';
import parse from 'parse-link-header'

class App extends Component {

  state = {
    nextUrl :'',
    prevUrl :'',
    users: [],
    loading: false
  }
  async componentDidMount(){
    this.setState({loading : true});
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    let linkData = parse(res.headers.link);
    this.setState({nextUrl:linkData['next']?linkData['next'].url:'',
    prevUrl:linkData['prev']?linkData['prev']:''});
    this.setState({users : res.data});
    this.setState({loading : false});
  }
  
    searchUsers =async text =>{
      if (text !== ''){

        this.setState({loading : true});
        const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}&q=${text}`);
        this.setState({users : res.data.items});
        this.setState({loading : false});
      }
    }

    nextPage =async () =>{
      
      console.log(this.state.nextUrl);
      if (this.state.nextUrl !== ''){

        this.setState({loading : true});
        const err = await axios.get('https://httpbin.org/status/404').
  catch(err => err);
          console.log(err);
          const resPromise =  axios.get(this.state.nextUrl).catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
          // const res = await resPromise;
          // console.log(res);
          // this.setState({users : res.data});
          // this.setState({loading : false});
        
        
      }
    }
    render(){
      return (
      <div className="App">
        <Navbar nextPage = {this.nextPage}/>
        <div className="container">
          <Search searchUsers = {this.searchUsers} />
          <Users loading={this.state.loading} users= {this.state.users}/>
        </div>
      </div>
    );
  }
  
}

export default App;
