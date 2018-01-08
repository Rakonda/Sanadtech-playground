import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../actions/actions";
import ChildTypeString from "./childstring"
import ChildTypeArray from "./childarray"
import ChildTypeObject from "./childobject"
import ChildTypeNumber from "./childnumber"

const storeConnect = store => {
    return {
        store: store
    };
};

class TypeChildList extends Component {

    constructor(props) {
        super(props);
        // localStorage.setItem('state', 'off');
    }

    removeItem = (item) => {
        // this.props.dispatch(action.removeItem(item));
    }

    // componentWillMount() {
    //     console.log("Child componentWillMount()", this.props.item.name)
    // }

    // componentDidMount() {
    //     console.log("Child componentDidMount()", this.props.item.type)
    // }

    render() {

        if (this.props.item.type == "String") {
            return (
                <div>
                    Type =>  {this.props.item.type} 
                    <ChildTypeString item={this.props.item} />
                </div>
            );
        }

        if (this.props.item.type == "Number") {
            return (
                <div>
                    Type => {this.props.item.type} 
                    <ChildTypeNumber item={this.props.item} />
                </div>
            );
        }

        if (this.props.item.type == "Array") {
            return (
                <div>
                    Type => {this.props.item.type}
                    <ChildTypeArray item={this.props.item} />
                </div>
            );
        }

        if (this.props.item.type == "Object") {
            return (
                <div>
                   Type => {this.props.item.type}
                    <ChildTypeObject item={this.props.item} />
                </div>
            );
        }
        return (<div>No child to display</div>)
    }
}
export default connect(storeConnect)(TypeChildList);
