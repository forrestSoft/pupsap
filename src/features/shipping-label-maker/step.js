import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
class Step extends Component {
  constructor(props){
    super(props)
    this.state = {...this.props.wizardContext[this.props.stepName]}
    this.onChange = this.onChange.bind(this)
  }
  
  onChange(e){
    let {wizardContext, stepName}=this.props
    let {name,value} = e.target

    typeof wizardContext[stepName] == "object" ? 
      (wizardContext[stepName][name] = value) : 
      (wizardContext[stepName] = value)

    this.setState((prevState)=>{
      return ({[name]: value})
    })
  }

  render(){
    const children = React.Children.map(this.props.children, child => {
      return (React.cloneElement(child, {
        onChange: this.onChange,
        ...this.props.wizardContext[this.props.stepName]
      }))
    })

    return (
      <Container>{children}</Container>
    )
  }
}

Step.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
}

export default Step;

