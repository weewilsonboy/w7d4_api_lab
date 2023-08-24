const TotalPop=({population})=>{
    const reducedPop = population.reduce((a,b)=>a+b,0)
    return (
        <h3>World Population: {reducedPop}</h3>)
}
export default TotalPop