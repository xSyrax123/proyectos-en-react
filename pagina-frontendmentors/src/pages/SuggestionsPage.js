import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { SuggestionsList } from '../components/SuggestionsList';
import data from '../data.json'

export const SuggestionsPage = () => {
  const [suggestionsData, setSuggestionsData] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeTag, setActiveTag] = useState('All');

  const loadSuggestionsData = () => {
    try {
      setSuggestionsData(data.productRequests);
      setFilteredSuggestions(data.productRequests);
    }
    catch (error) {
      console.error(`Error loading data: ${error}`)
    };
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
    <>
      <Sidebar handle_tag_click={handleTagClick} activeTag={activeTag} />
      <div className="suggestions_container">
        <Header
          handleSortChange={handleSortChange}
          suggestions={filteredSuggestions}
        />
        <SuggestionsList suggestions={filteredSuggestions} />
      </div>
    </>
  );
};
