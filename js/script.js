const isName = "uz";

const apiUrl = `https://api.api-ninjas.com/v1/population?country=${isName}`;
const apiKey = "xBaFxhJV205jIXuYqXP3cQ==2co1fd58tu29yXo1";

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

function country(data) {
  const header = document.querySelector(".header");
  const cardContent = document.querySelector(".cardContent");

  header.textContent = data.country_name;
  const tarixiy = data.historical_population;

  tarixiy.forEach((item, idx) => {
    const cardItem = document.createElement("div");
    cardItem.classList.add("cardItem");
    const year = document.createElement("p");
    const population = document.createElement("span");
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

    year.textContent = item.year + " Year";
    population.textContent = item.population + " population";
    yearlychangepercentage.textContent = item.yearly_change_percentage + " yearlychangepercentage";
    yearlychange.textContent = item.yearly_change + " yearlychange";
    // year.textContent = item. + " ";
    // year.textContent = item. + " ";
    // year.textContent = item. + " ";
    // year.textContent = item. + " ";
    // year.textContent = item. + " ";
    // year.textContent = item. + " ";
    // year.textContent = item. + " ";

    cardItem.append(year);
    cardItem.append(population);
    cardItem.append(yearlychangepercentage);
    cardItem.append(yearlychange);
    cardContent.append(cardItem);
  });
}
