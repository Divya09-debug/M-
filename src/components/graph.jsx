import React, { useState } from "react";
import Plot from "react-plotly.js";

const Graph = () => {
  const [k, setK] = useState(3.42); 

  const generateData = (kValue) => {
    const x = [];
    const y = [];

    for (let i = -Math.sqrt(1); i <= Math.sqrt(1); i += 0.01) {
      const absPow = Math.pow(Math.abs(i), 2 / 1);
      const wave = 0.9 * Math.sin(kValue * i) * Math.sqrt(1 - i * i);
      x.push(i);
      y.push(absPow + wave);
    }

    return { x, y };
  };

  const data = generateData(k);

  return (
    <div className="p-6 max-w-lg text-center text-white display-grid align-items-center justify-content-center">
      <h2 className="text-2xl font-bold mb-4 text-purple-400">
        Graph of y = |x|<sup>2/3</sup> + 0.9·sin(kx)·√(3 − x²)
      </h2>

      {/* Slider for k */}
      <div className="mb-6">
        <label htmlFor="k-slider" className="block mb-1 text-lg">
          Adjust k: {k.toFixed(2)}
          
        </label>
        <input
          id="k-slider"
          type="range"
          min="0"
          max="800"
          step="0.25"
          value={k}
          onChange={(e) => setK(parseFloat(e.target.value))}
          className="w-full"
        />
        <button onWheel onClick={() => setK(prevK => Math.min(prevK + 0.15, 708.73))}>up CLICK</button>
        <button onWheel onClick={() => setK(prevK => Math.max(prevK - 0.15, 0))}>down CLICK</button>
        <button onWheel={() => setK(prevK => Math.min(prevK + 0.15, 708.73))}>up WHEEL</button>
        <button onWheel={() => setK(prevK => Math.max(prevK - 0.15, 0))}>down  WHEEL</button>
      </div>

      <Plot
        data={[
          {
            x: data.x,
            y: data.y,
            type: "scatter",
            mode: "lines",
            line: { color: "violet" },
          },
        ]}
        layout={{
          title: `k = ${k.toFixed(2)}`,
          xaxis: { title: "x" },
          yaxis: { title: "y" },
          margin: { t: 40, l: 40, r: 10, b: 40 },
          plot_bgcolor: "#000",
          paper_bgcolor: "#000",
          font: { color: "#fff" },
        }}
        config={{ displayModeBar: false }}
      />
    </div>
  );
};

export default Graph;
5