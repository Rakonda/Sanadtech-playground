import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../actions/actions";
import TypeChildList from "./typeChildList";
import CreateEditableItem from "./editinput";

const storeConnect = store => {
  return {
    store: store
  };
};

class TypeList extends Component {
  schema = {
    // id: 0,
    name: "Default name",
    type: "String",
    items: ""
  };

  schema_types = ["String", "Number", "Array", "Object"];

  constructor(props) {
    super(props);
    // localStorage.setItem('state', 'off');
    this.state = {
      editing: false
    };
  }

  edit = () => {
    this.setState({
      editing: true
    });
    console.log("Edit => ", this.state.editing);
  };

  removeItem = item => {
    this.props.dispatch(action.removeItem(item));
  };

  render() {
    const createTypeItems = (item, index) => {
      return (
        <li key={index}>
          {/* {this.props.store[item].name}
          <button onClick={this.removeItem.bind(this, item)}>Remove</button>
          <button onClick={this.edit}>Edit</button> */}
          <CreateEditableItem item={this.props.store[item]} />
          <TypeChildList item={this.props.store[item]} />
        </li>
      );
    };
    return (
      <div className="parent-item-list">
        <h4>List of items:</h4>
        <ul>{Object.keys(this.props.store).map(createTypeItems)}</ul>
        <div>
          <pre>{JSON.stringify(this.props.store, null, 2)}</pre>
        </div>
      </div>
    );
  }
}

export default connect(storeConnect)(TypeList);
