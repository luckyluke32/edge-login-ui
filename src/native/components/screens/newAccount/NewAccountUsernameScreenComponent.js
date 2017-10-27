import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from '../../common'
import UsernameConnector
  from '../../../connectors/componentConnectors/UsernameConnector'
import HeaderConnector
  from '../../../connectors/componentConnectors/HeaderConnector'

// import * as Constants from '../../../common/constants'

export default class LandingScreenComponent extends Component {
  componentWillMount () {
    this.setState({
      isProcessing: false
    })
  }
  componentDidUpdate (prevProps, prevState) {
    if (this.props !== prevProps) {
      this.setState({
        isProcessing: false
      })
    }
  }

  render () {
    const { NewAccountUsernameScreenStyle } = this.props.styles
    return (
      <View style={NewAccountUsernameScreenStyle.screen}>
        <HeaderConnector style={NewAccountUsernameScreenStyle.header} />
        <View style={NewAccountUsernameScreenStyle.pageContainer}>
          <View style={NewAccountUsernameScreenStyle.instructions}>
            <Text style={NewAccountUsernameScreenStyle.instructionsText}>
              Username will be required to sign in to your Edge account on this and other devices. Need a copy about not using name + email
            </Text>
          </View>
          <UsernameConnector
            style={NewAccountUsernameScreenStyle.inputBox}
            onFinish={this.onNextPress.bind(this)}
          />
          <View style={NewAccountUsernameScreenStyle.shim} />
          <Button
            onPress={this.onNextPress.bind(this)}
            downStyle={NewAccountUsernameScreenStyle.nextButton.downStyle}
            downTextStyle={
              NewAccountUsernameScreenStyle.nextButton.downTextStyle
            }
            upStyle={NewAccountUsernameScreenStyle.nextButton.upStyle}
            upTextStyle={NewAccountUsernameScreenStyle.nextButton.upTextStyle}
            label={'NEXT'}
            isThinking={this.state.isProcessing}
            doesThink
          />
        </View>
      </View>
    )
  }
  onNextPress () {
    this.setState({
      isProcessing: true
    })
    this.props.checkUsernameForAvailabilty(this.props.username)
  }
}