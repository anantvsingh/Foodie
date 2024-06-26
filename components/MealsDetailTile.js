import { View,Image,Text } from "react-native";
function MealsDetailTile({title,imageUrl,steps}){
    return(
        <View>
        <Text>{title}</Text>
        <Image source={{uri:{imageUrl}}}/>
        <Text>{steps}</Text>
        </View>
    )
}
export default MealsDetailTile;