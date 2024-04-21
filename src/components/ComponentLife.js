import React, { Component } from 'react';

class ComponentLife extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      count: props.initialValue,
    };

    // Binding a method
    this.incrementCount = this.incrementCount.bind(this);

    console.log('Constructor: Component is being initialized');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      'getDerivedStateFromProps: Derived state is being calculated based on props'
    );
    // In this simple example, we return null as we don't need to update the state based on props.
    return null;
  }

  componentDidMount() {
    console.log(
      'ComponentDidMount: Component has been rendered for the first time'
    );
    // Increment the count every second
    this.intervalId = setInterval(this.incrementCount, 1000);
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount: Component is about to be unmounted');
    // Clean up the interval to avoid memory leaks
    clearInterval(this.intervalId);
  }

  incrementCount() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    console.log('Render: Component is rendering');
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
      </div>
    );
  }
}

export default ComponentLife;