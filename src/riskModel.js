export const FAILURE_MODES = [
  "Part Displacement / Bed Adhesion Failure",
  "Layer Shift",
  "Nozzle Clog / Flow Starvation",
  "Overhang / Support Failure",
  "Thermal & Layer-Bond Failure",
  "Stringing / Blobs / Surface Defects",
];

export const VARIABLES = [
  {
    id: "room_temperature_celcius",
    label: "Room Temperature (Celsius)",
    defaultValue: "15°C to 20°C",
    options: [
      { label: "Below -5°C", score: 10 },
      { label: "~5°C to 5°C", score: 9 },
      { label: "5°C to 10°C", score: 7 },
      { label: "10°C to 15°C", score: 5 },
      { label: "15°C to 20°C", score: 3 },
      { label: "20°C to 25°C", score: 1 },
      { label: "25°C to 30°C", score: 0 },
      { label: "30°C to 35°C", score: 4 },
      { label: "Above 35°C", score: 8 },
    ],
    importance: [2, 0, 0, 0, 8, 0],
  },
  {
    id: "humidity",
    label: "Humidity",
    defaultValue: "50% - 65%",
    options: [
      { label: "Below 30%", score: 2 },
      { label: "30% - 50%", score: 0 },
      { label: "50% - 65%", score: 3 },
      { label: "65% - 80%", score: 7 },
      { label: "Above 80%", score: 10 },
    ],
    importance: [2, 0, 0, 0, 3, 10],
  },
  {
    id: "printer_brand",
    label: "Printer Brand",
    defaultValue: "Anycubic",
    options: [
      { label: "Creality", score: 1 },
      { label: "Prusa", score: 3 },
      { label: "Bambu Lab", score: 5 },
      { label: "Ultimaker", score: 6 },
      { label: "Raise3D", score: 6 },
      { label: "FlashForge", score: 2 },
      { label: "Anycubic", score: 2 },
      { label: "Other", score: 7 },
    ],
    importance: [0, 2, 0, 0, 0, 0],
  },
  {
    id: "printer_enclosure",
    label: "Printer Enclosure",
    defaultValue: "Full",
    options: [
      { label: "No", score: 9 },
      { label: "Partial", score: 4 },
      { label: "Full", score: 0 },
    ],
    importance: [15, 0, 0, 3, 19, 0],
  },
  {
    id: "printer_age",
    label: "Printer Age",
    defaultValue: ">5 years",
    options: [
      { label: "<1 year", score: 2 },
      { label: "1–3 years", score: 3 },
      { label: "3–5 years", score: 6 },
      { label: ">5 years", score: 9 },
    ],
    importance: [0, 6, 0, 0, 0, 0],
  },
  {
    id: "base_stability",
    label: "Base Stability",
    defaultValue: "Very unstable",
    options: [
      { label: "Very unstable", score: 10 },
      { label: "Moderately stable", score: 7 },
      { label: "Stable", score: 3 },
      { label: "Rigid", score: 0 },
    ],
    importance: [0, 14, 0, 0, 0, 0],
  },
  {
    id: "filament_type",
    label: "Filament Type",
    defaultValue: "PLA",
    options: [
      { label: "PLA", score: 1 },
      { label: "PETG", score: 4 },
      { label: "ABS", score: 6 },
      { label: "Nylon", score: 8 },
      { label: "TPU", score: 8 },
    ],
    importance: [2, 0, 5, 4, 7, 2],
  },
  {
    id: "filament_dry",
    label: "Filament Dry",
    defaultValue: "No",
    options: [
      { label: "Yes", score: 1 },
      { label: "Partially", score: 5 },
      { label: "No", score: 7 },
    ],
    importance: [2, 0, 27, 0, 3, 15],
  },
  {
    id: "dust",
    label: "Dust",
    defaultValue: "High",
    options: [
      { label: "Low", score: 2 },
      { label: "Medium", score: 5 },
      { label: "High", score: 8 },
    ],
    importance: [2, 0, 12, 0, 0, 0],
  },
  {
    id: "printer_glue",
    label: "Printer Glue",
    defaultValue: "Special adhesion sheet",
    options: [
      { label: "None", score: 9 },
      { label: "Glue stick", score: 2 },
      { label: "Hair spray", score: 4 },
      { label: "Special adhesion sheet", score: 0 },
    ],
    importance: [15, 0, 0, 0, 2, 0],
  },
  {
    id: "printer_maintenance",
    label: "Printer Maintenance",
    defaultValue: "None",
    options: [
      { label: "Regular", score: 1 },
      { label: "Occasional", score: 4 },
      { label: "Rare", score: 7 },
      { label: "None", score: 10 },
    ],
    importance: [2, 11, 5, 0, 2, 0],
  },
  {
    id: "nozzle_diameter",
    label: "Nozzle Diameter",
    defaultValue: "0.2 mm",
    options: [
      { label: "0.2 mm", score: 8 },
      { label: "0.4 mm", score: 3 },
      { label: "0.6 mm", score: 2 },
      { label: "0.8 mm", score: 1 },
    ],
    importance: [0, 0, 13, 5, 0, 0],
  },
  {
    id: "nozzle_temperature",
    label: "Nozzle Temperature",
    defaultValue: "<190",
    options: [
      { label: "<190", score: 8 },
      { label: "190–220", score: 2 },
      { label: ">220", score: 7 },
    ],
    importance: [0, 0, 11, 5, 9, 20],
  },
  {
    id: "nozzle_life",
    label: "Nozzle Life",
    defaultValue: ">4 years",
    options: [
      { label: "<2 years", score: 2 },
      { label: "2–4 years", score: 5 },
      { label: ">4 years", score: 9 },
    ],
    importance: [0, 0, 6, 0, 0, 0],
  },
  {
    id: "bed_temperature",
    label: "Bed Temperature",
    defaultValue: "50–60 °C",
    options: [
      { label: "<50 °C", score: 9 },
      { label: "50–60 °C", score: 1 },
      { label: ">60 °C", score: 6 },
    ],
    importance: [8, 0, 0, 3, 14, 0],
  },
  {
    id: "overhangs",
    label: "Overhangs",
    defaultValue: ">60°",
    options: [
      { label: "No", score: 0 },
      { label: "<45°", score: 2 },
      { label: "45–60°", score: 6 },
      { label: ">60°", score: 10 },
    ],
    importance: [0, 6, 0, 20, 0, 0],
  },
  {
    id: "supports",
    label: "Supports",
    defaultValue: "No",
    options: [
      { label: "No", score: 8 },
      { label: "Yes", score: 2 },
    ],
    importance: [0, 2, 0, 15, 0, 0],
  },
  {
    id: "support_density",
    label: "Support Density",
    defaultValue: "<10%",
    options: [
      { label: "<10%", score: 8 },
      { label: "10–20%", score: 4 },
      { label: ">20%", score: 2 },
    ],
    importance: [0, 1, 0, 10, 0, 0],
  },
  {
    id: "print_contact_area",
    label: "3D Print Contact Area",
    defaultValue: ">10000 mm²",
    options: [
      { label: "<100 mm²", score: 10 },
      { label: "100–500 mm²", score: 8 },
      { label: "500–2000 mm²", score: 5 },
      { label: "2000–10000 mm²", score: 3 },
      { label: ">10000 mm²", score: 0.5 },
    ],
    importance: [18, 2, 0, 0, 7, 0],
  },
  {
    id: "print_speed",
    label: "Print Speed",
    defaultValue: ">100 mm/s",
    options: [
      { label: "<40 mm/s", score: 2 },
      { label: "40–70 mm/s", score: 4 },
      { label: "70–100 mm/s", score: 7 },
      { label: ">100 mm/s", score: 10 },
    ],
    importance: [0, 12, 2, 10, 8, 10],
  },
  {
    id: "first_layer_speed",
    label: "First Layer Speed",
    defaultValue: "<15 mm/s",
    options: [
      { label: "<15 mm/s", score: 1 },
      { label: "15–30 mm/s", score: 3 },
      { label: "30–50 mm/s", score: 7 },
      { label: ">50 mm/s", score: 10 },
    ],
    importance: [6, 0, 0, 0, 0, 0],
  },
  {
    id: "layer_height",
    label: "Layer Height",
    defaultValue: ">0.36 mm",
    options: [
      { label: "<0.12 mm", score: 6 },
      { label: "0.12–0.24 mm", score: 2 },
      { label: "0.24–0.36 mm", score: 4 },
      { label: ">0.36 mm", score: 6 },
    ],
    importance: [4, 0, 2, 10, 2, 5],
  },
  {
    id: "print_geometry",
    label: "Print Geometry",
    defaultValue: "Very complex",
    options: [
      { label: "Simple", score: 1 },
      { label: "Moderate", score: 2 },
      { label: "Complex", score: 6 },
      { label: "Very complex", score: 8 },
    ],
    importance: [7, 12, 0, 5, 1, 0],
  },
  {
    id: "raft",
    label: "Raft",
    defaultValue: "Yes",
    options: [
      { label: "No", score: 8 },
      { label: "Yes", score: 0 },
    ],
    importance: [13, 0, 0, 0, 2, 0],
  },
  {
    id: "brim",
    label: "Brim",
    defaultValue: "No",
    options: [
      { label: "No", score: 4 },
      { label: "Small (≤5 mm)", score: 3 },
      { label: "Medium (5–10 mm)", score: 2 },
      { label: "Large (>10 mm)", score: 1 },
    ],
    importance: [2, 0, 0, 0, 2, 0],
  },
  {
    id: "infill_pattern",
    label: "Infill Pattern",
    defaultValue: "Grid",
    options: [
      { label: "Lines", score: 6 },
      { label: "Grid", score: 5 },
      { label: "Triangles", score: 4 },
      { label: "Gyroid", score: 2 },
      { label: "Cubic", score: 4 },
      { label: "Adaptive Cubic", score: 4 },
      { label: "Quarter Cubic", score: 2 },
      { label: "Support Cubic", score: 6 },
      { label: "Lightning", score: 8 },
      { label: "Honeycomb", score: 2 },
      { label: "3D Honeycomb", score: 4 },
      { label: "Hilbert Curve", score: 10 },
    ],
    importance: [0, 0, 0, 0, 1, 0],
  },
  {
    id: "infill_percentage",
    label: "Infill Percentage",
    defaultValue: ">50%",
    options: [
      { label: "<10%", score: 9 },
      { label: "10–25%", score: 6 },
      { label: "25–50%", score: 3 },
      { label: ">50%", score: 2 },
    ],
    importance: [0, 8, 0, 0, 2, 0],
  },
  {
    id: "wall_count",
    label: "Wall Count",
    defaultValue: ">4",
    options: [
      { label: "1", score: 9 },
      { label: "2", score: 6 },
      { label: "3–4", score: 3 },
      { label: ">4", score: 1 },
    ],
    importance: [0, 8, 0, 0, 3, 0],
  },
  {
    id: "cooling_fan_speed",
    label: "Cooling Fan Speed",
    defaultValue: "0–25%",
    options: [
      { label: "0–25%", score: 7 },
      { label: "25–50%", score: 5 },
      { label: "50–75%", score: 3 },
      { label: "75–100%", score: 6 },
    ],
    importance: [0, 1, 0, 10, 5, 3],
  },
  {
    id: "retraction",
    label: "Retraction",
    defaultValue: ">6 mm",
    options: [
      { label: "<1 mm", score: 7 },
      { label: "1–3 mm", score: 2 },
      { label: "3–6 mm", score: 4 },
      { label: ">6 mm", score: 9 },
    ],
    importance: [0, 0, 4, 0, 0, 30],
  },
  {
    id: "z_hop",
    label: "Z Hop",
    defaultValue: "Off",
    options: [
      { label: "Off", score: 6 },
      { label: "<0.2 mm", score: 4 },
      { label: "0.2–0.6 mm", score: 2 },
      { label: ">0.6 mm", score: 8 },
    ],
    importance: [0, 3, 0, 0, 0, 5],
  },
  {
    id: "acceleration",
    label: "Acceleration",
    defaultValue: "<500",
    options: [
      { label: "<500", score: 2 },
      { label: "500–1500", score: 4 },
      { label: "1500–3000", score: 7 },
      { label: ">3000", score: 10 },
    ],
    importance: [0, 12, 0, 0, 0, 0],
  },
  {
    id: "filament_feeder",
    label: "Filament Feeder",
    defaultValue: "Bowden",
    options: [
      { label: "Direct Drive", score: 2 },
      { label: "Bowden", score: 6 },
    ],
    importance: [0, 0, 13, 0, 0, 0],
  },
];

export function computeScores(selected) {
  const perFailureMode = new Array(FAILURE_MODES.length).fill(0);

  for (const v of VARIABLES) {
    const choice = selected[v.id] || v.defaultValue || v.options[0]?.label;
    const opt = v.options.find((o) => o.label === choice) || v.options[0];
    const score = opt ? opt.score : 0;

    for (let i = 0; i < FAILURE_MODES.length; i++) {
      perFailureMode[i] += score * (v.importance[i] / 100);
    }
  }

  const total = perFailureMode.reduce((a, b) => a + b, 0) / perFailureMode.length;
  return { perFailureMode, total };
}
