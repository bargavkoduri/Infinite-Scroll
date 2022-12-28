import { useContext } from "react"
import { loggedInContext } from "../App"
import { useNavigate } from "react-router-dom"
import List from "./list"
import "./home.css"

export default function Home(){
    const navigate = useNavigate()
    const {isLoggedIn} = useContext(loggedInContext)

    return isLoggedIn === true ? (
      <div className="cont-home">
        <nav className="navbar navbar-dark bg-dark sticky-top">
          <span className="navbar-brand mb-0 h1" style={{ marginLeft: "20px" }}>
            Infinite Scroll Bar
          </span>
          <div className="logouttxt" style={{ color: "white", marginRight: "20px" }} onClick={() => {
            navigate("/")
          }}>
            Logout
          </div>
        </nav>

        <List />
      </div>
    ) : (
      <div>
        <h2 style={{marginTop : "20px"}}>Forbidden</h2>
      </div>
    );
}