import sidebarStyles from '../assets/css/Sidebar.module.css';
import { Link } from "react-router-dom";

export const Sidebar = ({ handle_tag_click, activeTag }) => {
  const TAGS = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

  return (
    <div className={sidebarStyles.sidebar_container}>
      <div className={sidebarStyles.frontend_mentor_banner}>
        <h1>Frontend Mentor</h1>
        <p>Feedback Board</p>
      </div>
      <div className={sidebarStyles.tags_container}>
        {TAGS.map((tag) => (
          <button
            key={tag}
            className={`btn tag ${tag === activeTag ? 'active_tag' : ''}`}
            onClick={() => handle_tag_click(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className={sidebarStyles.roadmap_container}>
        <div className={sidebarStyles.roadmap_title_and_link}>
          <h2 className={sidebarStyles.roadmap_title}>Roadmap</h2>
          <Link to="/" className={sidebarStyles.roadmap_link}>View</Link>
        </div>
        <ul className={sidebarStyles.roadmap_list}>
          <li className={`${sidebarStyles.roadmap_li} ${sidebarStyles.planned_dot}`}>Planned <span>2</span></li>
          <li className={`${sidebarStyles.roadmap_li} ${sidebarStyles.in_progress_dot}`}>In-Progress <span>3</span></li>
          <li className={`${sidebarStyles.roadmap_li} ${sidebarStyles.live_dot}`}>Live <span>1</span></li>
        </ul>
      </div>
    </div>
  )
};
