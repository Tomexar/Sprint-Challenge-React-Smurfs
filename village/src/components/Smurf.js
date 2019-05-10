import React from 'react';

class Smurf extends React.Component {

  handleDelete = id =>{
    this.props.delete(id);
  }
  render() {
  return (
    <div className="Smurf">
      <h3>{this.props.name}</h3>
      <strong>{this.props.height} tall</strong>
      <p>{this.props.age} smurf years old</p>
      <button onClick = {()=> this.handleDelete(this.props.id)}><i class="fas fa-skull"></i></button>
    </div>
  );
};
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

