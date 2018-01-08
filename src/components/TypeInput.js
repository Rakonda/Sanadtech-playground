import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../actions/actions";

const storeConnect = store => {
  return {
    store: store
  };
};

class TypeInput extends Component {

  schema_types = ["String", "Number", "Array", "Object"];

  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      id: Math.floor(Math.random() * 201),
      name: "Default name",
      type: "String",
      items: ""
    };
  }

  selectType(type) {
    switch (type) {
      case "String": {
        return "";
        break;
      }
      case "Number": {
        return 0;
        break;
      }
      case "Array": {
        return [];
        break;
      }
      case "Object": {
        return [];
        break;
      }
      default: "";
    }
  }

  onChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  onChangeSelect = e => {
    console.log(e.target.value);
    this.setState({
      type: e.target.value,
      items: this.selectType(e.target.value)
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e, this.schema);
    this.setState({
      id: Math.floor(Math.random() * 201)
    });
    // this.schema.id = Math.floor(Math.random() * 201);
    this.props.dispatch(action.addItem([this.state]));
    // this.props.addTodo(this.state.item);
    // this.setState({ item: "" }, () => this.refs.item.focus());
  };

  render() {
    const createTypeItems = (item, index) => {
      return (
        <option value={item} key={index}>
          {item}
        </option>
      );
    };
    return (
      <div>
        <h4 className="mt-4">Add item & type</h4>

        <form onSubmit={this.handleSubmit}>
          <div className="d-inline-block">
            <input className="form-control" type="text" ref="item" onChange={this.onChange} />
          </div>
          <div className="d-inline-block">
            <select className="form-control" onChange={this.onChangeSelect} >
              {this.schema_types.map(createTypeItems)}
            </select>
          </div>
          <input className="btn btn-primary" type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default connect(storeConnect)(TypeInput);
