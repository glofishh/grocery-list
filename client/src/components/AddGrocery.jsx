import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      quantity: '',
      description: ''

    }

    //bind functions in this class
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.addGrocery = this.addGrocery.bind(this);
  }

  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }

  handleQuantityChange(e) {
    this.setState({quantity: e.target.value});
  }

  addGrocery() {
    console.log(this.state)
    this.props.addGrocery(this.state.description, this.state.quantity);
  }


  render () {
    return (
      <div>
        <h4>add things to list</h4>
        <div>add item <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} /></div>
        <div>add quantity <input type="text" value={this.state.quantity} onChange={this.handleQuantityChange} /></div>
        <button id="add-grocery" onClick={(this.addGrocery)} >add to list!</button>
      </div>
    );
  }
}

export default AddGrocery;


