import React from 'react';
import styles from 'styles/styles'
import images from 'utils'

import {
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App =()=>{
    return(
      <ScrollView>
          <View style={{flexDirection:'row'}}>
            <Image
              style={styles.banner}
              source={require('assets/images/image_1.jpg')} 
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>
              What to do in CDMX
            </Text>
            <ScrollView horizontal>
              <View>
                <Image
                  style={styles.city}
                  source={require('assets/images/image_2.jpg')} 
                />
              </View>
              <View>
                <Image
                  style={styles.city}
                  source={require('assets/images/image_3.jpg')} 
                />
              </View>
              <View>
                <Image
                  style={styles.city}
                  source={require('assets/images/image_4.jpg')} 
                />
              </View>
              <View>
                <Image
                  style={styles.city}
                  source={require('assets/images/image_5.jpg')} 
                />
              </View>
            </ScrollView>
            <Text style={styles.title}>
              Best places in Estado de México
            </Text>
            <View>
              <View>
                <Image
                  style={styles.places}
                  source={require('assets/images/image_6.jpg')} 
                />
              </View>
              <View>
                <Image
                  style={styles.places}
                  source={require('assets/images/image_7.jpg')} 
                />
              </View>
              <View>
                <Image
                  style={styles.places}
                  source={require('assets/images/image_8.jpg')} 
                />
              </View>
            </View>
            <Text style={styles.title}>
              Lodging
            </Text>
            <View style={styles.itemList}>
              <View style={styles.item}>
                <Image
                  style={styles.places}
                  source={require('assets/images/image_9.jpg')} 
                />
              </View>
              <View style={styles.item}>
                <Image
                  style={styles.places}
                  source={require('assets/images/image_10.jpg')} 
                />
              </View>
              <View style={styles.item}>
                <Image
                  style={styles.places}
                  source={require('assets/images/image_11.jpg')} 
                />
              </View>
              <View style={styles.item}>
                <Image
                  style={styles.places}
                  source={require('assets/images/image_12.jpg')} 
                />
              </View>
            </View>
          </View>
      </ScrollView>
    )
}


export default App;
 