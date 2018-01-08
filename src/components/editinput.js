import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../actions/actions";
import _ from "lodash";
import TypeChildList from "./typeChildList";

const storeConnect = store => {
    return {
        store: store
    };
};

class CreateEditableItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            item: this.props.item
        }
    }

    edit = () => {
        this.setState({
            editing: true
        })
        console.log("Edit => ", this.state.editing)
    }

    removeItem = (item) => {
        this.props.dispatch(action.removeItem(_.mapKeys([item], "id")));
    }

    save = () => {
        let item = this.state.item;
        item.name = this.textInput.value;
        this.setState({
            editing: false
        }, () => { this.props.dispatch(action.updateItem(item)) });
    }

    renderNormal = () => {
        return (
            <div>
                {this.props.item.name}
                <button className="btn btn-primary" onClick={this.edit}>Edit Item name</button>
                <button className="btn btn-danger" onClick={this.removeItem.bind(this, this.props.item)}>Remove Item</button>
            </div>
        );
    };

    renderForm = () => {
        return (
            <div>
                <input type="text"
                    ref={(input) => this.textInput = input} defaultValue={this.props.item.name} />
                <button className="btn btn-success" onClick={this.save}>Save item name</button>
                {/* <TypeChildList item={this.props.item} /> */}
            </div>
        );
    };


    render() {
        if (this.state.editing) {
            return this.renderForm();
        } else {
            return this.renderNormal();
        }
    }
}

export default connect(storeConnect)(CreateEditableItem);