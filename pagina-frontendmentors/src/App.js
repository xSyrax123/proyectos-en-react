import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddFeedback } from "./pages/AddFeedbackPage";
import { SuggestionsPage } from "./pages/SuggestionsPage";
import { RoadmapPage } from "./pages/RoadmapPage";
import "./assets/css/global.css";
import data from "./data.json";

const sortFunctions = {
  "most-upvotes": (a, b) => b.upvotes - a.upvotes,
  "least-upvotes": (a, b) => a.upvotes - b.upvotes,
  "most-comments": (a, b) => b.comments.length - a.comments.length,
  "least-comments": (a, b) => a.comments.length - b.comments.length,
};

function App() {
  const [activeTag, setActiveTag] = useState("All");
  const [sortType, setSortType] = useState("most-upvotes")
  const [suggestionsData, setSuggestionsData] = useState([]);

  const loadSuggestionsData = () => {
    try {
      setSuggestionsData(data.productRequests);
    } catch (error) {
      console.error(`Error loading data: ${error}`);
    }
  };

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };

  const handleSortChange = (option) => {
    setSortType(option);
  };
    
  const sortFunction = sortFunctions[sortType];
  let filteredSuggestions = suggestionsData.filter((suggestion) => {
    return (
      activeTag === "All" || suggestion.category.toLowerCase() === activeTag.toLowerCase()
    );
  }).sort(sortFunction);
  const filteredCopy = [...filteredSuggestions];
  const sortedSuggestions = filteredCopy.sort(sortFunction);
  filteredSuggestions = sortedSuggestions;

  useEffect(() => {
    loadSuggestionsData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <SuggestionsPage
                activeTag={activeTag}
                filteredSuggestions={filteredSuggestions}
                handleSortChange={handleSortChange}
                handleTagClick={handleTagClick}
                setSortType={setSortType}
                setSuggestionsData={setSuggestionsData}
              />
            }
          />
          <Route
            path="/add"
            element={
              <AddFeedback
                suggestionsData={suggestionsData}
                setSuggestionsData={setSuggestionsData}
                handleTagClick={handleTagClick}
              />
            }
          />
          <Route path="/roadmap-page" element={<RoadmapPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
