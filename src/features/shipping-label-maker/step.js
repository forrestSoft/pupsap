import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Step extends Component {
  constructor(props){
    super(props)
    console.log(this.state, props)
  }
  state = {...this.props.wizardContext[this.props.name]}
  
  onChange(e){
    let {wizardContext, name}=this.props
    this.setState({[e.target.name]: e.target.value})
    typeof wizardContext[name] == "object" ? (wizardContext[name][e.target.name] = e.target.value) : (wizardContext[name] = e.target.value)
    // debugger
  }

  render(){
    // debugger
    const children = React.Children.map(this.props.children, child => {
      // debugger
      console.log(child)
      return React.cloneElement(child, {
        onChange: this.onChange.bind(this),
        value: this.state[child.name]
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

