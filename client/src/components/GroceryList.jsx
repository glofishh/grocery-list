import React from 'react';
import GroceryItem from './GroceryItem.jsx';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }

  render() {
    const {list}=this.props;
    console.log(list);
    return (
      <div className="groceries">
        <table className="groceries-table">
          <thead>
          <tr>
            <th>description</th>
            <th>quantity</th>
          </tr>
          </thead>
          <tbody>
          {this.props.list.map((item) => <GroceryItem
            key={item.id}
            item={item}
            />)}
          </tbody>
        </table>
      </div>
    );
  }
}


export default GroceryList;



