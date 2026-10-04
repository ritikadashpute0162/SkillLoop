import { Link } from "react-router-dom"

function Profile() {

  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-icon">
          👩‍💻
        </div>

        <h1>{user?.name}</h1>

        <p>
          {user?.year} • {user?.branch}
        </p>

        <p>
          {user?.college}
        </p>

        <hr />

        <h2>Skills I Can Teach</h2>

        <div className="tags">

          {user?.teachSkills?.length > 0 ? (
            user.teachSkills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))
          ) : (
            <p>No teaching skills added yet.</p>
          )}

        </div>

        <h2>Skills I Want To Learn</h2>

        <div className="tags">

          {user?.learnSkills?.length > 0 ? (
            user.learnSkills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))
          ) : (
            <p>No learning skills added yet.</p>
          )}

        </div>

        <h2>🏆 Achievements</h2>

        <p>🥇 First Teacher</p>

        <p>🔥 0 Sessions Completed</p>

        <p>⭐ SkillLoop Member</p>

        <div className="profile-links">

          <Link to="/dashboard">
            ← Dashboard
          </Link>

          <Link to="/explore">
            Explore Skills
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Profile