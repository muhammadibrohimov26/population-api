
const form = document.querySelector('form'),
      input = form.querySelector('input'),
      button = form.querySelector('button')
      
      button.addEventListener('click', (e)=>{
        
        e.preventDefault()
        const isName  = input.value
        input.value = ''
        if(isName.trim() === ''){
          console.log('xatooo');
      
        }
        
        
        const apiKey = "xBaFxhJV205jIXuYqXP3cQ==2co1fd58tu29yXo1";
        const apiUrl = `https://api.api-ninjas.com/v1/population?country=${isName}`;

fetch(apiUrl, {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    country(data);
  });
})

function country(data) {
  const header = document.querySelector(".header");
  const cardContent = document.querySelector(".cardContent");

  header.textContent = data.country_name;
  const tarixiy = data.historical_population;

  tarixiy.forEach((item, idx) => {
    console.log(idx);
    
    const cardItem = document.createElement("div");
    cardItem.classList.add("cardItem");
    const year = document.createElement("h2");
    const population = document.createElement("p");
    const yearlychangepercentage = document.createElement("p");
    const yearlychange = document.createElement("p");
    const migrants = document.createElement("p");
    const medianage = document.createElement("p");
    const fertilityrate = document.createElement("p");
    const density = document.createElement("p");
    const urbanpopulationpct = document.createElement("p");
    const urbanpopulation = document.createElement("p");
    const percentageofworldpopulation = document.createElement("p");
    const rank = document.createElement("p");
    const index = document.createElement("span");

    year.textContent = item.year + " --      Year";
    population.textContent = item.population + " --      population";
    yearlychangepercentage.textContent = item.yearly_change_percentage + "%" + " --      yearly change percentage";
    yearlychange.textContent = item.yearly_change + " --      yearly change";
    migrants.textContent = item.migrants + ' --      migrants'
    medianage.textContent = item.median_age + " --      median Age";
    fertilityrate.textContent = item.fertility_rate + " --      fertility rate";
    density.textContent = item.density + " --      density";
    urbanpopulationpct.textContent = item.urban_population_pct  + " --      urban population pct";
    urbanpopulation.textContent = item.urban_population + " --      urban population";
    percentageofworldpopulation.textContent = item.percentage_of_world_population + " --      percentage of world population";
    rank.textContent = item.rank + " --      rank";
    index.textContent = idx +1;
    // .textContent = item. + " ";

    cardItem.append(year);
    cardItem.append(population);
    cardItem.append(yearlychangepercentage);
    cardItem.append(yearlychange);
    cardItem.append(migrants)
    cardItem.append(index)
    cardItem.append(medianage)
    cardItem.append(fertilityrate)
    cardItem.append(density)
    cardItem.append(urbanpopulationpct)
    cardItem.append(urbanpopulation)
    cardItem.append(percentageofworldpopulation)
    cardItem.append(rank)
    // cardItem.append()
    cardContent.append(cardItem);
  });
}
