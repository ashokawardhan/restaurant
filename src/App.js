import React, {Component} from 'react';
import Loadable from 'react-loadable';
import { connect } from "react-redux";
import { setMessage } from "./actions/messageActions";
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const AsyncComponent = Loadable({
    loader: () => import("./SomeComponent"),
    loading: () => <div>loading...</div>
});

class App extends Component {
  componentDidMount() {
    if (!this.props.message) {
      this.props.updateMessage("Hi, I'm from client!");
    }
  }
  render() {
    return (
      <div className="App">
        <AsyncComponent />
        <Title>Redux: {this.props.message}</Title>
      </div>
    );
  }
}

const mapStateToProps = ({ message }) => ({
  message: message.message
});

const mapDispatchToActions = dispatch => ({
  updateMessage: txt => dispatch(setMessage(txt))
});

export default connect(mapStateToProps, mapDispatchToActions)(App);
