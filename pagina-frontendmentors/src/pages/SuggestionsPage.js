import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { SuggestionsList } from "../components/SuggestionsList";

export const SuggestionsPage = ({
  activeTag,
  filteredSuggestions,
  handleSortChange,
  handleTagClick,
  setSortType
}) => {
  return (
    <>
      <Sidebar handleTagClick={handleTagClick} activeTag={activeTag} />
      <div className="suggestions_container">
        <Header
          handleSortChange={handleSortChange}
          setSortType={setSortType}
          suggestions={filteredSuggestions}
        />
        <SuggestionsList suggestions={filteredSuggestions} />
      </div>
    </>
  );
};
