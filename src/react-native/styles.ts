import {StyleSheet} from 'react-native';
import {Themes} from 'assets/themes';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFE0D2',
  },
  logoTopLeft: {position: 'absolute', top: 0, left: 0, zIndex: 1},
  logo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  form: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: Themes.COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  logoBottomRight: {position: 'absolute', bottom: 0, right: 0},
  saveOrForgotPass: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
