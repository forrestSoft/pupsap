import React, { Component } from 'react'
import PropTypes from 'prop-types';
// import Step from 'features/shipping-label-maker/step'
import WizardAction from 'constants'

import { createStyles, withStyles, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import HorizontalLabelPositionBelowStepper from './stepper.js'
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import './wizard.scss'

const ProgressBar = (i) => {
	return(<div>bp{i}</div>)
}

class Wizard extends Component {
	state = {
		currentStep: 0,
		totalSteps: this.props.steps.length
	}
	onAction = (action) => {
		// debugger
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
  	let CurrentStep = this.props.steps[this.state.currentStep]
	  return (
	  	<React.Fragment>
        <Paper className="wizard">
      <Grid container  direction="column"
			  justify="center"
			  
			  spacing={2} className="fixMargin">
        <Grid item xs={12}>
			  	{this.props.header()}
		  	</Grid>
		  	<Grid item xs={12}>
			  	<Divider variant="middle" />
		  	</Grid>
		  	<Grid item xs={12}>
			  	<HorizontalLabelPositionBelowStepper 
						step={this.state.currentStep}
			  	/>
		  	</Grid>
		  	<Grid item container xs={12}>
			    <CurrentStep
			    	wizardContext={this.props.wizardContext}
			    	onAction={this.onAction}
			    />
		    </Grid>
		    </Grid>
		    </Paper>
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

export default Wizard

