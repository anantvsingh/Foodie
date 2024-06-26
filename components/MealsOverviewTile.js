import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

function MealsOverviewTile({
  id,
  title,
  imageURI,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();

  function slectMealHandler() {
    navigation.navigate('MealDetails', {
      mealID: id,
    },{transition: 'collapseTransition'});
  }

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={'#c1b3b3'}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={slectMealHandler}>
        <View>
          <Image source={{uri: imageURI}} style={styles.image} />
        </View>
        <View style={styles.view1}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.view2}>
            <Text style={styles.detailsText}>{duration}mins</Text>
            <Text style={styles.detailsText}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailsText}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
export default MealsOverviewTile;

const styles = StyleSheet.create({
  image: {
    width: 380,
    height: 300,
    
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  container: {
    flex: 1,
    margin: 16,
    borderRadius:responsiveHeight(2),overflow:'hidden'
  },
  view1:{
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:responsiveHeight(2)
  },
  view2:{
    flexDirection:'row',
    paddingTop:responsiveHeight(2),
  },
  detailsText:{
    fontWeight:'600',
    marginHorizontal:responsiveWidth(1)
  }
});
