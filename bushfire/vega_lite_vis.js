// { actions: false } is to hide the toolbar buttons (like "Open in Vega Editor")




// ==== SECTION 1: Root Forces Behind Bushfires ====
// 1. Main Causes of Bushfires (Donut)
var vg_causes = "bushfire/bushfire_causes.json";
vegaEmbed("#bushfirecauses", vg_causes, { actions: false }).catch(console.error);

// 2. Rising CO₂ Emissions (Line)
var vg_co2 = "bushfire/rising_co2.json";
vegaEmbed("#risingco2", vg_co2, { actions: false }).catch(console.error);

// 3. Greenhouse Gas Emissions by State & Sector (Stacked Bar)
var vg_emissions = "bushfire/australia_emissions_by_state.json";
vegaEmbed("#emissionsbarchart", vg_emissions, { actions: false }).catch(console.error);

// 4. Rising Temperature Anomalies (dot plot)
var vg_risingTemp = "bushfire/rising_temperature.json";
vegaEmbed("#risingtemperature", vg_risingTemp, { actions: false }).catch(console.error);




// ==== SECTION 2: Geographic Distribution of Bushfire Risk and Occurrence ====
// 5. Fire Danger Index (FFDI Choropleth)
var vg_ffdi = "bushfire/ffdi_australia_choropleth.json";
vegaEmbed("#ffdi_map", vg_ffdi, { actions: false }).catch(console.error);

// 6. Fire Hotspots (Dot Map)
var vg_4 = "bushfire/aus_bushfire_dotmap.json";
vegaEmbed("#map", vg_4, { actions: false }).catch(console.error);




// ==== SECTION 3: Geographic Distribution of Bushfire Risk and Occurrence ====
// 7. Largest and Most Destructive Bushfires in Australia - bar chart
vegaEmbed("#impact_breakdown", "bushfire/impact_breakdown.json", { actions: false })
  .catch(console.error);

// 8. Australia’s Deadliest Bushfires by Fatalities - Isotype chart
  vegaEmbed("#breakdown", "bushfire/impacts_humans.json", { actions: false })
  .catch(console.error);

  


// ==== SECTION 4: environmental and Ecological Impacts of Australia’s Bushfires ====
// 9. Animals Most Affected by 2019–2020 Bushfires - isotype 
  var vg_burnedArea = "bushfire/annual_burned_area_multiarea.json";
vegaEmbed("#burnedArea", vg_burnedArea, { actions: false }).catch(console.error);

// 10. Vegetation Types Affected by bushfires - stacked area chart
vegaEmbed("#bushfire_isotype", "bushfire/bushfire_isotype_animal.json", {actions: false})
      .catch(console.error);

// 11. Australia’s PM2.5 Emissions from Wildfires - Dual axis --> line and bar chart
vegaEmbed("#dualaxis_chart", "bushfire/wildfire_dualaxis.json", { actions: false }).catch(console.error);



 
//  ==== SECTION 5: Community Recovery and Government Response ===
// 12. National Bushfire Recovery Funding (2020) - donut chart
vegaEmbed("#recovery_donut", "bushfire/bushfire_recovery_donut.json",{ actions: false }).catch(console.error);
