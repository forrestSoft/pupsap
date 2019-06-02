import React, { Component } from 'react'
import PropTypes from 'prop-types';
// import Step from 'features/shipping-label-maker/step'
import WizardAction from 'constants'

const ProgressBar = (i) => {
	return(<div>bp{i}</div>)
}

class Wizard extends Component {
	state = {
		currentStep: 0,
		totalSteps: this.props.steps.length
	}
	onAction = (action) => {
		switch(action){
			case 0:
				this.changeStep(-1)
			break

			case 1:
				this.changeStep(1)
			break

			case 2:
				this.props.onComplete(this.props.wizardContext)
			break
			default:
				debugger
		}
	}

	changeStep = (direction) => {
		let {currentStep, totalSteps} = this.state
		let next = (currentStep + direction)
		
		this.setState({
			currentStep: [...Array(totalSteps).keys()].includes(next) ? next : currentStep
		})
	}

	render(){
  	const CurrentStep = this.props.steps[this.state.currentStep]
  	// debugger
	  return (
	  	<React.Fragment>
		  	{this.props.header()}
		  	{ProgressBar(this.state.currentStep)}
		    <CurrentStep
		    	wizardContext={this.props.wizardContext}
		    	onAction={this.onAction}
		    />
		    {this.state.currentStep}
	    </React.Fragment>
	  )
	}
}

Wizard.propTypes = {
	header: PropTypes.func.isRequired,
	steps: PropTypes.array.isRequired,
	wizardContext: PropTypes.object.isRequired,
	onComplete: PropTypes.func.isRequired
}

export default Wizard;

