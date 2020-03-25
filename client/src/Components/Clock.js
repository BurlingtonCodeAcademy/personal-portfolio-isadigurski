import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      date: new Date(Date.now()).toLocaleString()
    }
  }

  componentDidMount() {
    setInterval(
      () => {
        this.setState({
          date: new Date(Date.now()).toLocaleString()
        })
      }, 
      1000
    )
  }

  render() {
    return (
      <h4 className='clock'>{this.state.date}<span id="time-zone-name"> EST</span></h4>
    )
  }
}

export default Clock