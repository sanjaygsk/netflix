import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {BLACK, FontConstant} from '../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {profileData} from './constants';
import {useState} from 'react';
import Animated, {FadeIn} from 'react-native-reanimated';

const Profiles = () => {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation();
  const [selectedProfile, setSelectedProfile] = useState(null);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: BLACK,
        paddingTop: inset.top,
        paddingHorizontal: 16,
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'flex-end',
        }}>
        <Text
          style={{
            color: '#FFFFFF',
            ...FontConstant.bold,
            fontSize: 20,
            textAlign: 'center',
            marginRight: '20%',
          }}>
          Who's Watching?
        </Text>
        <Text style={{color: '#FFFFFF', ...FontConstant.bold, fontSize: 20}}>
          Edit
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30%',
        }}>
        {selectedProfile ? (
          <Animated.Image
            sharedTransitionTag="profile"
            source={{uri: profileData[0]?.imageSrc}}
            style={{height: 300, width: 300}}
          />
        ) : (
          <FlatList
            data={profileData}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-around',
              columnGap: 25,
              marginBottom: 70,
            }}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => setSelectedProfile(item)}
                  style={{
                    height: 125,
                    width: 125,
                    borderRadius: 12,
                    backgroundColor: '#000000',
                  }}>
                  <Animated.View entering={FadeIn.delay(index * 1000).damping(10000).duration(5000)} style={{height: 125, width: 125}}>
                    <Animated.Image
                      sharedTransitionTag="profile"
                      source={{uri: item.imageSrc}}
                      style={{width: '100%', height: '100%', borderRadius: 8}}
                    />
                    <Text
                      numberOfLines={1}
                      style={{
                        marginTop: 8,
                        color: '#FFFFFF',
                        ...FontConstant.medium,
                        fontSize: 18,
                        textAlign: 'center',
                      }}>
                      {item.name}
                    </Text>
                  </Animated.View>
                </TouchableOpacity>
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

export default Profiles;
