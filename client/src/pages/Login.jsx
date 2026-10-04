import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const response = await fetch(
        "http://localhost:5000/api/users/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            email: email,
            password: password
          })
        }
      )

      const data = await response.json()

      if (response.ok) {

        localStorage.setItem("token", data.token)

        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        )

        setMessage("Login successful!")

        setTimeout(() => {
          navigate("/dashboard")
        }, 500)

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

        <h1>Welcome Back 👋</h1>

        <p>Login to your SkillLoop account</p>

        <form onSubmit={handleSubmit}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        {message && <p>{message}</p>}

        <p>
          Don't have an account?{" "}

          <Link to="/register">
            Create Account
          </Link>
        </p>

      </div>

    </div>
  )
}

export default Login