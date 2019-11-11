import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { Button } from 'react-native';

import Manualpage from '../manualpage.js';


const OptionNavigator = createStackNavigator({
    Manualpage,

    Manualpage:
    <Button title= 'Manual Add' onPress={() => this.props.navigation.navigate('Manualpage')}/>


  });


  export default createAppContainer(OptionNavigator);  