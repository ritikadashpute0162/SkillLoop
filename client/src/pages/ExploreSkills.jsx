import { useState } from "react"
import { Link } from "react-router-dom"

function ExploreSkills() {

  const [search, setSearch] = useState("")
  const [requests, setRequests] = useState([])

  const skills = [
    { name: "Python", student: "Rahul Patil", match: 92 },
    { name: "React", student: "Priya Sharma", match: 87 },
    { name: "Java", student: "Amit Joshi", match: 82 },
    { name: "C++", student: "Sneha Patil", match: 79 },
    { name: "Node.js", student: "Akash More", match: 88 },
    { name: "MongoDB", student: "Neha Shah", match: 84 },
    { name: "UI/UX Design", student: "Riya Kulkarni", match: 91 },
    { name: "Machine Learning", student: "Aditya Patil", match: 95 },
    { name: "Public Speaking", student: "Pooja Joshi", match: 76 },
    { name: "Video Editing", student: "Kunal More", match: 80 }
  ]

  const filteredSkills = skills.filter((skill) =>
    skill.name.toLowerCase().includes(search.toLowerCase())
  )

  const sendRequest = async (skill) => {

    const user = JSON.parse(localStorage.getItem("user"))

    if (!user || !user._id) {
      alert("Please login first")
      return
    }

    try {

      const response = await fetch(
        "http://127.0.0.1:5000/api/requests",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            sender: user._id,
            receiver: user._id,
            skill: skill
          })
        }
      )

      const data = await response.json()

      if (response.ok) {

        setRequests([...requests, skill])

        alert("Skill request sent successfully!")

      } else {

        alert(data.message || "Request failed")

      }

    } catch (error) {

      console.log(error)

      alert("Backend connection failed. Make sure server is running.")

    }
  }

  return (

    <div className="explore-page">

      <h1>Explore Skills 🔎</h1>

      <p>
        Find students who can teach the skills you want to learn.
      </p>

      <input
        className="search-box"
        type="text"
        placeholder="Search for a skill..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="skill-list">

        {filteredSkills.map((skill) => {

          const requested = requests.includes(skill.name)

          return (

            <div className="explore-card" key={skill.name}>

              <h3>{skill.name}</h3>

              <p>👩‍💻 {skill.student}</p>

              <p>Available to teach</p>

              <strong>
                ⭐ {skill.match}% Match
              </strong>

              <br />
              <br />

              <button
                onClick={() => sendRequest(skill.name)}
                disabled={requested}
              >
                {requested
                  ? "Request Sent ✓"
                  : "Send Request"}
              </button>

            </div>

          )

        })}

      </div>

      {filteredSkills.length === 0 && (
        <p>No matching skills found.</p>
      )}

      <div className="explore-links">

        <Link to="/dashboard">
          ← Back to Dashboard
        </Link>

        {"  "}

        <Link to="/profile">
          My Profile
        </Link>

        {"  "}

        <Link to="/requests">
          My Requests 📩
        </Link>

      </div>

    </div>
  )
}

export default ExploreSkills