import {Image, Linking, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FontConstant, PRIVACY_POLICY_URL, RED, WHITE} from '../../constants';
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
        <Image
          source={require('../../../assets/images/background.png')}
          style={{width: '100%', height: '100%', opacity: 0.5}}
        />
        <View
          style={{
            bottom: insets.bottom + 20,
            maxWidth: '100%',
            position: 'absolute',
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 50,
              textAlign: 'center',
              paddingHorizontal: 16,
              letterSpacing: -2,
              ...FontConstant.bold,
            }}>
            Unlimited entertainment, one low price
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 20,
              textAlign: 'center',
              paddingHorizontal: 16,
              marginTop: 20,
              marginBottom: 40,
              ...FontConstant.medium,
            }}>
            All of Netflix starting at just ₹149
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: RED,
              height: 60,
              marginHorizontal: 16,
              marginBottom: 20,
              borderRadius: 4,
              marginTop: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('Signin')}
            activeOpacity={0.9}>
            <Text style={{color: WHITE, ...FontConstant.medium, fontSize: 20}}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Intro;
