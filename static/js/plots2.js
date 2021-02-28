function init() {
  var selector = d3.select("#selDataset");

  // use the 'then' because you want to wait for the data to load
  d3.json("static/js/samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      // 'selector' below goes with the <selector> html element. You just got to memorize this stuff
      // NOTE TO SELF: WHAT IF THERE WERE MULTIPLE DROP DOWN MENUS?
      selector
        // you know to you 'option' because it follows the 'select' tag.
        // i.e 'select' is the drop down menu, and 'option' is the option, literally.
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

init();

function optionChanged(newSample) {
    console.log(newSample);
    buildMetadata(newSample);
    buildCharts(newSample);
}

// note: 'sample' below, the argument accepted by the buildMetadata function
// is the same 'sample' from lines 15 and 16
function buildMetadata(sample) {
  d3.json("static/js/samples.json").then((data) => {
    // remember, you are using dot.notation below. 'metadata' is an array in the 'samples.json' file
    var metadata = data.metadata;
    // 'sampleObj' is the instantiated pointer/object inside the 'metadata' array
    // the '.id' is because each metadata object includes an '.id' key
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    // you only want the first i.e zero'th element in the array
    var result = resultArray[0];
    // understand more fully why you
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    PANEL.append("h6").text('ID: ' + result.id);
    PANEL.append("h6").text('Ethnicity: ' + result.ethnicity);
    PANEL.append("h6").text('Gender: ' + result.gender);
    PANEL.append("h6").text('Age: ' + result.age);
    PANEL.append("h6").text('Location: ' + result.location);
    PANEL.append("h6").text('BBTYPE: ' + result.bbtype);
    PANEL.append("h6").text('WFREQ: ' + result.wfreq);
  });
}
