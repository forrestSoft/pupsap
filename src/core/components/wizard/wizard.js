import React, { Component } from 'react'
import PropTypes from 'prop-types';
// import Step from 'features/shipping-label-maker/step'
import WizardAction from 'constants'

const ProgressBar = () => {
	return(<div>bp</div>)
}

class Wizard extends Component {
	state = {
		currentStep: 0,
		totalSteps: this.props.steps.length
	}
	onAction = (action) => {
		console.log('action', action, this.state)
		switch(action){
			case 0:
				this.changeStep(-1)
				// this.setState( prevState =>({currentStep: prevState.currentStep - 1 || prevState.currentStep}))
			break

			case 1:
				this.changeStep(1)
				// this.setState( prevState =>({currentStep: prevState.currentStep + 1 || prevState.currentStep}))
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
		// this.render()
	}
	onChange(e){
		console.log('fieeld',e.target.name)
	}
	render(){
  	const CurrentStep = this.props.steps[this.state.currentStep]
	  return (
	  	<React.Fragment>
		  	{this.props.header()}
		  	{ProgressBar()}
		    <CurrentStep
		    	wizardContext={this.props.wizardContext}
		    	onAction={this.onAction}
		    	onChange={this.onChange}
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

