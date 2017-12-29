import React, { Component } from 'react'
/* import './tab-pane.css'*/

class TabPane extends Component {

  constructor(props) {
    super(props)
  }

  renderTabHandler(title, index) {
    return (
      <li className={`tab-item ${this.props.activeIndex === index ? 'active' : ''}`} onClick={() => this.props.activeTab(index)} key={index}>
        {title}
      </li>
    )
  }

  render() {
    return (
      <ul className="tabs-list">
        {this.props.titles.map((title, index) => this.renderTabHandler(title, index))}
      </ul>
    )
  }
}

export default TabPane
