import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const SuggestionPage = ({ suggestionsData }) => {
  const { id } = useParams();
  const suggestion = suggestionsData.find((suggestion) => suggestion.id === parseInt(id));
  
  return (
    <div>
      <h1>{suggestion.title}</h1>
      <p>{suggestion.description}</p>
      {/* Mostrar comentarios aquí */}
      <Link to="/">Go Back</Link>
    </div>
  );
};