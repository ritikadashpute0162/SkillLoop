import { Link } from "react-router-dom"

function Dashboard() {

  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <div className="dashboard-page">

      <h1>
        Welcome, Ritika 👋
      </h1>

      <p>
        Find students, exchange skills and learn together.
      </p>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h2>⭐ Level {user?.level || 1}</h2>
          <p>{user?.xp || 0} XP</p>
        </div>

        <div className="dashboard-card">
          <h2>🏆 0</h2>
          <p>Completed Sessions</p>
        </div>

        <div className="dashboard-card">
          <h2>⭐ 0</h2>
          <p>Your Rating</p>
        </div>

      </div>

      <h2>Recommended Skill Matches</h2>

      <div className="match-list">

        <div className="dashboard-card">

          <h3>Rahul Patil</h3>

          <p>Can teach: React, Node.js</p>

          <p>Wants to learn: Python</p>

          <strong>87% Match</strong>

          <br />

          <Link to="/explore">
            <button>View Profile</button>
          </Link>

        </div>

        <div className="dashboard-card">

          <h3>Priya Sharma</h3>

          <p>Can teach: UI/UX, Figma</p>

          <p>Wants to learn: JavaScript</p>

          <strong>78% Match</strong>

          <br />

          <Link to="/explore">
            <button>View Profile</button>
          </Link>

        </div>

      </div>

      <div className="dashboard-links">

        <Link to="/explore">
          Explore Skills
        </Link>

        <Link to="/profile">
          My Profile
        </Link>

      </div>
<button
  onClick={() => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    window.location.href = "/login"
  }}
>
  Logout
</button>
    </div>
  )
}

export default Dashboard
