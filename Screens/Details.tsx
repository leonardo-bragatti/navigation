import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View, Button} from 'react-native';
import {RootStackParamList} from '../App';

const Details = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, 'Details'>) => {
  const {params} = route;
  return (
    <View>
      <Text>Id: {params?.id}</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.push('Details', {id: Math.random()})}
      />
    </View>
  );
};

export default Details;
