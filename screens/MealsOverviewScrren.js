import { StyleSheet,View,Text, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealsOverviewTile from "../components/MealsOverviewTile";
import { useLayoutEffect } from "react";
import MealList from "../components/MealList";


function MealsOverviewScreen({route,navigation}){
    const catID=route.params.categoryID;

    const displayMeals=MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catID)>=0;
    })

    useLayoutEffect(()=>{
        const categoryTitle=CATEGORIES.find((categgory)=>
        categgory.id===catID).title;

        navigation.setOptions({
            title:categoryTitle
        })
    },[catID,navigation])

    return <MealList item={displayMeals}/>
}

export default MealsOverviewScreen;

