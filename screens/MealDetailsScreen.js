import { FlatList, View,Text,Image, StyleSheet, ScrollView,Pressable } from "react-native";
import { MEALS } from "../data/dummy-data";

import { useContext, useLayoutEffect, useState } from "react";
import IconButtons from "../components/IconButtons";
import { useDispatch, useSelector } from "react-redux";
import {FavContext} from '../store/context/favourites-context'
import { addFavorite,removeFavorite } from "../store/redux/favorite";
import { responsiveHeight,responsiveWidth } from "react-native-responsive-dimensions";


function MealDetailsScreen({route,navigation}){
    // const favMealCtx=useContext(FavContext);
    const favMealIds=useSelector(state=>state.fav.ids);
    const dispatch=useDispatch();

    const mealid=route.params.mealID

    const Mealid=MEALS.find((meal)=>meal.id===mealid);

    const mealIsFav=favMealIds.includes(mealid);    
    function onPressHandler() {
        console.log("pressed");
        if(mealIsFav){
            // favMealCtx.removeFavorite(mealid);
            dispatch(removeFavorite({id:mealid}));
        }
        else{
            // favMealCtx.addFavorite(mealid);
            dispatch(addFavorite({id:mealid}));
        }
        
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return (
                    <IconButtons 
                    icon={mealIsFav ? 'star':'star-outline'} 
                    size={30} 
                    color={"white"} 
                    onPress={onPressHandler}/>
                );
            }
        })
    },[navigation,onPressHandler]);
    
    return(
        <ScrollView>
        <View style={styles.container}>
        
        
        <Image style={styles.imgContainer}source={{uri:Mealid.imageUrl}}/>
        
        <Text style={styles.title}>{Mealid.title}</Text>
        
       
        <View style={styles.view2}>
            <Text style={styles.detailsText}>{Mealid.duration}mins</Text>
            <Text style={styles.detailsText}>{Mealid.complexity.toUpperCase()}</Text>
            <Text style={styles.detailsText}>{Mealid.affordability.toUpperCase()}</Text>
          </View>
        
      
        <Text style={styles.subtitle}>Ingredients</Text>
        
        
        <View style={styles.subtitleView}>
            {Mealid.ingredients.map((ingredients)=>(
                <View style={styles.listView}>
            <Text style={styles.list} key={ingredients}>{ingredients}</Text></View>
        ))}
       
        </View>
        
        <Text style={styles.subtitle}>Steps</Text>
        <View style={styles.subtitleView}>
        {Mealid.steps.map((steps)=>(
            <View style={styles.listView}>
        <Text style={styles.list} key={steps}>{steps}</Text></View>))}
        </View>
        </View>
        </ScrollView>
    );
}
export default MealDetailsScreen;

const styles=StyleSheet.create({
    imgContainer:{
        width:'100%',
        height:320,
        objectFit:'contain'
    },
    title:{
        fontSize:25,
        fontWeight:"bold",
        color:"white",
        padding:8,
        margin:6
        
    },
    container:{
        alignItems:"center",
        justifyContent:"center"
    },
    subtitle:{
        color:"#D5B195",
        fontSize:18,
        fontWeight:"bold",
        padding:8,
        borderBottomWidth:2,
        borderColor:"white",
        borderBottomColor:'#D5B195',
    },
    
    list:{
        
        
        fontWeight:"bold",
        color:"black",
    },
    listView:{
        borderRadius:responsiveHeight(1),
        backgroundColor:"#D5B195",
        marginVertical:8,
        padding:8,
    },
    view2:{
        flexDirection:'row',
        paddingTop:responsiveHeight(2),
      },
      detailsText:{
        fontWeight:'600',
        marginHorizontal:responsiveWidth(1),
        color:'#CABA9C'
      },
      subtitleView:{
        borderTopWidth:responsiveWidth(1),
        borderColor:'#D5B195',
        width:'70%',
        maxWidth:'70%',
        
      }
})