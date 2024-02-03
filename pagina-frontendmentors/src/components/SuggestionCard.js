import suggestionStyles from '../assets/css/Suggestions.module.css';

export const SuggestionCard = ({ suggestion }) => {
  const numComments = suggestion.comments ? suggestion.comments.length : 0;
  const [title, description, category, upvotes] = [
    suggestion.title,
    suggestion.description,
    suggestion.category,
    suggestion.upvotes,
  ];

  return (
    <article className={suggestionStyles.suggestion_card}>
      <div className={suggestionStyles.upvote_and_sugg_info_container}>
        <button className={`btn ${suggestionStyles.upvote}`}>
          <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 6l4-4 4 4"
              stroke="#4661E6"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            ></path>
          </svg>
          <span className={suggestionStyles.number_upvotes}>{upvotes}</span>
        </button>
        <div className={suggestionStyles.suggestion_info}>
          <h3 className={suggestionStyles.suggestion_title}>{title}</h3>
          <p className={suggestionStyles.suggestion_description}>{description}</p>
          <p className={`tag ${suggestionStyles.suggestion_category}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </p>
        </div>
      </div>
      <div className={suggestionStyles.num_comments_container}>
        <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
            fill="#CDD2EE"
            fillRule="nonzero"
          ></path>
        </svg>
        <span className={suggestionStyles.num_comments}>{numComments}</span>
      </div>
    </article>
  );
};
