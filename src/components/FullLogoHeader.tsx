import {View, Image, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Back from './svg/Back';
import {BLACK} from '../constants';
import { useNavigation } from '@react-navigation/native';

const FullLogoHeader = () => {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: BLACK,
        flexDirection: 'row',
        height: 60,
        marginTop: inset.top,
        width: '100%',
        alignItems: 'center'
      }}>
        <TouchableOpacity onPress={() => {navigation.goBack()}}><Back color={'#FFFFFF'} height={20} width={20} strokeWidth={5} /></TouchableOpacity>
      <Image
        source={require('../../assets/images/full_logo.png')}
        style={{height: 60, width: 150, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default FullLogoHeader;
