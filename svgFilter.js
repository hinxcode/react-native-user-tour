import React,{
  StyleSheet,
  Dimensions
} from 'react-native';

import Svg, { Path } from 'react-native-svg';

const windowSize = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent'
  },
});

export default function SvgFilter(props) {
  const d = `m 0 0 h ${windowSize.width} v ${windowSize.height} h ${-windowSize.width} z
              m 10 0 m 0,60
              a 30,30 0 0,0 60,0
              a 30,30 0 0,0 -60,0 z`;
  return (
    <Svg style={styles.container} height={windowSize.height} width={windowSize.width}>
      <Path
        d={d}
        fill={props.fillColor}
        fillOpacity={props.fillOpacity}
      />
     </Svg>
  );
}

SvgFilter.propTypes = {
  fillColor: React.PropTypes.string,
  fillOpacity: React.PropTypes.string,
};

SvgFilter.defaultProps = {
  fillColor: '#333',
  fillOpacity: '0.6',
};
