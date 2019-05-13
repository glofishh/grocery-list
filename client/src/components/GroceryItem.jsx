import React from 'react';


class GroceryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const {item}=this.props;
    console.log(item.description)
    return (
      <tr>
        <td>{item.description}</td>
        <td>{item.quantity}</td>
      </tr>
    );
  }
}

    return (
          <tr>
            <td>{this.props.item.description}</td>
            <td>{this.props.item.quantity}</td>
          </tr>
    );
  }
}

export default GroceryItem;




