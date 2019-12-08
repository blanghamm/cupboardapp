import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from './colors';
import Layout from './layout';
import Typography from './typography';

export default StyleSheet.create({
  centerElement: {
    alignItems: 'center',
  },
  standardBlock: {
    marginTop: Layout.standard,
    marginHorizontal: Layout.standard,
    borderWidth: 1,
    borderColor: 'grey',
  },
  wideBlock: {
    marginTop: Layout.standard,
    alignItems: 'center',
    paddingHorizontal: Layout.standard,
    backgroundColor: Colors.offWhite,
    borderWidth: 1,
    borderColor: 'grey',
  },
  tallBlock: {
    marginTop: Layout.tall,
    paddingHorizontal: Layout.standard,
  },
  largeIcon: {
    tintColor: Colors.black,
    width: 50,
    height: 50,
  },
  welcomeTextGrey: {
    color: Colors.grey,
    fontSize: 40,
    fontFamily: Typography.titleRegular,
  },
  welcomeTextBlack: {
    color: Colors.black,
    fontSize: 40,
    fontFamily: Typography.titleRegular,
    lineHeight: 40,
  },
});
