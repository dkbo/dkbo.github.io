import React, {Component} from 'react'

export default class Load extends Component {
	constructor(props) {
		super(props)
	}
	render(){
		const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    return(
     	<div  id='load' >
				{array.map(val => <div key={val}></div>)}
			</div>
  	)
  }
}
