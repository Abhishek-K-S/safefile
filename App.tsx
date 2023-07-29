/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';

import { BACKGROUND_COLOR, STYLES} from './src/constants/styles';
import LoadingScreen from './src/screens/LoadingScreen';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import Store from './src/store/store';
import { getUserToken } from './src/store/storage';
import { setLocalValues } from './src/store/authReducer';


// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): JSX.Element {
  const [showLoading, setShowLoading] = useState(true)

  useEffect(()=>{
    //delay the loading screen by 2 sec
    setTimeout(()=>{
      setShowLoading(false)
    }, 2000)

    //meanwhile, check if auth data is available in storage
    getUserToken().then(token=>{
      if(token && token.length){
        Store.dispatch((dispatch)=>{dispatch(setLocalValues({token, platfrom: 'MEGA'}))})
      }
    })

  }, [])

  return (
    <SafeAreaView style={{backgroundColor:BACKGROUND_COLOR, flex:1}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={BACKGROUND_COLOR}
      />
        { showLoading ?
          <LoadingScreen/>: 
          <Provider store={Store}>
            <AppNavigator/>
          </Provider>
        } 
    </SafeAreaView>
  );
}

export default App;
