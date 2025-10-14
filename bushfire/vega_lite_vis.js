// File: bushfire/vega_lite_vis.js
var vg_1 = "bushfire/aus_bushfire_dotmap.json";

vegaEmbed('#map', vg_1).then(function(result) {
  // Vega view instance
}).catch(console.error);


// Temperature Anomaly – Australia Getting Warmer
var vg_2 = "bushfire/australia_temp_anomaly.json";
vegaEmbed("#tempanomaly", vg_2).catch(console.error);

// CO₂ Emissions by State – Stacked Bar
var vg_3 = "bushfire/australia_emissions_by_state.json";
vegaEmbed("#emissionsbarchart", vg_3).catch(console.error);

var vg_4 = "bushfire/fire_occurrence_heatmap.json";
vegaEmbed("#heatmap", vg_4).catch(console.error);

// Impact on animals due to the bushires – Donut Chart
var vg_5 = "bushfire/bushfire_animals_donut.json";
vegaEmbed("#donut", vg_5).catch(console.error);



