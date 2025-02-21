import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import FullLogoHeader from '../../components/FullLogoHeader';
import {BLACK, FontConstant, SPLASH_BACKGROUND_COLOR} from '../../constants';
import { useNavigation } from '@react-navigation/native';

const Signin = () => {

    const navigation = useNavigation();

  return (
    <View style={{backgroundColor: BLACK, flex: 1, paddingHorizontal: 16}}>
      <FullLogoHeader />
      <ScrollView
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex: 1, justifyContent: 'center'}}
        style={{height: '100%'}}>
        <View style={{}}>
          <TouchableOpacity
            style={{
              backgroundColor: SPLASH_BACKGROUND_COLOR,
              height: 80,
              borderRadius: 8,
              marginBottom: 20,
              justifyContent:'center',
            }}>
                <Text
              style={{
                padding: 16,
                ...FontConstant.medium,
                fontSize: 22,
                color: '#FFFFFF40',
              }}>
              Email or phone number
            </Text>
            </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: SPLASH_BACKGROUND_COLOR,
              height: 80,
              borderRadius: 8,
              marginBottom: 20,
              justifyContent:'center',
            }}>
                <Text
              style={{
                padding: 16,
                ...FontConstant.medium,
                fontSize: 22,
                color: '#FFFFFF40',
              }}>
              Password
            </Text>
            </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Profiles')}
            activeOpacity={0.9}
            style={{
              height: 65,
              borderRadius: 8,
              borderWidth: 2.5,
              borderColor: "#FFFFFF60",
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                ...FontConstant.semiBold,
                fontSize: 22,
                color: '#FFFFFF',
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              marginVertical: 12,
              fontSize: 18,
              color: '#ffffff70',
              textAlign: 'center',
              ...FontConstant.medium,
            }}>
            OR
          </Text>
          <TouchableOpacity
            activeOpacity={0.9}
            style={{
              height: 65,
              borderRadius: 8,
              backgroundColor: SPLASH_BACKGROUND_COLOR,
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                ...FontConstant.semiBold,
                fontSize: 22,
                color: '#FFFFFF',
              }}>
              Use a Sign-In Code
            </Text>
          </TouchableOpacity>
            <Text
              style={{
                textAlign: 'center',
                ...FontConstant.semiBold,
                fontSize: 20,
                color: "#FFFFFF90",
                marginTop: 30
              }}>
              Forgot password?
            </Text>
            <Text
              style={{
                textAlign: 'center',
                ...FontConstant.semiBold,
                fontSize: 20,
                color: "#FFFFFF90",
                marginTop: 30
              }} onPress={() => navigation.goBack()}>
              New to Netflix? Sign up now.
            </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signin;
