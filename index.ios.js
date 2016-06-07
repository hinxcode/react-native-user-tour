/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

import SvgFilter from './svgFilter'

const styles = StyleSheet.create({
  container: {
    // paddingTop: 60,
  },
  view: {
    height: 500,
    width: 300,
  }
});


class ReactNativeUserTour extends Component {
  fuck(event) {
    console.log(event.nativeEvent.layout);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <Text onLayout={this.update}>按我</Text>
        </View>
        <SvgFilter x={}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeUserTour', () => ReactNativeUserTour);
