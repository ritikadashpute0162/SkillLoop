import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import ExploreSkills from "./pages/ExploreSkills"
import Profile from "./pages/Profile"
import Requests from "./pages/Requests"

import "./App.css"

function Home() {

  return (

    <div>

      <Navbar />

      <section className="hero">

        <div className="hero-text">

          <p className="small-title">
            🎓 CAMPUS SKILL COMMUNITY
          </p>

          <h1>
            Learn a Skill.
            <br />
            <span>Share a Skill.</span>
          </h1>

          <p className="hero-description">
            SkillLoop connects students who want to learn
            with students who can teach.
          </p>

          <div className="hero-buttons">

            <a href="/explore">
              <button className="primary-btn">
                Find My Skill Match
              </button>
            </a>

            <a href="/register">
              <button className="secondary-btn">
                Join SkillLoop
              </button>
            </a>

          </div>

        </div>

      </section>

      <section className="how-section">

        <p className="section-title">
          HOW IT WORKS
        </p>

        <h2>
          Learn from your campus community
        </h2>

        <div className="steps">

          <div className="step-card">

            <div className="step-number">
              01
            </div>

            <h3>
              Create Your Profile
            </h3>

            <p>
              Add the skills you know and want to learn.
            </p>

          </div>

          <div className="step-card">

            <div className="step-number">
              02
            </div>

            <h3>
              Find Your Match
            </h3>

            <p>
              Discover students who match your learning goals.
            </p>

          </div>

          <div className="step-card">

            <div className="step-number">
              03
            </div>

            <h3>
              Learn & Exchange
            </h3>

            <p>
              Connect and exchange your knowledge.
            </p>

          </div>

        </div>

      </section>

    </div>

  )
}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/explore"
          element={<ExploreSkills />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/requests"
          element={<Requests />}
        />

      </Routes>

    </BrowserRouter>

  )
}

export default App