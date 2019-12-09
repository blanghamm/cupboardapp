import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from './colors';
import Layout from './layout';
import Typography from './typography';

export default StyleSheet.create({
  //LAYOUTS
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
  bannerBlock: {
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tallBlock: {
    marginTop: Layout.tall,
    paddingHorizontal: Layout.standard,
  },
  halfButtonBlock: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  //BUTTONS

  fullButton: {
    height: 40,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  halfButton: {
    width: 150,
    height: 40,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  greyButton: {
    backgroundColor: Colors.grey,
  },

  peachButton: {
    backgroundColor: Colors.peach,
  },

  aquaButton: {
    backgroundColor: Colors.aqua,
  },

  lavenderButton: {
    backgroundColor: Colors.lavender,
  },

  buttonText: {
    fontFamily: Typography.bodyRegular,
    textTransform: 'uppercase',
    fontSize: 12,
    color: Colors.white,
  },

  //ICONS

  largeIcon: {
    tintColor: Colors.black,
    width: 50,
    height: 50,
  },

  //TEXT

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
  bodyText: {
    color: Colors.black,
    fontFamily: Typography.bodyRegular,
  },
  bodyTitle: {
    color: Colors.black,
    fontFamily: Typography.bodyBold,
    textTransform: 'uppercase',
    fontSize: 20,
  },
  bodySubTitle: {
    color: Colors.grey,
    fontFamily: Typography.bodyRegular,
    fontSize: 16,
  },
});
