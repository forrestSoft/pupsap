import React, {useState} from 'react'

const Input = (props) => {
  const Type='input'
  console.log(props.name,props.value)
  return(
    <div>
      <label htmlFor={props.name}>{props.name}</label>
      <Type {...props} key={null}/>
    </div>
  )
} 

export function To(props){
  return(
    <React.Fragment>
    { Object.keys(props.wizardContext.to).map( (name,l)=>{
    	console.log(props,props.wizardContext.to[name])
    	return(
				<Input 
	        name={name} 
	        onChange={props.onChange}
	        label={props.name}
	        value={props.wizardContext.to[name]}
	        key={name}
	      />
  		)
    })}
    </React.Fragment>
  )
}

export function From(props)  {
	// debugger
  return(
    <React.Fragment>
      { Object.keys(props.wizardContext.from).map( (name,l)=>{
    	console.log(props,props.wizardContext.to[name])
    	return(
				<Input 
	        name={name} 
	        onChange={props.onChange}
	        label={props.name}
	        value={props.wizardContext.from[name]}
	        key={name}
	      />
  		)
    })}
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