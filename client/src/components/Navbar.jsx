import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        Skill<span>Loop</span>
      </Link>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/explore">
          Explore Skills
        </Link>

        <a href="#how-it-works">
          How It Works
        </a>

        <a href="#about">
          About
        </a>

      </div>

      <div className="nav-buttons">

        <Link to="/login" className="login-btn">
          Login
        </Link>

        <Link to="/register" className="signup-btn">
          Join SkillLoop
        </Link>

      </div>

    </nav>
  )
}

export default Navbar