import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Step extends Component {
  state = {...this.props.wizardContext[this.props.name]}
  prev(){}
  next(){}
  done(){}
  onChange(e){
    this.setState({[e.target.name]: e.target.value})
    this.props.wizardContext[this.props.name][e.target.name] = e.target.value
    debugger
  }
  render(){
    const children = React.Children.map(this.props.children, child => {
      // debugger
      return React.cloneElement(child, {
        onChange: this.onChange.bind(this)
      });
    });
    return (
      <div>{children}</div>
    )
  }
}

Step.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
}

export default Step;

