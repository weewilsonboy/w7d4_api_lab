import FavouriteButton from "./FavouriteButton"
import Neighbours from "./Neighbours"
const CountryInfo = ({countries, givenCountry, setFavouriteList, favouriteList})=>{
    
    const givenName = givenCountry.name.common
    const givenLanguages = Object.keys(givenCountry.languages)
    
    const formattedLanguages = givenLanguages.map((language,index)=><li key={index}>{language}</li>)
    
    return (
        <>
            <h1>{givenName} <img src={givenCountry.flags.png}/></h1>
            <label htmlFor="languages">Languages</label>
            <ul name="languages" id="languages">{formattedLanguages}
            </ul>
            <Neighbours countries={countries} givenCountry={givenCountry}/>
            <FavouriteButton givenCountry={givenCountry} setFavouriteList={setFavouriteList} favouriteList={favouriteList}/>
        </>
    )
}
export default CountryInfo