import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/global.css";
import { AddFeedback } from "./pages/AddFeedbackPage";
import { SuggestionsPage } from "./pages/SuggestionsPage";
import { RoadmapPage } from "./pages/RoadmapPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<SuggestionsPage />} />
          <Route path="/add" element={<AddFeedback />} />
          <Route path="/roadmap-page" element={<RoadmapPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
