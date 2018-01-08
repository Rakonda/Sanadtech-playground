import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import * as action from "./actions/actions";
import TypeInput from "./components/TypeInput";
import TypeList from "./components/TypeList";

const storeConnect = store => {
  return {
    store: store
  };
};

class App extends Component {
  listofitems = [];

  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props);
    if (typeof localStorage.getItem("state") === "object") {
      console.log("set storage");
      localStorage.setItem("state", JSON.stringify([]));
    } else {
      this.listofitems = JSON.parse(localStorage.getItem("state"));
    }
  }

  componentWillMount() {
    this.props.dispatch(action.fetchItems(this.listofitems));
  }
  updateStore = () => {
    this.props.dispatch(action.fetchItems(this.listofitems));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <TypeInput />
        <button onClick={this.updateStore} className="btn btn-info mt-3">
          Reload Store
        </button>
        <TypeList />
        <per />
      </div>
    );
  }
}

// export default App;
export default connect(storeConnect)(App);
