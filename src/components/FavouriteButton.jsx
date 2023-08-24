const FavouriteButton = ({givenCountry, setFavouriteList, favouriteList})=>{
    const addToFavourites = ()=>{
        if(favouriteList.includes(givenCountry)){

        } else {
            setFavouriteList([...favouriteList, givenCountry])
        }
    }

    return(
        <>
            <button name="favourite-button" onClick={addToFavourites}>Add to Favourites</button>
        </>
    )
}
export default FavouriteButton