import LottieView from 'lottie-react-native';
import {View} from 'react-native';

const Splash = ({
  setIsSplashAnimationFinished,
}: {
  setIsSplashAnimationFinished: (state: boolean) => void;
}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
      }}>
      <LottieView
        source={require('../../assets/lottie/splash.json')}
        autoPlay
        loop={false}
        speed={1.5}
        style={{height: '100%', width: '100%'}}
        onAnimationFinish={() => setIsSplashAnimationFinished(true)}
      />
    </View>
  );
};

export default Splash;
