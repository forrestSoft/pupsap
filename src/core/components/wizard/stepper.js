import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class HorizontalLabelPositionBelowStepper extends Component {
  steps =['From Address', 'To Address', 'Specify Weight', 'Pick Shipping Method', 'Confirm Information']
  
  render(){
    return (
      <div >
        <Stepper activeStep={this.props.step} alternativeLabel>
          {this.steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    )
  }
}

export default HorizontalLabelPositionBelowStepper;
