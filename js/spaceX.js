const url = "https://api.spacexdata.com/v2/launchpads";

//d3.json(url).then(receivedData => console.log(receivedData[0].location.latitude) + console.log(receivedData[0].location.longitude));


// now write an expression that return only the latlongs for each launch station
// sample of map function
// var numbers = [1,2,3,4,5,6];
// numbers.map(number => number ** 2); (returns the square of all the numbers)

//d3.json(url).then(spaceXResults => console.log(spaceXResults.map(result => result.location.latitude)) + console.log(spaceXResults.map(result => result.location.longitude)));
//d3.json(url).then(spaceXResults => console.log(spaceXResults.map(area => area.location.region)));


//d3.json('samples.json').then(allEthnicities => console.log(allEthnicities.metadata));

// get the age of everyone



// d3.json('samples.json').then(function(data) {
//     wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
//     filteredWfreq = wfreq.filter(wfreq => wfreq != null);
//     console.log(filteredWfreq);
// })


d3.json('samples.json').then(function(data) {
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key,value]) =>
    {console.log(key + ': ' + value);});
});

