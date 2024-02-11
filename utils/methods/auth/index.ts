import { useDispatch } from 'react-redux';
import { authActions } from '@/store/auth/authSlice';
import { useNavigation } from '@react-navigation/native';

export const refreshAuthentication = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  let userJSON;
  try {
    userJSON = AsyncStorage.getItem('user');
  } catch (error) {
    console.error('Error retrieving user data from AsyncStorage:', error);
    return;
  }
  let user;
  try {
    user = JSON.parse(userJSON);
  } catch (error) {
    console.error('Error parsing user JSON:', error);
    return;
  }

  if (user && user.token) {
    dispatch(authActions.login(user.token));
  } else {
    // Assuming pathname is obtained from the navigation state
    const pathname = navigation.getCurrentRoute()?.name || '';

    if (pathname.includes('dashboard')) {
      dispatch(authActions.logout());
      navigation.navigate('Login'); // Assuming 'Login' is the name of the login screen
    }
  }
};
