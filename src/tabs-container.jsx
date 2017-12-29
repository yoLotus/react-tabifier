import React, { Component } from 'react'
import TabPane from './tab-pane.jsx'
import Tab from './tab.jsx'
import Tabifier from './tabifier.jsx'

export default class TabsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titles: this.props.children.map(tab => tab.props.title),
      currentTabIndex: 0
    }
  }

  activeTab(index) {
    this.setState({ currentTabIndex: index })
  }

  renderTabContent() {
    return this.props.children.map((Tab, index) =>
      <div
        key={index}
        style={{
          display:
            index === this.state.currentTabIndex ? "inline-block" : "none"
        }}
      >
        {Tab}
      </div>
    )
  }

  render() {
    return (
      <div>
        <TabPane
          activeTab={index => this.activeTab(index)}
          titles={this.state.titles}
          activeIndex={this.state.currentTabIndex}
        />
        {this.renderTabContent()}
      </div>
    )
  }
}
