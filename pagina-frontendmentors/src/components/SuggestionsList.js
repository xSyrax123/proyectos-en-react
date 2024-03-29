import { SuggestionCard } from "./SuggestionCard";
import { NoSuggestions } from "./NoSuggestions";
import suggestionStyles from "../assets/css/Suggestions.module.css";

export const SuggestionsList = ({
  suggestions,
  setSuggestionsData,
}) => {
  return (
    <div className={suggestionStyles.suggestions_list}>
      {suggestions.length > 0 ? (
        suggestions.map((suggestion) => (
          <SuggestionCard
            key={suggestion.id}
            suggestion={suggestion}
            setSuggestionsData={setSuggestionsData}
          />
        ))
      ) : (
        <NoSuggestions />
      )}
    </div>
  );
};
