import React, { Component } from 'react';

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf:{
        name: '',
        age: '',
        height: ''
      }
      
    };
  }

  addnewSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.addSmurf(this.state.smurf)
  }

  handleInputChange = e => {
    let value = e.target.value;
    let name = e.target.name;

    this.setState(prevState => ({
      smurf:{
        ...prevState.smurf,
        [name]:value
      }
    }));
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addnewSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
