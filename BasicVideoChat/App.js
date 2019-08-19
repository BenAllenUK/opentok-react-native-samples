import React, { Component } from "react";
import { View, Button } from "react-native";
import { OTSession, OTPublisher, OTSubscriber } from "opentok-react-native";

export default class App extends Component {
  state = {
    mounted: false,
    clientMounted: false,
    hostMounted: false
  };
  constructor(props) {
    super(props);
    this.apiKey = "XXXX";
    this.sessionId = "XXXX";
    this.clientToken = "XXXX";
    this.hostToken = "XXXX";
  }
  render() {
    return (
      <View>
        <Button
          title="Client Mount"
          onPress={() =>
            this.setState(state => ({ clientMounted: !state.clientMounted }))
          }
        />
        <Button
          title="Host Mount"
          onPress={() =>
            this.setState(state => ({ hostMounted: !state.hostMounted }))
          }
        />
        <View style={{ flex: 1, flexDirection: "row" }}>
          {this.state.clientMounted && (
            <OTSession
              apiKey={this.apiKey}
              sessionId={this.sessionId}
              token={this.clientToken}
            >
              <OTSubscriber style={{ width: 100, height: 100 }} />
            </OTSession>
          )}
          {this.state.hostMounted && (
            <OTSession
              apiKey={this.apiKey}
              sessionId={this.sessionId}
              token={this.hostToken}
            >
              <OTPublisher style={{ width: 100, height: 100 }} />
            </OTSession>
          )}
        </View>
      </View>
    );
  }
}
