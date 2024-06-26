import { Pressable } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

function IconButtons({icon,color,size,onPress}){
    return(
        <Pressable onPress={onPress}>
            <Icon name={icon} size={size} color={color} />
        </Pressable>
    );
}
export default IconButtons;