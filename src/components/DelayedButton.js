// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {

handleClick=(e)=>{
     

       setTimeout(() => {
  }, this.props.delay);

  this.props.onDelayedClick(e)
  e.persist()

}

render(){


    return  <button onClick={this.handleClick}> Delete Button</button>
}


}