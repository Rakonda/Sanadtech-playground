import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../actions/actions";

const storeConnect = store => {
    return {
        store: store
    };
};

class ChildTypeString extends Component {

    constructor(props) {
        super(props);

    }

    edit = () => {
        let newItem = this.props.item;
        newItem.items = this.textInput.value;
        this.props.dispatch(action.updateItem(newItem))
    }

    render() {
        return (
            <div>
                <div className="Add-type-child">
                    <span>String Content : </span>
                    <input type="text" ref={(input) => this.textInput = input} defaultValue={this.props.item.items} />
                    <button onClick={this.edit}>Edit String</button>
                </div>
            </div>
        )
    }
}
export default connect(storeConnect)(ChildTypeString);
