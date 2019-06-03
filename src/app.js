import React, { Component } from 'react' 

import Wizard from './core/components/wizard/wizard'
import {WithWizardControls, WithWizardView} from './core/components/wizard/with_wizard_controls'

import Step from 'features/shipping-label-maker/step'
import { To, From, Weight, Options, Confirm } from 'features/shipping-label-maker/steps/one'
import wizardData from 'features/shipping-label-maker/wizard-data-template'

import './app.scss'
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';


let steps=[]
steps.push(WithWizardView(WithWizardControls(Step), From, 'from'))
steps.push(WithWizardView(WithWizardControls(Step), To, 'to'))
steps.push(WithWizardView(WithWizardControls(Step), Weight, 'weight'))
steps.push(WithWizardView(WithWizardControls(Step), Options, 'options'))
steps.push(WithWizardView(WithWizardControls(Step), Confirm, null))


class App extends Component {
  state = {
    wizardOpen: false,
    wizardContext: wizardData()
  }
  
  onClick = () => {
    this.setState((prevState)=>({wizardOpen: !prevState.wizardOpen}))
  }

  onComplete = (context) => {
    this.setState({wizardContext: context})
  }

  render(){
    return (
      <React.Fragment>
      <CssBaseline />
        <AppBar position="static" color="default" >
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              UPEX
            </Typography>
          </Toolbar>
        </AppBar>
        <Container className='app'>
          <Wizard 
            header={header}
            steps={steps}
            wizardContext={ this.state.wizardContext }
            onComplete={this.onComplete}
          />
        </Container>
        <button onClick={this.onClick}>Create Shipping Label</button>
      </React.Fragment>
    )
  }
}

const header = () => {
  return(
        <Typography variant="h4" gutterBottom>{'Shipping Label Maker'}</Typography>
    )
}

export default App;
