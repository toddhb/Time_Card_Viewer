import React from "react"

exports class Timer extends React.Component {
  getInitialState() {
    return {
      now: new Date(Date.now())
    }
  }
  updateDate() {
    this.setState({
      now: new Date(Date.now())
    })
  }
  componentDidMount() {
    this.updateDate()
    setInterval(this.updateDate, 100)
  }
  render() {
    const now = this.state.now
    const end = this.props.end
    const hours = minutes = secounds = days = 0
    if (end > now) {
      hours = (end.getHours()-now.getHours())%24 - 1
      minutes = 60 + (60*end.getMinutes()-now.getMinutes())%60 - 1 
      secounds = 60 + (60*end.getSeconds()-now.getSeconds())%60 - 1 
      days = Math.floor((end-now)/86400000) 
    }
    return (
      <table>
        <tr>
          <th>Days</th>
          <th>Hours</th>
          <th>Mins</th>
          <th>Seconds</th>
        </tr>
        <tr>
          <td>{days}</td>
          <td>{hours}</td>
          <td>{minutes}</td>
          <td>{secounds}</td>
        </tr>
      </table>
    )
  }
}
