import React, { Component } from 'react';

class ComponentUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      prevCount: null,
    };

    this.handleIncrement = this.handleIncrement.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      'getDerivedStateFromProps: Updating state based on props changes'
    );
    // In this example, we update the count only if the prop 'initialValue' changes.
    
    if (nextProps.initialValue !== prevState.count) {
      return {
        count: nextProps.initialValue,
        prevCount: prevState.count,
      };
    }

    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Determining whether to re-render');
    // We re-render only if the count is different from the previous count.
    return nextState.count !== this.state.count;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Capturing information before update');
    // Returning the current count as a snapshot before the update.
    return prevState.count;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Component has been updated');
    console.log('Previous Count:', snapshot);
    // Perform side effects or interact with the DOM based on the update.
  }

  handleIncrement() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      prevCount: prevState.count,
    }));
  }

  render() {
    console.log('Render: Component is rendering');
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <h2>
          Previous Count:{' '}
          {this.state.prevCount !== null ? this.state.prevCount : 'N/A'}
        </h2>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default ComponentUpdate;