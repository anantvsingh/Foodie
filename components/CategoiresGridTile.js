import { Pressable,StyleSheet,Text, View } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";



function CategoriesGridTile({title,color,onPress}){
    return (
        <View style={styles.grid}>
            <Pressable android_ripple={{color:"#ccc"}} style={({pressed})=>[styles.button,
            pressed ? styles.buttonPressed :null]} onPress={onPress}>
            <View style={[styles.container,{backgroundColor:color}]}>
                <Text style={styles.title}>{title}</Text>
                
            </View>
            </Pressable>
        </View>
           
    );
}

export default CategoriesGridTile;

const styles=StyleSheet.create({
    grid:{
        
        margin:16,
        flex:1,
        height:150,
        elevation:4,
        backgroundColor:"white",
        borderRadius:responsiveHeight(2),
        overflow:"hidden"
    },
    button:{
        flex:1
    },
    buttonPressed:{
        opacity:0.5
    },
    container:{
        flex:1,
        padding:16,
        justifyContent:"center",
        alignItems:"center",
        
        
    },
    title:{
        fontWeight:"bold",
        fontFamily:"sans-serif",
        color:"black",
        fontSize:18
    }
})

