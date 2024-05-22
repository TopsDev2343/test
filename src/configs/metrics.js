import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

const cal = height * 0.062
const inputHeight = cal >= 56 ? 56 : cal <= 45 ? 45 : cal
const metrics = {

  statusBar: Platform.OS === 'ios' ? 40 : 30,

  horizontalLineHeight: 1,

  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,

  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  screenPadding: 35,
  defaultBorder: 16,
  inputHeight,
  contentWidth: '80%',

  s1: 1,
  s2: 2,
  s4: 4,
  s8: 8,
  s12: 12,
  s16: 16,
  s20: 20,
  s22: 22,
  s24: 24,
  s26: 26,
  s28: 28,
  s30: 30,

  //border width
  bw1: 1,
  bw2: 2,
  //borderRadius
  br1: 4,
  br2: 8,
  br3: 12,
  br4: 16,
  br5: 20,

  p1: 4,
  p2: 8,
  p3: 12,
  p4: 16,
  p5: 20,

  m1: 4,
  m2: 8,
  m3: 12,
  m4: 16,
  m5: 20,
  m6: 24,



  i1: 15,
  i2: 20,
  i3: 25,
  i4: 30,
  i5: 35,

};

export default metrics;