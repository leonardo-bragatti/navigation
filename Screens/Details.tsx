import {Text, View, Button} from 'react-native';

const Details = (props: any) => {
  console.log('My props', props);
  return (
    <View>
      <Text>Details</Text>
      <Button title="Go to details" />
    </View>
  );
};

export default Details;
