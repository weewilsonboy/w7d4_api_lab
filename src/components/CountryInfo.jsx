import FavouriteButton from "./FavouriteButton"
import Neighbours from "./Neighbours"
const CountryInfo = ({countries, givenCountry, setFavouriteList, favouriteList})=>{
    
    const givenName = givenCountry.name.common
    const givenLanguages = Object.keys(givenCountry.languages)
    
    const formattedLanguages = givenLanguages.map((language,index)=><><li key={index} className="formattedLanguage">{language}</li><br/></>)
    
    return (
        <>
            <h1>{givenName}</h1>
            <img src={givenCountry.flags.png}/>
            <div className="languageDiv">
            <label htmlFor="languages" className="languageLabel">Languages</label>
            <br/>
            <ul name="languages" id="languages">{formattedLanguages}
            </ul></div>
            <Neighbours countries={countries} givenCountry={givenCountry}/>
            <FavouriteButton givenCountry={givenCountry} setFavouriteList={setFavouriteList} favouriteList={favouriteList}/>
        </>
    )
}
export default CountryInfo