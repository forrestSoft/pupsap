import React, {useState} from 'react'

const Input = (props) => {
  const Type='input'
  return(
    <div>
      <label htmlFor={props.name}>{props.name}</label>
      <Type {...props} />
    </div>
  )
} 

export function To(props){
  return(
    <React.Fragment>
      <Input 
        name={'name'} 
        onChange={props.onChange}
        label={props.name}
        value={props.name}
      />
      <Input 
        name={'street'} 
        onChange={props.onChange} 
        label={props.name}
      />
      <Input 
        name={'city'} 
        onChange={props.onChange} 
        label={props.name}
      />
      <Input 
        name={'state'} 
        onChange={props.onChange} 
        label={props.name}
      />
      <Input 
        name={'zip'} 
        onChange={props.onChange} 
        label={props.name}
      />
    </React.Fragment>
  )
}

export function From(props)  {
  return(
    <React.Fragment>
      <Input 
        name={'name'} 
        onChange={props.onChange} 
        label={props.name}
      />
      <Input 
        name={'street'} 
        onChange={props.onChange} 
        label={props.name}
      />
      <Input 
        name={'city'} 
        onChange={props.onChange} 
        label={props.name}
      />
      <Input 
        name={'state'} 
        onChange={props.onChange} 
        label={props.name}
      />
      <Input 
        name={'zip'} 
        onChange={props.onChange} 
        label={props.name}
      />
    </React.Fragment>
  )
}

export function Weight(props)  {
  return(
    <React.Fragment>
      <Input 
        name={'weight'} 
        onChange={props.onChange} 
        label={props.name}
      />
    </React.Fragment>
  )
}

export function Options(props)  {
  return(
    <React.Fragment>
      <Input 
        name={'options'} 
        onChange={props.onChange} 
        label={props.name}
      />
    </React.Fragment>
  )
}

export function Confirm(props)  {
  return(
    <React.Fragment>
      <Input 
        name={'confirm'} 
        onChange={props.onChange} 
        label={props.name}
      />
    </React.Fragment>
  )
}
// export default () => ({
//   from: {
//     name: "",
//     street: "",
//     city: "",
//     state: "",
//     zip: ""
//   },
//   to: {
//     name: "",
//     street: "",
//     city: "",
//     state: "",
//     zip: ""
//   },
//   weight: 0,
//   shippingOption: null
// })