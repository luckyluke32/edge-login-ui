import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { BackgroundImage, Button } from '../common'
import * as Constants from '../../../common/constants'
import * as Assets from '../../assets/'
import { LogoImageHeader } from '../abSpecific'

export default class LandingScreenComponent extends Component {
  render () {
    const { LandingScreenStyle } = this.props.styles
    return (
      <View style={LandingScreenStyle.container}>
        <BackgroundImage
          src={Assets.LOGIN_BACKGROUND}
          style={LandingScreenStyle.backgroundImage}
          content={this.renderOverImage()}
        />
      </View>
    )
  }
  renderOverImage () {
    const { LandingScreenStyle } = this.props.styles
    return (
      <View style={LandingScreenStyle.featureBox}>
        <LogoImageHeader style={LandingScreenStyle.logoHeader} />
        <View style={LandingScreenStyle.featureBoxContent}>
          <View style={LandingScreenStyle.featureBoxDescription}>
            <Text style={LandingScreenStyle.tagText}>{'The secure and say to use wallet for your blockchain assets and tokens'}</Text>
          </View>

        </View>
        <View style={LandingScreenStyle.featureBoxButtons}>
          <Button
            onPress={this.onStartCreate.bind(this)}
            label={'Create account'}
            downStyle={LandingScreenStyle.createButton.downStyle}
            downTextStyle={LandingScreenStyle.createButton.downTextStyle}
            upStyle={LandingScreenStyle.createButton.upStyle}
            upTextStyle={LandingScreenStyle.createButton.upTextStyle}
          />
          <View style={LandingScreenStyle.shim} />
          <Button
            onPress={this.onStartLogin.bind(this)}
            label={'Already have an account? Sign in'}
            downStyle={LandingScreenStyle.loginButton.downStyle}
            downTextStyle={LandingScreenStyle.loginButton.downTextStyle}
            upStyle={LandingScreenStyle.loginButton.upStyle}
            upTextStyle={LandingScreenStyle.loginButton.upTextStyle}
          />
        </View>

      </View>
    )
  }
  onStartCreate () {
    this.props.startFlow(Constants.WORKFLOW_CREATE)
  }

  onStartLogin () {
    this.props.startFlow(Constants.WORKFLOW_PASSWORD)
  }
}
