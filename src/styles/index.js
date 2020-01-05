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
  centerVertically: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#faf',
  },
  standardBlock: {
    marginTop: Layout.standard,
    marginHorizontal: Layout.standard,
  },
  standardPadding: {
    marginHorizontal: Layout.standard,
  },
  wideBlock: {
    marginTop: Layout.standard,
    alignItems: 'center',
    paddingHorizontal: Layout.standard,
    backgroundColor: Colors.offWhite,
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
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'grey',
    height: 50,
    marginTop: 10,
    borderTopRightRadius: 400 / 2,
    borderBottomRightRadius: 400 / 2,
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
    width: '45%',
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
    fontFamily: Typography.bodyBold,
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

  itemImage: {
    alignSelf: 'center',
    paddingRight: 15,
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
  title: {
    color: Colors.black,
    fontFamily: Typography.bodyBold,
    textTransform: 'uppercase',
    fontSize: 24,
  },
  cupboardTitle: {
    color: Colors.grey,
    fontFamily: Typography.bodyBold,
    textTransform: 'uppercase',
    fontSize: 20,
  },
  titleLower: {
    color: Colors.black,
    fontFamily: Typography.titleBold,
    fontSize: 24,
  },
  subTitle: {
    color: Colors.grey,
    fontFamily: Typography.bodyRegular,
    fontSize: 16,
  },
  bodyTitle: {
    color: Colors.black,
    fontFamily: Typography.bodyBold,
    textTransform: 'uppercase',
    fontSize: 20,
  },
  bodyText: {
    fontFamily: Typography.bodyRegular,
  },
  itemText: {
    fontFamily: Typography.bodyRegular,
    paddingLeft: 15,
    alignSelf: 'center',
    fontSize: 20,
    color: Colors.grey,
  },

  //CAROUSEL

  caraTitle: {
    fontFamily: Typography.bodyRegular,
    fontSize: 20,
  },
  caraSubTitle: {
    fontFamily: Typography.bodyRegular,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  caraThumb: {
    width: '100%',
    height: 180,
  },

  //MODAL

  modal: {
    backgroundColor: Colors.white,
    width: '100%',
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    padding: 30,
  },
  modalTitle: {
    fontFamily: Typography.bodyBold,
    fontSize: 20,
    alignSelf: 'center',
  },
  modalIcon: {
    alignSelf: 'flex-end',
  },

  //TEXT INPUT

  textInput: {
    fontSize: 20,
    width: '80%',
    fontFamily: Typography.bodyRegular,
  },
});
