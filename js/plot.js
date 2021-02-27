console.log(cityGrowths);

var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();

var top5Cities = sortedCities.slice(0,5);

var top5CityNames = top5Cities.map(city => city.City);

var top5CityIncreases = top5Cities.map(city => parseInt(city.Increase_from_2016));

var trace = [{
    x: top5CityNames,
    y: top5CityIncreases,
    type: 'bar'
}];

var layout = {
    title: 'Most Rapidly Growing Cities',
    xaxis: { title: 'Cities' },
    yaxis: { title: 'Growth in 2016'},
};

Plotly.newPlot('bar-plot', trace, layout);

// now create a shart for the top 7 cities in terms of overall population

var sortedByPopulation = cityGrowths.sort((a,b) => a.population - b.population).reverse();

var top7cities = sortedByPopulation.slice(0,7);

// Now get the names of the 7 largest cities (hint map method)
var top7citiesNames = top7cities.map(city => city.City);

// Now get the size of those seven cities (hint, also the map method)
var top7citiesPopulations = top7cities.map(city => parseInt(city.population));

// Now chart it like above 

var trace = [{
    x: top7citiesNames,
    y: top7citiesPopulations,
    type: 'bar'
}];

var layout = {
    title: '7 Largest Cities',
    xaxis: {title: 'Cities'},
    yaxis: {title: 'Population'}
};

Plotly.newPlot('bar-plot2', trace, layout);