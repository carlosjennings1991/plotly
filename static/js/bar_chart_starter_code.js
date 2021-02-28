// function init() {
//   // Grab a reference to the dropdown select element
//   var selector = d3.select("#selDataset");

//   // Use the list of sample names to populate the select options
//   d3.json("static/js/samples.json").then((data) => {
//     var sampleNames = data.names;

//     sampleNames.forEach((sample) => {
//       selector
//         .append("option")
//         .text(sample)
//         .property("value", sample);
//     });

//     // Use the first sample from the list to build the initial plots
//     var firstSample = sampleNames[0];
//     buildCharts(firstSample);
//     buildMetadata(firstSample);
//   });
// }

// // Initialize the dashboard
// init();

// function optionChanged(newSample) {
//   // Fetch new data each time a new sample is selected
//   buildMetadata(newSample);
//   buildCharts(newSample);
  
// }

// // Demographics Panel 
// function buildMetadata(sample) {
//   d3.json("samples.json").then((data) => {
//     var metadata = data.metadata;
//     // Filter the data for the object with the desired sample number
//     var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
//     var result = resultArray[0];
//     // Use d3 to select the panel with id of `#sample-metadata`
//     var PANEL = d3.select("#sample-metadata");

//     // Use `.html("") to clear any existing metadata
//     PANEL.html("");

//     // Use `Object.entries` to add each key and value pair to the panel
//     // Hint: Inside the loop, you will need to use d3 to append new
//     // tags for each key-value in the metadata.
//     Object.entries(result).forEach(([key, value]) => {
//       PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
//     });

//   });
// }

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
    var defaultSample = sampleNames[0];
    buildMetadata(defaultSample);
    buildCharts(defaultSample);
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

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("static/js/samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var samples = data.samples;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
    //  5. Create a variable that holds the first sample in the array.
    var result = resultArray[0];
    console.log(result);

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels.slice(0,10).reverse();
    var sample_values = result.sample_values.slice(0,10).reverse();

    var bubbleLabels = result.otu_labels;
    var bubbleValues = result.sample_values;

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = otu_ids.map(sampleObj => 'OTU ' + sampleObj + '  ');

    // 8. Create the trace for the bar chart. 
    var barData = [{
     x: sample_values,
     y: yticks,
     marker: {
     color:['rgba(168,42,46,1)', 'rgba(203,72,55,1)', 'rgba(232,130,86,1)', 'rgba(244,185,118,1)', 'rgba(247,226,166,1)', 'rgba(228,242,247,1)', 'rgba(184,219,233,1)', 'rgba(138,182,211,1)', 'rgba(94,134,184,1)', 'rgba(60,81,156,1)'],
     line: {color: 'rgb(0,0,0)', width: 0.5}
     },
     type: 'bar', 
     orientation: 'h',
     text: otu_labels
    }];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: "10 Most Common Bacteria Cultures Per Person",
      plot_bgcolor:"#f5f5f5",
      paper_bgcolor:"#f5f5f5",
      bordercolor: "#e1bf00",
      borderwidth: 3,
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot('bar', barData, barLayout);
//   });
// }

// Deliverable 2: Bubble Chart

  // 1. create the trace for the bubble chart
  var bubbleTrace = [{
    x: otu_ids,
    y: bubbleValues,
    text: bubbleLabels,
    mode: 'markers',
      marker: {
        size: bubbleValues,
        color: bubbleValues,
        colorscale: 'RdBu',
        line: {
          color: 'rgb(255, 255, 255)',
          width: 1
        }
      }
  }];

  // 2. creat the trace for the bubble chart
  var bubbleLayout = {
    title: 'Cultures per Sample',
    xaxis: {title: 'Operational Taxonomic Unit ID'},
    yaxis: {title: 'Frequency'},
    automargin: true,
    hovermode: 'closest',
    plot_bgcolor:"#f5f5f5",
    paper_bgcolor:"#f5f5f5",
  };

  // 3. Plot it out
  Plotly.newPlot('bubble', bubbleTrace, bubbleLayout);


  // Deliverable 3: Gauge Chart

  // 1. Create a variable that filters the metadata array for the object with the desired sample number.
  var metadata = data.metadata;
  var gaugeArray = metadata.filter(gaugeObj => gaugeObj.id == sample);

  // 2. Create a variable that holds the first sample in the metadata array.
  var gaugeResult = gaugeArray[0];

  // 3. Create a vairable that holds washing frequency.
  var wfreq = gaugeResult.wfreq;
  console.log(wfreq);

  // 4. Create the trace for the gauge chart. 
  var gaugeData = [{
    value: wfreq,
    type: 'indicator', 
    mode: 'gauge+number',
    title: {text: "Belly Button Washing Frequency <br></br> Scrubs Per Week <br></br>"},
    gauge: {
      axis: { range: [0,10], tickwidth: 1, tickcolor: 'black '},
      bar: { color: 'black'},
      steps: [
        { range: [0,1], color: 'rgb(168,42,46)'},
        { range: [1,2], color: 'rgb(203,72,55)'},
        { range: [2,3], color: 'rgb(232,130,86)'},
        { range: [3,4], color: 'rgb(244,185,118)'},
        { range: [4,5], color: 'rgb(247,226,166)'},
        { range: [5,6], color: 'rgb(228,242,247)'},
        { range: [6,7], color: 'rgb(184,219,233)'},
        { range: [7,8], color: 'rgb(138,182,211)'},
        { range: [8,9], color: 'rgb(94,134,184)'},
        { range: [9,10], color: 'rgb(60,81,156)'},
      ],
      //linecolor: 'black',
      //linewidth: 2,
      //mirror: true
    },
  }]
  // 5. create the layout for the gauge chart. 
  var gaugeLayout = {
    hovermode: "closest",
    plot_bgcolor:"#f5f5f5",
    paper_bgcolor:"#f5f5f5",
  };

  // 6. Plot the gauge data and layout
  Plotly.newPlot('gauge', gaugeData, gaugeLayout, {scrollZoom: true});
  });
}