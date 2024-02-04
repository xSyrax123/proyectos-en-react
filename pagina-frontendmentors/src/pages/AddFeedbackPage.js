import modalStyles from "../assets/css/AddFeedback.module.css";
import { Link, useNavigate } from "react-router-dom";

export const AddFeedback = () => {
  const navigate = useNavigate(); 
  
  const handleAddFeedback = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData.entries());
    const newSuggestion = {
      ...formDataObject,
      id: 0,
      upvotes: 0,
      status: "suggestion",
      comments: []
    }

    navigate('/')  
  }

  return (
    <section className={modalStyles.modal_container}>
      <div className={modalStyles.modal_content}>
        <Link className={modalStyles.go_back_link} to="/">
          <svg
            id="left-arrow"
            width="7"
            height="10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L2 5l4-4"
              stroke="#4661e6"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            ></path>
          </svg>
          Go Back
        </Link>
        <form class={modalStyles.create_new_feedback} onSubmit={(e) => handleAddFeedback(e)}>
          <svg xmlns="http://www.w3.org/2000/svg" className={modalStyles.form_icon}>
            <defs>
              <radialGradient
                cx="103.9%"
                cy="-10.387%"
                fx="103.9%"
                fy="-10.387%"
                r="166.816%"
                id="a"
              >
                <stop stopColor="#E84D70" offset="0%"></stop>
                <stop stopColor="#A337F6" offset="53.089%"></stop>
                <stop stopColor="#28A7ED" offset="100%"></stop>
              </radialGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
              <circle fill="url(#a)" cx="28" cy="28" r="28"></circle>
              <path
                fill="#FFF"
                fillRule="nonzero"
                d="M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z"
              ></path>
            </g>
          </svg>
          <h2>Create New Feedback</h2>
          <div className={modalStyles.fb_container}>
            <label>Feedback Title</label>
            <p>Add a short, descriptive headline</p>
            <input type="text" name="title" />
          </div>
          <div className={modalStyles.fb_container}>
            <label>Category</label>
            <p>Choose a category for your feedback</p>
            <select name="category">
              <option>Feature</option>
              <option>UI</option>
              <option>UX</option>
              <option>Enhancement</option>
              <option>Bug</option>
            </select>
          </div>
          <div className={modalStyles.fb_container}>
            <label>Feedback Detail</label>
            <p>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea name="description" className={modalStyles.fb_detail_input}></textarea>
          </div>
          <div className={modalStyles.form_buttons}>
            <Link to="/" className="btn cancel">
              Cancel
            </Link>
            <button type="submit" className="btn add_feedback">
              Add feedback
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
