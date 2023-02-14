import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../assets/images';
import {styles} from './styles';

const LoginScreen = ({navigation}: any) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.logoTopLeft}>
          <Image source={images.photo.logoTopLeft} />
        </View>
        <View style={[]}></View>
        <TouchableOpacity style={styles.logo} onPress={() => {}}>
          <Image source={images.photo.logo} />
        </TouchableOpacity>
        <View style={styles.form}>
          <View style={[]}>
            <Text style={[]}>Tên đăng nhập</Text>
            <TextInput
              placeholder={`Nhập tên đăng nhập`}
              autoCapitalize="none"
              secureTextEntry={true}
              keyboardType={'visible-password'}
            />
          </View>
          <View style={styles.saveOrForgotPass}>
            <View></View>
            <View>
              <Text
                onPress={() => navigation.navigate('EnterUsername')}
                style={{}}>
                Quên mật khẩu?
              </Text>
            </View>
          </View>
          <View style={[]}>
            <TouchableOpacity style={[]}></TouchableOpacity>
          </View>
          <View style={[]}>
            <Text></Text>
            <Text style={[]} onPress={() => navigation.navigate('SignUp')}>
              SignUp
            </Text>
          </View>
          <View style={styles.logoBottomRight}>
            <Image source={images.photo.logoBottomRight} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
