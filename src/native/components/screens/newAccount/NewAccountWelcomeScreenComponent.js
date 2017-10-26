import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from '../../common'
import { LogoImageHeader } from '../../abSpecific'
// import * as Constants from '../../../common/constants'

export default class LandingScreenComponent extends Component {
  render () {
    const { NewAccountWelcomeScreenStyle } = this.props.styles
    return (
      <View style={NewAccountWelcomeScreenStyle.screen}>
        <View style={NewAccountWelcomeScreenStyle.row1}>
          <Button
            onPress={this.props.exitScreen}
            downStyle={NewAccountWelcomeScreenStyle.exitButton.downStyle}
            downTextStyle={
              NewAccountWelcomeScreenStyle.exitButton.downTextStyle
            }
            upStyle={NewAccountWelcomeScreenStyle.exitButton.upStyle}
            upTextStyle={NewAccountWelcomeScreenStyle.exitButton.upTextStyle}
            label={'Exit'}
          />
        </View>
        <View style={NewAccountWelcomeScreenStyle.row2}>
          <LogoImageHeader style={NewAccountWelcomeScreenStyle.logoHeader} />
        </View>
        <View style={NewAccountWelcomeScreenStyle.row3}>
          <Text style={NewAccountWelcomeScreenStyle.instructionsText}>
            Let’s get started by creating your account login. You’ll choose a username and password, which we’ll use to encrypt your account. Not even Edge has access to your information, so you have full and complete control over your digital assets.
          </Text>
        </View>
        <View style={NewAccountWelcomeScreenStyle.row4} />
        <View style={NewAccountWelcomeScreenStyle.row5}>
          <Text style={NewAccountWelcomeScreenStyle.callToAction}>
            Let’s get started with choosing a username
          </Text>
        </View>
        <View style={NewAccountWelcomeScreenStyle.row6}>
          <Button
            onPress={this.props.nextScreen}
            downStyle={NewAccountWelcomeScreenStyle.nextButton.downStyle}
            downTextStyle={
              NewAccountWelcomeScreenStyle.nextButton.downTextStyle
            }
            upStyle={NewAccountWelcomeScreenStyle.nextButton.upStyle}
            upTextStyle={NewAccountWelcomeScreenStyle.nextButton.upTextStyle}
            label={'Get started'}
          />
        </View>

      </View>
    )
  }
  /* onNextPress () {
    this.props.nextScreen()
  }* /
  /* onExitPress = () =>  {
    this.props.exitScreen()
  } */
}
