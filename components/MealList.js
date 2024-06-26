import { FlatList,View,StyleSheet } from "react-native";
import MealsOverviewTile from "./MealsOverviewTile";
function MealList({item}){
    function renderOverviewItem(itemData){
        
        const item=itemData.item;
        
        const mealProps={
            id:item.id,
            title:item.title,
            imageURI:item.imageUrl,
            duration:item.duration,
            affordability:item.affordability,
            complexity:item.complexity
        };
        return (
            <MealsOverviewTile {...mealProps}/>
        )
    }
    return (<View style={styles.container}>
        
        <FlatList data={item} keyExtractor={(item)=>item.id} renderItem={renderOverviewItem}/>
        </View>);
}

export default MealList;

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        fontSize:18
    }
})