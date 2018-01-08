import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../actions/actions";

const storeConnect = store => {
    return {
        store: store
    };
};

class ChildTypeObject extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    addNewItem = () => {
        let newItem = this.props.item;
        newItem.items = newItem.items.concat({ key: this.textInputKey.value, value: this.textInputValue.value });
        this.props.dispatch(action.updateItem(newItem))
    }
    save = (index, newValue) => {
        const newItem = this.props.item;
        newItem.items[index] = newValue;
        this.props.dispatch(action.updateItem(newItem))
    }
    remove = (index) => {
        const newItem = this.props.item;
        newItem.items.splice(index, 1);
        this.props.dispatch(action.updateItem(newItem))
    }
    render() {

        const list = (item, index) => {
            return (
                <li key={index}>
                    <RenderChildrenObject editing={this.state.editing} save={this.save} remove={this.remove} item={item} index={index} />
                </li>
            )
        }
        return (
            <div >
                <input type="text" ref={(input) => this.textInputKey = input} />
                <span>:</span>
                <input type="text" ref={(input) => this.textInputValue = input} />
                <button onClick={this.addNewItem} className="btn btn-primary" type="button">Add New Key</button>

                <div className="List-type-child">
                    <ul>{this.props.item.items.map(list)}</ul>
                </div>
            </div>
        )
    }
}
export default connect(storeConnect)(ChildTypeObject);

class RenderChildrenObject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    save = (index) => {
        this.props.save(index, {
            key: this.typeitemkey.value,
            value: this.typeitemvalue.value
        });
        this.setState({
            editing: false
        })
    }

    edit = () => {
        this.setState({
            editing: true
        })
    }

    renderForm = () => {
        return (

            <div className="edit ">
                <input type="text" ref={(input) => this.typeitemkey = input} defaultValue={this.props.item.key} />
                <span> : </span>
                <input type="text" ref={(input) => this.typeitemvalue = input} defaultValue={this.props.item.value} />
                <button onClick={this.save.bind(this, this.props.index)} >Save</button>
            </div>
        );
    }

    renderNormal = () => {
        return (
            <div className="display ">
                <span>{this.props.item.key} : {this.props.item.value}</span>
                <button onClick={this.edit}>Edit</button>
                <button onClick={this.props.remove.bind(this, this.props.index)}>Remove</button>
            </div>
        );
    }
    render() {
        if (this.state.editing) {
            return this.renderForm();
        } else {
            return this.renderNormal();
        }
    }
}