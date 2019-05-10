import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route , NavLink} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => this.setState({ smurfs: res.data }))
      .catch(error => console.log(error));
  }

  // onChange = e =>{
  //   let value = e.target.value;
  //   let name = e.target.name;
  //   this.setState({newSmurf: {
  //     ...this.state.newSmurf,
  //     [name]:value
  //   }})
  // }

  addSmurf = item => {
    axios
      .post('http://localhost:3333/smurfs', item)
      .then(res => { this.setState({ smurfs: res.data }) })
      .catch(err => console.log(err));
  };

  deleteSmurf = id =>{
    axios 
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res =>{
        this.setState({smurfs:res.data})
      })
      .catch(err => console.log(err));
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav>
          <h1>Smurfs</h1>
          <div className = 'links'>
            <NavLink exact to ='/'>
              Smurfs
            </NavLink>
            <NavLink to= 'smurf-form'>
              Add New
            </NavLink>
          </div>
        </nav>
        {/* <SmurfForm addSmurf={this.addSmurf} /> */}
        <Route
          exact path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              addSmurf = {this.addSmurf}
            />
          )}
        />
        <Route
          exact path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf = {this.deleteSmurf}
            />
          )}
        />
        
      </div>
    );
  }
}

export default App;
