import {Image, Linking, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FontConstant, PRIVACY_POLICY_URL, RED} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const Intro = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  console.error('insets', insets);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000000',
        height: '100%',
        width: '100%',
      }}>
      <View
        style={{
          top: insets.top,
          position: 'absolute',
          zIndex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          paddingRight: 16,
          paddingLeft: 8,
        }}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={{width: 50, height: 50}}
        />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => Linking.openURL(PRIVACY_POLICY_URL)}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 16,
                marginRight: 30,
                ...FontConstant.bold,
              }}>
              PRIVACY
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 16,
                ...FontConstant.bold,
              }}>
              SIGN IN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          // alignItems: 'center',
          //   backgroundColor: 'blue',
          experimental_backgroundImage:
            'linear-gradient(30deg, rgba(123,44,200,0.7) 27%, rgba(40,40,231,0.5) 63%, rgba(2,0,36,0.5) 100%);',
          height: '100%',
          width: '100%',
        }}>
        {/* <View style={{bottom: 0, maxWidth: "100%"}}> */}
        <Text
          style={{
            color: '#fff',
            fontSize: 65,
            ...FontConstant.bold,
            position: 'absolute',
            zIndex: 2,
            textAlign: 'center',
            paddingHorizontal: 16,
            letterSpacing: -4,
            bottom: '20%',
          }}>
          Unlimited entertainment, one low price
        </Text>
        {/* </View> */}
        <Image
          source={require('../../../assets/images/background.png')}
          style={{width: '100%', height: '100%', opacity: 0.5}}
        />
      </View>
    </View>
  );
};

export default Intro;
