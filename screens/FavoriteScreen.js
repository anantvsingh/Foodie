import { View,Text } from "react-native";
import MealList from "../components/MealList";
import { useContext } from "react";
import { FavContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";


function FavoriteScreen(){
    // const fav=useContext(FavContext);
    const fav=useSelector(state=>state.fav.ids);
    const favitem=MEALS.filter((meal)=>
    fav.includes(meal.id));
    return (
        <MealList item={favitem}/>
    )
}
export default FavoriteScreen;