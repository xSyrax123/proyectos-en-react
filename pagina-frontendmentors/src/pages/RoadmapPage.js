import { Link } from "react-router-dom";
import roadmapStyles from "../assets/css/Roadmap.module.css"

export const RoadmapPage = ({suggestionsData}) => {
  console.log(suggestionsData)
  
  return (
    <div className={roadmapStyles.roadmap_page}>
      <header>
        <div className={roadmapStyles.link_and_title}>
          <Link className="go_back_link" to="/">
            <svg
              id="left-arrow"
              width="7"
              height="10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L2 5l4-4"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              ></path>
            </svg>
            Go Back
          </Link>
          <h1>Roadmap</h1>
        </div>
        <button type="button" className="btn add_feedback">+ Add feedback</button>
      </header>
      <div className={roadmapStyles.roadmap_suggestions}>
        <section className={roadmapStyles.roadmap_column}>
          <h2>Planned (2)</h2>
          <p>Ideas prioritized for research</p>
        </section>
        <section className={roadmapStyles.roadmap_column}>
          <h2>In-Progress(3)</h2>
          <p>Currently being developed</p>
        </section>
        <section className={roadmapStyles.roadmap_column}>
          <h2>Live (1)</h2>
          <p>Released features</p>
        </section> 
      </div>       
    </div>
  )
}
