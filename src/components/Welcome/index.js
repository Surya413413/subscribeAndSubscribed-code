// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {Subscribe: true}

  renderSubcribeButton = () => {
    this.setState(prevState => ({
      Subscribe: !prevState.Subscribe,
    }))
    
  }

  render() {
    const {Subscribe} = this.state
    return (
      <div className="bg-container">
        <h1 className="headingWelcome">Welcome</h1>
        <p className="para-thankyou">Thank you! Happy Learning</p>
        
        <div>
        <button className="button" onClick={this.renderSubcribeButton}>
        {Subscribe ? "Subscribe" : "Subscribed"}</button>
        </div>
      </div>
    )
  }
}
export default Welcome
