import React, { Component, PureComponent } from 'react';
import axios from 'axios';

const withRequest = (url) => (WrappedComponent) => {
  return class extends PureComponent {

    constructor(props){
        super(props);
        this.state=({
          data : null
        });
    }


    async initialize() {
      try {
        const response = await axios.get(url);
        this.setState({
          data: response.data
        });
      } catch (e) {
        console.log(e);
      }
    }

    componentDidMount() {
      this.initialize();
    }

    render() {
      if(!this.state.data) return null
      return (
        <WrappedComponent {...this.props} data={this.state.data}/>
      )
    }
  }
}

export default withRequest;