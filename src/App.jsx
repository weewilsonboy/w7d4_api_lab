import { useState, useEffect } from 'react'
import TotalPop from './components/TotalPopulation'
import CountryList from './components/CountryList'
import CountryInfo from './components/CountryInfo'
import FavouriteDisplay from './components/FavouriteDisplay'
// import './style.css'

function App() {
	const [countries, setCountries] = useState(0)
	const [givenCountry, setGivenCountry]=useState("")
	const [favouriteList,setFavouriteList]=useState([])

	useEffect(()=>{
		fetch("https://restcountries.com/v3.1/all")
		.then((res)=>res.json())
		.then((data)=>setCountries(data))
	})
	let population =0
	countries.length ? (population = countries.map((country)=>country.population)):population=0;

	const displayCountry = ()=>{
		const newCountry = countries.filter((country)=>country.name.common==document.getElementById('countrySelector').value)
		setGivenCountry(newCountry[0])
		
	}

	return (
    <>
	
	<select name='countrySelector' onChange={displayCountry} id='countrySelector'>
	{countries.length ? <CountryList countries={countries}/>:<option>loading</option>}
	</select>
	
	{givenCountry != "" ?
		<CountryInfo countries={countries} givenCountry={givenCountry} setFavouriteList={setFavouriteList} favouriteList={favouriteList}/>:
		<p>Please select a Country</p>
	}
	<h2>Favourites</h2>
	{favouriteList.length > 0 ? (
		<ul id='favUl'><FavouriteDisplay favouriteList={favouriteList}/></ul>
	):(
		<p>Add a country to favourites to see them here</p>
	)
	
	}
	{countries.length ? <TotalPop population={population}/>: <p>loading</p>}
	</>
	)
}

export default App
