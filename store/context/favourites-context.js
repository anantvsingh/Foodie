import { createContext, useState } from "react";

export const FavContext=createContext({
    ids:[],
    addFavorite:(id)=>{},
    removeFavorite:(id)=>{}
});

function FavoritesContextProvider({children}){
    const[favMealIds,setFavMealIDs]=useState([]);

    function addFavourite(id){
        setFavMealIDs((currentFavIds)=>[...currentFavIds,id]);
    }

    function removeFavourite(id){
        setFavMealIDs((currentFavIds)=>
        currentFavIds.filter((mealId)=>mealId!==id)
        );
    }

    const values={
        ids:favMealIds,
        addFavorite:addFavourite,
        removeFavorite:removeFavourite,
    }
    return <FavContext.Provider value={values}>{children}</FavContext.Provider>
}

export default FavoritesContextProvider;

