import React from 'react';

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          status: true
        }
        this.handleClick = this.handleClick.bind(this)
      }
    
      handleClick() {
        this.state.status ? this.setState({ status: false }) : this.setState({ status: true })
      }
    
      render() {
        return (
          <button onClick={this.handleClick}>{this.state.status ? "ON" : "OFF"}</button>
        );
      }
};

export default ToggleButton;