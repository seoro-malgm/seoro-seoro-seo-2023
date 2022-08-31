import LayoutDefault from "layouts/Default";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<LayoutDefault />} />
      </Routes>
    </div>
  );
}

export default App;
