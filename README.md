# Plotly Charts
<img src="https://github.com/carlosjennings1991/plotly_charts/blob/main/medicalphoto.png">

---
For this project we analyze a dataset of medical records for the purpose of finding bacteria cultures most suitable for lab-grown meat. 
More specifically, we have 153 individuals, and we want to know the 10 most common bacteria cultures in their navel, and how often they wash their navel. 

We then chart these findings in three interactive graphs. 

## Graph 1: Bar Chart

<img src="https://github.com/carlosjennings1991/plotly_charts/blob/main/bar%20chart.png" width="454" height="448">

Theres actually a bit more going on in this one. This horizontal bar chart shows the ten most common bacteria cultures per person. Every time you select a different person, the chart will change. 

<br>

## Graph 2: Gauge Chart

<img src="https://github.com/carlosjennings1991/plotly_charts/blob/main/gauge%20chart.png" width="454" height="448">

This chart, which is designed in the style known as a 'gauge chart', measures belly-button washing frequency i.e 'Scrubs Per Week'. 
Any correlation between washing frequency and most common bacteria cultures measured in the bar chart has not yet been determined. 

<br>

## Graph 3: Bubble Chart

<img src="https://github.com/carlosjennings1991/plotly_charts/blob/main/bubble%20chart.png">

There's also a bit more going on in this one than meets the eye. It measures all the bacteria cultures found in the patient, and the size of the bubble reflects the amount of bacteria found i.e (bigger bubbles = more bacteria). What's a little confusing to the untrained eye is the x-axis, which marks the Operational Taxonomic Unit (OTU). OTU's are the shorthand identifier for group of closely related items. In our circumstance, the closely related items are bacteria cultures. Bacteria cultures have really long naming-systems like 'Bacteria;Firmicutes;Clostridia;Clostridiales' so we use a shorthand instead - an OTU. 

We are accustomed to seeing names on an x-axis, but here the name *is* a number. 

The y-axis is a more immediately understandable as it simply measures the size (i.e frequency) of the bacteria cultures. 

---

## Summary: 

There's almost an infinite way to analyze medical data. There's a lot of numbers, a lot of sub-sets in the data, and correlations/ratios can be drawn up for pretty much anything. However, with every additional variable like age, gender, ethnic origin, weight etc, you cloud the data and make concrete conclusions harder to come by. 

Is seeing the data valuable? Undoubtedly. Do we need to study it more methodically? Absolutely. 

From a technical point of view, these charts were produced through a combination of javascript, html and css. 

  
