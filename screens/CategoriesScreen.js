import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoriesGridTile from "../components/CategoiresGridTile";
import Icon from 'react-native-vector-icons/Ionicons';





function CategoriesScrren({navigation}){
    function renderCategories(itemData){
        function onPressHandler(){
            navigation.navigate('MealsOverview',{
                categoryID:itemData.item.id,
            })
        }
        return <CategoriesGridTile title={itemData.item.title} color={itemData.item.color} onPress={onPressHandler}/>;
    }
    
    return(
        <FlatList data={CATEGORIES} keyExtractor={(item)=>item.id} renderItem={renderCategories}
            numColumns={2}
        />
       
    );
}
export default CategoriesScrren;