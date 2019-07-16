import React, { Component } from 'react';

class Page extends Component {
  render() {
    return (
      <div>
        <p>Page component</p>
        {this.props.children}
      </div>
    );
  }
}

export default Page;