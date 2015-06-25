import React from "react"

export default class AlertBar {
  render() {
    return (
      <div className="schedule-alert alert-dismissible">
        <h2 className="text-center">See you again in <span className="number-font">12</span> hours</h2>
      </div>
    )
  }
}