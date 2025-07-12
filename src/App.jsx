import React from "react";
import Graph from "./components/graph";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg">
         <Graph />
      </div>
    </div>

  );
}

export default App;