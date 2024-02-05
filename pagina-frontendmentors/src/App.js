import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddFeedback } from "./pages/AddFeedbackPage";
import { SuggestionsPage } from "./pages/SuggestionsPage";
import { RoadmapPage } from "./pages/RoadmapPage";
import "./assets/css/global.css";
import data from "./data.json";

function App() {
  const [activeTag, setActiveTag] = useState("All");
  const [suggestionsData, setSuggestionsData] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const loadSuggestionsData = () => {
    try {
      setSuggestionsData(data.productRequests);
      setFilteredSuggestions(data.productRequests);
    } catch (error) {
      console.error(`Error loading data: ${error}`);
    }
  };

  const handleTagClick = (tag) => {
    const filteredSuggestions = suggestionsData.filter((suggestion) => {
      return (
        tag === "All" || suggestion.category.toLowerCase() === tag.toLowerCase()
      );
    });

    setFilteredSuggestions(filteredSuggestions);
    setActiveTag(tag);
  };

  const handleSortChange = (option) => {
    const filteredCopy = [...filteredSuggestions];
    const sortFunctions = {
      "most-upvotes": (a, b) => b.upvotes - a.upvotes,
      "least-upvotes": (a, b) => a.upvotes - b.upvotes,
      "most-comments": (a, b) => b.comments.length - a.comments.length,
      "least-comments": (a, b) => a.comments.length - b.comments.length,
    };
    const sortFunction = sortFunctions[option];
    const sortedSuggestions = filteredCopy.sort(sortFunction);

    setFilteredSuggestions(sortedSuggestions);
  };

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
              />
            }
          />
          <Route
            path="/add"
            element={
              <AddFeedback
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
