import React, { Component } from 'react' 

import Wizard from './core/components/wizard/wizard'
import {WithWizardControls, WithWizardView} from './core/components/wizard/with_wizard_controls'
import Step from 'features/shipping-label-maker/step'
import { To, From, Weight, Options, Confirm } from 'features/shipping-label-maker/steps/one'
import wizardData from 'features/shipping-label-maker/wizard-data-template'
import './app.scss'

let steps=[]

steps.push(WithWizardView(WithWizardControls(Step), To, 'from'))
steps.push(WithWizardView(WithWizardControls(Step), From, 'to'))
steps.push(WithWizardView(WithWizardControls(Step), Weight, 'weight'))
steps.push(WithWizardView(WithWizardControls(Step), Options, 'options'))
steps.push(WithWizardView(WithWizardControls(Step), Confirm, null))


class App extends Component {
  state = {...wizardData()}
  
  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }
  render(){
    return (
      <div className='app'>
        <Wizard 
          header={header}
          steps={steps}
          wizardContext={ wizardData() }
          onComplete={()=>{console.log('complete that doesnt do anything')}}
        />
      </div>
    )
  }
}


const header = () => {
  return(<header>Shipping Label Maker</header>)
}


export default App;