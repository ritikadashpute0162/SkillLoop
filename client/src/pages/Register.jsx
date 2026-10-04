import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Register() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    college: "",
    branch: "",
    year: ""
  })

  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const response = await fetch(
        "http://localhost:5000/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      )

      const data = await response.json()

      if (response.ok) {

        setMessage("Registration successful!")

        setTimeout(() => {
          navigate("/login")
        }, 1000)

      } else {

        setMessage(data.message)

      }

    } catch (error) {

      setMessage("Server connection failed")

    }
  }

  return (
    <div className="form-page">

      <div className="form-box">

        <h1>Join SkillLoop 🎓</h1>

        <p>Create your student account</p>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>

          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>College</label>

          <input
            type="text"
            name="college"
            placeholder="Enter your college"
            value={formData.college}
            onChange={handleChange}
            required
          />

          <label>Branch</label>

          <input
            type="text"
            name="branch"
            placeholder="Example: Computer Engineering"
            value={formData.branch}
            onChange={handleChange}
            required
          />

          <label>Year</label>

          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          >

            <option value="">Select Year</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>

          </select>

          <button type="submit">
            Create Account
          </button>

        </form>

        {message && <p>{message}</p>}

        <p>
          Already have an account?{" "}

          <Link to="/login">
            Login
          </Link>

        </p>

      </div>

    </div>
  )
}

export default Register