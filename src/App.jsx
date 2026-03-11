/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RotateCcw, X, Info } from "lucide-react";
import { VARIABLES, FAILURE_MODES, computeScores } from "./riskModel";

const GROUPS = [
  {
    key: "printer",
    title: "Printer Variables",
    ids: [
      "printer_brand",
      "printer_enclosure",
      "printer_age",
      "base_stability",
      "printer_glue",
      "printer_maintenance",
      "nozzle_diameter",
      "nozzle_life",
      "filament_feeder",
    ],
  },
  {
    key: "slicer",
    title: "Slicer Variables",
    ids: [
      "nozzle_temperature",
      "bed_temperature",
      "print_speed",
      "first_layer_speed",
      "layer_height",
      "supports",
      "support_density",
      "raft",
      "brim",
      "infill_pattern",
      "infill_percentage",
      "wall_count",
      "cooling_fan_speed",
      "retraction",
      "z_hop",
      "acceleration",
    ],
  },
  {
    key: "other",
    title: "Other Variables",
    ids: [
      "room_temperature_celcius",
      "humidity",
      "filament_type",
      "filament_dry",
      "dust",
      "overhangs",
      "print_contact_area",
      "print_geometry",
    ],
  },
];

export default function App() {
  const [selected, setSelected] = useState(() => {
    const init = {};
    for (const v of VARIABLES) {
      init[v.id] = v.defaultValue ?? v.options[0]?.label ?? "";
    }
    return init;
  });

  const [activeGroupKey, setActiveGroupKey] = useState(null);
  const { perFailureMode, total } = useMemo(() => computeScores(selected), [selected]);

  const varById = useMemo(() => {
    const m = new Map();
    for (const v of VARIABLES) m.set(v.id, v);
    return m;
  }, []);

  const resetDefaults = () => {
    const init = {};
    for (const v of VARIABLES) {
      init[v.id] = v.defaultValue ?? v.options[0]?.label ?? "";
    }
    setSelected(init);
    setActiveGroupKey(null);
  };

  const getTips = () => {
    const tips = [];
    if (total > 7) tips.push("CRITICAL: Structural integrity compromised. Check thermal stability.");
    if (total > 5) tips.push("WARNING: High friction detected. Lubricate mechanical joints.");
    if (selected["filament_dry"] === "No") tips.push("Material hydration levels excessive. Dehydrate immediately.");
    if (selected["printer_enclosure"] === "No" && (selected["filament_type"] === "ABS" || selected["filament_type"] === "Nylon")) {
      tips.push("Thermal contraction imminent. Enclosure required for this material.");
    }
    if (tips.length === 0) tips.push("Machine calibrated. Optimal output expected.");
    return tips;
  };

  return (
    <div className="app-container">
      <div className="steampunk-interface">
        
        {/* Book Triggers (Left) */}
        <div className="book-trigger book-1" onClick={() => setActiveGroupKey("printer")} title="Printer Variables" />
        <div className="book-trigger book-2" onClick={() => setActiveGroupKey("slicer")} title="Slicer Variables" />
        <div className="book-trigger book-3" onClick={() => setActiveGroupKey("other")} title="Other Variables" />

        {/* Top Screen Area (Quick Settings) */}
        <div className="top-screen-area">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-white text-[20px]">Control Console</span>
            <button onClick={resetDefaults} className="text-xs text-white hover:text-blue-500 transition-colors flex items-center gap-1">
              <RotateCcw size={10} /> RESET
            </button>
          </div>
          <div className="grid grid-cols-2 gap-5 text-[15px] text-white">
            <div className="p-1  ">
              Temp: <span className="text">{selected.nozzle_temperature}</span>
            </div>
            <div className=" p-1 ">
              SPEED: <span className="text">{selected.print_speed}</span>
            </div>
            <div className="p-1 ">
              MATERIAL: <span className="text">{selected.filament_type}</span>
            </div>
            <div className=" p-1 ">
               STATUS: NOMINAL
            </div>
          </div>
        </div>

        {/* Central Dial Area */}
        <div className="central-dial-area">
          <svg viewBox="0 0 180 200" className="w-full h-full">
            {/* Gauge Background Arc */}
            <path
              d="M 40 150 A 80 80 0 1 1 160 150"
              fill="none"
              stroke="rgba(34, 43, 44, 0.75)"
              strokeWidth="12"
              strokeLinecap="round"
            />
            
            {/* Colored Risk Arc */}
            <motion.path
              d="M 40 150 A 80 80 0 1 1 160 150"
              fill="none"
              stroke={total > 7 ? "#8b0000" : total > 4 ? "#b87333" : "#228b22"}
              strokeWidth="10"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: Math.min(total / 10, 1) }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }}
            />

            {/* Tick Marks */}
            {[...Array(11)].map((_, i) => {
              const angle = (i / 10) * 220 - 200; // -200 to 20 deg
              const rad = (angle * Math.PI) / 180;
              const x1 = 100 + 65 * Math.cos(rad);
              const y1 = 100 + 65 * Math.sin(rad);
              const x2 = 100 + 75 * Math.cos(rad);
              const y2 = 100 + 75 * Math.sin(rad);
              return (
                <line
                  key={i}
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="white"
                  strokeWidth="2"
                  opacity="0.5"
                />
              );
            })}

            {/* Needle */}
            <motion.g
              initial={{ rotate: -110 }}
              animate={{ rotate: (total / 10) * 220 - 110 }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }}
              style={{ originX: "100px", originY: "100px" }}
            >
              <line
                x1="100" y1="100" x2="100" y2="35"
                stroke="red"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="100" cy="100" r="5" fill="var(--dark-copper)" />
            </motion.g>

            {/* Central Hub (Circle showing number) */}
            <circle cx="100" cy="100" r="28" fill="var(--parchment)" stroke="var(--dark-copper)" strokeWidth="2" />
            <text
              x="100"
              y="105"
              textAnchor="middle"
              className="risk-value-small"
              fill="var(--ink)"
            >
              {total.toFixed(1)}
            </text>
          </svg>
          <div className="risk-label-gauge">Risk Factor</div>
        </div>

        {/* Bottom Log Area */}
        <div className="bottom-log-area">
          <div className="text-xs text-white  font-bold uppercase mb-2 border-b  pb-1">Engineer's Log</div>
          <ul className="space-y-1">
            {getTips().map((tip, i) => (
              <motion.li 
                key={i} 
                className="text-[15px] text-white  "
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                • {tip}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Failure Mode Buttons (Right) */}
        <div className="fm-buttons-container">
          {FAILURE_MODES.map((fm, i) => (
            <div key={fm} className="fm-btn-overlay flicker" style={{ animationDelay: `${i * 0.3}s` }}>
              <span className="truncate">{fm}</span>
              <span className="fm-btn-score">{perFailureMode[i].toFixed(1)}</span>
            </div>
          ))}
        </div>

        {/* Variable Selection Modal (Parchment) */}
        <AnimatePresence>
          {activeGroupKey && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/60 z-[999]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveGroupKey(null)}
              />
              <motion.div
                className="parchment-modal"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
              >
                <div className="parchment-header">
                  <div>
                    <h2 className="text-2xl font-bold uppercase tracking-widest text-ink">
                      {GROUPS.find(g => g.key === activeGroupKey)?.title}
                    </h2>
                    <p className="text-xs opacity-60 italic">Adjust mechanical parameters for optimal output</p>
                  </div>
                  <button onClick={() => setActiveGroupKey(null)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                    <X size={24} />
                  </button>
                </div>
                
                <div className="parchment-grid">
                  {GROUPS.find(g => g.key === activeGroupKey)?.ids.map(id => {
                    const v = varById.get(id);
                    if (!v) return null;
                    return (
                      <div key={v.id} className="form-group">
                        <label className="form-label">{v.label}</label>
                        <select
                          className="form-select"
                          value={selected[v.id]}
                          onChange={(e) => setSelected(prev => ({ ...prev, [v.id]: e.target.value }))}
                        >
                          {v.options.map((opt) => (
                            <option key={opt.label} value={opt.label}>{opt.label}</option>
                          ))}
                        </select>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
