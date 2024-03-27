import {Text, TextInput, ScrollView, View, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

const Login = ({navigation}: NativeStackScreenProps<RootStackParamList>) => {
  return (
    <ScrollView>
      <View>
        <Text>User</Text>
        <TextInput placeholder="Username or email" />
        <Text>Password</Text>
        <TextInput placeholder="password" />
        <Button title="Login" onPress={() => navigation.navigate('Details')} />
      </View>
    </ScrollView>
  );
};

export default Login;
