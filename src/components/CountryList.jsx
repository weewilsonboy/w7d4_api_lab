const CountryList = ({countries})=>{
    const countryNames = countries.map(((country)=>country.name.common)).sort()
    const countryOption = countries.map((country,index)=><option key={index} value={countryNames[index]}>{countryNames[index]}</option>)
    
    
    return(
    <>{countryOption}</> 
    )
}
export default CountryList