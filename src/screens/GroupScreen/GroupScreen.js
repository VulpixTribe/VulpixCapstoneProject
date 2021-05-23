import React, { useContext } from 'react';
import { UserInfoContext } from '../../../UserContext';
import { View, Text, Button } from 'react-native';
//import styles from './styles'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import InviteScreen from '../InviteScreen/InviteScreen';
// const screenWidth = Dimensions.get('window').width
// const chartConfig = {
//   backgroundGradientFrom: '#1E2923',
//   backgroundGradientTo: '#08130D',
//   color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
// }
const groupData = async () => {
  //console.log('props in group screen line 8', props);
  //const { data } = await axios.get('https://glowintheblue.herokuapp.com/api/group');
  //const { data } = await axios.get('http://localhost:8080/api/group')
  //console.log('groupData line 11', data);
};
groupData();

//console.log('hello from GroupScreen line 15');
export default function GroupScreen() {
  const {
    user,
    setUser,
    userData,
    setUserData,
    selectedValue,
    setSelectedValue,
    points,
    setPoints,
    selectCat,
    setSelectedCat
  } = useContext(UserInfoContext);
  //console.log('Group screen user'.user)
  const navigation = useNavigation();

  return (
    <View>
      <Text>Memeber of the Group</Text>
      <Text>user 1</Text>
      <Text>user 2r</Text>
      <Text>user 3</Text>
      <Text>user 4</Text>
      <View>
        <Button title='🔑' onPress={() => navigation.navigate('InviteScreen')}></Button>
      </View>
    </View>
  );
}
