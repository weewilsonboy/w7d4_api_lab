const Neighbours = ({countries, givenCountry})=>{
    let neighbourList = []
    let popLi = []
    
    const populationFunction = ()=>{
        const neighbourObjects = countries.filter((country)=>{
        let matching = false
        for(let i = 0; i<neighbourList.length;i++){
            if (country.cca3 == neighbourList[i])
            {
                matching=true
            }
        }
        return matching
        })
        const neighborPop = neighbourObjects.map((neighbour)=>neighbour.population).reduce((a,b)=>a+b,0)
        return neighborPop

    }
    if (givenCountry.borders){
    neighbourList = givenCountry.borders.map((neighbour)=>neighbour)
    popLi.push(populationFunction())
    popLi[0]=[<h5 key="0">Total population of all neighbours is: {popLi[0]}</h5>]
    }


    givenCountry.borders ? 
    neighbourList = givenCountry.borders.map((neighbour,index)=><li key={index}>{neighbour}</li>)
    :
    neighbourList = [<li key="0">This country has no borders</li>]
    
    


    


    return(
        <>
            <label htmlFor="neighbours">Neighbours</label>
            <ul name="neighbours" id="neighbours">
                {neighbourList}
                
            </ul>
            {popLi}
        </>
    )
}
export default Neighbours