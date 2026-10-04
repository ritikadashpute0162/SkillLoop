import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Requests() {

  const [requests, setRequests] = useState([])

  const user = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {

    if (!user?._id) return

    fetch(`http://localhost:5000/api/requests/${user._id}`)
      .then((response) => response.json())
      .then((data) => {
        setRequests(data)
      })
      .catch(() => {
        console.log("Could not load requests")
      })

  }, [user?._id])

  return (
    <div className="dashboard-page">

      <h1>Skill Requests 📩</h1>

      <p>
        Your sent and received skill requests.
      </p>

      {requests.length === 0 ? (

        <div className="dashboard-card">
          <h3>No requests yet</h3>
          <p>Explore skills and send a request.</p>
        </div>

      ) : (

        <div className="match-list">

          {requests.map((request) => (

            <div className="dashboard-card" key={request._id}>

              <h3>{request.skill}</h3>

              <p>
                Status: <strong>{request.status}</strong>
              </p>

            </div>

          ))}

        </div>

      )}

      <br />

      <Link to="/explore">
        ← Explore Skills
      </Link>

      {"  "}

      <Link to="/dashboard">
        Dashboard
      </Link>

    </div>
  )
}

export default Requests