import React, { Component } from 'react' 

import Wizard from './core/components/wizard/wizard'
import {WithWizardControls, WithWizardView} from './core/components/wizard/with_wizard_controls'
import Step from 'features/shipping-label-maker/step'
import { To, From, Weight, Options, Confirm } from 'features/shipping-label-maker/steps/one'
import wizardData from 'features/shipping-label-maker/wizard-data-template'
import './app.scss'

let steps=[]
steps.push(WithWizardView(WithWizardControls(Step), To, 'to'))
steps.push(WithWizardView(WithWizardControls(Step), From, 'from'))
steps.push(WithWizardView(WithWizardControls(Step), Weight, 'weight'))
steps.push(WithWizardView(WithWizardControls(Step), Options, 'options'))
steps.push(WithWizardView(WithWizardControls(Step), Confirm, null))


class App extends Component {
  state = {
    wizardOpen: false,
    wizardContext: wizardData()
  }
  
  // onChange(e){
  //   this.setState({[e.target.name]: e.target.value})
  // }
  onClick = () => {
    this.setState((prevState)=>({wizardOpen: !prevState.wizardOpen}))
    console.log(10)
  }
  onComplete = (context) => {
    this.setState({wizardContext: context})
    console.log(this.state)
  }
  render(){
    return (
      <div className='app'>
        <button onClick={this.onClick}>Create Shipping Label</button>
        <Wizard 
          header={header}
          steps={steps}
          wizardContext={ this.state.wizardContext }
          onComplete={this.onComplete}
        />
      </div>
    )
  }
}


const header = () => {
  return(<header>Shipping Label Maker</header>)
}


export default App;