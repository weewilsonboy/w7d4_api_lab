const FavouriteDisplay = ({favouriteList}) =>{
    const displayList = favouriteList.map((country,index)=><li id="fav" key={index}>{country.name.common}</li>)
    return(
        <>
            {displayList}
        </>
    )
}
export default FavouriteDisplay